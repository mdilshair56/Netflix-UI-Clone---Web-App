import React from "react";
import EmailForm from "./EmailForm";
import "./styles/styles.css";
import "./styles/Responsiveness.css";

function FirstSection() {
  return (
   <div className="section-1">
    <img src="/images/img-1.jpg" alt="Desktop Banner" class="img1" />
    <div className="section1-content">
    <h1 className="heading1">Unlimited Movies, TV Shows, and More</h1>
    <p className="h1-sub">Watch anywhere. Cancel anytime</p>
    <p className="readyTo-watch">Ready to watch? Enter your email to create or restart your membership.</p>
    <EmailForm />
    </div>
   </div>
  );
}

export default FirstSection;