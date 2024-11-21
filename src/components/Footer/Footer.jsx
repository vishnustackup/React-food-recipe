import React from "react";
import "./Footer.scss";
import {SocialIcon} from 'react-social-icons'
function Footer() {
  return (
    <footer className={"footer bg-orange"}>
      <div className="container w-100">
        <div className=" text-white">
          <div className='brand-and-toggler flex align-center justify-between '>
            <h5>Must Try.</h5>
            
            <div className="social-icons flex align-center justify-between ">
            <SocialIcon url="https://twitter.com"/>
            <SocialIcon url="https://instagram.com"/>
            <SocialIcon url="https://facebook.com"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
