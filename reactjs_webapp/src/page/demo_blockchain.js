import Hash from "./demoblockchain/hash"
function DemoBlockchain() {
  return (
    <>
      <div className='container-fluid mt-3'>
        <nav>
          <div className="nav nav-tabs justify-content-end" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-hash-tab"                           data-toggle="tab" data-target="#nav-hash"                        type="button" role="tab" aria-controls="nav-hash"                         aria-selected="true" >Hash</button>
            <button className="nav-link       " id="nav-block-tab"                          data-toggle="tab" data-target="#nav-block"                       type="button" role="tab" aria-controls="nav-block"                        aria-selected="false">Block</button>
            <button className="nav-link       " id="nav-blockchain--demoblockchain"         data-toggle="tab" data-target="#nav-blockchain--demoblockchain"  type="button" role="tab" aria-controls="nav-blockchain--demoblockchain"   aria-selected="false">Blockchain</button>
            <button className="nav-link       " id="nav-distributed-tab"                    data-toggle="tab" data-target="#nav-distributed"                 type="button" role="tab" aria-controls="nav-distributed"                  aria-selected="false">Distributed</button>
            <button className="nav-link       " id="nav-token-tab"                          data-toggle="tab" data-target="#nav-token"                       type="button" role="tab" aria-controls="nav-token"                        aria-selected="false">Token</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-hash"                        role="tabpanel" aria-labelledby="nav-hash-tab">                         <Hash/>        </div>
          <div className="tab-pane fade            " id="nav-block"                       role="tabpanel" aria-labelledby="nav-block-tab">                        TODO block       </div>
          <div className="tab-pane fade            " id="nav-blockchain--demoblockchain"  role="tabpanel" aria-labelledby="nav-blockchain--demoblockchain-tab">   TODO blockchain  </div>
          <div className="tab-pane fade            " id="nav-distributed"                 role="tabpanel" aria-labelledby="nav-distributed-tab">                  TODO distributed </div>
          <div className="tab-pane fade            " id="nav-token"                       role="tabpanel" aria-labelledby="nav-token-tab">                        TODO token       </div>
        </div>
      </div>
    </>
  )
}

export default DemoBlockchain
