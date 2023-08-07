import EC_Image from "./ECC.gif"
function Math() {
    return(
        <>
            <div className="cointainer mt-3 mx-5">
                <div className="card">
                    <h1 className="card-header">Cơ sở toán học</h1>

                    <div className="card-body">
                        {/*Ref: https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/
                                https://dummytip.com/giai-ngo-cryptography-phan-5-elliptic-curve-cryptography-ecc-va-ung-dung-trong-blockchain/
                                */}
                        <h2>ECC (Elliptic Curve Cryptography):</h2>
                        <h5>Key pair generation:</h5>
                        <>An <em>Elliptic Curve (EC)</em> is a curve defined by a certain type of cubic equation in two variables. A typical equation for an EC look like this:<br/></>
                        <>y<sup>2</sup> = x<sup>3</sup> + ax + b<br/></>
                        <img src={EC_Image} alt="An Elliptic Curve"/>
                        <><br/>To generate key pair:</>
                        <ul>
                            <li>Choose a random point A on the Elliptic Curve (EC).</li>
                            <li>Draw the tangent line to the EC through point A.</li>
                            <li>Draw the tangent line to the EC through point B (this can be seen as the "dot function" at iteration 0: A "dot" A results in B).</li>
                            <li>Perform the "dot function" at iteration 1: draw the line AB, which intersects the EC at point C', then take C as the reflection of C' across the x-axis (due to the properties of the EC, C will still lie on the EC).</li>
                            <li>Perform the "dot function" at iteration 2: draw the line AC, which intersects the EC at point D', then take D as the reflection of D' across the x-axis (similarly, D will still lie on the EC).</li>
                            <li>...</li>
                            <li>Perform the "dot function" at iteration n: obtain some point Zn.</li>
                        </ul>
                        <em>=> (A, Zn) correspond to the public key and the number of iterations n corresponds to the private key</em>
                        <h5>Signature:</h5>
                        <h5>Validation:</h5>

                        <hr></hr>
                        {/*Ref: "Cơ sở lý thuyết số trong an toàn - bảo mật thông tin"
                        - Bùi Doãn Khánh, Nguyễn Đình Thúc, Trần Đan Thư*/}
                        <h2>RSA (Rivest–Shamir–Adleman):</h2>
                        <>The fundamental key of RSA encryption is to find a set of three integers (e, d, n).<br/></>
                        <>Where n is the product of two large prime numbers, p and q.<br/></>
                        <>(In practice, n is generated from multiple distinct prime numbers based on the Chinese Remainder Theorem, instead of just two prime numbers p and q)<br/></>

                        <h5>Key pair generation:</h5>
                        <ul>
                            <li>Choose two large prime numbers, p and q</li>
                            <li>Compute n = pq.</li>
                            <li>Calculate <span>&#934;</span>(n) = (p-1)(q-1)</li>
                            <li>Choose e:   1 <span>&#60;</span> e <span>&#60;</span> <span>&#934;</span>(n), GCD(e, <span>&#934;</span>(n)) = 1 </li>
                            <li>Choose d:   d = e<sup>-1</sup> mod <span>&#934;</span>(n), 1 <span>&#60;</span> d <span>&#60;</span> <span>&#934;</span>(n)</li>
                        </ul>
                        <em>=> The public key is (e, n), and the private key is (d, n).</em>

                        <h5>Signature:</h5>
                        Using a one-to-one function f: [0, n-1] -> [0, n-1].<br/>
                        With the one-to-one function f, the private key (d, n), and the plaintext m ∈ [0, n-1].<br/>
                        To send a message from Alice to Bob, Alice calculates two integers:<br/>
                        <ul>
                            <li>M = f(m)</li>
                            <li>s = M<sup>d</sup> mod n</li>
                        </ul>
                        <em>=> s is the RSA signature of the plaintext m.<br/></em>
                        <em>Then, Alice sends s to Bob.</em>

                        <h5>Validation:</h5>
                        <>With the one-to-one function f, the public key (e, n), and the signature s, Bob calculates:</>
                        <ul>
                            <li>M<sup>*</sup> = s<sup>e</sup> mod n</li>
                        </ul>
                        <em>If M<sup>*</sup> <span>&#8713;</span> f([0, n-1]), then the signature s is considered invalid and should be discarded.</em>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Math