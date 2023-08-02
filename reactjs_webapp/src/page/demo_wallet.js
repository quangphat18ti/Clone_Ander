import { useState, useEffect } from "react"

function DemoWallet() {
  let [walletaccount_pubkey, set__walletaccount_pubkey] = useState(localStorage.getItem("walletaccount_pubkey"))
  let [toaccount_pubkey, set__toaccount_pubkey] = useState()
  let [amount, set__amount] = useState()

  useEffect(()=>{
    const handleStorage = () => {
      set__walletaccount_pubkey(localStorage.getItem("walletaccount_pubkey"))
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage())
  }, [])

  return (
    <div className="container mt-5 mx-5">
      <div className="card">
        <h4 className="card-header"> Transfer Money </h4>

        <form className="card-body" onSubmit={(e) => e.preventDefault()}>
          {/* From */}
          <div class="form-group row">
            <label for="from-address" class="col-sm-1 col-form-label">From</label>
            <div class="col-sm-11">
              <input type="text" class="form-control" id="from-address" placeholder="Enter From Wallet PubKey StartWith 0x" value={walletaccount_pubkey === 'undefined' ? '' : walletaccount_pubkey}
                    required
                    onChange={(e) => set__walletaccount_pubkey(e.target.value)}
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
              <button type="submit" class="btn btn-primary">Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DemoWallet