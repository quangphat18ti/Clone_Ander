import React, {useEffect} from 'react';
import Merkle_img from './imgs/Merkle.png';
import SHA256Compression_img from './imgs/SHA256-Compression.jpg';
import onClickButton from './onClickButton';

export default function Mathematic() {
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[])
  
  return (
    <div className="container m-auto">
      <div className="card markdown-body comment-inner comment-enabled" data-hard-breaks="false">
        <h2 className="card-header">Mathematic</h2>
        <div className="card-body">
          {/* Intro */}
          <div data-id='introduction'>
            <h4>Introduction</h4>
            <p>In this chapter, we will find answer for two questions:</p>
            <ul>
              <li>Why is the output of SHA256 always $256$ bits?</li>
              <li>Why with each data, the hash is unique? </li>
            </ul>
          </div>

          {/* Fix-length */}
          <div data-id='fix-length'>
            <h4>Fixed Length 256 bits Mathematic</h4>
            <ul>
              <li> A hash function must be able to process an arbitrary-length message into a fixed-length output. And it is the same with SHA256.
                    And to know why it can make fix-length, we need to discover about how it solve data input.
              </li>
              <li id="accordion">
                <a class="card-link" data-toggle="collapse" href="#merkle-construction" style={{color: "black"}}>
                  SHA256 is built with <a href='https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction'>Merkle–Damgård construction</a>. Overall about it:   
                </a>

                <div id="merkle-construction" class="collapse show" data-parent="#accordion">
                  <ul>
                    <li> Initially, SHA256 will initialize the hash with a default value of $256$ bits.</li>
                    <li>With any given input data, the algorithm will automatically add padding to make the input length a multiple of $512$ bits. SHA256 then proceeds to divide the input data into a sequence of blocks, each block having a fixed length of $512$ bits.</li>
                    <li>There is an extremely unique function, the <strong>one-way compression function</strong>, denoted by $F$, which transforms two fixed-length inputs into an output of the same size as one of the inputs.</li>
                    <li> Function $F$ takes two parameters: the current Hash value and the content of the current Block. The value of the Block, consisting of $512$ bits, contributes as a parameter to cause the $F$ function to alter the value of the Hash. </li>
                    <li>And when reaching the final Block, the Hash value for the entire document is generated.</li>
                  </ul>
                </div>
                <div className="row justify-content-center">
                    <img src={Merkle_img} style={{width: "50%"}} alt="Merkle–Damgård construction"/>
                </div>
              </li>
              <li>
                In essence, the Hash value is continuously updated with each block. 
                However, due to the characteristic of the one-way compression function, the length of the Hash remains unchanged. 
                This is why, for every input data, the resulting Hash value always has $256$ bits.
              </li>
            </ul>
          </div>

          <div data-id='anti-collisuib'>
            <h4>Anti-Collision Mathematic</h4>
            <ul>
              <li>
                <div id="accordion">
                  <a class="card-link" data-toggle="collapse" href="#collapseOne" style={{color: "black"}}>
                    The property that we need to understand here is Anti-Collision. (Mentioned in Chapter 3)
                  </a>

                  <div id="collapseOne" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                     <strong>Anti-collision</strong>:  It shouldn’t produce collisions, which are when two or more inputs generate the same hash.
                      <div>
                      $$ \nexists m_1, m_2\ |\ h(m_1) = h(m_2) $$
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            
              <li>
                <span>We know that: SHA-256 is used to map the data of arbitrary size to generate an output of a fixed size - $256$ bits. 
                  The input set is infinite while the output is only 2<sup>256</sup> cases. 
                  The map between a bigger set to a smaller set is not one-to-one. So, there are many inputs that map to the same output.
                  Howerver, SHA256 was created to make Anti-Collision as difficult as possible.
                </span>
              </li>
              <li>
                From a study research about <a href='https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction#Security_characteristics'>Merkle–Damgård construction</a>, they proved that: 
                if the <strong>one-way compression function</strong> $F$ is collision resistant, then so is the hash function constructed using it. So we need to prove that the one-way compression function is collision resistant.
              </li>
              <div className="row justify-content-center">
                    <img src={SHA256Compression_img} style={{width: "60%"}} alt="SHA256 Compression Function"/>
              </div>
            </ul>
            <div id="accordion">
                <a class="card-link" data-toggle="collapse" href="#SHA256-Compress-Function" style={{color: "black"}}>
                  Overall about SHA256 Compression Function ($F$):
                </a>

                <div id="SHA256-Compress-Function" class="collapse show" data-parent="#accordion">
                  <ul>
                    <li> Initially, SHA256 will initialize the hash with a default value of $256$ bits; is divided into $8$ variables and each variable is $32$ bytes. </li>
                    <li>Function $F$ takes two parameters: the current Hash value and the content of the current Block. The value of the Block, consisting of $512$ bits, contributes as a parameter to cause the $F$ function to alter the value of the Hash. </li>
                    <li>With $512$ bits of parameter, it divide into $16$ <strong>words</strong>, each word is $32$ bits. And from $16$ words, it construction an array of $64$ words - $32$ bits.</li> 
                    <li>$64$ words above with $64$ keys const value are the parameters for $64$ rounds of compression function. </li>
                    <li>Each round involves numerous mathematical formulas using nonlinear functions such as bitwise rotation, bitwise shifting, etc., performed on integer variables of $32$ bits. 
                      And end of the each round, the result of $8$ variables are change together. (Like a picture above)
                    </li>
                    <li>With its intricate compression function, SHA256 has successfully passed NIST's tests and is recognized as a secure cryptographic hash function.</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}