function ECDSA() {
    return (
        <>
            <div className="cointainer mt-3 mx-5">
                <div className="card text-center" >
                    <h1 className="card-header">Elliptic curve digital signature algorithm</h1>
                    {/*Ref: "Cơ sở lý thuyết số trong an toàn - bảo mật thông tin"
                        - Bùi Doãn Khánh, Nguyễn Đình Thúc, Trần Đan Thư*/}
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div class="col col-sm-6 border">
                                <strong className="text">Public Parameters Creation</strong>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div class="col col-sm-6 border">
                                A trusted party chooses a finite field F<sub>p</sub>, an elliptic curve E/F<sub>p</sub>,<br/>
                                and a point G ∈ E(F<sub>p</sub>) of large prime order q.
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col col-sm-3 border">
                                <strong className="text">Alice</strong>
                            </div>
                            <div class="col col-sm-3 border">
                                <strong className="text">Bob</strong>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div class="col col-sm-6 border">
                                <strong className="text">Key Creation</strong>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col col-sm-3 border">
                                <div className="text">
                                    Choose secret signing key<br/>
                                    1 &lt; s &lt; q − 1.<br/>
                                    Compute V = sG ∈ E(F<sub>p</sub>).<br/>
                                    Publish the verification key V.
                                </div>
                            </div>
                            <div class="col col-sm-3 border">
                                <div className="text "></div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div class="col col-sm-6 border">
                                <strong className="text">Signing</strong>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col col-sm-3 border">
                                <div className="text ">
                                    Choose document d mod q.<br/>
                                    Choose ephemeral key e mod q.<br/>
                                    Compute eG ∈ E(F<sub>p</sub>) and then,<br/>
                                    s<sub>1</sub> = x(eG) mod q and<br/>
                                    s<sub>2</sub> ≡ (d + ss<sub>1</sub>)e<sup>-1</sup> (mod q).<br/>
                                    Publish the signature (s<sub>1</sub>, s<sub>2</sub>).<br/>
                                </div>
                            </div>
                            <div class="col col-sm-3 border">
                                <div className="text "></div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div class="col col-sm-6 border">
                                <strong className="text text-control-lg ">Verification</strong>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col col-sm-3 border">
                                <div className="text "></div>
                            </div>
                            <div class="col col-sm-3 border">
                                <div className="text ">
                                    Compute v<sub>1</sub> ≡ ds<sub>2</sub><sup>−1</sup> (mod q)<br/>
                                    v<sub>2</sub> ≡ s<sub>1</sub>s<sub>2</sub><sup>−1</sup> (mod q).<br/>
                                    Compute v<sub>1</sub>G+v<sub>2</sub>V ∈ E(F<sub>p</sub>) and verify that<br/>
                                    x(v<sub>1</sub>G + v<sub>2</sub>V ) mod q = s<sub>1</sub>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>            
)}

export default ECDSA
