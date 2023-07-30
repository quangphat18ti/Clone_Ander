import Block from "./block"
import {mine} from "../../service/crypto_service"

function BlockChain() {
  //region cook block_list data
  let block_list = [
    {blockNum: '01', data: 'listoftx 01', prev: 'TODO', nonce: '53675',  'hash': '00001de0cc9d93dce583a5fa07bbd9a84cd8f35ff78aa2a8ea56aa5de6fca708', },
    {blockNum: '02', data: 'listoftx 02', prev: 'TODO', nonce: '149193', 'hash': '0000c2bbcfaac7683bae4c9bbe9317d71b36f9cbd7194048200e9064589feffd', },
    {blockNum: '03', data: 'listoftx 03', prev: 'TODO', nonce: '66452',  'hash': '0000711e68d600af7f06372f8a66130bb8c6b6b26eb8568e4ca1e022204ca2d8', },
  ]

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
