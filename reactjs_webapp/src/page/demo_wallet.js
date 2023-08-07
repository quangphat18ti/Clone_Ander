import { useState, useEffect, useRef } from "react"
let ethers = require("ethers")

function DemoWallet() {
  let [fromaccount_pubkey, set__fromaccount_pubkey] = useState(localStorage.getItem("walletaccount_pubkey")) 
  let [toaccount_pubkey, set__toaccount_pubkey] = useState()
  let [amount, set__amount] = useState()
  let [tx, set__tx] = useState('') 
  let [chainID, set__chainID] = useState()
  let [network, set__network] = useState()

  // add event listener and initialize chainID
  useEffect(()=>{
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    // https://eips.ethereum.org/EIPS/eip-1193#events

    const getNetworkChainID = async () => {
      const network = await provider.getNetwork()
      set__chainID(network.chainId)
    }
    getNetworkChainID()

    provider.provider.on("chainChanged", async (chainId) => {
      set__chainID(chainId)
    })
  }, [])

  // network name from chainID
  useEffect(()=>{
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    const getNetworkName = async () => {
      const network = await provider.getNetwork()
      set__network(network.name.toUpperCase())
    }
    getNetworkName()
  }, [chainID])

  useEffect(()=>{
    const handleStorage = () => {
      set__fromaccount_pubkey(localStorage.getItem("walletaccount_pubkey"))
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage())
  }, [])

  const formTransaction = useRef();

  return (
    <div className="container mt-5 mx-5">
      {chainID && <h3>{network} network</h3> }
      <div className="card">
        <h4 className="card-header"> Transaction </h4>

        <form className="card-body" onSubmit={(e) => e.preventDefault()} ref={formTransaction}>
          {/* From */}
          <div class="form-group row">
            <label for="from-address" class="col-sm-1 col-form-label">From</label>
            <div class="col-sm-11">
              <input type="text" class="form-control" id="from-address" placeholder="Enter From Wallet PubKey StartWith 0x" value={fromaccount_pubkey === 'undefined' ? '' : fromaccount_pubkey}
                    required
                    onChange={(e) => set__fromaccount_pubkey(e.target.value)}
              />
            </div>
          </div>

          {/* To */}
          <div class="form-group row">
            <label for="to-address" class="col-sm-1 col-form-label">To</label>
            <div class="col-sm-11">
              <input type="text" class="form-control" id="to-address" placeholder="Enter To Wallet PubKey StartWith 0x" value={toaccount_pubkey || ''}
                    required
                    onChange={(e) => set__toaccount_pubkey(e.target.value)}
              />
            </div>
          </div>

           {/* Amount */}
           <div class="form-group row">
            <label for="to-address" class="col-sm-1 col-form-label">Amount</label>
            <div class="col-sm-11">
              <input type="number" class="form-control" id="to-address" placeholder="" value={amount || ''}
                    required
                    onChange={(e) => set__amount(e.target.value)}
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary" 
                    onClick={async (e) => {
                      if(formTransaction.current.checkValidity() === false) return
                      // alert(`From: ${fromaccount_pubkey}\nTo: ${toaccount_pubkey}\nAmount: ${amount}`)
                      
                      let provider = new ethers.providers.Web3Provider(window.ethereum)
                      let                           accounts =await  provider.send('eth_requestAccounts', [])
                      let                       a = accounts[0]  //NOTE we only care about 1st selected one here ie [0]
                      let                       signer = provider.getSigner();
                      let gasPrice          = await provider.getGasPrice();
                      const transactionParameters = {
                        from: fromaccount_pubkey, // sender wallet address
                        to: toaccount_pubkey,  // receiver address
                        // nonce: provider.getTransactionCount(fromaccount_pubkey, "latest"),
                        value: ethers.utils.parseEther(amount),
                        gasLimit: ethers.utils.hexlify(100000),
                        gasPrice: ethers.utils.hexlify(parseInt(gasPrice)),
                      }

                      let transaction = await signer.sendTransaction(transactionParameters)
                      set__tx(JSON.stringify(transaction))
                    }}
              >Confirm</button>
            </div>
          </div>

        </form>
      </div>
      <div>Transaction detail
        {tx}
      </div>
    </div>
  )
}

export default DemoWallet