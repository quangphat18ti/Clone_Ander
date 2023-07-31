import {useState, useEffect} from 'react'
import { verifyMessage } from '../../../service/crypto_service'

function Verify() {
  let [message, setMessage]         = useState('')
  let [pubkey, setPubkey]           = useState(0)
  let [signature, setSignature]     = useState('')
  let [verifyState, setVerifyState] = useState(0) // 0: unconfirm, 1: is verify, -1: incorrect 

  useEffect(()=> {
    const handleMessageStorage = ()=> {
      setMessage(localStorage.getItem('message'))
    }
    const handleSignatureStorage = ()=> {
      setSignature(localStorage.getItem('signature'))
    }
    const handlePubkeyStorage = ()=> {
      setPubkey(localStorage.getItem('pubkey'))
    }

    window.addEventListener('storage_message_event',    handleMessageStorage)
    window.addEventListener('storage_signature_event',  handleSignatureStorage)
    window.addEventListener('storage_pubkey_event',     handlePubkeyStorage)
  }, [])
  
  useEffect(()=> {
    setVerifyState(0) // set verifyState when have a change 
  }, [message, pubkey, signature])

  return(
    <>
      <form className={`alert ${verifyState ===0 ? "" : verifyState === 1 ? "alert-success" : "alert-danger"}`}>
        <div className="form-group mx-4">
          <label className="form-label" htmlFor="message--verify">Message</label>
          <textarea className="form-control" id="message--verify" rows="5" value={message} onChange={(e)=> {
            setMessage(e.target.value)
          }}></textarea>
        </div>

        <div className="form-group mx-4">
          <label className="form-label" htmlFor="pubkey--sign">Public Key</label>
          <input className="form-control" id="pubkey--sign" type="text" value={pubkey} onChange={(e)=> {
            setPubkey(e.target.value)
          }}/>
        </div>

        <div className="form-group mx-4">
          <label className="form-label" htmlFor="signature--sign">Signature</label>
          <input className="form-control" id="signature--sign" type="text" value={signature} onChange={(e)=> {
            setSignature(e.target.value)
          }}/>
        </div>

        <div className="form-group mx-4">
          <button className="btn btn-block btn-primary" type='button' onClick={()=> {
            let state = verifyMessage(message, pubkey, signature) ? 1 : -1
            setVerifyState(state)
          }}>Verify</button>
        </div>
      </form>
    </>
  )
}

export default Verify;