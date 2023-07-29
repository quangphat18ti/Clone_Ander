let CryptoJS = require('crypto-js')

const sha256_hash = (data) => {
    return CryptoJS.SHA256(data)
}

module.exports = {sha256_hash}
