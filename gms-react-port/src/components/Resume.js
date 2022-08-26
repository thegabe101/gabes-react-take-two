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
import './Portfolio.css';
// import { FaBeer } from 'react-icons/fa';
import { DiHtml5 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { IconContext } from "react-icons";

export default function Resume() {
    return (
        <div className="body">
            <Header />
            <div className="trueBody">
                <h2 className="portfolioTitle">Click the photo for a closer look at my resume.</h2>
                <div className="resumePhoto">
                    <a href="https://docs.google.com/document/d/1F-RdjKE3HB8b7B8XwldjqBCBfhzF8X4pzms0GLDetg0/edit?usp=sharing"><img src={resumePhoto} alt="a smiling portrait photo in formal clothing" /></a>
                    <div className="resume_content">
                        <p>Or check out some of the programming languages I am comfortable with- HTML5, Javascript, CSS, MySQL, and NoSQL/MongoDB.</p>
                    </div>
                </div>
                <div className="languages">
                    <h1 className="languageIcon"><DiHtml5 />{' '} HTML5: The standard markup language for most modern webpages.</h1>
                    <h1 className="languageIcon"><DiJavascript1 />{' '}Javascript: Core task-oriented language of the world-wide web.</h1>
                    <h1 className="languageIcon"><DiCss3 />{' '}CSS3: Stylesheet used to describe the visual presentation of a document.</h1>
                    <h1 className="languageIcon"><DiMysql />{' '}MySQL: The most popular opensource relational database system. </h1>
                    <h1 className="languageIcon"><DiMongodb />{' '}NoSQL/MongoDB: Flexible schema-oriented database system.</h1>
                </div>
                {/* <div className="languages">
                    <div>
                        <img className="programmingLanguages" src={html5}></img>
                    </div>
                    <div>
                        <img className="programmingLanguages" src={js}></img>
                    </div>
                    <img className="programmingLanguages" src={css}></img>
                    <img className="programmingLanguages" src={mysql}></img>
                    <img className="programmingLanguages" src={mongoDB}></img>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}