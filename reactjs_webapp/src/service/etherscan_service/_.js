let { ETHERSCAN_API_KEY } = require('./api_key')

module.exports.getNewestBlockHexNumber =
async function getNewestBlockHexNumber() {
  /*
  get newest blocknumber
  ref https://docs.etherscan.io/v/sepolia-etherscan/api-endpoints/geth-parity-proxy
  */

  let r = null
  try{
    let res = await fetch(`https://api-sepolia.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`)
    
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
  ref https://docs.etherscan.io/v/sepolia-etherscan/api-endpoints/geth-parity-proxy#eth_getblockbynumber
  */
  let r = null

  try{
    let res = await fetch(`https://api-sepolia.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockHexNumber}&boolean=true&apikey=${ETHERSCAN_API_KEY}`)
  
    r = await res.json()
    r = r.result
  }
  catch(error) {
    console.log(error)
  }
  
  return r
}
