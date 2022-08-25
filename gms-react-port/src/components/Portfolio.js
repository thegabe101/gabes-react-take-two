import React from "react";
import Header from "./Header";
import './Portfolio.css';
import dog4you from '../images/dog4youlogo.png';
import shelfspace from '../images/shelfspacesmol.png';
import workdayscheduler from '../images/workdayscheduler.jpg';
import notetaker from '../images/notetaker.png';
import Footer from './Footer';
import './Footer.css';



export default function Portfolio() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Header />
      <h2 className="portfolioTitle">If you'd like to view my work, check out some of my projects here, or contact me for more.</h2>
      <div class="container">
        <div class="card">
          {/* <h3 class="title">Dog for You</h3> */}
          <img src={dog4you}></img>
        </div>
        <div class="card">
          <img src={shelfspace}></img>
          {/* <h3 class="title">shelfspace</h3> */}
        </div>
        <div class="card">
          <img src={notetaker}></img>
        </div>
        <div class="card">
          <h3 class="title">Future project here...</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}