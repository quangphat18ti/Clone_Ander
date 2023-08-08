import React 							from 'react'
import {Blockchain as BlockchainComponent} from './blockchain_component'
import {data} from '../../../data/txsign_blockchain'

function Blockchain(){  
  return(
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
							<h3>Blockchain</h3>
					</div>
					{
						data.map((blockchain, chain_index) => 
							<BlockchainComponent data={blockchain} showCoinbase={true}/>
						)
					}
				</div>
			</div>
		</>
	)
}

export default Blockchain