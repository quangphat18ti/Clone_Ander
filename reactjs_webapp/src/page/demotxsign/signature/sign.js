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
      <button
          style={{ "minWidth": "5rem",float: 'left'}} type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#explainSignModal"
          onClick={ () => {
          }}
      >Cơ sở toán học</button>

      {/*Modal*/}
      {/*TODO: Translate to English & write again by katex*/}
      <div className="modal" tabIndex="-1" id="explainSignModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/*Modal header*/}
            <div className="modal-header">
              <h4 className="modal-title">Cơ sở toán học quá trình tạo chữ ký</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/*Modal body*/}
            <div className="modal-body">
              {/*Ref: "Cơ sở lý thuyết số trong an toàn - bảo mật thông tin"
                - Bùi Doãn Khánh, Nguyễn Đình Thúc, Trần Đan Thư*/}
              <h4>Thuật toán RSA:</h4>
            <>Dùng một đơn ánh f: [0, n-1] -> [0, n-1]<br/></>
              <>Với đơn ánh f, private key (d, n) và nguyên bản m<span> ∈ </span>[0, n-1]<br/></>
              <hr></hr>
              <>Để Alice gửi cho Bob, Alice tính 2 số nguyên:<br/></>
              <></>
              <ul>
                <li>M = f(m)</li>
                <li>s = M<sup>d</sup> mod n</li>
              </ul>
              <h5>=> s là chữ ký RSA của nguyên bản m</h5>
             <strong><em>Sau đó Alice gửi s cho Bob</em></strong>
              <hr></hr>
              <h4>Thuật toán ECC:</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sign;