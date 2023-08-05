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
                            <li>(A, Zn) correspond to the public key and the number of iterations n corresponds to the private key</li>
                        </ul>
                        <h5>Signature:</h5>
                        <h5>Validation:</h5>

                        <hr></hr>
                        {/*Ref: "Cơ sở lý thuyết số trong an toàn - bảo mật thông tin"
                        - Bùi Doãn Khánh, Nguyễn Đình Thúc, Trần Đan Thư*/}
                        <h2>RSA (Rivest–Shamir–Adleman):</h2>
                        <>Mấu chốt cơ bản của việc sinh khóa RSA là tìm được bộ 3 số nguyên (e, d, n);<br/></>
                        <>Trong đó n là tích của 2 số nguyên tố lớn khác nhau p,q.<br/> </>
                        {<>(Trên thực tế n được tạo bởi nhiều số nguyên tố khác nhau dựa vào định lý Trung Hoa mở rộng,
                            thay vì chỉ 2 số nguyên tố p, q)<br/></>}

                        <h5>Quá trình sinh khóa:</h5>
                        <ul>
                            <li>Chọn n = pq (Với p,q là 2 số nguyên tố lớn)</li>
                            <li>Tính <span>&#934;</span>(n) = (p-1)(q-1)</li>
                            <li>Chọn e sao cho:   1 <span>&#60;</span> e <span>&#60;</span> <span>&#934;</span>(n), GCD(e, <span>&#934;</span>(n)) = 1 </li>
                            <li>Chọn d sao cho:   d = e<sup>-1</sup> mod <span>&#934;</span>(n), 1 <span>&#60;</span> d <span>&#60;</span> <span>&#934;</span>(n)</li>
                        </ul>
                        <em>=> Cặp (e, n) gọi là public key, còn cặp (d,n) là private key</em>

                        <h5>Quá trình tạo chữ ký:</h5>
                        <>Dùng một đơn ánh f: [0, n-1] -> [0, n-1]<br/></>
                        <>Với đơn ánh f, private key (d, n) và nguyên bản m<span> ∈ </span>[0, n-1]<br/></>
                        <>Để Alice gửi cho Bob, Alice tính 2 số nguyên:<br/></>
                        <></>
                        <ul>
                            <li>M = f(m)</li>
                            <li>s = M<sup>d</sup> mod n</li>
                        </ul>
                        <em>=> s là chữ ký RSA của nguyên bản m<br/></em>
                        <em>Sau đó Alice gửi s cho Bob</em>

                        <h5>Quá trình xác thực:</h5>
                        <>Với đơn ánh f, public key (e, n) và chữ ký s, Bob tính:</>
                        <ul>
                            <li>M<sup>*</sup> = s<sup>e</sup> mod n</li>
                        </ul>
                        <em>Nếu M<sup>*</sup> <span>&#8713;</span> f([0, n-1]) loại bỏ chữ ký s</em>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Math