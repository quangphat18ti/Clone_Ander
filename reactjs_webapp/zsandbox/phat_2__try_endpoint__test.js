let assert = require('assert')
//
let {getNewestBlockHexNumber} = require("./phat_2__try_endpoint")

let run = async ()=>{
  let r = await getNewestBlockHexNumber()
  assert(r)
  assert(r.toString().startWith('0x'))  //TODO how to getridof toString() convert?
}; run()
