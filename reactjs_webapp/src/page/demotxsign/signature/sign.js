import {useState, useEffect} from 'react'
import { signMessage, getPubkeyByPrivkey } from '../../../service/crypto_service'
import bigInt from 'big-integer'

function Sign(){
  let [message, setMessage]     = useState('')
  let [privkey, setPrivkey]     = useState(0)
  let [signature, setSignature] = useState('')

  useEffect(()=> {
    const handleKeypairStorage = () => { setPrivkey(localStorage.getItem('privkey')) } // this page only use privkey
    window.addEventListener('storage_keypair_event', handleKeypairStorage) // add the event listener for the window object
  }, [])

  return(
    <>
      <form>
        <div className="form-group mx-4">
          <label className="form-label" htmlFor="message--sign">Message</label>
          <textarea className="form-control" id="message--sign" rows="5" value={message} onChange = {(e) => {
            setMessage(e.target.value)
            localStorage.setItem('message', e.target.value)
            window.dispatchEvent(new Event('storage_message_event')) // trigger event
          }}></textarea>
        </div>
        <div className="form-group mx-4">
          <label className="form-label" htmlFor="privkey--sign">Private Key</label>
          <input className="form-control" id="privkey--sign" type="number" value={bigInt(privkey, 16).toString() || ''} onChange = {(e) => {
            let privkey_new = bigInt(e.target.value).toString(16)  
            let pubkey_new = getPubkeyByPrivkey(privkey_new)
            setPrivkey(privkey_new)
            localStorage.setItem('privkey', privkey_new)
            localStorage.setItem('pubkey', pubkey_new)
            window.dispatchEvent(new Event('storage_keypair_event'))
          }}/>
        </div>

        <div className="form-group mx-4">
          <button className="btn btn-block btn-primary" type='button' onClick={()=> {
            setSignature(signMessage(message, privkey))
            localStorage.setItem('signature', signMessage(message, privkey))
            window.dispatchEvent(new Event('storage_signature_event')) // trigger event
          }}>Sign</button>
        </div>

        <div className="form-group mx-4">
          <label className="form-label" htmlFor="signature" >Message Signature</label>
          <input className="form-control" id="signature" type="text" readOnly={true} value={signature}/>
        </div>
      </form>
    </>
  )
}

export default Sign;