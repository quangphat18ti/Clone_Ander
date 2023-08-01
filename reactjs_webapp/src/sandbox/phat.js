// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";
import {Alchemy_API_KEY} from "./api_key_template";
import fs from "fs";

// Configures the Alchemy SDK
const config = {
    apiKey: Alchemy_API_KEY, // Replace with your API key
    network: Network.ETH_SEPOLIA, 
};
// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

/// field want to get data
const BLOCK_FIELDS = ["hash", "number", "nonce", "parentHash"]
const TRANSACTION_FIELS = ["hash", "transactionIndex", "from", "to", "value", "data"]
// const TRANSACTION_FIELS = ["hash", "transactionIndex", "from", "to", "value", "data", "r", "s", "v"]

/// @ blockHash -> String
/// @ blockNumber -> Number
async function getBlockInfo(blockHashOrBlockNumber) {
  let response = await alchemy.core.getBlockWithTransactions(blockHashOrBlockNumber)
  
  let blockInfo = {}
  for (let field of BLOCK_FIELDS) {
    blockInfo[field] = response[field]
  }
  
  let transactionsInfo = response.transactions.map(transaction => {
    let transactionInfo = {}
    for (let field of TRANSACTION_FIELS) {
      transactionInfo[field] = transaction[field]
    }
    return transactionInfo
  })

  blockInfo["transactions"] = transactionsInfo;
  return blockInfo
}

/// @ return the blockNumber of the newest Block
async function getNewestBlockNumber() {
  let response = await alchemy.core.getBlockNumber()
  return response
}

// const main = async () => {
//   //Assign the hash to a variable
//   let newestBlock = await getNewestBlockNumber()
//   console.log(newestBlock)
//   let blockInfo = await getBlockInfo(newestBlock)
//   fs.writeFileSync("newestBlockInfo.json", JSON.stringify(blockInfo))
// };

// main();

export {getBlockInfo, getNewestBlockNumber}