import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from 'react-icons/io';
import "./contact.css";

const Contact = () => {


    return (
        <div id="contact">
             <div id="contact_icons">
                <a href="mailto:lezongmun@u.nus.edu" target="_blank" rel="noopener noreferrer">
                    <IoMdMail id="mail_icon" className="contact_icon" />
                </a>
                <a href="https://github.com/lezongmun?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub id="github_icon" className="contact_icon" />
                </a>
                <a href="https://www.linkedin.com/in/mun-le-zong/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin id="linkedin_icon" className="contact_icon" />
                </a>
            </div>    
            <div id="contact_text">
                <div id="contact_text_lets" className="contact_text">LET'S </div>
                <div id="contact_text_connect" className="contact_text"> CONNECT. </div>
            </div>
           
        </div>
    )
}

export default Contact;