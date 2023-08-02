let peer = {0: 'A', 1: 'B', 2: 'C'}
const data = []

// ref https://github.com/anders94/public-private-key-demo/blob/9ad71dc54a5844157aaeb5d7fb98f7974ffa803f/views/blockchain.pug#L7C5-L17C9
Object.values(peer).forEach((chain) => {
  let block = []
  block.push({blockNum: 1, chain: chain, nonce: 139358, tx: [{value: '25.00', from: 'Darcy', to: 'Bingley'},{value: '4.27', from: 'Elizabeth', to: 'Jane'},{value: '19.22', from: 'Wickham', to: 'Lydia'},{value: '106.44', from: 'Lady Catherine de Bourgh', to: 'Collins'},{value: '6.42', from: 'Charlotte', to: 'Elizabeth'}], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
  block.push({blockNum: 2, chain: chain, nonce: 39207, tx: [{value: '97.67', from: 'Ripley', to: 'Lambert'},{value: '48.61', from: 'Kane', to: 'Ash'},{value: '6.15', from: 'Parker', to: 'Dallas'},{value: '10.44', from: 'Hicks', to: 'Newt'},{value: '88.32', from: 'Bishop', to: 'Burke'},{value: '45.00', from: 'Hudson', to: 'Gorman'},{value: '92.00', from: 'Vasquez', to: 'Apone'}], prev: '00000c52990ee86de55ec4b9b32beefd745d71675dc0eddfbc7b88336e2e296b'})
  block.push({blockNum: 3, chain: chain, nonce: 13804, tx: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '000078be183417844c14a9251ca246fb15df1074019873f5d85c1a6f4311d4e0'})
  block.push({blockNum: 4, chain: chain, nonce: 20688, tx: [{value: '62.19', from: 'Rick', to: 'Ilsa'},{value: '867.96', from: 'Captain Louis Renault', to: 'Strasser'},{value: '276.15', from: 'Victor Laszlo', to: 'Ilsa'},{value: '97.13', from: 'Rick', to: 'Sam'},{value: '119.63', from: 'Captain Louis Renault', to: 'Jan Brandel'}], prev: '0000c2c95f54a49b4f2bee7056a7dc3b7c1a408706c848b520e20eac75aaceb0'})
  block.push({blockNum: 5, chain: chain, nonce: 33083, tx: [{value: '14.12', from: 'Denise Lovett', to: 'Edmund Lovett'},{value: '2,760.29', from: 'Lord Glendenning', to: 'John Moray'},{value: '413.78', from: 'Katherine Glendenning', to: 'Miss Audrey'}], prev: '0000c03019ed59586405750968888fb65256e82492480d9fe0a6bd2f5e86b5ca'})
  data.push(block)
})

export {data, peer}