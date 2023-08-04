import React 							from 'react';
import Block 							from './block';
import { peer } 					from '../../../data/txsign_blockchain';
import {useState} 				from 'react'
import { getMessageFromBlock, sha256_hash } 		from '../../../service/crypto_service';

function Blockchain(props){  
	let [blockchain, setBlockchain] = useState(props.data? props.data : '')

	const updateChain = (block_index, chain_index, block_new) => {
		let blockchain_clone = [...blockchain]
		blockchain_clone[chain_index][block_index] = block_new
		let length = blockchain_clone[chain_index].length
		for (let i = block_index + 1; i < length ; i ++) {
			let block = blockchain_clone[chain_index][i-1]
			let message = getMessageFromBlock(block)
			let hash_new = sha256_hash(message).toString()
			blockchain_clone[chain_index][i].prev = hash_new
		}
		setBlockchain(blockchain_clone)
	}

  return(
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
							<h2>Blockchain</h2>
					</div>
					{
						blockchain.map((blockchain, chain_index) => 
							<React.Fragment key={chain_index}>
								<h3>Peer {peer[chain_index]}</h3>
								<div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
									{blockchain.map((block, block_index) => (
										<div className="col-sm-5" key={block_index}>
											<Block {...block} chain_index={chain_index} block_index={block_index} updateChain={updateChain} showCoinbase={props.showCoinbase}/>
										</div>
									))}
									</div>
							</React.Fragment>
						)
					}
				</div>
			</div>
		</>
	)
}

export  {Blockchain};