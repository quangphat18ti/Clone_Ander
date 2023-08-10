import Hash from "./hash/hash"

function HashNavTab() { 
  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/hash */}
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link active" id="pills-sha256demo-tab"   data-toggle="pill" data-target="#pills-sha256demo"   type="button" role="tab" aria-controls="pills-sha256demo"   aria-selected="true"  >SHA256 DEMO</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-abc-tab" data-toggle="pill" data-target="#pills-abc" type="button" role="tab" aria-controls="pills-abc"  aria-selected="false" >abc</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-xyz-tab" data-toggle="pill" data-target="#pills-xyz" type="button" role="tab" aria-controls="pills-xyz"  aria-selected="false" >xyz</button> </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-sha256demo"    role="tabpanel" aria-labelledby="pills-blockmock-tab"    > <Hash/> </div>
          <div className="tab-pane fade            " id="pills-abc" role="tabpanel" aria-labelledby="pills-blocksepolia-tab" > @TODO </div>
          <div className="tab-pane fade            " id="pills-xyz" role="tabpanel" aria-labelledby="pills-blockmumbai-tab" > @TODO </div>
        </div>
      </div>
    </>
  )
}

export default HashNavTab