let ethers = require("ethers")
// const hexToDecimal = hex => parseInt(hex, 16)

function Tx(props) {
  return (
    <>
      <h3 className="mt-5">Transaction detail</h3>

      <div className="container alert alert-success" role="alert" style={{ color: 'black' }}>
      
        {/* Hash */}
        { props.transaction.hash &&
          <div className="row my-3">
            <div className="col-sm-2">Hash</div>
            <input className="col-sm-10 no-border" value ={props.transaction.transactionHash.slice(2)} />
          </div>
        }

        {/* Block Number */}
        { props.transaction.blockNumber &&
          <div className="row my-3">
            <div className="col-sm-2">Block Number</div>
            <input className="col-sm-10 no-border" value ={props.transaction.blockNumber} />
          </div>
        }

        {/* Block hash */}
        { props.transaction.blockHash &&
          <div className="row my-3">
            <div className="col-sm-2">Block Hash</div>
            <input className="col-sm-10 no-border" value ={props.transaction.blockHash} />
          </div>
        }
        
        {/* From */}
        {props.transaction.from && 
          <div className="row my-3">
            <div className="col-sm-2">From</div>
            <input className="col-sm-10 no-border" value ={props.transaction.from} />
          </div>
        }

        {/* To */}
        {props.transaction.to && 
          <div className="row my-3">
            <div className="col-sm-2">To</div>
            <input className="col-sm-10" value ={props.transaction.to} />
          </div>
        }

        {/* Value */}
        {props.transaction.value &&
          <div className="row my-3">
            <div className="col-sm-2">Value (ETH)</div>
            <input className="col-sm-10" value ={ethers.utils.formatEther(props.transaction.value)} />
          </div>
        }
      </div>
    </>
  )
}

export default Tx