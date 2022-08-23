// import React from 'react';
import './Header.css';
//to manage header visibility
import React, { useState } from 'react';

//going to try making a header first. if I can get a header to function with h refs linking nowhere will be satisfied as a first react step. 
export default function Header() {
    const [navVisibleQ, setNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // useEffect(() => {
    //     const mediaQuery = window.matchMedia("(max-width: 700px)");
    //     mediaQuery.addListener(handleMediaQueryChange);
    //     handleMediaQueryChange(mediaQuery);

    //     return () => {
    //         mediaQuery.removeListener(handleMediaQueryChange);
    //     };
    // }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    //if the nav is not visible, we will toggle it on
    const toggleNav = () => {
        setNavVisible(!navVisibleQ);
    };


    //idea here will be to ONLY show nav bar IF the navVisibleQ state is set to true
    return (
        <header className='Header'>
            <img src={require("../assets/85-852193_computer-icons-index-arrow-pointer-cursor-nice-icon.png")} className='Logo' alt="just a logo" />

            in={!isSmallScreen || navVisibleQ}
            timeout={350}
            classNames='NavAnimation'
            unmountOnExit

            <nav className='Nav'>
                <a href='/'>About Me</a>
                <a href='/'>Portfolio</a>
                <a href='/'>References</a>
            </nav>

            <button onclick={toggleNav} className="Burger"></button>
        </header >
    );
};