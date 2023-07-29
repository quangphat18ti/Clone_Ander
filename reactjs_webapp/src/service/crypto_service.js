let CryptoJS = require('crypto-js')

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)
}

const DIFFICULTY = 4;
var maximumNonce = 100000;
const zeroString = '0'.repeat(DIFFICULTY);


function mine(block, data) {
    for (let x = 0; x < maximumNonce; x++) {
        console.log(1);
        let message = block.toString() + x.toString() + data;
        const zeroString = '0'.repeat(DIFFICULTY);
        let hash_message = sha256_hash(message).toString();
        if (hash_message.substring(0, DIFFICULTY) === zeroString) {
            return { nonce: x, hash: hash_message };
        }
    }
}

function mine2(blockNumber, data) {
    console.log("Start Mining: ");
    for (let x = 0; x < maximumNonce; x++) {
        let blockNumber_string = blockNumber === undefined ? '' : blockNumber.toString();
        let message = blockNumber_string + x.toString() + data;
        if(sha256_hash(message).toString().substring(0, DIFFICULTY) === zeroString) {
            return x;
        }
    }
    return undefined;
}
export {sha256_hash, mine, DIFFICULTY, mine2}
