function DemoTxSign() {
  return (
    <>
      <div className='container-fluid mt-3'>
        <nav>
          <div className="nav nav-tabs justify-content-end" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-keys-tab"               data-toggle="tab" data-target="#nav-keys"               type="button" role="tab" aria-controls="nav-keys"                 aria-selected="true" >Keys</button>
            <button className="nav-link       " id="nav-signatures-tab"         data-toggle="tab" data-target="#nav-signatures"         type="button" role="tab" aria-controls="nav-signatures"           aria-selected="false">Signatures</button>
            <button className="nav-link       " id="nav-transaction-tab"        data-toggle="tab" data-target="#nav-transaction"        type="button" role="tab" aria-controls="nav-transaction"          aria-selected="false">Transaction</button>
            <button className="nav-link       " id="nav-tx-sign-blockchain-tab" data-toggle="tab" data-target="#nav-tx-sign-blockchain" type="button" role="tab" aria-controls="nav-tx-sign-blockchain"   aria-selected="false">Blockchain</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-keys"                role="tabpanel" aria-labelledby="nav-keys-tab">                 TODO keys         </div>
          <div className="tab-pane fade            " id="nav-signatures"          role="tabpanel" aria-labelledby="nav-block-tab">                TODO signatures   </div>
          <div className="tab-pane fade            " id="nav-transaction"         role="tabpanel" aria-labelledby="nav-transaction-tab">          TODO transaction  </div>
          <div className="tab-pane fade            " id="nav-tx-sign-blockchain"  role="tabpanel" aria-labelledby="nav-tx-sign-blockchain-tab">   TODO blockchain   </div>
        </div>
      </div>
    </>
  )
}

export default DemoTxSign
