import { useState, useEffect, useRef } from "react"
import Tx from "./demo_wallet/Tx"
import Block from "./demo_wallet/Block"
import Blockchain from "./demo_wallet/Blockchain"
let ethers = require("ethers")

async function popupMetamaskToMakeTransaction(from, to, amount) {
  let provider = new ethers.providers.Web3Provider(window.ethereum)
  let                           accounts =await  provider.send('eth_requestAccounts', [])
  let                       signer = provider.getSigner()
  const transactionParameters = {
    from, // sender wallet address
    to,  // receiver address
    value: ethers.utils.parseEther(amount),
  }

  let transaction = await signer.sendTransaction(transactionParameters)
  return transaction
}

function DemoWallet() {
  let [fromaccount_pubkey, set__fromaccount_pubkey] = useState(localStorage.getItem("walletaccount_pubkey")) 
  let [toaccount_pubkey, set__toaccount_pubkey] = useState('0x6f46693c8b9A18E80d36a6DCD47F83E871e665b8')
  let [amount, set__amount] = useState('0.00001')
  let [tx, set__tx] = useState('') 
  let [blockNo, set__blockNo] = useState()
  let [chainID, set__chainID] = useState()
  let [network, set__network] = useState()
  let [isEther, set__isEther] = useState()
  let [spinClass, setSpinClass] = useState('d-none ml-2 spinner-border spinner-border-sm')

  // check window.ether
  useEffect(()=>{
    if(!window.ethereum) set__isEther(false)
    else set__isEther(true)
  })

  // add event listener and initialize chainID
  useEffect(()=>{
    if(!window.ethereum) return;
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
    if(!window.ethereum) return;
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    const getNetworkName = async () => {
      const network = await provider.getNetwork()
      set__network(network.name.toUpperCase())
    }
    getNetworkName()
  }, [chainID])

  // change fromaccount_pubkey
  useEffect(()=>{
    const handleStorage = () => {
      set__fromaccount_pubkey(localStorage.getItem("walletaccount_pubkey"))
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage())
  }, [])

  const formTransaction = useRef();

  return  (
    <>
      {!isEther ? <h2>Metamask not installed</h2> : 
      <div className="container-fluid mt-5 mx-2">
        {chainID && <h3>{network} network</h3> }
        <div className="card">
          <h4 className="card-header"> Transaction </h4>

          <form className="card-body" onSubmit={(e) => e.preventDefault()} ref={formTransaction}>
            {/* From */}
            <div className="form-group row">
              <label htmlFor="from-address" className="col-sm-1 col-form-label"><strong>From</strong></label>
              <div className="col-sm-11">
                <input type="text" className="form-control" id="from-address" placeholder="Login to Metamask Wallet" defaultValue={fromaccount_pubkey === 'undefined' ? '' : fromaccount_pubkey}
                      required
                      // onChange={(e) => set__fromaccount_pubkey(e.target.value)}
                />
              </div>
            </div>

            {/* To */}
            <div className="form-group row">
              <label htmlFor="to-address" className="col-sm-1 col-form-label"><strong>To</strong></label>
              <div className="col-sm-11">
                <input type="text" className="form-control" id="to-address" placeholder="Enter To Wallet PubKey StartWith 0x" value={toaccount_pubkey || ''}
                      required
                      onChange={(e) => set__toaccount_pubkey(e.target.value)}
                />
              </div>
            </div>

            {/* Amount */}
            <div className="form-group row">
              <label htmlFor="to-address" className="col-sm-1 col-form-label"><strong>Amount</strong></label>
              <div className="col-sm-11">
                <input type="number" className="form-control" id="to-address" placeholder="" value={amount || ''}
                      required
                      onChange={(e) => set__amount(e.target.value)}
                />
              </div>
            </div>
            {/* Submit button */}
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary" 
                      onClick={async (e) => {
                        if(formTransaction.current.checkValidity() === false) return
                        setSpinClass(       'ml-2 spinner-border spinner-border-sm')
                        try{
                          let transactionBeforeBlock = await popupMetamaskToMakeTransaction(fromaccount_pubkey, toaccount_pubkey, amount)
                          const getTxByHash = async (hash) => {
                            if(!window.ethereum) return;
                            let provider = new ethers.providers.Web3Provider(window.ethereum)
                            let transaction = await provider.waitForTransaction(hash)
                            return transaction
                          }
                          
                          let transactionAfterBlock = await getTxByHash(transactionBeforeBlock.hash)
                          let fullTransaction = {
                            ...transactionBeforeBlock,
                            ...transactionAfterBlock
                          }
                          // console.log("full: ", fullTransaction)
                          set__tx(fullTransaction)
                          set__blockNo(fullTransaction.blockNumber)
                          // console.log("blockNo in demo_wallet = ", fullTransaction.blockNumber)
                        }catch(e){
                          alert(e)
                        }
                        setSpinClass('d-none ml-2 spinner-border spinner-border-sm')
                      }}
                >Confirm
                  {/* loading spinner */}
                  <div className={spinClass}></div>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Tx detail */}
        <div>
          { tx ? <Tx transaction={tx}/> : <></>}
        </div>
        <div>
          {tx ? <Block blockNumber={blockNo} key={"block" + blockNo}/> : <>  </>}
        </div>
        <div>
          {tx ? <Blockchain blockNumber={blockNo} key={blockNo}/> : <>  </>}
        </div>
      </div>}
    </>
  )
}

export default DemoWallet