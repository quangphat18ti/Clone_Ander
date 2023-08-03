import { useState, useEffect } from "react"
import bigInt from "big-integer"
import { signMessage, getPubkeyByPrivkey } from '../../../service/crypto_service'

function SignTx() {
  let [amount, setAmount]         = useState('20.00')
  let [privkey, setPrivkey]       = useState(0)
  let [signature, setSignature]   = useState('')
  let [from, setFrom]             = useState('')
  let [to, setTo]                 = useState('04cc955bf8e359cc7ebbb66f4c2dc616a93e8ba08e93d27996e20299ba92cba9cbd73c2ff46ed27a3727ba09486ba32b5ac35dd20c0adec020536996ca4d9f3d74')

  useEffect(()=> {
    localStorage.setItem('to',            to)
    window.dispatchEvent(new Event('storage_to_event'))
    localStorage.setItem('amount',        amount)
    window.dispatchEvent(new Event('storage_amount_event'))
    
    const handleKeypairStorate = () => {
      setPrivkey(localStorage.getItem('privkey'))
      setFrom(localStorage.getItem('pubkey'))
      localStorage.setItem('from', localStorage.getItem('pubkey')) // send the pubkey to the verify tab
      window.dispatchEvent(new Event('storage_from_event'))
    }
    
    window.addEventListener('storage_keypair_event', handleKeypairStorate) // add the event listener for the window object
  }, [])

  return(
    <>
      <form className="mx-4">
        <div className="form-group">
          <label className="form-label" htmlFor="message--tx">Message</label>
          <div className="input-group">
            <div className="input-group-text">$
            </div>
              <input className="form-control" value={amount} onChange={(e) => {
                setAmount(e.target.value)
                localStorage.setItem('amount', e.target.value)
                window.dispatchEvent(new Event('storage_amount_event'))
              }}/>
            <div className="input-group-text" >From:
            </div>
              <input className="form-control" value={from} onChange={(e) => {
              setFrom(e.target.value)
              localStorage.setItem('from', e.target.value)
              window.dispatchEvent(new Event('storage_from_event'))
            }}/>
            <div className="input-group-text">-&gt;
            </div>
              <input className="form-control" value={to} onChange={(e) => {
                setTo(e.target.value)
                localStorage.setItem('to', e.target.value)
                window.dispatchEvent(new Event('storage_to_event'))
              }}/>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="privkey--tx">Private Key</label>
          <input className="form-control" id="privkey--tx" type="text" pattern="[a-fA-F\d]+" title="must be hexadecimal number" value={privkey || ''} onChange = {(e) => {
            let privkey_new = (e.target.value === '')? '0' : e.target.value
            let pubkey_new = getPubkeyByPrivkey(privkey_new)
            setPrivkey(privkey_new)
            localStorage.setItem('privkey', privkey_new)
            localStorage.setItem('pubkey', pubkey_new)
            window.dispatchEvent(new Event('storage_keypair_event'))
          }}/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button' onClick={() =>{
            let message = amount + from + to
            let signature = signMessage(message, privkey)
            setSignature(signature)
            localStorage.setItem('signaturetx', signature)
            window.dispatchEvent(new Event('storage_signaturetx_event'))
          }}>Sign</button>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature--tx-sign">Message Signature</label>
          <input className="form-control" id="signature--tx-sign" type="text" readOnly={true} value={signature}/>
        </div>

        
      </form>
    </>
  )
}

export default SignTx;