import CryptoJS from "crypto-js"

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)
}


//region mine
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

function mine(block, data) {  //FIXME data la mot truong/field cua block roi ref. https://t.me/c/1725591141/169/774
    for (let i = 0; i < maximumNonce; i++) {
        let message      = block.toString() + i.toString() + data
        let hash_message = sha256_hash(message).toString()

        const zeroString = '0'.repeat(DIFFICULTY_MAJOR)

        if (hash_message.substring(0, DIFFICULTY_MAJOR) === zeroString) {
            return { nonce: i, hash: hash_message }
        }
    }
}
//endregion mine


export {sha256_hash, mine}
