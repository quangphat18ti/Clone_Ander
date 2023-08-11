import { useState, useEffect }  from "react"
import { verifyMessage }        from '../../../service/crypto_service'

function VerifyTx() {
  let [amount, setAmount]             = useState('')
  let [signature, setSignature]       = useState('')
  let [from, setFrom]                 = useState('')
  let [to, setTo]                     = useState('')
  let [verifyState, setVerifyState]   = useState(0)

  useEffect(()=> {
    const handleAmountStorage       = () => { setAmount(localStorage.getItem('amount')) }
    const handleFromStorage         = () => { setFrom(localStorage.getItem('from')) }
    const handleToStorage           = () => { setTo(localStorage.getItem('to')) }
    const handleSignatureStorage    = () => { setSignature(localStorage.getItem('signaturetx')) }
    window.addEventListener('storage_amount_event',       handleAmountStorage)
    window.addEventListener('storage_from_event',         handleFromStorage) 
    window.addEventListener('storage_to_event',           handleToStorage)
    window.addEventListener('storage_signaturetx_event',  handleSignatureStorage)
  }, [])

  useEffect(()=> {
    setVerifyState(0) // set verifyState when have a change 
  }, [amount, from, to, signature])

  return(
    <>
      <form className={`m-0 alert ${verifyState ===0 ? "" : verifyState === 1 ? "alert-success" : "alert-danger"}`}>
        <div className="form-group">
          <label className="form-label" htmlFor="message--tx">Message</label>
          <div className="input-group">
            <div className="input-group-prepend"><spand className="input-group-text">$</spand></div>
              <input className="form-control" value={amount} onChange= {(e) => { setAmount(e.target.value) }}/>
            <div className="input-group-prepend" ><spand className="input-group-text">From:</spand></div>
              <input className="form-control" value={from} onChange= {(e) => { setFrom(e.target.value)}} />
            <div className="input-group-prepend"><spand className="input-group-text">-&gt;</spand></div>
              <input className="form-control" value={to} onChange= {(e) => { setTo(e.target.value) }}/>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signature--tx-verify">Signature</label>
          <input className="form-control" id="signature--tx-verify" type="text" value={signature} onChange= {(e) => { setSignature(e.target.value) }}/>
        </div>

        <div className="form-group">
          <button className="btn btn-block btn-primary" type='button' onClick={()=> {
            let message = amount + from + to
            let state = verifyMessage(message, from, signature) ? 1 : -1
            setVerifyState(state)
            }}>Verify</button>
        </div>
      </form>
    </>
  )
}

export default VerifyTx