import React from "react";
import "./Contact.css";
import contactData from "../data/contactData";
import { useEffect, useState } from 'react';

function Contact() {
    const { users } = contactData;
    let index = 0;

    const [user, setUser] = useState(users[index]);

    return (
        <div className="App">
            <div className="contact">
                <p>First Name: {user.nameFirst}</p>
                <p>Last Name: {user.nameLast}</p>
                <p>eMail: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <p>References: {user.references}</p>
            </div>
        </div>
    );
};


export default Contact;