let ethers = require("ethers")
// const hexToDecimal = hex => parseInt(hex, 16)

function Tx(props) {
  return (
    <>
      <h3 className="mt-5">Transaction detail</h3>

      <div className="container-fluid alert alert-success" role="alert" style={{ color: 'black' }}>
      
        {/* Hash */}
        { props.transaction.hash &&
          <div className="row my-3">
            <div className="col-sm-2 text-right m-auto"><strong>Transaction Hash</strong></div>
            <input className="col-sm-10 form-control" defaultValue ={props.transaction.hash.slice(2)} readOnly />
          </div>
        }

        {/* Block Number */}
        { props.transaction.blockNumber &&
          <div className="row my-3">
            <div className="col-sm-2 text-right m-auto"><strong>Block Number</strong></div>
            <input className="col-sm-10 form-control" defaultValue ={props.transaction.blockNumber} readOnly />
          </div>
        }

        {/* Block hash */}
        { props.transaction.blockHash &&
          <div className="row my-3">
            <div className="col-sm-2 text-right m-auto"><strong>Block Hash</strong></div>
            <input className="col-sm-10 form-control" defaultValue ={props.transaction.blockHash.slice(2)} readOnly />
          </div>
        }
        
        {/* From */}
        {props.transaction.from && 
          <div className="row my-3">
            <div className="col-sm-2 text-right m-auto"><strong>From</strong></div>
            <input className="col-sm-10 form-control" defaultValue ={props.transaction.from.slice(2)} readOnly />
          </div>
        }

        {/* To */}
        {props.transaction.to && 
          <div className="row my-3">
            <div className="col-sm-2 text-right m-auto"><strong>To</strong></div>
            <input className="col-sm-10 form-control" defaultValue ={props.transaction.to.slice(2)} readOnly />
          </div>
        }

        {/* Value */}
        {props.transaction.value &&
          <div className="row my-3">
            <div className="col-sm-2 text-right m-auto"><strong>Value (ETH)</strong></div>
            <input className="col-sm-10 form-control" defaultValue ={ethers.utils.formatEther(props.transaction.value)} readOnly />
          </div>
        }
      </div>
    </>
  )
}

export default Tx