import React from "react";
import "./Footer.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button className="btn-footer">JOIN US</button>
        </div>
        <div className="icons">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Tiktok</div>
          <div>Zalo</div>
          <div>Viber</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
