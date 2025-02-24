import KeyPairNav   from "./demotxsign/keypair_nav"
import Signature    from "./demotxsign/signature/signature"
import Transaction  from "./demotxsign/transaction/transaction"
import Blockchain   from "./demotxsign/blockchain/blockchain"
import ECDSA        from "./demotxsign/ECDSA"

function DemoTxSign() {
  return (
    <>
      <div className='container-fluid mt-3'>
        <nav>
          <div className="nav nav-tabs justify-content-end" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-key-tab"                    data-toggle="tab" data-target="#nav-key"                    type="button" role="tab" aria-controls="nav-key"                      aria-selected="true" >Key</button>
            <button className="nav-link       " id="nav-signature-tab"              data-toggle="tab" data-target="#nav-signature"              type="button" role="tab" aria-controls="nav-signature"                aria-selected="false">Signature</button>
            <button className="nav-link       " id="nav-transaction-tab"            data-toggle="tab" data-target="#nav-transaction"            type="button" role="tab" aria-controls="nav-transaction"              aria-selected="false">Transaction</button>
            <button className="nav-link       " id="nav-blockchain--demotxsign-tab" data-toggle="tab" data-target="#nav-blockchain--demotxsign" type="button" role="tab" aria-controls="nav-blockchain--demotxsign"   aria-selected="false">Blockchain</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-key"                     role="tabpanel" aria-labelledby="nav-key-tab">                     <KeyPairNav />  </div>
          <div className="tab-pane fade            " id="nav-signature"               role="tabpanel" aria-labelledby="nav-block-tab">                   <Signature />   </div>
          <div className="tab-pane fade            " id="nav-transaction"             role="tabpanel" aria-labelledby="nav-transaction-tab">             <Transaction />   </div>
          <div className="tab-pane fade            " id="nav-blockchain--demotxsign"  role="tabpanel" aria-labelledby="nav-blockchain--demotxsign-tab">  <Blockchain />  </div>
        </div>
      </div>
    </>
  )
}

export default DemoTxSign
