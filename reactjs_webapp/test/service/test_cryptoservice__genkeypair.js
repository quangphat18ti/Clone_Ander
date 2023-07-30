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


let test_gen_keypair__tc02_get_pubkey_fr_emptyprivkey = () => {
  let empty_privkey_setby_inputhtmltag_0 = '0'
  let empty_privkey_setby_inputhtmltag_1 = ''

  let privkey

  try {
    privkey = empty_privkey_setby_inputhtmltag_0
    let _ = gen_keypair(privkey)  // should get error  > TypeError: Cannot read properties of null (reading 'fromRed')
  } catch (e) {
    assert(e.toString().includes("TypeError: Cannot read properties of null (reading 'fromRed')"))
  }

  try {
    privkey = empty_privkey_setby_inputhtmltag_1
    let _ = gen_keypair(privkey)  // should get error > TypeError: Cannot read properties of null (reading 'toString')
  } catch (e) {
    assert(e.toString().includes("TypeError: Cannot read properties of null (reading 'toString')"))
  }

}; test_gen_keypair__tc02_get_pubkey_fr_emptyprivkey()
