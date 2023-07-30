let CryptoJS = require('crypto-js')

function gen_keypair(privkey = null) {
  const EC = require('elliptic').ec
  const ec = new EC('secp256k1')

  let keypair
  if (privkey === null) {  // gen brandnew keypair
    keypair = ec.genKeyPair()
  } else {  // gen pub from priv key
    keypair = ec.keyFromPrivate(privkey)
  }

  return {
    "privkey": keypair.getPrivate('hex'),
    "pubkey":  keypair.getPublic('hex')
  }
} 

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)
}

module.exports = {sha256_hash, gen_keypair}