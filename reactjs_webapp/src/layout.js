import About from "./page/about"
import DemoBlockchain from "./page/demo_blockchain"
import DemoTxSign from "./page/demo_tx_sign"

const Layout = ()=> {
  return(
    <>
      <div className='container-fluid mt-3'>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-demoblockchain-tab" data-toggle="tab" data-target="#nav-demoblockchain" type="button" role="tab" aria-controls="nav-demoblockchain" aria-selected="true" >Demo Blockchain</button>
            <button className="nav-link       " id="nav-demotxsign-tab"     data-toggle="tab" data-target="#nav-demotxsign"     type="button" role="tab" aria-controls="nav-demotxsign"     aria-selected="false">Demo Tx Sign</button>
            <button className="nav-link       " id="nav-about-tab"          data-toggle="tab" data-target="#nav-about"          type="button" role="tab" aria-controls="nav-about"          aria-selected="false">About</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-demoblockchain" role="tabpanel" aria-labelledby="nav-demoblockchain-tab">  <DemoBlockchain/> </div>
          <div className="tab-pane fade            " id="nav-demotxsign"     role="tabpanel" aria-labelledby="nav-demotxsign-tab">      <DemoTxSign/>     </div>
          <div className="tab-pane fade            " id="nav-about"          role="tabpanel" aria-labelledby="nav-about-tab">           <About/>          </div>
        </div>
      </div>
    </>
  )
}

export default Layout