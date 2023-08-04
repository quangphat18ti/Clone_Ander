function Tx(props) {
    return (
        <div className="input-group">
            <div className="input-group-text">$
            </div>
            <input className="form-control" disabled value={isNaN(props.value)? '' : props.value} />
            <div className="input-group-text">From:
            </div>
            <input className="form-control" disabled value={typeof props.from == 'string' ? props.from.slice(2) : ''} />
            <div className="input-group-text">-&gt;
            </div>
            <input className="form-control" disabled value={typeof props.to == 'string' ? props.to.slice(2) : ''} />
        </div>
        )
}

export default Tx