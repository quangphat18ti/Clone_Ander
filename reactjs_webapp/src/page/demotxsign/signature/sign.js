import {useState, useEffect} from 'react'
import { signMessage } from '../../../service/crypto_service'
import bigInt from 'big-integer'

function Sign(){
  let [message, setMessage]     = useState('')
  let [privkey, setPrivkey]     = useState(0)
  let [signature, setSignature] = useState('')
  console.log("privkey in sing", privkey)

  useEffect(()=> {
    const handleStorage = () => {
      setPrivkey(localStorage.getItem('privkey'))
    }
    window.addEventListener('storage_keypair_event', handleStorage)
  }, [])

  console.log('privkey in Sign', privkey)
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--sign">Message</label>
          <textarea className="form-control" id="message--sign" rows="5" value={message} onChange = {(e) => {
            setMessage(e.target.value)
          }}></textarea>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="privkey--sign">Private Key</label>
          <input className="form-control" id="privkey--sign" type="number" value={bigInt(privkey, 16).toString() || ''} onChange = {(e) => {
            setPrivkey(e.target.value)
          }}/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button' onClick={()=> {
            setSignature(signMessage(message, privkey))
            localStorage.setItem('signature', signMessage(message, privkey))
            window.dispatchEvent(new Event('signature'))
          }}>Sign</button>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature" >Message Signature</label>
          <input className="form-control" id="signature" type="text" readOnly={true} value={signature}/>
        </div>
      </form>
    </>
  )
}

export default Sign;