import React from 'react'
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import AcademicContainer from './components/AcademicContainer/AcademicContainer'
import Contact from './components/Contact/Contact'
/* import Certifications from './components/Certifications/Certifications' */
import "./App.css"
import AchiAndCer from './components/AchiAndCer/AchiAndCer'



const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <AchiAndCer/>
 {/*  <Certifications /> */}
      <AcademicContainer/>
      <Contact/>
    </div>
  )
}

export default App
