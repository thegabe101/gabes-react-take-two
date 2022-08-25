import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import getContactData from "../data/contactData";
import { useEffect, useState } from 'react';
import Header from './Header';
import profilePicture from '../images/J Wedding Cropped.jpg';

export default function Contact(props) {
    let contact = getContactData();
    // const [nameText, setNameText] = useState("");
    // const [emailText, setEmailText] = useState("");
    // const [messageText, setMessageText] = useState("");
    // const submitHandler = e => {
    //     e.preventDefault();
    //     props.addContactInfo({
    //         name: myName,
    //         email: email,
    //         message: message
    //     })
    //     setNameText("");
    //     setEmailText("");
    //     setMessageText("");
    // }

    return (
        <div className="App">
            <Header />
            {/* <form className="addContactInfo" onSubmit={submitHandler}>
                <input name="name" placeholder="My name" value={nameText} onChange={e => setName(e.target.value)} />
                <input name="email" placeholder="My email" value={emailText} onChange={e => setEmail(e.target.value)} />
                <input name="message" placeholder="Message here" value={messageText} onChange={e => setMessage(e.target.value)} />
                <button>Submit contact Info</button>
            </form> */}
            <div className="contact">
                <h2>Gabe's Contact Info</h2>
                {contact.map((contactDat) => (
                    <h2
                        to={`/Contact/${contactDat.nameFirst}`}>
                        {contactDat.nameFirst}{' '}
                        {contactDat.nameLast}{' '}
                        {contactDat.email}{' '}
                        {contactDat.phoneNumber}{' '}
                        {contactDat.references}</h2>
                ))}
            </div>
        </div>
    );
};


