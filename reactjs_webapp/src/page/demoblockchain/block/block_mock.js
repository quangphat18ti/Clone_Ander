import { useState, useEffect }            from "react"
import {mine, hash_a_block, ZERO_PREFIX}  from "../../../service/crypto_service"

function BlockMock(props) {
  let [prev, setPrev]         = useState(props.prev?     props.prev     : '' )
  let [blockNum, setBlockNum] = useState(props.blockNum? props.blockNum : 1  )
  let [data, setData]         = useState(props.data?     props.data     : '' )
  let [nonce, setNonce]       = useState(props.nonce?    props.nonce    : '72608' )
  let [hash, setHash]         = useState(props.hash?     props.hash     : '0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a' )

  let [isMined, setIsMined] = useState()

  let css_spinner = 'ml-2 spinner-border spinner-border-sm'
  let [spinClass, setSpinClass] = useState(`d-none ${css_spinner}}`)

  useEffect(() => {
    // re-render :hash if any field in blockdata changed
    let hash_new = hash_a_block({prev, blockNum, data, nonce})
    setHash(hash_new)
  }, [prev, blockNum, data, nonce])

  useEffect(() => {
    // re-render bgcolor fr :isMine
    setIsMined( hash.startsWith(ZERO_PREFIX) )
  }, [hash])

  const onClickMine = async (slowDown=true) => {
    if (slowDown) {
      const sleep = ms => new Promise(r => setTimeout(r, ms))  // sleep() in js ref. https://stackoverflow.com/a/39914235/248616
      await sleep(66)  // onpurpose we want slowdown to see the spinner; otherwise it's too fast to see the spinner
    }

    let mined = await mine({ prev, blockNum, data, nonce })
    if (mined !== undefined) {
      setNonce(mined.nonce)
    } else {
      alert("Cannot find a nonce!")
    }
  }

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
          {/* prev */}
          { props.showPrev==='true' &&
            <div className="form-group row">
              <label htmlFor="prev" className="col-sm-2 col-form-label text-right"><strong>Prev</strong></label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="prev" disabled value={prev} />
              </div>
            </div>
          }

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

          {/* hash */}
          <div className="form-group row">
            <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash</strong></label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="hash" disabled value={hash} />
            </div>
          </div>

          {/* mine */}
          <div className="form-group row">
            {/* left-spacing col */}
            <div className="col-sm-2"></div>

            {/* mine btn */}
            <div className="col-sm-10">
              <button id="blockMineButton" className="btn btn-primary" data-style="expand-right" type="button"
                onClick={async (e) => {
                  setSpinClass(css_spinner)
                  await onClickMine()
                  setSpinClass(`d-none ${css_spinner}`)
                }}
              >
                <span className="ladda-label">Mine</span>

                {/* loading spinner */}
                <div className={spinClass}></div>
              </button>
            </div>
          </div>

        </form>

      </div>
    </>
  )
}

export default BlockMock
