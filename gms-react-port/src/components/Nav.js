import React from "react";

function Nav() {
    return (
        <nav className="main-nav">
            <div className="container">
                <div>
                    <h1>Gabe&nbsp;Sowa</h1>
                </div>
                {/*nowhere to link yet for these future pages; dummy links*/}
                <a href="#aboutme">About Me</a>
                <a href="#resume">Resume </a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
};

export default Nav;