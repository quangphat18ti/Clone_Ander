import {useState, useEffect}  from 'react'
import {verifyMessage}        from '../../../service/crypto_service'

function Tx(props){
  let [value, setValue]         = useState(props.value ? props.value : '0.00' )
  let [from, setFrom]           = useState(props.from  ? props.from  : '')
  let [to, setTo]               = useState(props.to    ? props.to    : '')
  let [seq, setSeq]             = useState(props.seq   ? props.seq   : null)
  let [sig, setSig]             = useState(props.sig   ? props.sig   : '')
  let [txState, setTxState]     = useState(0) // 0 is valid signature, 1 is invalid signature

  useEffect(()=> {
    let message = value + from + to + (seq == null ? '' : seq)
    let verify = verifyMessage(message, from, sig)
    setTxState(verify? 0 : 1)
  }, [value, from, to, seq, sig])

  return(
    <>
      <div className="input-group">
        <div className="input-group-prepend"><span className="input-group-text">$</span></div>
        <input type="text" className="form-control" id="txvalue" value={value} onChange= {(e) => {
            setValue(e.target.value)
            props.handleTxchange(props.index, {value: e.target.value})
          }}/>
        <div className="input-group-prepend"><span className="input-group-text">From:</span></div>
        <input type="text" className="form-control" id="txfrom" value={from} onChange= {(e) => {
            setFrom(e.target.value)
            props.handleTxchange(props.index, {from: e.target.value})
          }}/>
        <div className="input-group-prepend">
          <span className="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </span>
          <i className="bi bi-arrow-right"></i>
        </div>
        <input type="text" className="form-control" id="txto" value={to} onChange={(e) => {
            setTo(e.target.value)
            props.handleTxchange(props.index, {to: e.target.value})
          }}/>
      </div>
      {
        seq != null && 
        <>
          <div className="input-group">
            <div className="input-group-prepend"><span className="input-group-text">Seq:</span></div>
            <input type="text" className="form-control col-sm-2" id="seq" value={seq} onChange={(e) => {
                setSeq(e.target.value)
                props.handleTxchange(props.index, {seq: e.target.value})
              }}/>
            <div className="input-group-prepend"><span className="input-group-text">Sig:</span></div>
            <input type="text" className={`form-control ${txState === 0 ? '' : 'text-danger'}`} id="sig" value={sig} onChange={(e) => {
                setSig(e.target.value)
                props.handleTxchange(props.index, {sig: e.target.value})
              }}/>
          </div>
          <br/>
        </>
      }
    </>
  )
}

export default Tx