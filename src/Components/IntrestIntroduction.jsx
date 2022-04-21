import React from 'react'
import PersonalInfo from './PersonalInfo'
const IntrestIntroduction = () => {
  return (
    <div className='content-container col-7'>
        <h1>Intresseanmälan</h1>
        <p className='desc-p'>
          Via Under Samma Tak kan du skicka din intresseanmälan till din kommun
          om att du vill erbjuda ditt boende till människor i nödsituationer,
          t.ex. en naturkatastrof, en flyktingkris eller en global pandemi.
        </p>
        <PersonalInfo />
        
    </div>
  )
}

export default IntrestIntroduction