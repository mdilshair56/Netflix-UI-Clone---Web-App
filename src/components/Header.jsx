import React from "react";
import Button from 'react-bootstrap/Button';


function Header() {

  // const customStyles = ({
  //   width: "15rem",
  //    height:"5rem",
  //    position:"absolute"
  // });

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
  <a class="navbar-brand" href="https://www.netflix.com/pk/login"><img src="/images/netflix-nav-logo.png" alt="Netflix-Brand" class="navbar-img"  /></a>
      {/* <span class="navbar-toggler-icon"></span> */}
      <div className="col-lg-12">

      <style type="text/css">
        {`

     .btn-sm {
      color: #fff;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    } 
    .btn-flate {
  background-color: rgb(229,9,20);
  color: white;
  font-weight: 700;
}
.btn-flate:hover {
  background-color:  rgb(193,17,25);
  color: white;
  transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);

}
    `}
      </style>

      <Button href="https://www.netflix.com/pk/login" variant="flate" size="md" className="signIn">
        Sign In
      </Button>
      </div>
  </div>
</nav>
    </header>
  );
}

export default Header;
