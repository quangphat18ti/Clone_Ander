import SignTx from "./signtx"
import VerifyTx from "./verifytx";
function Transaction() {
  return(
    <>
      <div className="cointainer mt-3 mx-5">
        <div className="card">
          <div className="card-header">
            <h4>Transaction</h4>
            <nav>
              <div className="nav nav-tabs card-header-tabs" id="nav-tab--tx" role="tablist">
                <button className="nav-link active" id="nav-sign-tab--tx"     data-toggle="tab" data-target="#sign--tx"    type="button" role="tab" aria-controls="sign--tx"   aria-selected="true" >Sign</button>
                <button className="nav-link       " id="nav-verify-tab--tx"   data-toggle="tab" data-target="#verify--tx"  type="button" role="tab" aria-controls="verify--tx" aria-selected="false">Verify</button>
              </div>
            </nav>
          </div>

          <div className="card-body">
            <div className="tab-content" id="nav-tabContent--tx">
              <div className="tab-pane fade show active" id="sign--tx"    role="tabpanel" aria-labelledby="sign--tx">   <SignTx />    </div>
              <div className="tab-pane fade            " id="verify--tx"  role="tabpanel" aria-labelledby="verify--tx"> <VerifyTx />  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transaction;