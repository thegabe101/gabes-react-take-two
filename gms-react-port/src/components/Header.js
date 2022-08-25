import React, { useState, useEffect, Component } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { Contact } from "./Contact.js";
import { Link } from "react-router-dom";
// import { Route, Redirect, HashRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
//will need to make a number of component imports here based on what we are linking in our navbar
// import Contact from "./Contact.js";
// import AboutMe from "./AboutMe.js";
// import Resume from './Resume.js';
// import Portfolio from "./Portfolio.js";

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//clean test function header below

export default function Header() {
    // const [isOpen, setOpen] = useState(false);
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <Link to='/'><img src={require("../images/261-2613754_black-and-white-trees-png-tree-silhouette-transparent.png")} className="Logo" alt="logo" /></Link>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={300}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav is-primary" role="navigation" aria-label="main navigation">
                    <a href="#">My name is Gabriel Sowa.</a>
                    <Link to='/Portfolio'>Portfolio</Link>
                    <Link to='/Resume'>Resume</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/Contact'>About Me</Link>
                </nav >
            </CSSTransition >
            <button onClick={toggleNav} className="Burger">
                🍔
            </button>
        </header >
    );
}

// ------------------------------------------------------------------------------------------------------------------------------------------





































//test function below

//use state imported from react above
// export default function Header() {
//     const [isOpen, setOpen] = useState(false);
//     const [isNavVisible, setNavVisibility] = useState(false);
//     //Does it match the media query or not?
//     const [isSmallScreen, setIsSmallScreen] = useState(false);

//     //use a callback so that each time the component is rendered the dom is updated. IF the value changes, then run the callback, if and only if the values change
//     useEffect(() => {
//         const mediaQuery = window.matchMedia("(max-width: 700px)");
//         mediaQuery.addListener(handleMediaQueryChange);
//         handleMediaQueryChange(mediaQuery);

//         return () => {
//             mediaQuery.removeListener(handleMediaQueryChange);
//         };
//     }, []);

//     const handleMediaQueryChange = mediaQuery => {
//         if (mediaQuery.matches) {
//             setIsSmallScreen(true);
//         } else {
//             setIsSmallScreen(false);
//         }
//     };

//     //handles burger button; sets nav visibility to true only if isNavVisible set to true
//     const toggleNav = () => {
//         setNavVisibility(!isNavVisible);
//     };

//     return (
//         <header className="Header">
//             <img src={require("../images/261-2613754_black-and-white-trees-png-tree-silhouette-transparent.png")} className="Logo" alt="logo" />
//             <CSSTransition
//                 //manages header visibility
//                 //chooses whether to shown the component or not
//                 in={!isSmallScreen || isNavVisible}
//                 //duration of the transition, might lower this
//                 timeout={300}
//                 //unmount component after exiting
//                 classNames="NavAnimation"
//                 unmountOnExit
//             >
//                 <nav className="Nav is-primary" role="navigation" aria-label="main navigation">
//                     {/* <div className="navbar-brand">
//                         <a
//                             role="button"
//                             className={`navbar-burger burger ${isOpen && "is-active"}`}
//                             aria-label="menu"
//                             aria-expanded="false"
//                             onClick={() => setOpen(!isOpen)}
//                         >
//                             <span aria-hidden="true"></span>
//                             <span aria-hidden="true"></span>
//                             <span aria-hidden="true"></span>
//                         </a>
//                     </div> */}
//                     {/* <div className={`navbar-menu ${isOpen && "is-active"}`}>
//                         <div className="navbar-start"> */}
//                     <a href='#myname' id="myName">My name is Gabriel Sowa. </a>
//                     <a href='#aboutme'>About Me</a>
//                     <a href='#portfolio'>Portfolio</a>
//                     <a href='#contact'>Contact</a>
//                     {/* <Link to={Contact}>Contact</Link> */}
//                     {/* <NavLink className='navbar-item' activeClassName="is-active" to="/contact">Contact</NavLink> */}
//                     {/* <Route path='/contact' component={Contact} Contact /> */}
//                     {/* <NavLink to='/Contact'>Contact</NavLink> */}
//                     <a href='#resume'>Resume</a >
//                     {/* </div>
//                     </div> */}
//                 </nav >
//             </CSSTransition >
//             <button onClick={toggleNav} className="Burger">
//                 🍔
//             </button>
//         </header >
//     );
// }

// export default Header;
