/*
TODO Phat/Hieu add api doc ref here

---
get newest blocknumber  ref https://api-sepolia.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=KBSYCQ4JIXAJCNCTSG1M4HIK5QAT4D4CDV
                        doc ref https://docs.etherscan.io/v/sepolia-etherscan/api-endpoints/blocks
{
  "jsonrpc": "2.0",
  "id": 83,
  "result": "0x3d1b90"
} 

---
get block info by blocknumber  ref https://api-sepolia.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x3d1b90&boolean=true&apikey=KBSYCQ4JIXAJCNCTSG1M4HIK5QAT4D4CDV
{
  hash:
  nonce:
  number:
  parentHash:
  transactions: [
    {
      from:
      to:
      value:
      input:
      transactionIndex: 
      hash:
      nonce:
      ...
    }
  ],
  withdrawals:[
    {
      index
      validatorIndex
      address
      amount
    }
  ],
  ...
}
*/

let { ETHERSCAN_API_KEY } = require("./api_key.js")
let fs = require("fs")

const hexToDecimal = hex => parseInt(hex, 16)
const demicalToHex = demical => demical.toString(16)

async function getNewestBlockHexNumber() {
  let res = await fetch(`https://api-sepolia.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`)

  let r
  r = await res.json()
  r = r.result
  return r
}

async function getBlockInfoByBlockHexNumber(blockHexNumber) {
  let res = await fetch(`https://api-sepolia.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockHexNumber}&boolean=true&apikey=${ETHERSCAN_API_KEY}`)

  let r
  r = await res.json()
  r = r.result
  return r
}

async function getChainNewestBlock(num = 6) {
  let newestBlockHexNumber = await getNewestBlockHexNumber();
  let chainOfBlocks = [];
  for (let i = 0; i < num; i++) {
    console.log(hexToDecimal(newestBlockHexNumber))
    chainOfBlocks.push(await getBlockInfoByBlockHexNumber(newestBlockHexNumber));
    newestBlockHexNumber = demicalToHex(hexToDecimal(newestBlockHexNumber) - 1);
  }
  fs.writeFileSync("chainOfBlocks.json", JSON.stringify(chainOfBlocks));
  return chainOfBlocks;
}

module.exports = {getNewestBlockHexNumber, getBlockInfoByBlockHexNumber, getChainNewestBlock}
