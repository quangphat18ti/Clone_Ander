//TODO
function gen_keypair(privkey = null) {
  const EC = require('elliptic').ec
  const ec = new EC('secp256k1')
 
  let keypair = ec.genKeyPair();
  if (privkey != null)
    keypair = ec.keyFromPrivate(privkey)
  return {
            "privkey":    keypair.getPrivate('hex'),
            "pubkey":     keypair.getPublic('hex')
          }
} 

export {gen_keypair}