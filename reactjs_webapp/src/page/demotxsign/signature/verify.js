import {useState, useEffect} from 'react'
import { verifyMessage } from '../../../service/crypto_service'

function Verify() {
  let [message, setMessage]         = useState('')
  let [pubkey, setPubkey]           = useState(0)
  let [signature, setSignature]     = useState('')
  let [verifyState, setVerifyState] = useState(0) // 0: unconfirm, 1: is verify, -1: incorrect 

  useEffect(()=> {
    const handleMessageStorage    = ()=> { setMessage(localStorage.getItem('message')) }
    const handleSignatureStorage  = ()=> { setSignature(localStorage.getItem('signature')) }
    const handleKeypairStorage    = ()=> { setPubkey(localStorage.getItem('pubkey')) } // this page only use pubkey

    window.addEventListener('storage_message_event',    handleMessageStorage)
    window.addEventListener('storage_signature_event',  handleSignatureStorage)
    window.addEventListener('storage_keypair_event',    handleKeypairStorage)
  }, [])
  
  useEffect(()=> {
    setVerifyState(0) // set verifyState when have a change 
  }, [message, pubkey, signature])

  return(
    <>
      <form className={`alert ${verifyState ===0 ? "" : verifyState === 1 ? "alert-success" : "alert-danger"}`}>
        <div className="form-group mx-4">
          <label className="form-label" htmlFor="message--verify">Message</label>
          <textarea className="form-control" id="message--verify" rows="5"  value= {message}    onChange={(e)=> { setMessage(e.target.value) }} />
        </div>

        <div className="form-group mx-4">
          <label className="form-label" htmlFor="pubkey--sign">Public Key</label>
          <input className="form-control" id="pubkey--sign" type="text"      value= {pubkey}    onChange={(e)=> { setPubkey(e.target.value) }}/>
        </div>

        <div className="form-group mx-4">
          <label className="form-label" htmlFor="signature--sign">Signature</label>
          <input className="form-control" id="signature--sign" type="text"   value= {signature} onChange={(e)=> { setSignature(e.target.value) }}/>
        </div>

        <div className="form-group mx-4">
          <button className="btn btn-block btn-primary" type='button' onClick={()=> {
            let state = verifyMessage(message, pubkey, signature) ? 1 : -1
            setVerifyState(state)
          }}>Verify</button>
        </div>
      </form>
      <button
          style={{ "minWidth": "5rem",float: 'left'}} type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#explainVerifyModal"
          onClick={ () => {
          }}
      >Cơ sở toán học</button>

      {/*Modal*/}
      {/*TODO: Translate to English & write again by katex*/}
      <div className="modal" tabIndex="-1" id="explainVerifyModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/*Modal header*/}
            <div className="modal-header">
              <h4 className="modal-title">Cơ sở toán học quá trình xác thực</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/*Modal body*/}
            <div className="modal-body">
              {/*Ref: "Cơ sở lý thuyết số trong an toàn - bảo mật thông tin"
                - Bùi Doãn Khánh, Nguyễn Đình Thúc, Trần Đan Thư*/}
              <h4>Thuật toán RSA:</h4>
              <>Với đơn ánh f, public key (e, n) và chữ ký s, Bob tính:</>
              <ul>
                <li>M<sup>*</sup> = s<sup>e</sup> mod n</li>
              </ul>
              <>Nếu M<sup>*</sup> <span>&#8713;</span> f([0, n-1]) loại bỏ chữ ký s</>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Verify;