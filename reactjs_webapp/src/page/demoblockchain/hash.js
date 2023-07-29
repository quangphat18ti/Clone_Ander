import { useState } from "react";
import { sha256_hash } from "../../service/crypto_service";

function Hash() {
  const [data, setData] = useState('');
  const [hash, setHash] = useState(sha256_hash(''));

  return (
    <>
      <div className="container">
        <h1>SHA256 Hash</h1>

        <div className="alert alert-dark p-3" role="alert">
          <form>
            <div className="form-group row">
              <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data</strong></label>

              <div className="col-sm-10">
                <textarea className="form-control" id="data" rows="10" onChange={(e) => {
                  setData(e.target.value);
                  setHash(sha256_hash(e.target.value));
                }}>{data}</textarea>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash</strong></label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="hash" disabled value={hash}/>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Hash