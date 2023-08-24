import { useEffect, useState }  from 'react'
import { gen_keypair }          from  '../../../service/crypto_service'
import ECDSA from '../ECDSA';

function KeyPair() {
  let [privkey, setPrivkey] = useState(0)
  let [pubkey, setPubkey]   = useState(0)
  let [showPrivkey, setShowPrivkey]       = useState(false)
  let [showPubkey, setShowPubkey]         = useState(false)
  let [showRandom, setShowRandom]         = useState(false)
  let [showChangePriv, setShowChangePriv] = useState(false)
  let [showExplain, setShowExplain]       = useState(false)

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
      <div className="cointainer mt-3 mx-2">

        <div className="form-group mx-4 mt-3">

          {/* privkey */}
          <label htmlFor="privkey" className="control-label mt-2">
            <div>
              <strong>Private Key</strong>
              {showExplain && <a className="badge badge-danger ml-1" href='#privatekey' onClick={async () => {
                setShowPrivkey(true)
                await new Promise(resolve => setTimeout(resolve, 300))
                setShowPrivkey(false)
              }}>Explain</a>}
            </div>
            
          </label>

          <div className="input-group">
            <input type="text" pattern="[a-fA-F\d]+" title="must be hexadecimal number" placeholder="0x" className="form-control mb-2" id="privkey"
              value={privkey || ''}
              onChange={async (e) => {
              // calc new pubkey
              let privkey_new = (e.target.value === '')? '0' : e.target.value// convert to bigint to use w/ elliptic  ref https://github.com/anders94/public-private-key-demo/blob/master/views/keys.pug#L47
              let pubkey_new = privkey_new === '0'?  /* handle error @ calling w/ empty '' or '0' param ie gen_keypair(p) ie ec.keyFromPrivate(p) will result as error */
                0 : gen_keypair(privkey_new).pubkey

              // render to ui
              setPrivkey(privkey_new)
              setPubkey(pubkey_new)
              storeKeypair(privkey_new, pubkey_new)
              setShowChangePriv(true)
              await new Promise(resolve => setTimeout(resolve, 300))
              setShowChangePriv(false)
              }}
            />

            {/* btn Random */}
            <span className="input-group-append">
              <button className="btn btn-secondary mb-2 rounded-right" onClick={async ()=>{
                let keypair = gen_keypair()
                setPrivkey(keypair.privkey)
                setPubkey(keypair.pubkey)
                storeKeypair(keypair.privkey, keypair.pubkey)

                //random explanation
                setShowRandom(true)
                await new Promise(resolve => setTimeout(resolve, 300))
                setShowRandom(false)
              }}>Random 
              </button>
            </span>
            {showExplain && <a className="badge badge-danger ml-1 mb-2 align-self-center" href='#random' onClick={async () => {
              setShowRandom(true)
              await new Promise(resolve => setTimeout(resolve, 300))
              setShowRandom(false)
            }}>Explain</a>}

          </div>
          
        </div>

        {/* pubkey */}
        <div className="form-group mx-4 mt-3">
          <label htmlFor="pubkey" className="mt-2">
            <div>
              <strong>Public Key</strong>
              {showExplain && <a className="badge badge-danger ml-1" href='#publickey' onClick={async () => {
                setShowPubkey(true)
                await new Promise(resolve => setTimeout(resolve, 300))
                setShowPubkey(false)
              }}>Explain</a>}
            </div>
          </label>
          <input className="form-control" id="pubkey" type="text" readOnly={true} value={pubkey || ''}/>
        </div>
      </div>


      {/* explain */}
      <p>
        <a data-toggle="collapse" href="#genarateCode" role="button" aria-expanded="false" aria-controls="genarateCode"
           style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold',  margin: '30px', fontSize: '25px' }} onClick={() => {
            setShowExplain(!showExplain)
           }}>
          Explain it
        </a>
      </p>
      <div className="collapse pt-5" id="genarateCode">
        <div className="card card-body rounded-0" style={{backgroundColor: 'black', color: 'white', marginBottom: '20px'}}>
          <code className={`${showPrivkey === true ? '' : 'text-white'}`} id='privatekey'>privkey = keypair.getPrivate('hex')</code>
          <code className={`${showPubkey === true ? '' : 'text-white'}`} id='publickey'>pubkey  = keypair.getPublic('hex')</code>
          <br/>
          
          <code className={`${showRandom === true ? '' : 'text-white'}`} id='random'>keypair = ec.genKeyPair()</code>
          <code className='text-secondary'>or</code>
          <code className={`${showChangePriv === true ? '' : 'text-white'}`} id='changePrive'>keypair = ec.keyFromPrivate(privkey) <span className='text-secondary'>// run when you update privkey value;</span></code>
          <br/>

          <code className='text-white'>EC = require('elliptic').ec</code>
          <code className='text-white'>ec = new EC('secp256k1')</code>
        </div>
        <p>
          <a data-toggle="collapse" href="#ECDSA" role="button" aria-expanded="false" aria-controls="ECDSA"
             style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold',  margin: '30px', fontSize: '25px' }}>
            How EC generate key and work?
          </a>
        </p>
        <div className='collapse' id='ECDSA'>
          <ECDSA/>
        </div>
      </div>
    </>
  )
}

export default KeyPair