let peer = {0: 'A', 1: 'B', 2: 'C'}
const data = []

// ref https://github.com/anders94/blockchain-demo/blob/4138d88e3c56e12265d0098f4bd4a3b5fe762ff0/views/distributed.pug#L11C11-L16C11
Object.values(peer).forEach((chain) => {
  let block = []
  block.push({blockNum: 1,data:'', chain: chain, nonce: 11316, prev: '0000000000000000000000000000000000000000000000000000000000000000'})
  block.push({blockNum: 2,data:'', chain: chain, nonce: 35230, prev: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'})
  block.push({blockNum: 3,data:'', chain: chain, nonce: 12937, prev: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'})
  block.push({blockNum: 4,data:'', chain: chain, nonce: 35990, prev: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'})
  block.push({blockNum: 5,data:'', chain: chain, nonce: 56265, prev: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'})
  data.push(block)
})

export {data, peer}