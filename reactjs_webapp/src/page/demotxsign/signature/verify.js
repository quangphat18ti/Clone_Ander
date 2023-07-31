function Verify() {
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--verify">Message</label>
          <textarea className="form-control" id="message--verify" rows="5" ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="pubkey--sign">Public Key</label>
          <input className="form-control" id="pubkey--sign" type="text"/>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature--sign">Signature</label>
          <input className="form-control" id="signature--sign" type="text"/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button'>Verify</button>
        </div>
      </form>
    </>
  )
}

export default Verify;