import React from 'react'
import "./Academic.css"

const Academic = ({number,title,year,style}) => {
  return (
    <div style={{...style}} className="academic">
        <h1>{number}</h1>
        <p>{title}</p>
        <p1>{year}</p1>
    </div>
  )
}

export default Academic 