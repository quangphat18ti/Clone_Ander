import BlockInChain from "./block/block_blockchain"
import {useState} from "react";
import {sha256_hash} from "../../service/crypto_service";

function BlockChain() {
  //region cook block_list data
  let block_list = [
    // calling :Mine at :block tabpane and paste mined block result here - may need to turn on showPrev=true for <Block /> at tabpane
    {blockNum: '1', data: 'listoftx 01', prev: '0000000000000000000000000000000000000000000000000000000000000000', nonce: '4684', },
    {blockNum: '2', data: 'listoftx 02', prev: '000064f67d82ae42eb023ceaf42126e935169e3f5b2d026f306aad50922c743a', nonce: '65672', },
    {blockNum: '3', data: 'listoftx 03', prev: '0000c702365ba2c88751e45e88c142de1d06d32282dbbac97449c50882420535', nonce: '61418'},
    {blockNum: '4', data: 'listoftx 04', prev: '00001808e6b23c4423d17921b0b40604577983e4d0cddd6d5a4202f6da9e7bdb', nonce: '212321'},
  ]
  let [blockList, setBlockList] = useState(block_list)

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
      <h3>Blockchain</h3>

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

export default BlockChain
