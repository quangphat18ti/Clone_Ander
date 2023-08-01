import React from 'react';
import Block from './block';
function Blockchain(){
    let peers    = { 1: 'A', 2: 'B', 3: 'C' };
    let blocks = [];

    // Push the block data for each peer into the blocks array
    Object.values(peers).forEach(() => {
        blocks.push({
            block: 1,
            nonce: 16119,
            coinbasevalue: '100.00',
            coinbaseto: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
            txs: [],
            previous: '0000000000000000000000000000000000000000000000000000000000000000',
            txCount: 0
        });
    });
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Blockchain</h2>
                    </div>
                    {Object.values(peers).map(([peer]) => (
                        <React.Fragment key={peers}>
                            <h3>Peer {peer}</h3>
                            <div className="row row-horizon d-flex flex-nowrap mh-100" style={{overflowY: "scroll"}}>
                                {blocks.map((block) => (
                                    <div className="col-sm-5" >
                                        <Block/>
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blockchain;