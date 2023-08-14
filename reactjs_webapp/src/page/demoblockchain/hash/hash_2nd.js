import { useState } from "react"

function Hash2nd () {
  const [hash, set__hash] = useState('')
  const [txs, set__txs] = useState([{value: '6.42', from: 'Charlotte', to: 'Elizabeth'}])

  return (
    <>
      <div className="container mt-3">
        <h3>SHA256 Hash With Transaction</h3>

        <div className="px-3 pt-3 pb-1" style={{ backgroundColor: '#dcdcdc' }}>
          <form>
            <div className="form-group row">
              <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data</strong></label>

              <div className="col-sm-10">
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