import React, {useState} from 'react'
import {data, peer} from '../../data/blockchain_distributed'
import { sha256_hash } from '../../service/crypto_service'
import BlockChainComponent from './blockchain/blockchain_component'
function Distributed(){

  return (
    <>
      <div className="container-fluid">
				<div className="row">
					<div className="col-12">
							<h2>Distributed Blockchain</h2>
					</div>
					{
						data.map((blockchain, chain_index) => 
              <>
                <h3>Peer {peer[chain_index]}</h3>
                <BlockChainComponent data={blockchain} key={chain_index}/>
              </>
						)
					}
				</div>
			</div>
    </>
  )
}

export default Distributed