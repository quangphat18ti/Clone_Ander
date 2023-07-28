function Sign(){
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--sign">Message</label>
          <textarea className="form-control" id="message--sign" rows="5" ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="privkey--sign">Private Key</label>
          <input className="form-control" id="privkey--sign" type="number"/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button'>Sign</button>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature">Message Signature</label>
          <input className="form-control" id="signature" type="text" readOnly={true}/>
        </div>
      </form>
    </>
  )
}

export default Sign;