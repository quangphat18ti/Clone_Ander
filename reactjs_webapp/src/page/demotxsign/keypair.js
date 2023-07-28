
function KeyPair() {
  return(
    <div className="container-fluid d-flex justify-content-center">
      <div className="cointainer mt-3 w-75">
        <div className="card">
          <h4 className="card-header">Public / Private Key Pairs</h4>

          <div className="card-body">  
            <div className="form-group">
              <label htmlFor="privkey" className="mt-2">Private Key</label>
              <div className="form-inline">
                <input type="text" class="form-control mb-2" style={{width: "90%"}} id="privkey"/>
                <button className="btn btn-secondary mb-2" style={{width: "10%"}}>Random</button>
              </div>
            </div>

            <div className="form-group mb-5">
              <label htmlFor="pubkey" className="mt-2">Public Key</label>
              <input className="form-control" id="pubkey" type="text" placeholder="Readonly input here..." readOnly={true} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default KeyPair