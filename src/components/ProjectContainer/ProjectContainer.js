import React from 'react'
import {Element} from "react-scroll"
import Project from '../Project/Project';
import "./ProjectContainer.css"

const ProjectContainer = () => {
    const projects = [
        {
            img :"https://coderaptor.org/portfolio/solar-system/screen4.png",
            title :"AR Solar System",
            desc :"AR Solar System, that demonstrates Solar system in detail using the augmented reality technology In addition to the fully interactive 3D model, which provides an opportunity to study each planet, the application has an implemented testing system,connected to an educational program",
            link :"https://drive.google.com/drive/folders/1UP0hy9FwegFJjXrgEky1IAgl2JOYujW7?usp=sharing"
        },
        {
            img :"https://vection-cms-prod.s3.eu-central-1.amazonaws.com/Adobe_Stock_268353019_a6db16e2a6.jpeg",
            title :"XR Tourism",
            desc :"XR tourism, an application developed by using unity which helps to explore the tourist places which helps to users feel the virtually real world environment experinece these features can give users a more accurate and interactive immersive experience.",
            link :"https://drive.google.com/file/d/1TebJDqA34pmDQyGs2VGudBZ3OyIWf02I/view"
        },
        {
            img :"https://instrumentationtools.com/wp-content/uploads/2021/08/Augmented-Reality-and-Virtual-Reality-in-Industrial-Automation-scaled.jpg",
            title :"Home Automation AR/VR Using Unity",
            desc :" Developed a game using unity game engine which acts as UI to control home devices. Home appliances are controlled by a game simulation from anywhere.",
            link : "https://drive.google.com/file/d/1UniQq5IZonbD0AeY08ZDfdxjs0UtQee4/view?usp=sharing"
        },
        {
            img :"https://a.storyblok.com/f/122804/3334x2086/10a665581d/digital-twins-and-iot.webp",
            title :"Implementing Digital twin in an IOT",
            desc :"Easily to loacte the wiring harness defect, professionals currently invest a significant amount of effort in completing tests. Time must be saved while tracing the electrical wire faults in order to quickly and effectively locate the problem.",
            link :"https://drive.google.com/file/d/1Tcnui1n9lORtxMedZVxcmKLX8aQeXCxy/view"
        },
    ];
  return (
    <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>Check out the innovative projects I've brought to life!</p>
        <div className="projectContainer__projects">
        {
            projects.map((project,index)=>{
                return(
                    <Project key={index} img={project.img} title={project.title} desc={project.desc} link = {project.link}/>
                )
            })
        }
        </div>
    </Element>
  )
}

export default ProjectContainer