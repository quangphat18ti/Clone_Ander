import KeyPair from "./keypair/keypair"
import KeypairMessage from "./keypair/keypair_msg"

function KeyPairNav() {
  return (
    <>
     <div className="cointainer mt-3 mx-5">
      <div className="card">
        <div className="card-header">
          <h4>Key Pair</h4>
          <nav>
            <div className="nav nav-tabs card-header-tabs" id="nav-tab--keypair" role="tablist">
              <button className="nav-link active" id="nav-keypair-random-tab"     data-toggle="tab" data-target="#keypair-random "    type="button" role="tab" aria-controls="keypair-random"   aria-selected="true" > Key Pair                 </button>
              <button className="nav-link       " id="nav-keypair-message-tab"    data-toggle="tab" data-target="#keypair-message"    type="button" role="tab" aria-controls="keypair-message"  aria-selected="false"> Key Pair from message    </button>
            </div>
          </nav>
        </div>

        <div className="card-body p-0" >
          <div className="tab-content" id="nav-tabContent--keypair" >
              <div className="tab-pane fade show active" id="keypair-random"    role="tabpanel" aria-labelledby="keypair-random">   <KeyPair />         </div>
            <div className="tab-pane fade            "   id="keypair-message"   role="tabpanel" aria-labelledby="keypair-message">  <KeypairMessage />  </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default KeyPairNav