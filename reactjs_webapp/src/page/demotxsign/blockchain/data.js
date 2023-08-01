let peer = {0: 'A', 1: 'B', 2: 'C'}
const data = []

// ref https://github.com/anders94/public-private-key-demo/blob/9ad71dc54a5844157aaeb5d7fb98f7974ffa803f/views/blockchain.pug#L7C5-L17C9
Object.values(peer).forEach((chain) => {
  let block = []
  block.push({blockNum: 1, chain: chain, nonce: 16119, coinbasevalue: '100.00', coinbase: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', tx: [], prev: '0000000000000000000000000000000000000000000000000000000000000000', txCount: 0})
  block.push({blockNum: 2, chain: chain, nonce: 25205, coinbasevalue: '100.00', coinbase: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', tx: [{value: '10.00', from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', to: '04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd', seq: 1, sig: '3046022100cf33ee8c696edd0b0c291a259e0a03ea2491f8febd396244e309d175bc8b6b7c022100a85b8b15e037ac42d9f2545e568d2433ede51e59f4bbfd4179f285fac1a10f66'},{value: '20.00', from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', to: '04997ac426a5c3c0ec9b51732435f90ebb4cf06aca4bfdb778865af0110f3931660d8b85297d59382c81eb6c7ae7c100af55800f15dad1fc72122139ba02e5d740', seq: 1, sig: '30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9'},{value: '15.00', from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', to: '042222d7af343abd780add9dd7a0f554a1d6b127bc6f7ec28c5eef97d25af83028e89011559daa71dfcc7e2175433a1a6ef605715eba07a8a942c7088f8050a714', seq: 1, sig: '304402201d97c65bafaf61ae46717c87757772860cd1b130e5786085f82bef5b98293c2a02200d230c4c690af60c76ed57fd23c92d45d758f5c2325ee3e326d1c98fe0b769f4'},{value: '15.00', from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', to: '041c377677bb697329b8dbeb5811b026d532730ad90ad7357fd812183ec01b766d7a4ee33c6a85b84d44fa1c3c59377c660f0076c39c563d9a19005a56ee1d1336', seq: 1, sig: '3046022100c583bd79baf55bd5580761a236a7e2f65b80ae3e4ebb4eb620e6a472156b95d1022100b65511d1eaa63f3cda18b78301e4945772fbddee08903acd65e4a97f57e85c55'}], prev: '00006908f507a101e89544498978e9bd2e35462b91d86ef13510685227912e77', txCount: 4})
  block.push({blockNum: 3, chain: chain, nonce: 29164, coinbasevalue: '100.00', coinbase: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', tx: [{value: '10.00', from: '042222d7af343abd780add9dd7a0f554a1d6b127bc6f7ec28c5eef97d25af83028e89011559daa71dfcc7e2175433a1a6ef605715eba07a8a942c7088f8050a714', to: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6', seq: 1, sig: '30450220485a5a1c317d5a1b33af90201999909b49e09dc5f0b261048bbee1d09ed1735f02210081eb6d39ab4db5d9f95ec5b103b7a6268bc936c738cb05293e167220fbc3b71e'},{value: '5.00', from: '041c377677bb697329b8dbeb5811b026d532730ad90ad7357fd812183ec01b766d7a4ee33c6a85b84d44fa1c3c59377c660f0076c39c563d9a19005a56ee1d1336', to: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6', seq: 1, sig: '3044022002cc3c61bb7cd4573b192d1b61f125545ebc84c5b47dd9ea096b896bf9b335a702204c3252e5f27c8732d4ce52f58efb3493fa733200aba01270f779a3b7fed2e53c'},{value: '20.00', from: '04997ac426a5c3c0ec9b51732435f90ebb4cf06aca4bfdb778865af0110f3931660d8b85297d59382c81eb6c7ae7c100af55800f15dad1fc72122139ba02e5d740', to: '040b4c84f02bfec488a8a861267f8221646e1b6f6701504ad39d4ee82248fa7b5152536ea36bf47ee0812186a13311a2c0cfc24f557dfa38b2048139be45d7ac4c', seq: 1, sig: '3045022100ee33bb3764f5f85f694d1033a66131bc818c188dba4e6392e89c03c06537885202201d92064c5e8804df8864baa30ccbcaca45caac345686768125d0c9a10fad94f4'}], prev: '00008ccb2fccac084b800a2878d317e14fe88fddb1e91d131d1fc3d523d67125', txCount: 3})
  block.push({blockNum: 4, chain: chain, nonce: 51263, coinbasevalue: '100.00', coinbase: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', tx: [{value: '7.00', from: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6', to: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090', seq: 1, sig: '30450221009231b78416d222dd7e73e42b5bd7613b89ad4d093f33ba799d0867304861e5100220028b3ffe5a80bab482c31464fb0db1609f674f8f03e8a137e15593bdc97e7725'},{value: '5.00', from: '042222d7af343abd780add9dd7a0f554a1d6b127bc6f7ec28c5eef97d25af83028e89011559daa71dfcc7e2175433a1a6ef605715eba07a8a942c7088f8050a714', to: '041c377677bb697329b8dbeb5811b026d532730ad90ad7357fd812183ec01b766d7a4ee33c6a85b84d44fa1c3c59377c660f0076c39c563d9a19005a56ee1d1336', seq: 1, sig: '30460221008060d62c9e36fb464b792e4d3b9a08783877259cc56ea87b20d798d0f3f450b202210083d082cc7222d5834f4b71be9b23ee6943f44bda5ef549c698e382b800c59bec'},{value: '8.00', from: '04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd', to: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6', seq: 1, sig: '3044022013a30405cc52560bcfa5348955303bad54e235f1504d65e356403f41e60867d50220539fc0bcd0ec869f08ed10987188f3333c9d7050af7ac5cf239c3cab38a4e46f'}], prev: '000029942f0286f943ac7e877d7f10c3902aecbb2eebc72a758ab40487b0b8f9', txCount: 3})
  block.push({blockNum: 5, chain: chain, nonce: 172517, coinbasevalue: '100.00', coinbase: '04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd', tx: [{value: '7.00', from: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6', to: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090', seq: 2, sig: '304502203b00e4d2c7d85dc96a3ede37c287237ba8a6a857defcc285ac2daff92109e75f022100ace660bb266104fd111e7d9ea7ee6a629dc45dfed4ce97b0fe7475e0968ff7d0'},{value: '6.00', from: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090', to: '043e17e5095e878b0fbf63f4c7de037ed0e098d13ac7b8891c5d7238edc9dea474ce7df69a643edf2cccb7b9cf71701e1825e5ceb840764efb3fc7b6e7f433be41', seq: 1, sig: '304502207765bb9ac24975ff9b4194b95b7ce87b1a7435f983d839efa2b2c5e5aa258b02022100ccc33565490a7cdc738c6e75451eadb53b66dd72f3ce67d13cd3dd905265269b'},{value: '4.00', from: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090', to: '04020d6fe7aeabd3a00d725f542c35d8b345fe1c884f3af420987ca51c73580e4b4c42f9838f254d142d7024f556d167ce2d0ddf7e9576ebd9136368542f8ac5a2', seq: 1, sig: '304602210090ca7d92de041fd0e7fd7b4638ca1ee85a25e0bdaa3deff87a32eac7f1a0f6e9022100a3fd097026ce01eb105c969d0a460475e655845dd3973ee9f69ca9c2e4f05483'},{value: '9.95', from: '040b4c84f02bfec488a8a861267f8221646e1b6f6701504ad39d4ee82248fa7b5152536ea36bf47ee0812186a13311a2c0cfc24f557dfa38b2048139be45d7ac4c', to: '04148850d1edbd665a7a797c69f8015aa84e92f84f68285cc561397d4120c6e6a0f331e6a40bf9e4066ca1719666d201585564d4e11449e22cec9c6eec3d20bfbf', seq: 1, sig: '3045022100d980efbdcc9efc5e54ca5ed5a300df6cb103da49ac7ac88ccfce333adb8c33a402201469bb5a211fb9b4ae845accc0fb9f3fd75ea68ce41a1cb37cecb318df357a57'}], prev: '0000f79349c800b2ef5ed40ba485e4abb75158f60f0fe7a962b5bd0fa6ccf1a0', txCount: 4})
  data.push(block)
})

export {data, peer}
