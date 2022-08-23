import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

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
            <img src={require("../assets/85-852193_computer-icons-index-arrow-pointer-cursor-nice-icon.png")} className="Logo" alt="logo" />
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
                    <a href="/">About Me</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Contact</a>
                    <a href="/">Resume</a>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                🍔
            </button>
        </header>
    );
}