import BlockInChain from "../block/block_blockchain"
import {useState} from "react";
import {sha256_hash} from "../../../service/crypto_service";

function BlockChainComponent(props) {
  //region cook block_list data
  
  let [blockList, setBlockList] = useState(props.data? props.data : '')

  //region set :prev
  /*let do_set_prev = false
  if (do_set_prev) {
    block_list = block_list.map( (b,i) => {
      let prev = i>0 ? block_list[i-1].hash : '...'
      return {...b, prev}
    })
  }*/
  //endregion set :prev

  //region do_mine_again
  /*let do_mine_again = false
  if (do_mine_again===true) {
    block_list = block_list.map(b => {
      let {nonce, hash} = mine(b)
      return {...b, nonce, hash}
    })
  }*/
  //endregion do_mine_again

  //endregion cook block_list data

  /*TODO change a block -> refresh isMine whole :chain */
  const updateChain = (block_index, block_new) => {
    let blockchain_clone = [...blockList]
    blockchain_clone[block_index] = block_new
    let length = blockchain_clone.length
    for (let i = block_index + 1; i < length ; i ++) {
      let block = blockchain_clone[i-1]
      let message = '' + block.blockNum + block.nonce + block.data + block.prev
      blockchain_clone[i].prev = sha256_hash(message).toString()
    }
    setBlockList(blockchain_clone)
  }
  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/blockchain */}
     

      <div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
        {blockList.map( (b,i) =>
          <div className="col-4" key={`b-${i}`}>
            <BlockInChain {...b} block_index={i} updateChain={updateChain}/>
          </div>
        )}
      </div>
    </>
  )
}

export default BlockChainComponent
