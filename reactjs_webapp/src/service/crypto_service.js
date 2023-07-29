import CryptoJS from "crypto-js";

/*!
 * Initial value for maximumNonce, view at
 * https://github.com/anders94/blockchain-demo/blob/master/public/javascripts/blockchain.js#L6C25-L32
 */

const DIFFICULTY_MINOR = 15;
const DIFFICULTY_MAJOR = 4;

var maximumNonce = 8;
for (var x=0; x<DIFFICULTY_MAJOR; x++) {
    maximumNonce *= 16;
}

if      (DIFFICULTY_MINOR === 0) { maximumNonce *= 16; } // 0000 require 4 more 0 bits
else if (DIFFICULTY_MINOR === 1) { maximumNonce *= 8;  } // 0001 require 3 more 0 bits
else if (DIFFICULTY_MINOR <= 3) { maximumNonce *= 4;  } // 0011 require 2 more 0 bits
else if (DIFFICULTY_MINOR <= 7) { maximumNonce *= 2;  } // 0111 require 1 more 0 bit

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data);
};

function mine(block, data) {
    for (let x = 0; x < maximumNonce; x++) {
        let message = block.toString() + x.toString() + data;
        const zeroString = '0'.repeat(DIFFICULTY_MAJOR);
        let hash_message = sha256_hash(message).toString();
        if (hash_message.substring(0, DIFFICULTY_MAJOR) === zeroString) {
            return { nonce: x, hash: hash_message };
        }
    }
}

export {sha256_hash, mine};