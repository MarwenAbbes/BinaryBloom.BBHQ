export function DisplayCart({name,number,backgroundColor}) {
    return (
        <div className="col-lg-2 col-md-2">
            <div className="card card-block card-stretch card-height" style={{backgroundColor:backgroundColor}}>
                <div className="card-body">
                    <div className="d-flex align-items-center mb-4 card-total-sale">
                        <div className="cart-content">
                            <p className="mb-2 card-label">{name}</p>
                            <h4>{number}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}