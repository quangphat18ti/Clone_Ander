import {Blockchain as BlockchainComponent} from '../demotxsign/blockchain/blockchain_component';
import {data} from '../../data/blockchain_token'

function Token(){  
  return(
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
							<h3>Token</h3>
					</div>
					{
						data.map((blockchain, chain_index) => 
							<BlockchainComponent data={blockchain} key={chain_index}/>
						)
					}
				</div>
			</div>
		</>
	)
}

export default Token