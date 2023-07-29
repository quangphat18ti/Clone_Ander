
function KeyPair() {
  return(
    <>
      <div className="cointainer mt-3 mx-5">
        <div className="card">
          <h4 className="card-header">Public / Private Key Pairs</h4>

          <div className="card-body">  
            <div className="form-group">
              <label htmlFor="privkey" className="control-label mt-2">Private Key</label>
              <div className="input-group">
                <input type="text" className="form-control mb-2" id="privkey"/>
                <span className="input-group-append">
                  <button className="btn btn-secondary mb-2" >Random</button>
                </span>
              </div>
            </div>

            <div className="form-group mb-5">label
              <label htmlFor="pubkey" className="mt-2">Public Key</label>
              <input className="form-control" id="pubkey" type="text" placeholder="Readonly input here..." readOnly={true} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default KeyPair