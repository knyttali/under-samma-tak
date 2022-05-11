import Link from "next/link"
import IntroButton from "./IntroButton"
import family from "../public/Images/family.png"


const IntroContainer = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("https://i.postimg.cc/ZRpJgsJ9/family.png")',
      backgroundRepeat: 'none',
      backgroundSize: 'cover'
      }}>
    <div className="introContainer">
        
      <div className="introTextContent d-flex flex-column">

          <div className="introHeader">
              <h1 id="introtext">För dig som vill erbjuda ditt boende</h1>
          </div>

          <div className="introPara">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique ex nihil velit voluptates ipsa .</p>
          </div>

          <div className="introBtn">
            <IntroButton/>
          </div>
         
      </div>

      
      </div>
  </div>
  )
}


export default IntroContainer