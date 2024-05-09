import React from 'react'
import {Link} from "react-scroll"
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <h1>Raghul<span>kumar</span></h1>
        </div>
        <div className="header__right">
            <Link to="about" smooth={true} duration={500}>
                <h4>About me</h4>
            </Link>

            <Link to="skills" smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>

            <Link to="projects" smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>

            <Link to="achicer" smooth={true} duration={500}>
                <h4>Achi and Cer</h4>
            </Link>

            <Link to="acd" smooth={true} duration={500}>
                <h4>AcademicHistory</h4>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
                <h4>Contact me</h4>
            </Link>

            {/* <h4 className="header__rightButton">
                Join With Me
            </h4> */}
        </div>
    </div>
  )
}

export default Header