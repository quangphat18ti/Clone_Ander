import {useState} from 'react'

function Tx(props){
  let [value, setValue] = useState(props.value? props.value : '0.00' )
  let [from, setFrom] = useState(props.from? props.from : '0')
  let [to, setTo] = useState(props.to? props.to : '0')
  let [seq, setSeq] = useState(props.seq? props.seq : 1)
  let [sig, setSig] = useState(props.sig? props.sig : '0')
  return(
    <>
      <div className="input-group">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control" id="txvalue" value={value}/>
        <span className="input-group-text">From:</span>
        <input type="text" className="form-control" id="txfrom" value={from}/>
        <span className="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
          <i className="bi bi-arrow-right"></i>
        </span>
        <input type="text" className="form-control" id="txto" value={to}/>
      </div>
      <div className="input-group">
        <span className="input-group-text">Seq:</span>
        <input type="text" className="form-control col-sm-2" id="seq" value={seq}/>
        <span className="input-group-text">Sig:</span>
        <input type="text" className="form-control" id="sig" value={sig}/>
      </div>
    </>
  )
}

export default Tx