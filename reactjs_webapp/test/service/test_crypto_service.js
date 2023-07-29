const assert = require('assert')
//
let {sha256_hash} = require('../../src/service/crypto_service')


let test_sha256_hash = () => {
    let h = sha256_hash('some data content')
    assert(h !== null)
}; test_sha256_hash()
