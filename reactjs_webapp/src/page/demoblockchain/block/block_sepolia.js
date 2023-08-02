import {useEffect, useState} from "react"
import {getBlockInfoByBlockHexNumber, getNewestBlockHexNumber} from "../../../service/etherscan_service/_"

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

      {blockObj && <>
        <pre>
          <br/>Prev         {blockObj.parentHash}
          <br/>Block Number {blockObj.number}
          <br/>Nonce        {blockObj.nonce}
          <br/>Hash         {blockObj.hash}
        </pre>

        <hr/>
        <div>{JSON.stringify(blockObj)}</div>
      </>}
    </>
  )
}

export default BlockSepolia
