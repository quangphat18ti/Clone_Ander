import { useState, useEffect }  from "react"
import Block                    from "./Block"
const ethers = require("ethers")

function Blockchain(props) {
  let [blockListNumber, set__blockListNumber] = useState([])
  let [blockList, set__blockList] = useState([])

  useEffect(() => {
    let blockListNos = [props.blockNumber - 2, props.blockNumber - 1, props.blockNumber, props.blockNumber + 1, props.blockNumber + 2]
    set__blockListNumber(blockListNos)
  }, [])

  return (
  <>
    <h3>Blockchain</h3>

    <div className="row row-horizon d-flex flex-nowrap mh-200" style={{overflowY: "scroll"}}>
      {/* {console.log("blockListNumber", blockListNumber)} */}
      {blockListNumber.map( (b,i) =>
          <div className="col-4">
            <Block blockNumber={b} key={"chain"+b}  noHeader={true}/>
          </div>
      )}
    </div>
  </>
  )
}

export default Blockchain