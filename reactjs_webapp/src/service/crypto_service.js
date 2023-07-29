let CryptoJS = require('crypto-js')

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)
}

const DIFFICULTY = 4;
var maximumNonce = 100000;

function mine(block, data) {
    for (let x = 0; x < maximumNonce; x++) {
        let message = block.toString() + x.toString() + data;
        const zeroString = '0'.repeat(DIFFICULTY);
        let hash_message = sha256_hash(message).toString();
        if (hash_message.substring(0, DIFFICULTY) === zeroString) {
            return { nonce: x, hash: hash_message };
        }
    }
}

module.exports = {sha256_hash, mine, DIFFICULTY}
