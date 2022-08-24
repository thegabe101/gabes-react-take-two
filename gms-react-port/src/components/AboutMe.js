import React from 'react';
import "./AboutMe.css"


function aboutMe(props) {
    return (
        <section>
            <div className="column">
                <figure className="flex">
                    <div></div>
                    <div className="aboutMeStuff">
                        <h3>About me</h3>
                        <p>I am a fullstack web developer from Seattle, Washington. My passion is making practical websites that reflect my love of the outdoors, photography, and a stress-free life.</p>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default aboutMe;