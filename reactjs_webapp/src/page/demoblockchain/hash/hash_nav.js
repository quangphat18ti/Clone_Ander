import React from "react"
import Hash from "./hash"
import Hash2nd from "./hash_2nd"

function HashNav () {
  return (
    <>
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link active" id="pills-hash-tab"    data-toggle="pill" data-target="#pills-hash"    type="button" role="tab" aria-controls="pills-hash"    aria-selected="true"  >Hash</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-hash-2nd-tab" data-toggle="pill" data-target="#pills-hash-2nd" type="button" role="tab" aria-controls="pills-hash-2nd" aria-selected="false" >Hash 2nd</button> </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-hash"    role="tabpanel" aria-labelledby="pills-blockmock-tab"    > <Hash/> </div>
          <div className="tab-pane fade            " id="pills-hash-2nd" role="tabpanel" aria-labelledby="pills-hash-2nd-tab" > <Hash2nd/> </div>
        </div>
      </div>
    </>
  )
}

export default HashNav