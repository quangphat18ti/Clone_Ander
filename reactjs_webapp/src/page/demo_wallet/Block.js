import { useState, useEffect } from 'react'
import TxInfo from './../demoblockchain/block/Tx'
const ethers = require("ethers")

const hexToDecimal = hex => parseInt(hex, 16)

function Block (props) {
  let [blockObj, set__blockObj] = useState()
  useEffect(() => {
    const getBlockInfo = async() => {
      let provider = new ethers.providers.Web3Provider(window.ethereum)
      let b = await provider.getBlockWithTransactions(props.blockNumber)
      set__blockObj(b)
    } 
    
    if (props.blockObj) {
      set__blockObj(props.blockObj)
    }
    else {
      getBlockInfo()
    }
  },[])

  return (
    <>
      <div className="">
        {!props.noHeader && <h3>Block Info</h3>}
        {blockObj && 
        <div className={`container-fluid alert alert-success px-3 pt-3 pb-3`} role="alert" style={{ color: 'black' }}>
          <form className="pb-10">
              {/* prev */}
              <div className="form-group row">
                <label htmlFor="prev" className="col-sm-2 col-form-label text-right"><strong>Prev</strong></label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="prev" disabled value={blockObj.parentHash.slice(2)} />
                </div>
              </div>

              {/* blockNum */}
              <div className="form-group row">
                <label htmlFor="block" className="col-sm-2 col-form-label text-right"><strong>Block</strong></label>

                <div className="col-sm-10">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">#</span>
                    <input type="number" className="form-control" id="blockchainnumber" disabled
                          value={blockObj.number || ''} 
                          //  onChange={(e) => {set_blockObj({"number":e.target.value, blockObj})}}
                    />
                  </div>
                </div>
              </div>

              {/* data */}
              <div className="form-group row">
                <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Tx</strong></label>

                <div className="col-sm-10 overflow-auto" style={{maxHeight: "12em"}}>
                  {
                    blockObj.transactions.map( (tx, i) => {
                      return <TxInfo from={tx.from} to={tx.to} value={hexToDecimal(tx.value)} key={tx.hash} />
                    })
                  }
                </div>
              </div>

              {/* nonce */}
              <div className="form-group row">
                <label htmlFor="nonce" className="col-sm-2 col-form-label text-right"><strong>Nonce</strong></label>

                <div className="col-sm-10">
                  <input type="text" className="form-control" id="nonce" disabled
                        value={blockObj.nonce || ''}
                  />
                </div>
              </div>

              {/* hash */}
              <div className="form-group row">
                <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash</strong></label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="hash" disabled value={blockObj.hash.slice(2)} />
                </div>
              </div>
          </form>
        </div>}
      </div>
    </>
  )
}

export default Block
