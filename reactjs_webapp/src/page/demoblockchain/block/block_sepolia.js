import {useEffect, useState} from "react"
// import {getBlockInfoByBlockHexNumber, getNewestBlockHexNumber} from "../../../service/etherscan_service/_"

function BlockSepolia() {
  let [block_obj, set_block_obj] = useState()

  useEffect( () => {
    // let bno = await getNewestBlockHexNumber()
    // let b   = await getBlockInfoByBlockHexNumber(bno)
    // set_block_obj(b)
  }, [])

  return (
    <>
      <h3>Block Sepolia</h3>
      <div>{JSON.stringify(block_obj)}</div>
    </>
  )
}

export default BlockSepolia
