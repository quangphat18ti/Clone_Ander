import { useEffect, useState } from "react"
import Tx                      from '../../demotxsign/blockchain/tx_component'
import { sha256_hash }         from "../../../service/crypto_service"  

let data_txs = [{value: '6.42', from: 'Charlotte', to: 'Elizabeth'},
                {value: '13.37', from: 'Satoshi', to: 'Hal Finney'},
                {value: '1337', from: 'Vitalik', to: 'Satoshi'}]

function Hash2nd () {
  const [hash, set__hash] = useState('')
  const [txs, set__txs] = useState(data_txs)

  useEffect(() => {
    let txs_string = txs.reduce((msg, tx) => msg + tx.value + tx.from + tx.to, '')
    set__hash(sha256_hash(txs_string).toString())
  }, [txs])

  const handleTxChange = (index, tx_new) => {
    let txs_clone = [...txs];
    txs_clone[index] = {...txs_clone[index], ...tx_new};
    set__txs(txs_clone);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row px-3 d-flex" style={{justifyContent: "space-between"}}>
          <h3>SHA256 Hash Data as Tx</h3>
        </div>

        <div className="px-3 pt-3 pb-1" style={{ backgroundColor: '#dcdcdc' }}>
          <form>
            <div className="form-group row">
              <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data</strong></label>

              <div className="col-sm-10 overflow-auto"  style={{maxHeight : '14em'}}>
                {/* @TODO: Render from state txs to transactions */}
                {txs.map((data, index) => <Tx key={index} {...data} handleTxchange={handleTxChange} index={index}/>)}
              </div>

            </div>

            <div className="form-group row">
              <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash</strong></label>

              <div className="col-sm-10">
                <input type="text" className="form-control" id="hash" disabled value={hash || ""}/>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Hash2nd