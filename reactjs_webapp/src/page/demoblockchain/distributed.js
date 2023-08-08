import {data, peer} from '../../data/blockchain_distributed'
import BlockChainComponent from './blockchain/blockchain_component'
function Distributed(){

  return (
    <>
      <div className="container-fluid">
				<div className="row">
					<div className="col-12">
							<h3>Distributed Blockchain</h3>
					</div>
					{
						data.map((blockchain, chain_index) => 
              <div key={chain_index}>
                <h4>Peer {peer[chain_index]}</h4>
                <BlockChainComponent data={blockchain} key={chain_index}/>
              </div>
						)
					}
				</div>
			</div>
    </>
  )
}

export default Distributed