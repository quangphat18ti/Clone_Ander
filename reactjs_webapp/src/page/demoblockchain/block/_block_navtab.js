import Block from "./block/block_mock"

function BlockNavtab() {
  return (
    <>
      {/*TODO navtab 1) mock data , 2) sepolia data*/}

      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-blockmock-tab" data-toggle="pill" data-target="#pills-blockmock" type="button" role="tab" aria-controls="pills-blockmock" aria-selected="true">Mock Data</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-blockmock" role="tabpanel" aria-labelledby="pills-blockmock-tab">...h</div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...p</div>
      </div>      

      <div className='container-fluid mt-3'>
        <nav className="d-flex">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-hash-tab"  data-toggle="tab" data-target="#nav-hash"  type="button" role="tab" aria-controls="nav-hash"  aria-selected="true" >BlockMock</button>
            <button className="nav-link       " id="nav-block-tab" data-toggle="tab" data-target="#nav-block" type="button" role="tab" aria-controls="nav-block" aria-selected="false">BlockSepolia</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-hash"  role="tabpanel" aria-labelledby="nav-hash-tab">  TODO BlockMock    </div>
          <div className="tab-pane fade            " id="nav-block" role="tabpanel" aria-labelledby="nav-block-tab"> TODO BlockSepolia </div>
        </div>
      </div>
    </>
  )
}

export default BlockNavtab
