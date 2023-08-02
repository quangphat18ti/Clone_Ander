import {useEffect, useState} from "react"
import {getBlockInfoByBlockHexNumber, getNewestBlockHexNumber} from "../../../service/etherscan_service/_"

function BlockSepolia() {
  let [block_obj, set_block_obj] = useState()

  useEffect( () => {
    let get_latest_blocknum = async ()=>{
      let bno = await getNewestBlockHexNumber()
      let b   = await getBlockInfoByBlockHexNumber(bno)
      set_block_obj(b)
    }; get_latest_blocknum()  //NOTE must wrap code in an inner function to run w/ async; dont use useEffect( https://devtrium.com/posts/async-functions-useeffectasync()=>{} )  ref.
  }, [])

  return (
    <>
      <h3>Block Sepolia</h3>
      <pre>
        <br/>Prev         {block_obj.parentHash}
        <br/>Block Number {block_obj.number}
        <br/>Nonce        {block_obj.nonce}
        <br/>Hash         {block_obj.hash}
      </pre>

      <hr/>
      <div>{JSON.stringify(block_obj)}</div>
    </>
  )
}

export default BlockSepolia
