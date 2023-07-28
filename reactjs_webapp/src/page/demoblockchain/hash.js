function Hash() {
    return (
        <>
            <div className="container">
                <h1>SHA256 Hash</h1>

                <div className="alert alert-dark" role="alert">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="data" className="col-sm-2 col-form-label text-right"><strong>Data:</strong></label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="data" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="hash" className="col-sm-2 col-form-label text-right"><strong>Hash:</strong></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="hash" disabled />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Hash