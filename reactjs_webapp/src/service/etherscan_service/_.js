let { ETHERSCAN_API_KEY } = require('./api_key')

async function getNewestBlockHexNumber() {
  /*
  get newest blocknumber
  ref https://docs.etherscan.io/v/sepolia-etherscan/api-endpoints/blocks
  */
  let res = await fetch(`https://api-sepolia.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`)

  let r
  r = await res.json()
  r = r.result
  return r
}


async function getBlockInfoByBlockHexNumber(blockHexNumber) {
  /*
  get block info by blocknumber
  doc ref https://docs.etherscan.io/v/sepolia-etherscan/api-endpoints/blocks
  */
  let res = await fetch(`https://api-sepolia.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockHexNumber}&boolean=true&apikey=${ETHERSCAN_API_KEY}`)

  let r
  r = await res.json()
  r = r.result
  return r
}

//TODO replace by inline export
module.exports = {
  getNewestBlockHexNumber,
  getBlockInfoByBlockHexNumber,
}
