import BlockInChain from "../block/block_blockchain"
import {useState} from "react";
import {sha256_hash} from "../../../service/crypto_service";
import BlockChainComponent from "./blockchain_component";

function BlockChain() {
  let block_list = [
    // calling :Mine at :block tabpane and paste mined block result here - may need to turn on showPrev=true for <Block /> at tabpane
    {blockNum: '1', data: 'listoftx 01', prev: '0000000000000000000000000000000000000000000000000000000000000000', nonce: '4684', },
    {blockNum: '2', data: 'listoftx 02', prev: '000064f67d82ae42eb023ceaf42126e935169e3f5b2d026f306aad50922c743a', nonce: '65672', },
    {blockNum: '3', data: 'listoftx 03', prev: '0000c702365ba2c88751e45e88c142de1d06d32282dbbac97449c50882420535', nonce: '61418'},
    {blockNum: '4', data: 'listoftx 04', prev: '00001808e6b23c4423d17921b0b40604577983e4d0cddd6d5a4202f6da9e7bdb', nonce: '212321'},
  ]
  
  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/blockchain */}
      <h3>Blockchain</h3>

      <BlockChainComponent data={block_list}/>
    </>
  )
}

export default BlockChain
