import Block from "./block"

function BlockChain() {
  //region cook block_list data
  let block_list = [
    {blockNum: '01', data: 'listoftx 01', prev: 'TODO', nonce: 'TODO', 'hash': 'TODO', },
    {blockNum: '02', data: 'listoftx 02', prev: 'TODO', nonce: 'TODO', 'hash': 'TODO', },
    {blockNum: '03', data: 'listoftx 03', prev: 'TODO', nonce: 'TODO', 'hash': 'TODO', },
  ]
  //endregion cook block_list data

  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/blockchain */}
      <h3>Blockchain</h3>

      <div className="row row-horizon">
        <div className="col-4"><Block showTitle='false' showPrev='true' /></div>
        <div className="col-4"><Block showTitle='false' showPrev='true' /></div>
        <div className="col-4"><Block showTitle='false' showPrev='true' /></div>
        {/*TODO make :Block list on same line*/}
      </div>
    </>
  )
}

export default BlockChain
