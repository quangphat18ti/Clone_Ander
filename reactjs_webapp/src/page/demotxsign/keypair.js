import { useEffect, useState } from 'react'
import { gen_keypair } from  '../../service/crypto_service'
import bigInt from 'big-integer'

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
      </div>
    </>
  )
}

export default KeyPair