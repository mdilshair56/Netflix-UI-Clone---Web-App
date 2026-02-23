import React from "react";

function Footer() {
 
  return (
    <footer className="footer">
      <div> 
      <ul className="row1">
      
        <a href="#home" className="link1"><p className="footer-text1">Questions? Contact us.</p></a>
       
        
        <a href="#home" className="link1"><p className="footer-text1">FAQ</p></a>
        
       
        <a href="#home" className="link1"><p className="footer-text1">Investor Relations</p></a>
        
        
        <a href="#home" className="link1"><p className="footer-text1">Speed Test</p></a>
        
        <div class="dropdown">
       <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       <span className="footer-text1"><span class="material-symbols-outlined">translate</span>English</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item " href="#home">English</a></li>
  </ul>
</div>
<br/>
<a href="#home" className="link1"><p className="footer-text1">Netflix Pakistan</p></a>

        </ul>
        <div className="col-2 row2">
        <ul className="row">

        <a href="#home" className="link1"><p className="footer-text1">Help Center</p></a>
        
        <a href="#home" className="link1"><p className="footer-text1">Jobs</p></a>
        
        <a href="#home" className="link1"><p className="footer-text1">Cookie Preferences</p></a>

        <a href="#home" className="link1"><p className="footer-text1">Legal Notices</p></a>

        </ul>
        </div>
        <div className="col-2 row3">
        <ul className="row">

        <a href="#home" className="link1"><p className="footer-text1">Account</p></a>
        
        <a href="#home" className="link1"><p className="footer-text1">Ways to Watch</p></a>
        
        <a href="#home" className="link1"><p className="footer-text1">Corporate Information</p></a>

        <a href="#home" className="link1"><p className="footer-text1">Only on Netflix</p></a>

        </ul>
        </div>
        <div className="row4">
        <ul className="row">

        <a href="#home" className="link1"><p className="footer-text1">Media Center</p></a>
        
        <a href="#home" className="link1"><p className="footer-text1">Terms of Use</p></a>
        
        <a href="#home" className="link1"><p className="footer-text1">Contact Us</p></a>

        </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
