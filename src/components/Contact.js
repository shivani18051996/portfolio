import React from "react";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";
import { Link } from "react-scroll";
const Contact = () => {
  return (
    <>
      <div className="text-4xl font-bold text pt-8 mb-10">
        <span>Get In </span>
        <span className="text-blue-400">Touch</span>
      </div>
      <div className="flex items-center justify-center mb-16">
        <a href="https://github.com/shivani18051996">
          <LinkedIn className="w-16 h-16 mr-7"/>
        </a>
        <a href="https://github.com/shivani18051996">
          <Github className="w-16 h-16 mr-7" />
        </a>
        <a href="">
          <Mail className="w-16 h-16" />
        </a>
      </div>
      <div className="copyright text-xl font-bold text pb-10">
        <span> Made By </span>
        <span className="text-blue-400"> SHIVANI TRIVEDI</span>
      </div>
    </>
  );
};

export default Contact;
