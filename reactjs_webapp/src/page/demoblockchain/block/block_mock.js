import { useState, useEffect } from "react"
import { mine, sha256_hash, zeroString } from "../../../service/crypto_service"

function BlockMock(props) {
  let [blockNum, setBlockNum] = useState(1)
  let [nonce, setNonce] = useState('')
  let [data, setData] = useState('')
  let [hash, setHash] = useState('')
  let [isMined, setIsMined] = useState(1)
  let [prev, setPrev] = useState()

  useEffect(() => {
    // re-render :hash if any field in blockdata changed
    let blockData = blockNum === undefined ? '' : blockNum.toString() + nonce + data
    let hash_new = sha256_hash(blockData).toString()
    setHash(hash_new)
  }, [blockNum, data, nonce])
  
  useEffect(() => {
    setIsMined(hash.startsWith(zeroString))
    console.log("hash = ", hash);
    console.log(zeroString);
  }, [hash])

  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/block */}

      { props.showTitle==='true' &&
        <h3>Block</h3>
      }
      <div className={`
             alert ${isMined ? "alert-success" : "alert-danger"}
             px-3 pt-3 pb-0
           `} role="alert" style={{ color: 'black' }}
      >
        <form>
          {/* blockNum */}
          <div className="form-group row">
            <label htmlFor="block" className="col-sm-2 col-form-label text-right"><strong>Block</strong></label>

            <div className="col-sm-10">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">#</span>
                <input type="number" className="form-control" id="blockchainnumber"
                       value={blockNum || ''}
                       onChange={(e) => {setBlockNum(e.target.value)}}
                />
              </div>
            </div>
          </div>

          {/* nonce */}
          <div className="form-group row">
            <label htmlFor="nonce" className="col-sm-2 col-form-label text-right"><strong>Nonce</strong></label>

            <div className="col-sm-10">
              <input type="text" className="form-control" id="nonce"
                     value={nonce || ''}
                     onChange={(e) => {setNonce(e.target.value)}}
              />
            </div>
          </div>

          {/* data */}
          <div className="form-group row">
            <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data</strong></label>

            <div className="col-sm-10">
              <textarea
                className="form-control" id="data" rows="10"
                onChange={(e) => { setData(e.target.value)}}
                value={data || ''}
              ></textarea>
            </div>
          </div>

          {/* prev */}
          { props.showPrev==='true' &&
            <div className="form-group row">
              <label htmlFor="prev" className="col-sm-2 col-form-label text-right"><strong>Prev</strong></label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="prev" disabled value={prev} />
              </div>
            </div>
          }

          {/* hash */}
          <div className="form-group row">
            <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash</strong></label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="hash" disabled value={hash} />
            </div>
          </div>

          {/* mine */}
          <div className="form-group row">
            {/* loading spinner */} {/*TODO toggle spinner @ onClick :Mine btn - ref demo at https://t.me/c/1725591141/169/835 */}
            <div className="col-sm-2">
              <i className="icon-spinner icon-spin icon-large"></i>
            </div>

            {/* mine btn */}
            <div className="col-sm-10">
              <button id="blockMineButton" className="btn btn-primary" data-style="expand-right" type="button">
                <span className="ladda-label"
                  onClick={(e) => {
                    try {
                      let new_nonce = mine({blockNum, data})
                      if(new_nonce !== undefined)
                        setNonce(new_nonce.nonce)
                      else
                        alert("Cannot find a nonce!")
                    }
                    catch (error) {
                      console.log("Error = ", error)
                      alert("Get error. Detail in Console")
                    }
                  }}
                >Mine</span>
              </button>
            </div>

          </div>
        </form>

      </div>
    </>
  )
}

export default BlockMock
