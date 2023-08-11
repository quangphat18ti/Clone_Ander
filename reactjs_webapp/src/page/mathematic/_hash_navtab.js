import WhatIsSHA256                   from "./hash/whatIsSHA256"
import Applications                   from "./hash/Application"
import PropertiesOfCryptoHashFunction from "./hash/6PropertiesOfCryptoHashFunction"
import Mathematic                     from "./hash/mathematic"

export default function HashNavTab() { 
  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/hash */}
      <div className="container-fluid">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-whatIsSHA256-tab" data-toggle="pill" data-target="#pills-whatIsSHA256"  type="button" role="tab" aria-controls="pills-whatIsSHA256" aria-selected="false" >What is SHA256</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-Applications-tab" data-toggle="pill" data-target="#pills-Applications"  type="button" role="tab" aria-controls="pills-Applications" aria-selected="false" >Applications</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-6ProperCHF-tab"   data-toggle="pill" data-target="#pills-6ProperCHF"    type="button" role="tab" aria-controls="pills-6ProperCHF"   aria-selected="false" >6 Properties of CHF</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-mathematic-tab"   data-toggle="pill" data-target="#pills-mathematic"    type="button" role="tab" aria-controls="pills-mathematic"   aria-selected="false" >Mathematic of SHA256</button> </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane show active     " id="pills-whatIsSHA256"  role="tabpanel" aria-labelledby="pills-whatIsSHA256-tab"  > <WhatIsSHA256/>                   </div>
          <div className="tab-pane fade            " id="pills-Applications"  role="tabpanel" aria-labelledby="pills-Applications-tab"  > <Applications/>                   </div>
          <div className="tab-pane fade            " id="pills-6ProperCHF"    role="tabpanel" aria-labelledby="pills-6ProperCHF-tab"    > <PropertiesOfCryptoHashFunction/> </div>
          <div className="tab-pane fade            " id="pills-mathematic"    role="tabpanel" aria-labelledby="pills-mathematic-tab"    > <Mathematic/> </div>
        </div>
      </div>
    </>
  )
}