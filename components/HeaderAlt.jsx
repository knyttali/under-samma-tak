import React from 'react'
import globe from '../Images/white-globe.png'
import logo from '../Images/Logo_white.png'

const HeaderAlt = () => {
  return (
    <div id="headerSimulator">
      <div id ="logoDiv"><a href="Index.html"><img src={logo} alt="logo"/></a>
      </div>

      <div id="languageIconDiv" className="">
        <img src={globe} alt="Jordglob" id='whiteGlobe'/>
        <p className="language" id="languageText">Language</p>
      </div>
    </div>
  )
}

export default HeaderAlt