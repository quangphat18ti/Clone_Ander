import {useState, useEffect} from 'react'

function Verify() {
  let [message, setMessage]     = useState('')
  let [pubkey, setPubkey]       = useState(0)
  let [signature, setSignature] = useState('')
  
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--verify">Message</label>
          <textarea className="form-control" id="message--verify" rows="5" value={message} onChange={(e)=> {
            setMessage(e.target.value)
          }}></textarea>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="pubkey--sign">Public Key</label>
          <input className="form-control" id="pubkey--sign" type="text" value={pubkey} onChange={(e)=> {
            setPubkey(e.target.value)
          }}/>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature--sign">Signature</label>
          <input className="form-control" id="signature--sign" type="text" value={signature} onChange={(e)=> {
            setSignature(e.target.value)
          }}/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button'>Verify</button>
        </div>
      </form>
    </>
  )
}

export default Verify;