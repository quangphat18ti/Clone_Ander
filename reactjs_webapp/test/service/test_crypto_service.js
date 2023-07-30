const assert = require('assert')
//
let {sha256_hash, mine} = require('../../src/service/crypto_service')


let test_sha256_hash = () => {
  let h = sha256_hash('some data content')
  assert(h !== null)
}; test_sha256_hash()

let test_mine = () => {
    let b = {
        'some field of block'  : 'some value',
        'some field of block 2': 'some value 2',
    }
    let res = mine(b, null)
    assert(res !== null)
}; test_mine()
