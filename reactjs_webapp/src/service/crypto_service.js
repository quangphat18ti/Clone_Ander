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
    'privkey' : keypair.getPrivate('hex'),
    'pubkey'  : keypair.getPublic('hex'),
  }
} 

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)  //TODO should we call .toString() here
}


//region mine

//region initial maximumNonce
/*
initial maximumNonce
ref https://github.com/anders94/blockchain-demo/blob/master/public/javascripts/blockchain.js#L6C25-L32
*/
const DIFFICULTY_MINOR = 15
const DIFFICULTY_MAJOR = 4

var maximumNonce = 8
for (var i=0; i<DIFFICULTY_MAJOR; i++) {
    maximumNonce *= 16
}
if      (DIFFICULTY_MINOR === 0) { maximumNonce *= 16 } // 0000 require 4 more 0 bits
else if (DIFFICULTY_MINOR === 1) { maximumNonce *= 8  } // 0001 require 3 more 0 bits
else if (DIFFICULTY_MINOR <=  3) { maximumNonce *= 4  } // 0011 require 2 more 0 bits
else if (DIFFICULTY_MINOR <=  7) { maximumNonce *= 2  } // 0111 require 1 more 0 bit

let ZERO_PREFIX = '0'.repeat(DIFFICULTY_MAJOR)
//endregion initial maximumNonce

function mine({prev, blockNum, data}) {
  console.log(`mining ${prev} ${blockNum} ${data}...`)

  let m = ''
  if (prev     !== undefined) { m+= ''+prev }
  if (blockNum !== undefined) { m+= ''+blockNum }
  if (data     !== undefined) { m+= ''+data }

  for (let i=0; i<maximumNonce; i++) {
    let h = sha256_hash(m+i.toString()).toString()

    if (h.startsWith(ZERO_PREFIX)) {
      console.log(`mining ${prev} ${blockNum} ${data}... nonce=${i} hash=${h}`)
      return { nonce: i, hash: h }
    }
  }

  console.log(`mining ${prev} ${blockNum} ${data}... no nonce found`)
  return {nonce: undefined, hash: undefined}
}
//endregion mine

module.exports = {sha256_hash, gen_keypair, mine, DIFFICULTY_MAJOR}
