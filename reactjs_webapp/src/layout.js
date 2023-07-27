const Layout = ()=> {
  return(
    <>
      <div className='container-fluid'>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-demoblockchain-tab"    data-toggle="tab" data-target="#nav-demoblockchain"    type="button" role="tab" aria-controls="nav-demoblockchain"    aria-selected="true">Demo Blockchain</button>
            <button className="nav-link       " id="nav-profile-tab" data-toggle="tab" data-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
            <button className="nav-link       " id="nav-about-tab"   data-toggle="tab" data-target="#nav-about" type="button" role="tab" aria-controls="nav-about" aria-selected="false">About</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-demoblockchain"    role="tabpanel" aria-labelledby="nav-demoblockchain-tab"    >TODO demoblockchain</div>
          <div className="tab-pane fade            " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" >...</div>
          <div className="tab-pane fade            " id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab"     >TODO about</div>
        </div>
      </div>
    </>
  )
}

export default Layout