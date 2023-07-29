let CryptoJS = require('crypto-js')

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)
}


//region mine
/*
initial maximumNonce
ref https://github.com/anders94/blockchain-demo/blob/master/public/javascripts/blockchain.js#L6C25-L32
*/
let DIFFICULTY_MINOR = 15
let DIFFICULTY_MAJOR = 4

let maximumNonce = 8
for (let i=0; i<DIFFICULTY_MAJOR; i++) {
    maximumNonce *= 16
}

if      (DIFFICULTY_MINOR === 0) { maximumNonce *= 16 } // 0000 require 4 more 0 bits
else if (DIFFICULTY_MINOR === 1) { maximumNonce *= 8  } // 0001 require 3 more 0 bits
else if (DIFFICULTY_MINOR <=  3) { maximumNonce *= 4  } // 0011 require 2 more 0 bits
else if (DIFFICULTY_MINOR <=  7) { maximumNonce *= 2  } // 0111 require 1 more 0 bit

const zeroString = '0'.repeat(DIFFICULTY_MAJOR);

function mine(blockNum, data) {
    for (let x = 0; x < maximumNonce; x++) {
        let message = blockNum.toString() + x.toString() + data;
        let hash_message = sha256_hash(message).toString();

        if (hash_message.substring(0, DIFFICULTY_MAJOR) === zeroString) {
            return { nonce: x, hash: hash_message };
        }
    }

    return {nonce: undefined, hash: undefined}
}
//endregion mine

function mine2(blockNumber, data) {
    for (let x = 0; x < maximumNonce; x++) {
        let blockNumber_string = blockNumber === undefined ? '' : blockNumber.toString();
        let message = blockNumber_string + x.toString() + data;
        if(sha256_hash(message).toString().startsWith(zeroString)) {
            return x;
        }
    }
    return undefined;
}
export {sha256_hash, mine, DIFFICULTY_MAJOR, mine2}
