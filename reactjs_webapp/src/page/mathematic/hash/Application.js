import React, {useEffect} from 'react';
import onClickButton from './onClickButton';
import story1_img from './imgs/story1.jpg';
import story2_img from './imgs/story2.png';

export default function PropertiesOfCryptoHashFunction() {
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  },[])
  
  return (
    <div className="container m-auto">
      <div className="card markdown-body comment-inner comment-enabled" data-hard-breaks="false">
        <h2 className="card-header">Applications</h2>
        <div className="card-body">
          <div data-id="story1" >
            <h4>Introduction</h4>
            <p>Within the content of this chapter, we will embark together on a journey through two narratives, each highlighting fundamental applications of SHA-256 in real-life scenarios. Let's delve into these stories with anticipation and enthusiasm. Let's begin!</p>
            <h4> Story 1: Bank and Hacker </h4>
            <p> In today's world, we have become quite accustomed to the routine of withdrawing cash from an ATM. Whenever you run low on funds, you instinctively seek out the nearest ATM. You punch in your account's PIN, and voilà, your money is dispensed. But have you ever wondered: How is your account's PIN stored when you sign up for a bank account? Is it simply jotted down in the database, verbatim? </p>
            <p>Imagin this, a beautiful day, and you're strolling down the street. Out of nowhere, you catch an emergency alert from your bank: "Someone has gained unauthorized access to the bank's database. Your PIN information might have been compromised." Instantly, a rush of urgency sweeps over you, and you find yourself sprinting to the bank, racing against the clock to change your PIN. (Even though you're unsure whether this change itself could be compromised.) It's a situation no one wants to be in.</p>
            <p>So right at this moment, what you need is a tool that can <strong>hide your information while retaining the ability to authenticate</strong> you when you enter your PIN. And that's precisely where SHA256 comes into play.</p>
            <p>The bank will hash your PIN to store it securely. This ensures that even if someone glimpses the hash of your PIN, they won't be able to deduce your actual PIN. Moreover, user authentication during withdrawals becomes remarkably simple. The bank just needs to hash the PIN you enter and match it against the stored data. If they align, the transaction is verified, and you can proceed with your withdrawal.</p>
            <div className="row justify-content-center">
                <img src={story1_img} style={{width: "40%"}} alt="Bank and Hacker"/>
            </div>
          </div>

          <br/>
          <div data-id="story2" >
            <h4> Story 2:  Unveiling the Power of SHA-256: A Tale of Precision in Uncovering Differences </h4>
            <p>Imagine, on a fateful day, you are entrusted with an immensely significant and elevated task. Successfully accomplishing this endeavor would not only ensure your promotion but also propel you to the coveted position of a department head.</p>
            <p>Your superiors present you with two contracts from exceedingly vital partners. Astonishingly, these contracts appear strikingly identical at first glance. Your mission is to determine whether these contracts are truly alike or not. How would you approach this challenge?</p>
            <p>Perhaps, you might meticulously examine each word between the two contracts to discern any disparities. However, the documents are of substantial length, and they differ only in a single character amidst a vast sea of text. Undoubtedly, this poses an arduous trial, doesn't it? In this situation, what approach would you take?</p>
            <p>And it's a piece of cake if you apply SHA-256. Now, let's apply SHA-256 into the equation. You decide to hash these two documents. In doing so, you obtain two 256-bit strings, representing the essence of the respective messages. Suddenly, doesn't the task of comparison become remarkably simpler? Moreover, a slight alteration, even a minor character change, would result in a vastly distinct hash value. (It will be mention in next chapter)</p>
            <p> <strong>Please note that for any given text, there exists a unique hash value to represent it.</strong> (As explained in 'What is SHA-256')</p>
            <br/>
            <div className="row justify-content-center">
                <img src={story2_img} style={{width: "50%"}} alt="Unveiling the Power of SHA-256: A Tale of Precision in Uncovering Differences"/>
            </div>
            <p>With its remarkable efficiency in comparing two messages, this property of SHA-256 finds extensive applications. Particularly noteworthy is its use in verifying the integrity of files during transmission over the internet.</p>
          </div>

          <h3>Recap</h3>
          <p>And just now, we have journeyed through two core applications of SHA256 with two incredibly fascinating narratives.</p>
          <ul>
            <li>Hide your important information like: Password, PIN,...</li>
            <li>Verify the integrity</li>
          </ul>
          <p>Furthermore, there exists a multitude of applications, particularly within the realm of Blockchain. You can explore articles on the internet to gain a deeper understanding of its various applications.</p>
        
          <h3>Next</h3>
          <p>In the next chapter, we will introduce about 6 properties of the SHA256 and all secure cryptographic hash function.</p>
          <p>That is necessary to start delving deeper into the foundation of SHA256.</p>
        </div>
        <button type="button" className='mb-2 btn btn-primary'
              onClick={(e) => onClickButton(e, `pills-6ProperCHF-tab`)}>
          Next
      </button>
      </div>

    </div>
  )
}