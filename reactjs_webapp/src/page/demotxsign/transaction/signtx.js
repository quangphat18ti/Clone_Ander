import { useState, useEffect } from "react"
import bigInt from "big-integer"
import { signMessage } from '../../../service/crypto_service'

function SignTx() {
  let [amount, setAmount]     = useState('20.00')
  let [privkey, setPrivkey]     = useState(0)
  let [signature, setSignature] = useState('')
  let [from, setFrom] = useState('')
  let [to, setTo] = useState('04cc955bf8e359cc7ebbb66f4c2dc616a93e8ba08e93d27996e20299ba92cba9cbd73c2ff46ed27a3727ba09486ba32b5ac35dd20c0adec020536996ca4d9f3d74')

  useEffect(()=> {
    const handlePrivkeyStorage = () => {
      setPrivkey(localStorage.getItem('privkey'))
    }

    const handlePubkeyStorage = () => {
      setFrom(localStorage.getItem('pubkey'))
    }
    
    window.addEventListener('storage_privkeytx_event', handlePrivkeyStorage) // add the event listener for the window object
    window.addEventListener('storage_pubkeytx_event', handlePubkeyStorage)
  }, [])
  console.log(from)
  return(
    <>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="message--tx">Message</label>
          <div className="input-group">
            <div className="input-group-text">$
            </div>
              <input className="form-control" value={amount} onChange={(e) => {
                setAmount(e.target.value)
              }}/>
            <div className="input-group-text" >From:
            </div>
              <input className="form-control" value={from} onChange={(e) => {
              setFrom(e.target.value)
            }}/>
            <div className="input-group-text">-&gt;
            </div>
              <input className="form-control" value={to} onChange={(e) => {
                setTo(e.target.value)
              }}/>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="privkey--tx">Private Key</label>
          <input className="form-control" id="privkey--tx" type="number" value={bigInt(privkey, 16).toString() || ''} onChange = {(e) => {
            let privkey_new = e.target.value === '' ? '0' : e.target.value 
            setPrivkey(privkey_new)
          }}/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button' onClick={() =>{
            let message = amount + from + to
            let signature = signMessage(message, privkey)
            setSignature(signature)
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