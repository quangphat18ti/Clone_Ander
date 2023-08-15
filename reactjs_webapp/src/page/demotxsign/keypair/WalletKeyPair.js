import { useEffect, useState } from "react"
import { sha256_hash, gen_keypair } from "../../../service/crypto_service"

export default function WalletKeyPair() {
  const [message, set__message] = useState('')
  const [privateKey, set__privateKey] = useState('')
  const [publicKey, set__publicKey] = useState('')

  useEffect(()=> {
    set__privateKey(sha256_hash('' + message).toString())
  }, [message])

  useEffect(()=> {
    set__publicKey(privateKey ? gen_keypair(privateKey).pubkey : '')
  }, [privateKey])

  return (
    <>
      <form>
        <div className="form-group mx-4 mt-3">
          <label className="form-message" htmlFor="message"> <strong>Your Wallet Name</strong></label>
          <input className="form-control" id     ="message" type="text" placeholder="Enter your Wallet name to generate private key" value={message || ''} 
                onChange = {(e) => {set__message(e.target.value)}}
          />
        </div>

        <div className="form-group mx-4">
          <label className="form-message" htmlFor="private-key"> <strong>Private Key</strong></label>
          <input className="form-control" id     ="private-key" type="text" disabled value={privateKey || ''}/>
          {/* <small className="form-text text-muted"> 
            Private Key is SHA256(message) 
          </small> */}
        </div>

        <div className="form-group mx-4">
          <label className="form-message" htmlFor="public-key"> <strong>Public Key</strong></label>
          <input className="form-control" id     ="public-key" type="text" disabled value={publicKey || ''}  />
        </div>
      </form>
    </>
  )
}