import BlockMock from "./block/block_mock"
import {mine} from "../../service/crypto_service"

function BlockChain() {
  //region cook block_list data
  let block_list = [
    // calling :Mine at :block tabpane and paste mined block result here - may need to turn on showPrev=true for <Block /> at tabpane
    {blockNum: '1', data: 'listoftx 01', prev: '...',  nonce: '199194', hash: '000022c67c1cc83db7b6e62dfd157bb3825e2215d09823e2dd43f844b39b7439', },
    {blockNum: '2', data: 'listoftx 02',               nonce: '8034',   prev: '000022c67c1cc83db7b6e62dfd157bb3825e2215d09823e2dd43f844b39b7439',  hash: '00003e011605f523619af99bb77320b15196ba039c6710ea1ee7eabdc1c132c5', },
    {blockNum: '3', data: 'listoftx 03',               nonce: '98798',                                                                             prev: '00003e011605f523619af99bb77320b15196ba039c6710ea1ee7eabdc1c132c5',  hash: '00006aa44d505d663ae3ff36180cba3f7fbca96f0449ef27b71a6fe3899ae238', },
    {blockNum: '4', data: 'listoftx 04',               nonce: '30725',                                                                                                                                                        prev: '00006aa44d505d663ae3ff36180cba3f7fbca96f0449ef27b71a6fe3899ae238',  hash: '0000b7268be6dd274b320fb1b3992df81d82f900205bdd86a393c65cb58beaeb', },
  ]

  //region set :prev
  let do_set_prev = false
  if (do_set_prev) {
    block_list = block_list.map( (b,i) => {
      let prev = i>0 ? block_list[i-1].hash : '...'
      return {...b, prev}
    })
  }
  //endregion set :prev

  //region do_mine_again
  let do_mine_again = false
  if (do_mine_again===true) {
    block_list = block_list.map(b => {
      let {nonce, hash} = mine(b)
      return {...b, nonce, hash}
    })
  }
  //endregion do_mine_again

  //endregion cook block_list data

  /*TODO change a block -> refresh isMine whole :chain */
  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/blockchain */}
      <h3>Blockchain</h3>

      <div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
        {block_list.map( (b,i) =>
          <div className="col-4" key={`b-${i}`}>
            <BlockMock showTitle='false' showPrev='true' {...b} />
          </div>
        )}
      </div>
    </>
  )
}

export default BlockChain
