import React from 'react'

const NextButton = () => {
  return (
     <div id = "buttonRow" className="row align-items-center justify-content-end">
       {/* <h4 onclick="nextForm()">Nästa</h4>  */}
      <button type="button" className="buttonNext" onclick="nextForm()">Nästa</button>
    </div> 
  )
}

export default NextButton