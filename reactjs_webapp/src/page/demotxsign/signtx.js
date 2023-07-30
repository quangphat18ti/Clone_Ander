function SignTx() {
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--tx">Message</label>
          <div className="input-group">
            <div className="input-group-text">$
            </div>
              <input className="form-control" defaultvvalue="20.00"/>
            <div className="input-group-text">From:
            </div>
              <input className="form-control" />
            <div className="input-group-text">-&gt;
            </div>
              <input className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="privkey--tx">Private Key</label>
          <input className="form-control" id="privkey--tx" type="number"/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button'>Sign</button>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature--tx-sign">Message Signature</label>
          <input className="form-control" id="signature--tx-sign" type="text" readOnly={true}/>
        </div>

        
      </form>
    </>
  )
}

export default SignTx;