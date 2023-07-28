function VerifyTx() {
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--tx">Message</label>
          <div className="input-group">
            <div className="input-group-text">$
            </div>
              <input className="form-control" value="20.00"/>
            <div className="input-group-text">From:
            </div>
              <input className="form-control" />
            <div className="input-group-text">-&gt;
            </div>
              <input className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature--tx-verify">Signature</label>
          <input className="form-control" id="signature--tx-verify" type="text"/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button'>Verify</button>
        </div>
      </form>
    </>
  )
}

export default VerifyTx;