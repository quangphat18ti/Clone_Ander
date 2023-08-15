let { POLYGONSCAN_API_KEY } = require('./api_key')

module.exports.getNewestBlockHexNumber =
async function getNewestBlockHexNumber() {
  /*
  get newest blocknumber
  ref https://docs.polygonscan.com/v/mumbai-polygonscan/api-endpoints/geth-parity-proxy#eth_blocknumber
  */

  let r = null 
  try {
    let res = await fetch(`https://api-testnet.polygonscan.com/api?module=proxy&action=eth_blockNumber&apikey=${POLYGONSCAN_API_KEY}`)
  
    r = await res.json()
    r = r.result
  }
  catch(error) {
    console.log(error)
  }

  return r
}


module.exports.getBlockInfoByBlockHexNumber =
async function getBlockInfoByBlockHexNumber(blockHexNumber) {
  /*
  get block info by blocknumber
  ref https://docs.polygonscan.com/v/mumbai-polygonscan/api-endpoints/geth-parity-proxy#eth_getblockbynumber
  */
  let r = null 

  try{
    let res = await fetch(`https://api-testnet.polygonscan.com/api?module=proxy&action=eth_getBlockByNumber&tag=${blockHexNumber}&boolean=true
     &apikey=${POLYGONSCAN_API_KEY}`)
  
    r = await res.json()
    r = r.result
  }
  catch(error) {
    console.log(error)
  }
  
  return r
}
