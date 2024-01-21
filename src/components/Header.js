import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header flex p-10 justify-between items-center">
      <div className="logo text-xl font-bold">PORTFOLIO</div>
      <div className="navBar">
        <ul className="flex items-center">
          <li className="text-md font-bold mr-6 ml-4 cursor-pointer">
            <Link activeClass="active" to="home" smooth={true} spy={true}>
              Home
            </Link>
          </li>

          <li className="text-md font-bold mr-6 ml-4 cursor-pointer">
            <Link to="about" smooth={true} spy={true}>
              About
            </Link>
          </li>

          <li className="text-md font-bold mr-6 ml-4 cursor-pointer">
            <Link to="work" smooth={true} spy={true}>
              My Work
            </Link>
          </li>

          <li className="text-md font-bold mr-6 ml-4 cursor-pointer">
            <Link to="skills" smooth={true} spy={true}>
              Skills
            </Link>
          </li>

          <li className="text-md font-bold mr-6 ml-4 cursor-pointer">
            <Link to="resume" smooth={true} spy={true}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
