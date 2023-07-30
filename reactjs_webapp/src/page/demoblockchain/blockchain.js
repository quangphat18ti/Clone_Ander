import Block from "./block"
import {mine} from "../../service/crypto_service"

function BlockChain() {
  //region cook block_list data
  let block_list = [
    // calling :Mine at :block tabpane and paste mined block result here
    {blockNum: '1', data: 'listoftx 01', prev: '...',  nonce: '31266',  hash: '0000f31922fa0289d6b90bd16eef0a4def6dd018887d0eef10055153247ec5b9', },
    {blockNum: '2', data: 'listoftx 02',               nonce: '125252', prev: '0000f31922fa0289d6b90bd16eef0a4def6dd018887d0eef10055153247ec5b9',  hash: '00000cc3305145158e2e9b61d6eae170afc1f8ba915ccca95a93e35116f2ce12', },
  ]

  //region set :prev fr current hash values
  block_list = block_list.map( (b,i) => {
    let prev = i>0 ? block_list[i-1].hash : '...'
    return {
      ...b,
      prev,
    }
  })
  //endregion set :prev fr current hash values

  //region mine all blocks
  let do_remine = false
  if (do_remine===true) {
    block_list = block_list.map(b => {
      let {nonce, hash} = mine(b)
      return {
        ...b,
        nonce,
        hash,
      }
    })
  }
  //endregion mine all blocks

  //endregion cook block_list data

  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/blockchain */}
      <h3>Blockchain</h3>

      <div className="row row-horizon">
        {/*TODO make :Block list on same line*/}

        {block_list.map(b =>
          <div className="col-4"><Block showTitle='false' showPrev='true' {...b} /></div>
        )}
      </div>
    </>
  )
}

export default BlockChain
