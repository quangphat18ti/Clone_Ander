import React 																		from 'react'
import Block 																		from './block_component'
import {useState} 															from 'react'
import { getMessageFromBlock, sha256_hash } 		from '../../../service/crypto_service'

function Blockchain(props){  
	let [blockchain, setBlockchain] = useState(props.data? props.data : '')

	const updateChain = (block_index, block_new) => {
		let blockchain_clone = [...blockchain]
		blockchain_clone[block_index] = block_new
		let length = blockchain_clone.length
		for (let i = block_index + 1; i < length ; i ++) {
			let block = blockchain_clone[i-1]
			let message = getMessageFromBlock(block)
			let hash_new = sha256_hash(message).toString()
			blockchain_clone[i].prev = hash_new
		}
		setBlockchain(blockchain_clone)
	}

  return(
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
						{
							blockchain.map((block, block_index) => (
								<div className="col-sm-5" key={block_index}>
									<Block {...block} block_index={block_index} updateChain={updateChain} showCoinbase={props.showCoinbase}/>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
}

export  {Blockchain};