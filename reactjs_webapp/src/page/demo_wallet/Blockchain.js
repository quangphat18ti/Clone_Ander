import Block from "./Block"

const blockList = [
  {
    parentHash: "0x00000001",
    number: 1,
    hash: "0x001121",
    nonce: "0x87891",
    transactions: [
        { from: "0xabc123", to: "0xdef456", value: "0x100" },
        { from: "0xdef456", to: "0xghi789", value: "0x50" }
    ]
  },
  {
    parentHash: "0xhash1",
    number: 2,
    hash: "0xhash2",
    nonce: "0xnonce2",
    transactions: [
        { from: "0xghi789", to: "0xjkl012", value: "0x75" },
        { from: "0xjkl012", to: "0xmno345", value: "0x30" }
    ]
  },
  {
    parentHash: "0xhash2",
    number: 3,
    hash: "0xhash3",
    nonce: "0xnonce3",
    transactions: [
        { from: "0xmno345", to: "0xpqr678", value: "0x200" },
        { from: "0xpqr678", to: "0xstu901", value: "0x90" }
    ]
  },
  {
    parentHash: "0xhash3",
    number: 4,
    hash: "0xhash4",
    nonce: "0xnonce4",
    transactions: [
        { from: "0xstu901", to: "0xvwx234", value: "0x120" },
        { from: "0xvwx234", to: "0xyz0123", value: "0x25" }
    ]
  },
  {
    parentHash: "0xhash4",
    number: 5,
    hash: "0xhash5",
    nonce: "0xnonce5",
    transactions: [
        { from: "0xyz0123", to: "0xabc456", value: "0x300" },
        { from: "0xabc456", to: "0xdef789", value: "0x70" }
    ]
  }
]

function Blockchain() {
  return (
  <>
    <h3>Blockchain</h3>

    <div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
    {blockList.map( (b,i) =>
        <div className="col-4">
        <Block blockObj={b} key={b} noHeader={true}/>
        </div>
    )}
    </div>
  </>
  )
}

export default Blockchain