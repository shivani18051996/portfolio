import React from "react";
import ReactTyped from "react-typed";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";

import "animate.css";

const Home = () => {
  return (
    <div className="section-home mt-12 mb-8">
      <h1 className="text mb-6">
        <span className="title text-7xl font-bold">Hello , I am </span>
        <span className="nameText text-6xl text-blue-400 font-bold">
          Shivani Trivedi
        </span>
      </h1>
      <div className="">
        <h2 className="text-type text-gray-500 mb-6">
          <ReactTyped
            className="text-3xl font-bold"
            strings={[
              "Front End Developer",
              "Problem-Solving Skills",
              "React js Developer",
            ]}
            typeSpeed={100}
            loop
            backSpeed={60}
            cursorChar="|"
            showCursor={true}
          />
        </h2>
        <div className="w-2/4 m-auto text-xl text-gray-600 font-bold">
          <div className="animate__animated  animate__slideInRight summaryText">
            Passionate and creative Frontend Developer having proficiency in
            MERN Stack.
          </div>
          <div className="animate__animated  animate__slideInLeft summaryText">
            Have problem-solving skills and the ability to perform well in a
            team & challenging work environment.
          </div>
        </div>
        <div className="social-icons flex justify-center mt-7 mb-7">
          <a href="#" className="mx-3">
            <LinkedIn/>
          </a>
          <a href="#" className="mx-3">
            <Github/>
          </a>
          <a href="#" className="mx-3">
            <Mail/>
          </a>
        </div>
        <div>
            <button type="button" className="border-2 border-gray-600 px-6 btn-resume">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
