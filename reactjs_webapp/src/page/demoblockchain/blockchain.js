import Block from "./block"

function BlockChain() {
  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/blockchain */}
      <h3>Blockchain</h3>

      <div className="row row-horizon">
        <div className="col-4"><Block /></div>
        <div className="col-4"><Block /></div>
        <div className="col-4"><Block /></div>
        {/*TODO make :Block list on same line*/}
      </div>
    </>
  )
}

export default BlockChain
