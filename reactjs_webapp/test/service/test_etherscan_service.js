let assert = require('assert')
//
let {getNewestBlockHexNumber, getBlockInfoByBlockHexNumber} = require('../../src/service/etherscan_service/etherscan_service')


let test_getNewestBlockHexNumber = async ()=>{
  let r = await getNewestBlockHexNumber()
  assert(r)
  assert(r.startsWith('0x'))
}


let test_getBlockInfoByBlockHexNumber = async ()=>{
  let bno = await getNewestBlockHexNumber()  // bno aka block_no aka block_number
  let r = await getBlockInfoByBlockHexNumber(bno)
  assert(r)
}


test_getNewestBlockHexNumber()
test_getBlockInfoByBlockHexNumber()
