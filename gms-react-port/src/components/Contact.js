import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import getContactData from "../data/contactData";
import { useEffect, useState } from 'react';
import Header from './Header';
import profilePicture from '../images/J Wedding Cropped.jpg';

function Contact() {
    let contact = getContactData();

    return (
        <div className="App">
            <Header />
            <figure className="profilePicture">
                <img src={profilePicture} alt="a smiling profile photo in formal clothing"></img>
            </figure>
            <div className="contact">
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


export default Contact;