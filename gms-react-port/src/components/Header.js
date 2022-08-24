// import React from 'react';
// import Nav from './Nav';

// function Header() {
//     return (
//         <header>
//             <Nav />
//         </header>
//     );
// }



import React, { useState, useEffect, Component } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
// import { Route, Redirect, HashRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
//will need to make a number of component imports here based on what we are linking in our navbar
// import Contact from "./Contact.js";
// import AboutMe from "./AboutMe.js";
// import Resume from './Resume.js';
// import Portfolio from "./Portfolio.js";

//use state imported from react above
export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    //Does it match the media query or not? 
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    //use a callback so that each time the component is rendered the dom is updated. IF the value changes, then run the callback, if and only if the values change
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    //handles burger button; sets nav visibility to true only if isNavVisible set to true
    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <img src={require("../images/261-2613754_black-and-white-trees-png-tree-silhouette-transparent.png")} className="Logo" alt="logo" />
            <CSSTransition
                //manages header visibility
                //chooses whether to shown the component or not
                in={!isSmallScreen || isNavVisible}
                //duration of the transition, might lower this
                timeout={300}
                //unmount component after exiting
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <a href='#myname' id="myName">My name is Gabriel Sowa. </a>
                    <a href='#aboutme'>About Me</a>
                    <a href='#portfolio'>Portfolio</a>
                    <a href='#contact'>Contact</a>
                    {/* <Route path='/contact' component={Contact} Contact /> */}
                    {/* <NavLink to='/Contact'>Contact</NavLink> */}
                    <a href='#resume'>Resume</a >
                </nav >
            </CSSTransition >
            <button onClick={toggleNav} className="Burger">
                🍔
            </button>
        </header >
    );
}

// export default Header;
