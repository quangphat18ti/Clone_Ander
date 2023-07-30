const assert = require('assert')
//
let {gen_keypair} = require('../../src/service/crypto_service')


let test_gen_keypair__tc00_create_brandnew = () => {
    let keypair = gen_keypair()
    assert(keypair.privkey, 'we must have .privkey defined')
    assert(keypair.pubkey,  'we must have .pubkey defined')
}; test_gen_keypair__tc00_create_brandnew()

let test_gen_keypair__tc01_get_pubkey_fr_privkey = () => {
    let keypair = gen_keypair()
    let privkey = keypair.privkey

    let pubkey = gen_keypair(privkey)
    assert(pubkey,  'we must have .pubkey defined')
}; test_gen_keypair__tc01_get_pubkey_fr_privkey()
