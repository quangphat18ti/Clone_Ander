import {useState} from "react"
//
let ethers = require("ethers")
//NOTE    must use require() to import as it has error > import { ethers } from "ethers"  ref. https://ethereum.stackexchange.com/a/129260/109415
//CAUTION must `npm i ethers@5.7` to have it working  ref. https://www.quicknode.com/guides/ethereum-development/dapps/how-to-connect-your-dapp-with-metamask-using-ethersjs

function ConnectWeb3Wallet() {
  let [walletaccount_pubkey, set__walletaccount_pubkey] = useState()

  return (
    <>
      <a className="btn btn-outline-primary  ml-4 mb-2"
         onClick={ ()=>{
           // gg reactjs etherjs metamask ~tutorial
           // ref https://programmablewealth.com/ethersjs-react-tutorial/

           async function connectToMetamask() {
             let                                              provider = new ethers.providers.Web3Provider(window.ethereum)
             let                             accounts = await provider.send('eth_requestAccounts', [])
             let new__walletaccount_pubkey = accounts[0]  //NOTE we only care about 1st selected one here ie [0]
             set__walletaccount_pubkey(new__walletaccount_pubkey)
           } ; connectToMetamask()
         }}
      >
        {walletaccount_pubkey || 'Connect Wallet'}
      </a>
    </>
  )
}

export default ConnectWeb3Wallet
