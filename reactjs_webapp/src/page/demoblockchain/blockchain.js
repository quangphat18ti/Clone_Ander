import Block from "./block"
import {mine} from "../../service/crypto_service"

function BlockChain() {
  //region cook block_list data
  let block_list = [
    //                                                  nonce: pre-computed value and set here
    {blockNum: '01', data: 'listoftx 01', prev: '...',  nonce: '53675',  hash: 'TODO', },
    {blockNum: '02', data: 'listoftx 02', prev: 'TODO', nonce: '149193', hash: 'TODO', },
    {blockNum: '03', data: 'listoftx 03', prev: 'TODO', nonce: '66452',  hash: 'TODO', },
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
