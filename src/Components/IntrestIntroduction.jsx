import React from 'react'
import PersonalInfo from './PersonalInfo'
import NextButton from './NextButton'


const IntrestIntroduction = () => {
  function next() {
    alert("yo")
  }
  return (
    <div className='content-container col-7'>
        <h1>Intresseanmälan</h1>
        <p className='desc-p'>
          Via Under Samma Tak kan du skicka din intresseanmälan till din kommun
          om att du vill erbjuda ditt boende till människor i nödsituationer,
          t.ex. en naturkatastrof, en flyktingkris eller en global pandemi.
        </p>
        <form className="personal-info form-template" id="personligInfo">
          <PersonalInfo />
          <div onClick={next}>
          <NextButton /> 
          </div>
          </form>  
        
    </div>
  )
}

export default IntrestIntroduction