import React from 'react';
import Block from './block';
import { data, peer } from './data';

function Blockchain(){  
  return(
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
							<h2>Blockchain</h2>
					</div>
					{
						data.map((blockchain, index) => 
							<React.Fragment key={index}>
								<h3>Peer {peer[index]}</h3>
								<div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
									{blockchain.map((block) => (
										<div className="col-sm-5" >
											<Block {...block}/>
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

export default Blockchain;