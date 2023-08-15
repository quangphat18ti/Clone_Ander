import HashNavTab from "./mathematic/_hash_navtab"
import ECDSA      from './demotxsign/ECDSA'

export default function Mathematic() {
  return (
    <>
      <div className='container-fluid mt-3'>
        <nav className="d-flex justify-content-end">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-hash-mathematic-tab"  data-toggle="tab" data-target="#nav-hash-mathematic"  type="button" role="tab" aria-controls="nav-hash-mathematic"  aria-selected="true" >Hash Mathematic</button>
            <button className="nav-link       " id="nav-ECDS-tab           "  data-toggle="tab" data-target="#nav-ECDS           "  type="button" role="tab" aria-controls="nav-ECDS           "  aria-selected="false">ECDS Scheme</button>                  
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-hash-mathematic"  role="tabpanel" aria-labelledby="nav-hash-mathematic-tab">  <HashNavTab/>  </div>
          <div className="tab-pane fade            " id="nav-ECDS"                 role="tabpanel" aria-labelledby="nav-ECDS-tab           ">  <ECDSA/>       </div>
        </div>
      </div>
    </>
  )
}