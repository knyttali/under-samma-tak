import Link from "next/link"
import IntroButton from "./IntroButton"



const IntroContainer = () => {
  return (
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

      <div className ="fastLinks d-flex flex-column">
          <h4>SNABBLÄNKAR </h4>
          <a href="http://">Vanliga frågor {">"}</a>
          <a href="http://">Ekonomi {">"}</a>
          <Link href="FormPage">
          <a href="http://">Anmäl intresse {">"}</a>
          </Link>
      </div>
  </div>
  )
}


export default IntroContainer