import { useState, useEffect } from "react";
import { mine, sha256_hash, DIFFICULTY_MAJOR } from "../../service/crypto_service";

function Block() {
    let [block, setBlock] = useState(1)
    let [nonce, setNonce] = useState('')
    let [data, setData] = useState('')
    let [hash, setHash] = useState('')
    let [isMined, setIsMined] = useState(1)
    let [prev, setPrev] = useState()

    useEffect(() => {
      setHash(sha256_hash(block === undefined ? '' : block.toString() + nonce + data).toString())
    }, [block, data, nonce])
  
    useEffect(() => {
      setIsMined(hash.substring(0, DIFFICULTY_MAJOR) === '0'.repeat(DIFFICULTY_MAJOR))
    }, [hash])

    return (
        <>
            <div className="container">
                <h3>Block</h3>
                <div className={`
                        alert ${isMined ? "alert-success" : "alert-danger"}
                        px-3 pt-3 pb-0
                     `} role="alert" style={{ color: 'black' }}
                >
                    <form>
                        <div className="form-group row">
                            <label htmlFor="block" className="col-sm-2 col-form-label text-right"><strong>Block:</strong></label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">#</span>
                                    <input type="number" className="form-control" id="blockchainnumber" value={block}
                                           onChange={(e) => {setBlock(e.target.value)}} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="nonce" className="col-sm-2 col-form-label text-right"><strong>Nonce:</strong></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="nonce" value={nonce}
                                        onChange={(e) => {setNonce(e.target.value)}} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data:</strong></label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="data" rows="10" 
                                        onChange={(e) => { setData(e.target.value)}}>{data}
                                </textarea>
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
                                            try {
                                              let new_nonce = mine(block, data);
                                              if(new_nonce !== undefined)
                                                setNonce(new_nonce.nonce)
                                              else 
                                                alert("Cannot find a nonce!")
                                            } 
                                            catch (error) {
                                              console.log("Error = ", error)
                                              alert("Get error. Detail in Console")
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