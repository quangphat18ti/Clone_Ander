import React from 'react';
import {useState, useEffect} from 'react'
import Tx from './tx'
import { sha256_hash, ZERO_PREFIX } from '../../../service/crypto_service';

function Block(props){
  let [blockNum, setBlockNum] = useState(props.blockNum? props.blockNum : 1  )
  let [nonce, setNonce]       = useState(props.nonce?    props.nonce    : '72608' )
	let [award, setAward]				= useState(props.coinbasevalue? props.coinbasevalue: '100.00')
	let [coinbase, setCoinbase] = useState(props.coinbase? props.coinbase : '')
	let [tx, setTx]							= useState(props.tx? 			 props.tx				: [])
	let [prev, setPrev]         = useState(props.prev?     props.prev     : '' )
  let [hash, setHash]         = useState('0000000000000000000000000000000000000000000000000000000000000000' )
	let [isMine, setIsMine] 		= useState(1) // 0 is mine, 1 isn't mine
	
	const updateState = (hash) => { setIsMine(hash.startsWith(ZERO_PREFIX) ? 0 : 1)}

	const handleTxChange = (index, tx_new)=> {
		let tx_clone = [...tx]
		tx_clone[index] = {...tx_clone[index], ...tx_new}
		setTx(tx_clone)
	}

	useEffect(()=> {
		setBlockNum(props.blockNum)
		setNonce(props.nonce)
		setAward(props.coinbasevalue)
		setCoinbase(props.coinbase)
		setTx(props.tx)
		setPrev(props.prev)
	})

	useEffect(()=> {
		console.log('tx', tx)
		let message = '' + blockNum + nonce + award + coinbase
		message = tx.reduce((msg, curr) => 
			msg += '' + curr.value + curr.from + curr.to + curr.seq + curr.sig
		, message)
		message += prev
		let hash_new = sha256_hash(message).toString()
		setHash(hash_new)
		updateState(hash_new)
	}, [blockNum, nonce, award, coinbase, tx, prev])

	let block = {
		blockNum,
		nonce,
		coinbasevalue: award,
		coinbase,
		tx,
		prev
	}

	return(
		<>
			<div className="container">
				<div className={`alert alert-${isMine === 0 ? 'success' : 'danger'} p-3`} role="alert" style={{ color: 'black' }}>
					<form>
						<div className="form-group row">
							<label htmlFor="block" className="col-sm-2 col-form-label text-right">Block:</label>
							<div className="col-sm-10">
								<div className="input-group">
									<span className="input-group-text">#</span>
									<input type="number" className="form-control" id="blockchainnumber" value={blockNum} onChange= {(e)=> {
										setBlockNum(e.target.value)
										let block_new = {...block, blockNum: e.target.value}
										props.updateChain(props.block_index, props.chain_index, block_new)
									}}/>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="nonce" className="col-sm-2 col-form-label text-right">Nonce:</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="nonce" value={nonce} onChange= {(e)=>{
									setNonce(e.target.value)
									let block_new = {...block, nonce: e.target.value}
									props.updateChain(props.block_index, props.chain_index, block_new)
								}}/>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="coinbase" className="col-sm-2 col-form-label text-right">Coinbase:</label>
							<div className="col-sm">
								<div className="input-group">
									<span className="input-group-text">$</span>
									<input type="text" className="form-control" id="coinbasevalue" value={award} onChange= {(e)=> {
										setAward(e.target.value)
										let block_new = {...block, coinbasevalue: e.target.value}
										props.updateChain(props.block_index, props.chain_index, block_new)
									}}/>
									<span className="input-group-text">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
											</svg>
											<i className="bi bi-arrow-right"></i>
									</span>
									<input type="text" className="form-control" id="coinbaseto" value={coinbase} onChange= {(e) => {
										setCoinbase(e.target.value)
										let block_new = {...block, coinbase: e.target.value}
										props.updateChain(props.block_index, props.chain_index, block_new)
									}}/>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="coinbase" className="col-sm-2 col-form-label text-right">Tx:</label>
							<div className="col-sm">
								{	tx.map((data, index) => <Tx key={index} {...data} handleTxchange={handleTxChange} index={index}/>) }
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="prev" className="col-sm-2 col-form-label text-right">Prev:</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="prev" value={prev} onChange= {(e) => {
									setPrev(e.target.value)
									let block_new = {...block, prev: e.target.value}
									props.updateChain(props.block_index, props.chain_index, block_new)
								}}/>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="hash" className="col-sm-2 col-form-label text-right">Hash:</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" id="hash" disabled value={hash}/>
							</div>
						</div>

						<div className="form-group row">
							<div className="col-sm-2">
								<i className="icon-spinner icon-spin icon-large"></i>
							</div>
							<div className="col-sm-10">
								<button id="blockMineButton" className="btn btn-primary" data-style="expand-right" type="button">
									<span className="ladda-label">Mine</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</>
	)
}

export default Block;