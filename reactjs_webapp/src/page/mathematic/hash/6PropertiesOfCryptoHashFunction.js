import React, {useEffect} from 'react';
import onClickButton from './onClickButton';

export default function PropertiesOfCryptoHashFunction() {
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[])
  
  return (
    <div className="container m-auto">
      <div className="card markdown-body comment-inner comment-enabled" data-hard-breaks="false">
        <h2 className="card-header">6 properties of cryptographic hash function (CHF)</h2>
        <div className="card-body">
          A cryptographic hash function is expected to have the following properties that guarantee its effectiveness and security:
          <ol>
            <li><strong>One-way function</strong>: The input value be hidden. It should be difficult to guess the input value for a hash function from its output.</li>
              <div>
                $$ x \Rightarrow y = h(x) : easy  $$
                $$ y = h(x) \Rightarrow  x : hard$$
              </div>
            <li><strong>Pre-image resistant</strong>:  given an input $m1$, it is infeasible to find another input $m2$ such that $m1$ and $m2$ have the same hash value.</li>
              <div>
                $$ m_1 \Rightarrow y = h(m_1) $$
                $$\nexists m_2 \ne m_1\ |\ y = h(m_1) = h(m_2)$$
              </div>
            <li><strong>Anti-collision</strong>:  It shouldn’t produce collisions, which are when two or more inputs generate the same hash. </li>
              <div>
              $$ \nexists m_1, m_2\ |\ h(m_1) = h(m_2) $$
              </div>
            <li><strong>Deterministic</strong>: the same message always results in the same hash</li>
            <li><strong>Avalanche effect</strong>: a small change to a message should change the hash value so extensively that the new hash value appears uncorrelated with the old hash value.</li>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Message</th>
                    <th>Hash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>hello</td>
                    <td>2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824</td>
                  </tr>
                  <tr>
                    <td>Hello</td>
                    <td>185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</td>
                  </tr>
                  <tr>
                    <td>hello!</td>
                    <td>ce06092fb948d9ffac7d1a376e404b26b7575bcc11ee05a4615fef4fec3a308b</td>
                  </tr>
                </tbody>
              </table>
            <li><strong>Quick</strong>:  it is quick to compute the hash value for any given message.</li>
          </ol>
          <hr class="solid"></hr>
          <div>
            <h3> Attentions</h3>
            <p>The first three properties are the most crucial. They lay the foundation for a plethora of subsequent applications. However, currently, there is no cryptographic hash function that can perfectly satisfy all these properties. They only make those properties very difficult to exist. And perhaps one day, SHA256 will no longer remain secure. Then, we will have a new encryption algorithm</p>
          </div>

          <div>
            <h3>
              Recap
            </h3>
            <ul>
              <li>SHA-256, like all secure cryptographic hash functions, exhibits these six essential properties, further ensuring its reliability and suitability for various applications.</li>
              <li>Those are only the basic of cryptographic hash function. You can find out more <a href='https://www.synopsys.com/blogs/software-security/cryptographic-hash-functions/'>here</a>.</li>
            </ul>
          </div>

          <div>
            <h3>Next</h3>
            <p>In the next chapter, it is a little more difficult. We will explore the mathematic for 2 questions about SHA256</p>
            <ul>
              <li>Why with each data, the hash is unique? </li>
              <li>Why is the output of SHA256 always 256 bits?</li>
            </ul>
          </div>
        </div>
          <button type="button" className='mb-2 btn btn-primary'
              onClick={(e) => onClickButton(e, `pills-mathematic-tab`)}>
            Next
          </button>
      </div>

    </div>
  )
}