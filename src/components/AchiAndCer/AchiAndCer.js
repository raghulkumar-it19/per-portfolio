import React from 'react'
import {Element} from "react-scroll"
import { useState } from 'react'
import "./AchiAndCer.css"

const CertificationEntry = ({title, issuedBy, date, desc, link}) => (
    <div className="certification__entry">
        <a href={link} target="_blank" rel="noopnner noreferrer">
            <h3>{title}</h3>
            <p>Issued By : {issuedBy}</p>
            <p>Date Issued : {date}</p>
            <p>{desc}</p>
        </a>
    </div>
);

const AchievementEntry = ({title, date, desc, link}) => (
    <div className="achievement__entry">
        <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>Title : {title}</h3>
        <p>Date Issued : {date}</p>
        <p>{desc}</p>
        </a>
    </div>
);


const AchiAndCer = () => {
    const [activeSection, setActiveSection] = useState('certifications');

    const toggleSection = (section) => {
        setActiveSection(section);
    };

    const certificationsData =[
        {
            title:"Crash Course On Python",
            issuedBy:"Coursera",
            date:"**February 2020**",
            desc:"PHP and Mysql || Spoken Tutorial",
            link: "https://drive.google.com/file/d/1U78afqpvQrqEcN8Y1XCWVw7uo0eUW6hi/view?usp=sharing"
        },
        {
            title:"UI/UX Desigining - Pixel Creators",
            issuedBy:"Pixel Creators",
            date:"**March 2021**",
            desc:"UI/UX- Fundamentals",
            link: "https://drive.google.com/file/d/1kPRCazeWalBhBPCA0ALjGVKDv_3ZRDLs/view?usp=sharing" 
        },
        {
            title:"Build a Face Recognition Application Course",
            issuedBy:"GUVI",
            date: "**April 2021**",
            desc:"Artificial Intelligence By Using Python",
            link: "https://drive.google.com/file/d/1lApRkOTkGwNA7sXFPwe5atafu6iM0g2Q/view?usp=sharing"
        },
        {
            title:"Oracle Certified JAVA SE 8 Programmer",
            issuedBy:"Oracle Corporation",
            date:"**March 2023**",
            desc:"Core-Java and Industrial Topics ",
            link: "https://drive.google.com/file/d/1U3wbcxd7tVYo21IYukmgKatzgpSh_awr/view?usp=sharing"
        },
    ]

    const achievementsData = [
        {
            title:"Technicia 2021 - ( Face Mask Detection by using AI )",
            date:"Febrauary 2021",
            desc:"Paper presentation competition conducted by Amity University || Winner",
            link:"https://drive.google.com/file/d/1WoM1UOhEIqOHTYOakjLN-jzi-ayFwaLf/view?usp=sharing"
        },
    ]
  return (
   <Element className="achievements__and__certifications__container" id="achicer">
    <div className="section__toggle">
        <button  className={activeSection === 'certifications' ? 'active' : ''} onClick={() => toggleSection('certifications')}> 
        <h1>Certifications</h1>
        </button>

        <button className={activeSection === 'achievements' ? 'active' : ''} onClick={() => toggleSection('achievements')}> 
        <h1>Achievements</h1>
        </button>
    </div>
    <div className="details__container">
        {activeSection === 'certifications' && (
            <div className="certifications__details">
                {certificationsData.map((certificate) =>(
                    <CertificationEntry {...certificate}/>
                ))}
            </div>
        )}
        {activeSection === 'achievements' && (
            <div className="achievements__details">
                {achievementsData.map((achievement) =>(
                    <AchievementEntry {...achievement}/>
                ))}
            </div>
        )}
    </div>
   </Element>
  )
}

export default AchiAndCer 
