import { useState, useEffect }  from "react"
import Block                    from "./Block"
const ethers = require("ethers")

function Blockchain(props) {
  let [blockList, set__blockList] = useState()

  useEffect(() => {
    const getChainInfo = async () => {
      let provider = new ethers.providers.Web3Provider(window.ethereum)
      let blockList
      do {
        const promise1 = provider.getBlockWithTransactions(props.blockNumber - 2);
        const promise2 = provider.getBlockWithTransactions(props.blockNumber - 1);
        const promise3 = provider.getBlockWithTransactions(props.blockNumber);
        const promise4 = provider.getBlockWithTransactions(props.blockNumber + 1);
        const promise5 = provider.getBlockWithTransactions(props.blockNumber + 2);
  
        blockList = await Promise.all([promise1, promise2, promise3, promise4, promise5])
      }while(blockList.some(b => b===null))
      set__blockList(blockList)
    }
    getChainInfo()
  }, [])

  return (
  <>
    {blockList && 
    <>
      <h3>Blockchain</h3>

      <div className="row row-horizon d-flex flex-nowrap mh-200" style={{overflowY: "scroll"}}>
      {blockList.map( (b,i) =>
          <div className="col-4" key={b}>
            <Block blockObj={b} key={"chain"+b}  noHeader={true}/>
          </div>
      )}
      </div>
    </>
    }
  </>
  )
}

export default Blockchain