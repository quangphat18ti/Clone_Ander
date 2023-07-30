import { useEffect, useState } from 'react'
import { gen_keypair } from  '../../service/crypto_service'
import bigInt from 'big-integer'

function KeyPair() {
  let [privkey, setPrivkey] = useState()
  let [pubkey, setPubkey]   = useState()

  useEffect(()=>{
    let keypair = gen_keypair()
    setPrivkey(keypair.privkey)
    setPubkey(keypair.pubkey)
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
                       value={privkey==='0'? '':bigInt(privkey, 16).toString()}
                       onChange={ (e) => {
                          let privkey_new = bigInt(e.target.value).toString(16)
                          let pubkey_new

                          let e_target_value__whenblank = '0'
                          if (privkey_new !== e_target_value__whenblank) {
                            pubkey_new = gen_keypair(privkey_new).pubkey
                          } else {
                            pubkey_new = 0
                          }

                          setPrivkey(privkey_new)
                          setPubkey(pubkey_new)
                       }}
                />

                {/* btn Random */}
                <span className="input-group-append">
                  <button className="btn btn-secondary mb-2" onClick={()=>{
                    let keypair = gen_keypair()
                    setPrivkey(keypair.privkey)
                    setPubkey(keypair.pubkey)
                  }}>Random</button>
                </span>
              </div>
            </div>

            {/* pubkey */}
            <div className="form-group mb-5">
              <label htmlFor="pubkey" className="mt-2">Public Key</label>
              <input className="form-control" id="pubkey" type="text" readOnly={true} value={pubkey}/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default KeyPair