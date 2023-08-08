import React          from "react"
import BlockMock      from "./block_mock"
import BlockMumbai    from "./block_mumbai"
import BlockSepolia   from "./block_sepolia"

function BlockNavtab() {
  return (
    <>
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link active" id="pills-blockmock-tab"    data-toggle="pill" data-target="#pills-blockmock"    type="button" role="tab" aria-controls="pills-blockmock"    aria-selected="true"  >Mock Data</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-blocksepolia-tab" data-toggle="pill" data-target="#pills-blocksepolia" type="button" role="tab" aria-controls="pills-blocksepolia" aria-selected="false" >Mock Sepolia</button> </li>
          <li className="nav-item" role="presentation"> <button className="py-1 px-2 small  nav-link       " id="pills-blockmumbai-tab"  data-toggle="pill" data-target="#pills-blockmumbai"  type="button" role="tab" aria-controls="pills-blockmumbai"  aria-selected="false" >Mock Mumbai</button> </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-blockmock"    role="tabpanel" aria-labelledby="pills-blockmock-tab"    > <BlockMock/> </div>
          <div className="tab-pane fade            " id="pills-blocksepolia" role="tabpanel" aria-labelledby="pills-blocksepolia-tab" > <BlockSepolia/> </div>
          <div className="tab-pane fade            " id="pills-blockmumbai" role="tabpanel" aria-labelledby="pills-blockmumbai-tab" > <BlockMumbai/> </div>
        </div>
      </div>
    </>
  )
}

export default BlockNavtab
