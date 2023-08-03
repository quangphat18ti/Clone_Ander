import { useEffect, useState } from 'react'
import { gen_keypair } from  '../../service/crypto_service'
import bigInt from 'big-integer'
//import 'katex/dist/katex.min.css'

function KeyPair() {
  let [privkey, setPrivkey] = useState(0)
  let [pubkey, setPubkey]   = useState(0)

  /*
    Store and dispatch event
    ref: https://michalkotowski.pl/writings/how-to-refresh-a-react-component-when-local-storage-has-changed
  */
  const storeKeypair = (privkey = 0, pubkey = 0)=> { // store privkey, pubkey and trigger the event
    localStorage.setItem('privkey', privkey)
    localStorage.setItem('pubkey',  pubkey)
    window.dispatchEvent(new Event('storage_keypair_event'))
  }  

  useEffect(()=>{ // generate the random keypair at the first time this component is rendered
    let keypair = gen_keypair()
    setPrivkey(keypair.privkey)
    setPubkey(keypair.pubkey)
    storeKeypair(keypair.privkey, keypair.pubkey)

    const handleKeypairStorage = () => {    // add the event handler when localStorage is updated
      setPrivkey(localStorage.getItem('privkey'))
      setPubkey(localStorage.getItem('pubkey'))
    }
    window.addEventListener('storage_keypair_event', handleKeypairStorage)
  }, [])

  return(
    <>
      <div className="cointainer mt-3 mx-5">
        <div className="card">
          <h4 className="card-header">Public / Private Key Pairs</h4>

          <div className="card-body">  
            <div className="form-group">

              {/* privkey */}
              <label htmlFor="privkey" className="control-label mt-2">Private Key</label>
              <div className="input-group">
                <input type="number" className="form-control mb-2" id="privkey"
                       value={bigInt(privkey, 16).toString() || ''}
                       onChange={ (e) => {
                         // calc new pubkey
                         let              privkey_new = bigInt(e.target.value).toString(16)  // convert to bigint to use w/ elliptic  ref https://github.com/anders94/public-private-key-demo/blob/master/views/keys.pug#L47
                         let pubkey_new = privkey_new === '0'?  /* handle error @ calling w/ empty '' or '0' param ie gen_keypair(p) ie ec.keyFromPrivate(p) will result as error */
                           0 : gen_keypair(privkey_new).pubkey

                         // render to ui
                         setPrivkey(privkey_new)
                         setPubkey(pubkey_new)
                         storeKeypair(privkey_new, pubkey_new)
                       }}
                />

                {/* btn Random */}
                <span className="input-group-append">
                  <button className="btn btn-secondary mb-2" onClick={()=>{
                    let keypair = gen_keypair()
                    setPrivkey(keypair.privkey)
                    setPubkey(keypair.pubkey)
                    storeKeypair(keypair.privkey, keypair.pubkey)
                  }}>Random</button>
                </span>

              </div>
            </div>

            {/* pubkey */}
            <div className="form-group mb-5">
              <label htmlFor="pubkey" className="mt-2">Public Key</label>
              <input className="form-control" id="pubkey" type="text" readOnly={true} value={pubkey || ''}/>
            </div>
          </div>
        </div>
        <button
            style={{ "minWidth": "5rem",float: 'left', marginTop: '150px'}} type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#mathModal"
            onClick={ () => {
            }}
        >Cơ sở toán học</button>

        {/*Modal*/}
        {/*TODO: Translate to English & write again by katex*/}
        <div className="modal" tabIndex="-1" id="mathModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/*Modal header*/}
              <div className="modal-header">
                <h4 className="modal-title">Cơ sở toán học của quá trình sinh khóa</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/*Modal body*/}
              <div className="modal-body">
                {/*Ref: "Cơ sở lý thuyết số trong an toàn - bảo mật thông tin"
                - Bùi Doãn Khánh, Nguyễn Đình Thúc, Trần Đan Thư*/}
                <h4>Thuật toán RSA:</h4>
                <>Mấu chốt cơ bản của việc sinh khóa RSA là tìm được bộ 3 số nguyên (e, d, n);<br/></>
                <>Trong đó n là tích của 2 số nguyên tố lớn khác nhau p,q.<br/> </>
                {<>(Trên thực tế n được tạo bởi nhiều số nguyên tố khác nhau dựa vào định lý Trung Hoa mở rộng,
                thay vì chỉ 2 số nguyên tố p, q)<br/></>}
                <div>
                  <h6>Cụ thể, quá trình sinh khóa như sau:</h6>
                  <ul>
                    <li>Chọn n = pq (Với p,q là 2 số nguyên tố lớn)</li>
                    <li>Tính <span>&#934;</span>(n) = (p-1)(q-1)</li>
                    <li>Chọn e sao cho:   1 <span>&#60;</span> e <span>&#60;</span> <span>&#934;</span>(n), GCD(e, <span>&#934;</span>(n)) = 1 </li>
                    <li>Chọn d sao cho:   d = e<sup>-1</sup> mod <span>&#934;</span>(n), 1 <span>&#60;</span> d <span>&#60;</span> <span>&#934;</span>(n)</li>
                  </ul>
                </div>
                <h6>=> Cặp (e, n) gọi là public key, còn cặp (d,n) là private key</h6>
              </div>

              {/*Modal footer*/}
              <div className="modal-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyPair