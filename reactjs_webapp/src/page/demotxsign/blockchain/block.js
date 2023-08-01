function Block(){
    return(
        <>
            <div className="container">
                <div className="alert alert-success p-3" role="alert" style={{ color: 'black' }}>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="block" className="col-sm-2 col-form-label text-right">Block:</label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                    <span className="input-group-text">#</span>
                                    <input type="number" className="form-control" id="blockchainnumber" value="1"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="nonce" className="col-sm-2 col-form-label text-right">Nonce:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="nonce" value="25205"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="coinbase" className="col-sm-2 col-form-label text-right">Coinbase:</label>
                            <div className="col-sm">
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" id="coinbasevalue" value="100.00"/>
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                        </svg>
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                    <input type="text" className="form-control" id="coinbaseto" value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="coinbase" className="col-sm-2 col-form-label text-right">Tx:</label>
                            <div className="col-sm">
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" id="txvalue" value="10.00"/>
                                    <span className="input-group-text">From:</span>
                                    <input type="text" className="form-control" id="txfrom" value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"/>
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                        </svg>
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                    <input type="text" className="form-control" id="txto" value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Seq:</span>
                                    <input type="text" className="form-control col-sm-1" id="seq" value="1"/>
                                    <span className="input-group-text">Sig:</span>
                                    <input type="text" className="form-control" id="sig" value="3046022100cf33ee8c696edd0b0c291a259e0a03ea2491f8febd396244e309d175bc8b6b7c022100a85b8b15e037ac42d9f2545e568d2433ede51e59f4bbfd4179f285fac1a10f66"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="prev" className="col-sm-2 col-form-label text-right">Prev:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="prev" value="00006908f507a101e89544498978e9bd2e35462b91d86ef13510685227912e77"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="hash" className="col-sm-2 col-form-label text-right">Hash:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="hash" disabled value="00008ccb2fccac084b800a2878d317e14fe88fddb1e91d131d1fc3d523d67125"/>
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