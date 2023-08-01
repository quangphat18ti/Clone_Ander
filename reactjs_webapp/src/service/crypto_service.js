let CryptoJS = require('crypto-js')
let Buffer = require('buffer')
let EC = require('elliptic').ec ; const ec = new EC('secp256k1')

//ref https://github.com/anders94/public-private-key-demo/blob/master/views/keys.pug
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

function hash_a_block({prev, blockNum, data, nonce}) {
  let m = ''
  if (prev)     { m+= ''+prev }
  if (blockNum) { m+= ''+blockNum }
  if (data)     { m+= ''+data }
  if (nonce)    { m+= ''+nonce }

  let h = sha256_hash(m).toString()
  return h
}

function mine({prev, blockNum, data}) {
  console.log(`mining  ${prev} ${blockNum} ${data}...`)

  for (let i=0; i<maximumNonce; i++) {
    let h = hash_a_block({prev, blockNum, data, nonce:i})
    if (h.startsWith(ZERO_PREFIX)) {
      return { nonce: i, hash: h }
    }
  }

  console.log(`mining ${blockNum}... NOT found nonce`)
  return null
}//endregion mine

//ref https://github.com/anders94/public-private-key-demo/blob/master/views/signatures.pug
let verifyMessage = (msg2Verify, publicKey, signature) => {
    let tmpKey
    try      { tmpKey = ec.keyFromPublic(publicKey, 'hex') }
    catch(e) { return false }
    let binaryMessage = Buffer.Buffer.from(CryptoJS.SHA256(msg2Verify).toString(CryptoJS.enc.Hex))
  
    try      { let isVerified = tmpKey.verify(binaryMessage, signature) ; return isVerified }
    catch(e) { return false }
};  

//ref https://github.com/anders94/public-private-key-demo/blob/master/views/signatures.pug
let signMessage = (message, privateKey) => {
  let keypair = ec.keyFromPrivate(privateKey) // ref. anders' code
  let h = sha256_hash(message)
  let binaryMessage = Buffer.Buffer.from(h.toString(CryptoJS.enc.Hex));
  let hexSignature = Buffer.Buffer.from(keypair.sign(binaryMessage).toDER()).toString('hex')
  return hexSignature
}

let getPubkeyByPrivkey = (privkey = 0) => {
  if (privkey === '0'){
    return 0
  }
  return gen_keypair(privkey).pubkey
}
module.exports = {
  // demo blockchain
  sha256_hash,
  mine, ZERO_PREFIX, hash_a_block,

  // demo tx sign
  gen_keypair, signMessage, verifyMessage, getPubkeyByPrivkey,
}
