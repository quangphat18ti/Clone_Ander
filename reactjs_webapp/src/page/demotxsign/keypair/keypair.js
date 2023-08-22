import { useEffect, useState }  from 'react'
import { gen_keypair }          from  '../../../service/crypto_service'

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

  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return(
    <>
      <div className="cointainer mt-3 mx-2">

        <div className="form-group mx-4 mt-3">

          {/* privkey */}
          <label htmlFor="privkey" className="control-label mt-2">
            {showText ? (
                    <div>
                      <strong>Private Key</strong>
                      <sup onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 'bold',  color: 'red', marginLeft: '10px'}}>
                        Explain
                      </sup>
                    </div>
                ):
                (<div><strong>Private Key</strong></div>)}
          </label>

          <div className="input-group">
            <input type="text" pattern="[a-fA-F\d]+" title="must be hexadecimal number" placeholder="0x" className="form-control mb-2" id="privkey"
                   value={privkey || ''}
                   onChange={ (e) => {
                     // calc new pubkey
                     let privkey_new = (e.target.value === '')? '0' : e.target.value// convert to bigint to use w/ elliptic  ref https://github.com/anders94/public-private-key-demo/blob/master/views/keys.pug#L47
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
            <div>
              {showText && (
                  <sup onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 'bold',  color: 'red', marginLeft: '10px'}}>
                    Explain
                  </sup>
              )}
            </div>


          </div>
        </div>

        {/* pubkey */}
        <div className="form-group mx-4 mt-3">
          <label htmlFor="pubkey" className="mt-2">
            {showText ? (
                <div>
                  <strong>Public Key</strong>
                  <sup onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 'bold',  color: 'red', marginLeft: '10px'}}>
                      Explain
                  </sup>
                </div>
            ):
            (<div><strong>Public Key</strong></div>)}

          </label>
          <input className="form-control" id="pubkey" type="text" readOnly={true} value={pubkey || ''}/>
        </div>
      </div>


      {/* explain */}
      <p>
        <a onClick={handleClick}  data-toggle="collapse" href="#genarateCode" role="button" aria-expanded="false" aria-controls="genarateCode"
           style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold',  margin: '30px', fontSize: '25px' }}>
          Explain it
        </a>
      </p>
      <div className="collapse" id="genarateCode">
        <div className="card card-body" style={{backgroundColor: 'black', color: 'white', marginBottom: '20px'}}>
          <p>privkey = keypair.getPrivate('hex')</p>
          <p>pubkey  = keypair.getPublic('hex')</p>
          <p></p>
          <p>keypair = ec.genKeyPair()</p>
          <p>or</p>
          <p>keypair = ec.keyFromPrivate(privkey)  // run when you update privkey value</p>
          <p></p>
          <p>EC = require('elliptic').ec</p>
          <p>ec = new EC('secp256k1')</p>
        </div>
      </div>
    </>
  )
}

export default KeyPair