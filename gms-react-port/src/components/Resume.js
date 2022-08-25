import React from "react";
import Header from "./Header";
import './Resume.css';
import './Footer.js';
import './Footer.css';
import Footer from "./Footer.js";
import resumePhoto from '../images/J Wedding Cropped.jpg';
import mongoDB from '../images/mongodb.png';
import js from '../images/javascript2.png';
import css from '../images/css.png';
import html5 from '../images/html5.png';
import mysql from '../images/mysql.png';

export default function Resume() {
    return (
        <div>
            <Header />
            <div className="resumePhoto">
                <a href="https://docs.google.com/document/d/1F-RdjKE3HB8b7B8XwldjqBCBfhzF8X4pzms0GLDetg0/edit"><img src={resumePhoto} alt="a smiling portrait photo in formal clothing" /></a>
                <div className="resume_content">
                    <h2>Click here for a closer look at my resume.</h2>
                    <p>Or check out some of the programming languages I am comfortable with:</p>
                </div>
            </div>
            <div className="programmingLanguages">
                <img className="programmingLanguages" src={html5}></img>
                <img className="programmingLanguages" src={js}></img>
                <img className="programmingLanguages" src={css}></img>
                <img className="programmingLanguages" src={mysql}></img>
                <img className="programmingLanguages" src={mongoDB}></img>
            </div>
        </div>
    );
}