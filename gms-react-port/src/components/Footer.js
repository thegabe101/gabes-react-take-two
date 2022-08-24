import React from "react";
import "./Footer.css";
import image2 from "../images/Popular_Social_Media-22-512.png";
import image3 from "../images/25231.png";
import gmailImg from "../images/Gmail-Logo.wine.png";

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/gabriel-sowa-72220b12/" target="_blank"><img className="linkedIn" src={image2} style={{ height: 35 }} alt='an icon'></img></a>
            <a href="https://github.com/thegabe101"><img className="gitHub" src={image3} style={{ height: 35 }} alt='an icon'
            ></img></a>
            <a href="mailto: sowa332@gmail.com"><img className="gmail" src={gmailImg} style={{ height: 35 }} alt='an icon'></img></a>
        </div>
    );
};


export default Footer;