import React from 'react'
import Academic from '../AcademicBox/Academic'
import {Element} from "react-scroll"
import "./AcademicContainer.css"

const AcademicContainer = () => {
  return (
    <Element className="academicContainer" id="acd">
        <h1>AcademicHistory</h1>
        <div className="academicContainer__info">
            <Academic number="91%" title="SSLC Percentage" year="2016-2017"/>
            <Academic number="89%" title="UG Percentage" year="2019-2023" style={{backgroundColor: "#f64c08"}}/>
            <Academic number="79.1%" title="HSC Percentage" year="2018-2019" />
        </div>
    </Element>
  )
}

export default AcademicContainer