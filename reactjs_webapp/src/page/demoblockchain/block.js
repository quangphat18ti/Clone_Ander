import { useState } from "react";
import { mine } from "../../service/crypto_service";

function Block() {
    let [block, setBlock] = useState(1)
    let [nonce, setNonce] = useState('')
    let [data, setData] = useState('')
    let [hash, setHash] = useState('')
    let [isMined, setIsMined] = useState(1)
    let [prev, setPrev] = useState()

    return (
        <>
            <div className="container">
                <h1>Block</h1>
                <div className={`alert ${isMined ? "alert-success" : "alert-danger"} p-3`} role="alert" style={{ color: 'black' }}>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="block" className="col-sm-2 col-form-label text-right"><strong>Block:</strong></label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">#</span>
                                    <input type="number" className="form-control" id="blockchainnumber" value={block}
                                            onChange={(e) => {
                                              setBlock(e.target.value) 
                                            }} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="nonce" className="col-sm-2 col-form-label text-right"><strong>Nonce:</strong></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="nonce" value={nonce}
                                        onChange={(e) => {
                                          setNonce(e.target.value)
                                        }} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data:</strong></label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="data" rows="10" 
                                        onChange={(e) => {
                                          setData(e.target.value)
                                        }}>{data}</textarea>
                            </div>
                        </div>
                        { (prev != null) &&
                            <div className="form-group row">
                                <label htmlFor="prev" className="col-sm-2 col-form-label text-right"><strong>Prev:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="prev" disabled value={prev} />
                                </div>
                            </div>
                        }
                        <div className="form-group row">
                            <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash:</strong></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="hash" disabled value={hash} />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="col-sm-2">
                                <i className="icon-spinner icon-spin icon-large"></i>
                            </div>
                            <div className="col-sm-10">
                                <button id="blockMineButton" className="btn btn-primary" data-style="expand-right" type="button">
                                    <span className="ladda-label" 
                                          onClick={(e) => {
                                            e.preventDefault()
                                            try {
                                              let {new_nonce, hash_new} = mine(block, data)
                                              if(new_nonce !== undefined)
                                                setNonce(new_nonce)
                                              else 
                                                alert("Cannot mined block")
                                              } catch (error) {
                                                console.log(error)
                                                alert("Get error. See on Console")
                                              }
                                          }}>Mine</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Block