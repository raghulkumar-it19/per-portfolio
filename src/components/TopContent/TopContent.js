import React from 'react'
import {Link} from "react-scroll"
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr. Raghulkumar R</h1>
            <p>Embark on my career journey with exciting entry-level opportunities</p>
            <a href="https://drive.google.com/file/d/1TcVwSaFFkA-0bIOVilhbOh7tvXpusMBl/view" target="_blank" rel="noreferrer">
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My work</button>
            </Link>
        </div>

    </div>
  )
}

export default TopContent