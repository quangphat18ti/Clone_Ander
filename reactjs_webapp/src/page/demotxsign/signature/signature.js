import Sign from "./sign"
import Verify from "./verify"

function Signature() {
  return(
    <>
      <div className="cointainer mt-3 mx-5">
        <div className="card">
          <div className="card-header">
            <h4>Signature</h4>
            <nav>
              <div className="nav nav-tabs card-header-tabs" id="nav-tab--signature" role="tablist">
                <button className="nav-link active" id="nav-sign-tab"     data-toggle="tab" data-target="#sign"    type="button" role="tab" aria-controls="sign"   aria-selected="true" >Sign</button>
                <button className="nav-link       " id="nav-verify-tab"   data-toggle="tab" data-target="#verify"  type="button" role="tab" aria-controls="verify" aria-selected="false">Verify</button>
              </div>
            </nav>
          </div>

          <div className="card-body p-0" >
            <div className="tab-content" id="nav-tabContent--signature" >
              <div className="tab-pane fade show active" id="sign"    role="tabpanel" aria-labelledby="sign">   <Sign />    </div>
              <div className="tab-pane fade            " id="verify"  role="tabpanel" aria-labelledby="verify"> <Verify />  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signature;