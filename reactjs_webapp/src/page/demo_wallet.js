import { useState, useEffect, useRef } from "react"

function DemoWallet() {
  let [fromaccount_pubkey, set__fromaccount_pubkey] = useState(localStorage.getItem("walletaccount_pubkey")) 
  let [toaccount_pubkey, set__toaccount_pubkey] = useState()
  let [amount, set__amount] = useState()

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
                    onClick={(e) => {
                      if(formTransaction.current.checkValidity() === false) return
                      alert(`From: ${fromaccount_pubkey}\nTo: ${toaccount_pubkey}\nAmount: ${amount}`)
                    }}
              >Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DemoWallet