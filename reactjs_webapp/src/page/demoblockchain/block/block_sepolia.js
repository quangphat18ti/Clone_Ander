import {useEffect, useState}                                    from "react"
import {getBlockInfoByBlockHexNumber, getNewestBlockHexNumber}  from "../../../service/etherscan_service/_"
import Tx                                                       from "./Tx"

const hexToDecimal = hex => parseInt(hex, 16)

function BlockSepolia() {
  let [blockObj, set_blockObj] = useState()

  useEffect( () => {
    let get_latest_blocknum = async ()=>{
      let bno = await getNewestBlockHexNumber()
      let b   = await getBlockInfoByBlockHexNumber(bno)
      set_blockObj(b)
    }; get_latest_blocknum()  //NOTE must wrap code in an inner function to run w/ async; dont use useEffect( https://devtrium.com/posts/async-functions-useeffectasync()=>{} )  ref.
  }, [])

  return (
    <>
      <h3>Block Sepolia</h3>

      {/* {blockObj && <>
        <pre>
          <br/>Prev         {blockObj.parentHash}
          <br/>Block Number {blockObj.number}
          <br/>Nonce        {blockObj.nonce}
          <br/>Hash         {blockObj.hash}
        </pre>

        <hr/>
        <div>{JSON.stringify(blockObj)}</div>
      </>} */}
      {blockObj && 
        <div className={`alert alert-success px-3 pt-3 pb-3`} role="alert" style={{ color: 'black' }}>
          <form className="pb-10">
              {/* prev */}
              <div className="form-group row">
                <label htmlFor="prev" className="col-sm-2 col-form-label text-right"><strong>Prev</strong></label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="prev" readOnly={true} value={blockObj.parentHash.slice(2)} />
                </div>
              </div>

              {/* blockNum */}
              <div className="form-group row">
                <label htmlFor="block" className="col-sm-2 col-form-label text-right"><strong>Block</strong></label>

                <div className="col-sm-10">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">#</span>
                    <input type="number" className="form-control" id="blockchainnumber"
                          value={hexToDecimal(blockObj.number) || ''} readOnly={true}
                          //  onChange={(e) => {set_blockObj({"number":e.target.value, blockObj})}}
                    />
                  </div>
                </div>
              </div>

              {/* data */}
              <div className="form-group row">
                <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Tx</strong></label>

                <div className="col-sm-10 overflow-auto" style={{maxHeight: "12em"}} rows="10">
                  {
                    blockObj.transactions.map( (tx, i) => {
                      return <Tx from={tx.from} to={tx.to} value={hexToDecimal(tx.value)} key={tx.hash} />
                    })
                  }
                </div>
              </div>

              {/* nonce */}
              <div className="form-group row">
                <label htmlFor="nonce" className="col-sm-2 col-form-label text-right"><strong>Nonce</strong></label>

                <div className="col-sm-10">
                  <input type="text" className="form-control" id="nonce" readOnly={true}
                        value={blockObj.nonce || ''}
                  />
                </div>
              </div>

              {/* hash */}
              <div className="form-group row">
                <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash</strong></label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="hash" readOnly={true} value={blockObj.hash.slice(2)} />
                </div>
              </div>
          </form>
        </div>
      }
    </>
  )
}

export default BlockSepolia
