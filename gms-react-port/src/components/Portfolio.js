import React from "react";
import Header from "./Header";
import './Portfolio.css';
import dog4you from '../images/dog4youlogo.png';
import shelfspace from '../images/shelfspacesmol.png';
import workdayscheduler from '../images/workdayscheduler.jpg';
// import notetaker from '../images/notetaker.png';
import notetaking from '../images/note-taking.png';
import Footer from './Footer';
import './Footer.css';



export default function Portfolio() {
  return (
    <>
      <div>
        <Header />
        <h2 className="portfolioTitle">If you'd like to view my work, check out some of my projects here, or contact me for more.</h2>
        <div className="container">
          <div className="card">
            {/* <h3 class="title">Dog for You</h3> */}
            <a href="https://thegabe101.github.io/Project-1-Rainer-Matt-Ming-Gabe/"><img className="card" src={dog4you}></img></a>
          </div>
          <div className="card">
            <a href="https://shelf-space.herokuapp.com/"><img src={shelfspace}></img></a>
            {/* <h3 class="title">shelfspace</h3> */}
          </div>
          <div className="card">
            <a href="https://express-note-taker-gabe-2.herokuapp.com/"><img classname="card" src={notetaking}></img></a>
          </div>
          <div className="card">
            <img></img>
          </div>        <div className="card">
            <img></img>
          </div>
          <div className="card">
            <h3 className="title">Future project here...</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}