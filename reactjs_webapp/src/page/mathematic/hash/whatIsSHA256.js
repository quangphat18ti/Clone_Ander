import React, {useEffect} from 'react';
import SHA256_Image from './imgs/Sha256.png';
import onClickButton from './onClickButton';

export default function WhatIsSHA256() {
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[])
  
  const data = "$$SHA-256: \\{0, 1\\}^* \\rightarrow \\{0, 1\\}^{256}$$";
  return (
    <div className="container m-auto">
      <div className="card markdown-body comment-inner comment-enabled" data-hard-breaks="false">
        <h2 id="What-is-SHA256" data-id="What-is-SHA256" className="card-header">What is SHA256?</h2>
        <div className="card-body">
          <ul>
            <li><span><strong>SHA-256 (Secure Hash Algorithm)</strong> is a cryptographic hash function with digest length of 256 bits.</span></li>
            <li><span>SHA-256 is used to map the data of arbitrary size to generate an output of a fixed size - </span><strong><span>256 bits</span></strong><span>, usually called the Hash Digest or Hash Value. And this process is called Hash a message.</span></li>
            <li><span>The final hash value is a </span><strong><span>unique</span></strong><span> representation of the original message, and </span><strong><span>cannot be reversed</span></strong><span>.</span></li>
          </ul>
          {data}
          <div className="row justify-content-center">
                <img src={SHA256_Image} style={{width: "50%"}} alt="SHA256"/>
          </div>
          <div>
            <h4>Recap</h4>
            <ul>
              <li>SHA256 can create a <strong>"signature"</strong> for a original message with only 256 bits.</li>
              <li>It can not be reversed to find original message. </li>
            </ul>
            <h4> Next </h4>
            <ul>
              {/* <li>Because of, it is a cryptographic hash function (CHF). So It is also has 6 special properties.</li>
              <li>We will find out this in the next chapter.</li> */}
              <li>Now that you have grasped the concept of the SHA-256 hash function, please contemplate how to apply it to our daily lives. Maybe you will get some interesting idea. Try it!!!</li>
              <li>In the upcoming chapter, we will unveil two fundamental applications of SHA-256, along with various other cryptographic hash functions, in real-life scenarios. Get ready to embark on an exciting journey of discovery. </li>
              <li><strong>Click the 'Next' button below to proceed.</strong></li>
            </ul>
          </div>
        </div>
      <button type="button" className='mb-2 btn btn-primary'
              onClick={(e) => onClickButton(e, `pills-Applications-tab`)}>
          Next
      </button>
    </div>

    </div>
  )
}