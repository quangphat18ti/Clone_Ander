import { useEffect, useState }  from 'react'
import { gen_keypair }          from  '../../../service/crypto_service'
import EC_Case1 from "../ECC_presentation/ECC_case1_square.gif";
import EC_Case2 from "../ECC_presentation/ECC_case2_square.gif";
import EC_Case3 from "../ECC_presentation/ECC_case3_square.gif";

function KeyPair() {
  let [privkey, setPrivkey] = useState(0)
  let [pubkey, setPubkey]   = useState(0)

  /*
    Store and dispatch event
    ref: https://michalkotowski.pl/writings/how-to-refresh-a-react-component-when-local-storage-has-changed
  */
  const storeKeypair = (privkey = 0, pubkey = 0)=> { // store privkey, pubkey and trigger the event
    localStorage.setItem('privkey', privkey)
    localStorage.setItem('pubkey',  pubkey)
    window.dispatchEvent(new Event('storage_keypair_event'))
  }  

  useEffect(()=>{ // generate the random keypair at the first time this component is rendered
    let keypair = gen_keypair()
    setPrivkey(keypair.privkey)
    setPubkey(keypair.pubkey)
    storeKeypair(keypair.privkey, keypair.pubkey)

    const handleKeypairStorage = () => {    // add the event handler when localStorage is updated
      setPrivkey(localStorage.getItem('privkey'))
      setPubkey(localStorage.getItem('pubkey'))
    }
    window.addEventListener('storage_keypair_event', handleKeypairStorage)
  }, [])

  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return(
    <>
      <div className="cointainer mt-3 mx-2">

        <div className="form-group mx-4 mt-3">

          {/* privkey */}
          <label htmlFor="privkey" className="control-label mt-2">
            {showText ? (
                    <div>
                      <strong>Private Key</strong>
                      <sup onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 'bold',  color: 'red', marginLeft: '10px'}}>
                        Explain
                      </sup>
                    </div>
                ):
                (<div><strong>Private Key</strong></div>)}
          </label>

          <div className="input-group">
            <input type="text" pattern="[a-fA-F\d]+" title="must be hexadecimal number" placeholder="0x" className="form-control mb-2" id="privkey"
                   value={privkey || ''}
                   onChange={ (e) => {
                     // calc new pubkey
                     let privkey_new = (e.target.value === '')? '0' : e.target.value// convert to bigint to use w/ elliptic  ref https://github.com/anders94/public-private-key-demo/blob/master/views/keys.pug#L47
                     let pubkey_new = privkey_new === '0'?  /* handle error @ calling w/ empty '' or '0' param ie gen_keypair(p) ie ec.keyFromPrivate(p) will result as error */
                       0 : gen_keypair(privkey_new).pubkey

                     // render to ui
                     setPrivkey(privkey_new)
                     setPubkey(pubkey_new)
                     storeKeypair(privkey_new, pubkey_new)
                   }}
            />

            {/* btn Random */}
            <span className="input-group-append">
              <button className="btn btn-secondary mb-2" onClick={()=>{
                let keypair = gen_keypair()
                setPrivkey(keypair.privkey)
                setPubkey(keypair.pubkey)
                storeKeypair(keypair.privkey, keypair.pubkey)
              }}>Random</button>
            </span>
            <div>
              {showText && (
                  <sup onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 'bold',  color: 'red', marginLeft: '10px'}}>
                    Explain
                  </sup>
              )}
            </div>


          </div>
        </div>

        {/* pubkey */}
        <div className="form-group mx-4 mt-3">
          <label htmlFor="pubkey" className="mt-2">
            {showText ? (
                <div>
                  <strong>Public Key</strong>
                  <sup onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 'bold',  color: 'red', marginLeft: '10px'}}>
                      Explain
                  </sup>
                </div>
            ):
            (<div><strong>Public Key</strong></div>)}

          </label>
          <input className="form-control" id="pubkey" type="text" readOnly={true} value={pubkey || ''}/>
        </div>
      </div>


      {/* explain */}
      <p>
        <a onClick={handleClick}  data-toggle="collapse" href="#genarateCode" role="button" aria-expanded="false" aria-controls="genarateCode"
           style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold',  margin: '30px', fontSize: '25px' }}>
          Explain it
        </a>
      </p>
      <div className="collapse" id="genarateCode">
        <div className="card card-body" style={{backgroundColor: 'black', color: 'white', marginBottom: '20px'}}>
          <p>privkey = keypair.getPrivate('hex')</p>
          <p>pubkey  = keypair.getPublic('hex')</p>
          <p></p>
          <p>keypair = ec.genKeyPair()</p>
          <p>or</p>
          <p>keypair = ec.keyFromPrivate(privkey)  // run when you update privkey value</p>
          <p></p>
          <p>EC = require('elliptic').ec</p>
          <p>ec = new EC('secp256k1')</p>
        </div>
        <p>
          <a data-toggle="collapse" href="#ECDSA" role="button" aria-expanded="false" aria-controls="ECDSA"
             style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold',  margin: '30px', fontSize: '25px' }}>
            How EC generate key and work?
          </a>
        </p>
        <div className="collapse" id="ECDSA">
          <div className="card card-body">
            <h2>Elliptic curve</h2>
            <strong className="text-left">Definition</strong>
            <p className="text-left">
              An elliptic curve is a set of solutions to an equation of the form
              <p className="text-center">Y<sup>2</sup> = X<sup>3</sup> +AX + B,</p>
              together with an extra point O, where the constants A and B must satisfy
              <p className="text-center">4A<sup>3</sup> + 27B<sup>2</sup> &ne; 0</p>
            </p>

            <strong>Addition law</strong>
            <ul>
              <li>The point P and Q are on the elliptic curve E. The line L connecting P and Q intersects E at three points: P, Q, and R.
                The relection of R on the curve across the x-axis is R'. We call R' is the "sum of P and Q".
                If we add a point P to itself, then we simply take the line L to be the tangent line to E at P.
              </li>
              <li>The point O is an extra point that does not exist in the XY-plane and is defined to lie on every vertical line.
                More precisely, when adding P to its reflection P', we obtain the point O. In other words, O acts like zero for elliptic curve addition.</li>
            </ul>
            <div className="row justify-content-center">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={EC_Case1} alt="ECC Case 1" style={{ maxWidth: '56%', maxHeight: '56%', marginRight: '30px' }} />
                <img src={EC_Case2} alt="ECC Case 2" style={{ maxWidth: '56%', maxHeight: '56%', marginRight: '30px' }} />
                <img src={EC_Case3} alt="ECC Case 3" style={{ maxWidth: '56%', maxHeight: '56%' }} />
              </div>
            </div>

            <strong>Elliptic curves over finite fields</strong>
            <p>In order to apply the theory of elliptic curves to cryptography, we define an elliptic curve over Fp to be an equation of  the form
              <p className="text-center">E : Y<sup>2</sup> = X<sup>3</sup> + AX + B with A, B &isin; F<sub>p</sub> satisfying 4A<sup>3</sup> + 27B<sup>2</sup> &ne; 0,</p>
              and the points on E with corrdinates in Fp is denoted by
              <p className="text-center">E(F<sub>p</sub>) = &#123;(x,y) : x,y &isin; F<sub>p</sub> satisfy y<sup>2</sup> = x<sup>3</sup> + Ax + B &#125; &cup; &#123;O&#125;</p>
            </p>

            <strong>The elliptic curve discrete logarithm problem (ECDLP)</strong>
            <p>Let E be an elliptic curve over the finite field Fp and let P and Q be points in E(Fp).
              The Elliptic Curve Discrete Logarithm Problem (ECDLP) is the problem of finding an integer n such that Q = nP.
              The integer n is denoted by
              <p className="text-center">n = log<sub>P</sub>(Q)</p>
              and we call n is the elliptic discrete logarithm of Q with respect to P.
            </p>

            <strong>How hard is the ECDLP?</strong>
            <p>The fastest known algorithm to solve ECDLP in E(F<sub>p</sub>) takes approximately &radic;p steps.
              Thus the ECDLP appears to be much more difficult than the DLP. This is the advantage of using elliptic curve digital signature.
            </p>

            <strong>Elliptic curve digital signature scheme</strong>
            <p></p>
            <div className="row justify-content-center text-center">
              <div className="col col-sm-6 border">
                <strong>Public Parameters Creation</strong>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-6 border">
                A trusted party chooses a finite field F<sub>p</sub>, an elliptic curve E/F<sub>p</sub>,<br/>
                and a point G &isin; E(F<sub>p</sub>) of large prime order q.
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-3 border">
                <strong className="text">Alice</strong>
              </div>
              <div className="col col-sm-3 border">
                <strong className="text">Bob</strong>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-6 border">
                <strong className="text">Key Creation</strong>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-3 border">
                <div className="text">
                  Choose secret signing key<br/>
                  1 &lt; s &lt; q − 1.<br/>
                  Compute V = sG &isin; E(F<sub>p</sub>).<br/>
                  Publish the verification key V.
                </div>
              </div>
              <div className="col col-sm-3 border"></div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-6 border">
                <strong className="text">Signing</strong>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-3 border">
                <div className="text ">
                  Choose document d mod q.<br/>
                  Choose ephemeral key e mod q.<br/>
                  Compute eG &isin; E(F<sub>p</sub>) and then,<br/>
                  s<sub>1</sub> = x(eG) mod q and<br/>
                  s<sub>2</sub> ≡ (d + ss<sub>1</sub>)e<sup>-1</sup> (mod q).<br/>
                  Publish the signature (s<sub>1</sub>, s<sub>2</sub>).<br/>
                </div>
              </div>
              <div className="col col-sm-3 border"></div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-6 border">
                <strong className="text text-control-lg ">Verification</strong>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col col-sm-3 border"></div>
              <div className="col col-sm-3 border">
                <div className="text ">
                  Compute v<sub>1</sub> ≡ ds<sub>2</sub><sup>−1</sup> (mod q)<br/>
                  v<sub>2</sub> ≡ s<sub>1</sub>s<sub>2</sub><sup>−1</sup> (mod q).<br/>
                  Compute v<sub>1</sub>G+v<sub>2</sub>V &isin; E(F<sub>p</sub>) and verify that<br/>
                  x(v<sub>1</sub>G + v<sub>2</sub>V ) mod q = s<sub>1</sub>.
                </div>
              </div>
            </div>

            <strong >The verification step</strong>
            <p>We compute</p>
            <div className="row justify-content-center text-center">
              <div className="col text-right">v<sub>1</sub>G + v<sub>2</sub>V</div>
              <div className="col  text-left">
                = ds<sub>2</sub><sup>−1</sup>G + s<sub>1</sub>s<sub>2</sub><sup>−1</sup>(sG)<br/>
                = (d + ss<sub>1</sub>)s<sub>2</sub><sup>−1</sup>G <br/>
                = (es<sub>2</sub>)s<sub>2</sub><sup>−1</sup>G<br/>
                = eG &isin; E(F<sub>p</sub>).<br/>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col text-right">&rArr; x(v<sub>1</sub>G + v<sub>2</sub>V) mod q</div>
              <div className="col  text-left">
                = x(eG) mod q = s<sub>1</sub>.
              </div>
            </div>
            <p>Hence proved the verification step succeeds in verifying a valid signature.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyPair