import {useState, useEffect} from "react"
//
let ethers = require("ethers")
//NOTE    must use require() to import as it has error > import { ethers } from "ethers"  ref. https://ethereum.stackexchange.com/a/129260/109415
//CAUTION must `npm i ethers@5.7` to have it working  ref. https://www.quicknode.com/guides/ethereum-development/dapps/how-to-connect-your-dapp-with-metamask-using-ethersjs

function ConnectWeb3Wallet() {
  let [walletaccount_pubkey, set__walletaccount_pubkey] = useState()
  /*TODO refresh will reset state :walletaccount_pubkey -> use localStorage to save it*/

  useEffect(()=>{
    localStorage.setItem('walletaccount_pubkey', walletaccount_pubkey)
    window.dispatchEvent(new Event('storage'))
  }, [walletaccount_pubkey])

  // catch change account event
  useEffect(()=>{
    if(!window.ethereum) return;
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.provider.on('accountsChanged', (accounts) => {
      set__walletaccount_pubkey(accounts[0])
    })
  }, [])

  return (
    <>
      <div className="btn btn-outline-primary  ml-4 mb-2"
         onClick={ ()=>{
           // check if metamask installed  ref. https://ethereum.stackexchange.com/a/92097/109415
            if (!window.ethereum) {
             alert('Metamask not installed')
             return
            }
      
           //region popup metamask to let user select pubkey/wallet/account
           // gg reactjs etherjs metamask ~tutorial
           // ref https://programmablewealth.com/ethersjs-react-tutorial/

           async function connectToMetamask() {
            try {
              let                                            provider = new ethers.providers.Web3Provider(window.ethereum)
              let                           accounts = await provider.send('eth_requestAccounts', [])
              let                       a = accounts[0]  //NOTE we only care about 1st selected one here ie [0]
              set__walletaccount_pubkey(a)
            } catch (error) {
              if(error.code === -32002) {
                console.log("User closed the MetaMask prompt.")
                alert("MetaMask prompt is closed. Let's open Metamask extension to connect wallet!!!")
              }
              else {
                console.error("Error connecting to MetaMask:", error);
              }
            }
           } ; connectToMetamask()
           //endregion popup metamask to let user select pubkey/wallet/account
         }}
      >
        {walletaccount_pubkey || 'Connect Wallet'}
        {/*TODO catch event when 00 user manually open metamask to disconnect this site -> reset state :walletaccount_pubkey=null
                                 01 user switch account -> switch state :walletaccount_pubkey to new value */}
      </div>
    </>
  )
}

export default ConnectWeb3Wallet
