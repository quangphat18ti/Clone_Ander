import React, {useEffect, useState} from "react"
import {sha256_hash, ZERO_PREFIX} from "../../../service/crypto_service"

function BlockInChain(props) {
  let [blockNum, setBlockNum] = useState(props.blockNum? props.blockNum : 1  )
  let [data, setData]         = useState(props.data?     props.data     : '' )
  let [nonce, setNonce]       = useState(props.nonce?    props.nonce    : '72608' )
  let [prev, setPrev]         = useState(props.prev?     props.prev     : '' )
  let [hash, setHash]         = useState(props.hash?     props.hash     : '0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a' )
  let [isMined, setIsMined]   = useState(1) // 0 is mine, 1 isn't mine

  let block= {
    blockNum,
    data,
    nonce,
    prev
  }

  const updateState = (hash) => { setIsMined(hash.startsWith(ZERO_PREFIX) ? 0 : 1)}

  const getMessageFromBlock = (block) => {
    return '' + block.blockNum + block.nonce + block.data + block.prev
  }

  useEffect(()=> {
    setBlockNum					(props.blockNum)
    setNonce					(props.nonce ? props.nonce : '72608')
    setData						(props.data)
    setPrev						(props.prev)
  })

  useEffect(()=> {
    let message = getMessageFromBlock(block)
    console.log("message", message)
    let hash_new = sha256_hash(message).toString()
    setHash(hash_new)
    updateState(hash_new)
  }, [blockNum, nonce, data, prev])

  const mine = (block) => {
    const DIFFICULTY = 4
    const maxmem = 8 * Math.pow(16, DIFFICULTY)
    for (let nonce = 1 ; nonce < maxmem ; nonce ++) {
      block.nonce = nonce
      let message = getMessageFromBlock(block)
      let hash = sha256_hash(message).toString()
      if (hash.startsWith(ZERO_PREFIX)) {
        props.updateChain(props.block_index, block)
        break
      }
    }
  }

  return (
    <>
      {/* ref anders demo ref https://andersbrownworth.com/blockchain/block */}

      <div className={`
        alert ${isMined === 0 ? "alert-success" : "alert-danger"}
        px-3 pt-3 pb-0
      `} role="alert" style={{ color: 'black' }}>

        <form>
          {/* blockNum */}
          <div className="form-group row">
            <label htmlFor="block" className="col-sm-2 col-form-label text-right"><strong>Block</strong></label>

            <div className="col-sm-10">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">#</span>
                  <input type="number" className="form-control" id="blockchainnumber"
                    value={blockNum}
                    onChange={(e) => {
                        setBlockNum(e.target.value)
                        let block_new = {...block, blockNum: e.target.value}
                        props.updateChain(props.block_index,block_new)
                    }}
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
                onChange={(e) => {
                  setData(e.target.value)
                  let block_new = {...block, data: e.target.value}
                  props.updateChain(props.block_index,block_new)
                }}
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
                onChange={(e) => {
                  setNonce(e.target.value)
                  let block_new = {...block, nonce: e.target.value}
                  props.updateChain(props.block_index,block_new)
                }}
              />
            </div>
          </div>

          {/* prev */}
          <div className="form-group row">
            <label htmlFor="prev" className="col-sm-2 col-form-label text-right"><strong>Prev</strong></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="prev" disabled value={prev} />
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
            <div className="form-group row">
              <div className="col-sm-2">
                <i className="icon-spinner icon-spin icon-large"></i>
              </div>
              <div className="col-sm-10">
                <button id="blockMineButton" className="btn btn-primary" data-style="expand-right" type="button" onClick= {() => {
                  mine(block)
                }}>
                  <span className="ladda-label">Mine</span>
                </button>
              </div>
            </div>
          </div>

        </form>

      </div>
    </>
  )
}

export default BlockInChain
