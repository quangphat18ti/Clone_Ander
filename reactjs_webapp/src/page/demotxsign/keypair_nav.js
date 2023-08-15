import KeyPair from "./keypair/keypair"
import KeypairMessage from "./keypair/keypair_msg"
import WalletKeyPair from "./keypair/WalletKeyPair"

function KeyPairNav() {
  return (
    <>
     <div className="cointainer mt-3 mx-5">
      <div className="card">
        <div className="card-header">
          <h4>Key Pair</h4>
          <nav>
            <div className="nav nav-tabs card-header-tabs" id="nav-tab--keypair" role="tablist">
              <button className="nav-link active" id="nav-keypair-random-tab"     data-toggle="tab" data-target="#keypair-random "    type="button" role="tab" aria-controls="keypair-random "   aria-selected="true" > Key Pair                            </button>
              <button className="nav-link       " id="nav-keypair-message-tab"    data-toggle="tab" data-target="#keypair-message"    type="button" role="tab" aria-controls="keypair-message"   aria-selected="false"> Keypair fr Key Text                 </button>
              <button className="nav-link       " id="nav-wallet-keypair-tab"     data-toggle="tab" data-target="#wallet-keypair "    type="button" role="tab" aria-controls="wallet-keypair "   aria-selected="false"> Create new Wallet/Account/Pubkey    </button>
            </div>
          </nav>
        </div>

        <div className="card-body p-0" >
          <div className="tab-content" id="nav-tabContent--keypair" >
              <div className="tab-pane fade show active" id="keypair-random"    role="tabpanel" aria-labelledby="keypair-random ">   <KeyPair       />  </div>
            <div className="tab-pane fade            "   id="keypair-message"   role="tabpanel" aria-labelledby="keypair-message">  <KeypairMessage />  </div>
            <div className="tab-pane fade            "   id="wallet-keypair"    role="tabpanel" aria-labelledby="wallet-keypair ">  <WalletKeyPair  />  </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default KeyPairNav