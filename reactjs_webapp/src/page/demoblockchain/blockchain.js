import Block from "./block"
import {mine} from "../../service/crypto_service"

function BlockChain() {
  //region cook block_list data
  let block_list = [
    {blockNum: '01', data: 'listoftx 01', prev: 'TODO', nonce: 'TODO', 'hash': 'TODO', },
    {blockNum: '02', data: 'listoftx 02', prev: 'TODO', nonce: 'TODO', 'hash': 'TODO', },
    {blockNum: '03', data: 'listoftx 03', prev: 'TODO', nonce: 'TODO', 'hash': 'TODO', },
  ]

  // mine all blocks
  block_list = block_list.map(b => {
    let {nonce, hash} = mine(b)
    return {
      ...b,
      nonce,
      hash,
    }
  })
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
