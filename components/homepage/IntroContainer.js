import Link from "next/link"
import IntroButton from "../IntroButton"
import family from "../../public/Images/family.png"


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
              <h1 id="introtext">Erbjud ditt boende till människor på flykt</h1>
          </div>

          <div className="introPara">
              <p>Under Samma Tak har som uppdrag att hjälpa privatpersoner att kunna erbjuda sitt boende till inkommande flyktingar. Vi samlar tydlig och uppdaterad information och  samarbetar med kommuner och andra aktörer för att säkerställa en trygg upplevelse för båda parter. </p>
          </div>

          
            <IntroButton/>
          
         
      </div>

      
      </div>
  </div>
  )
}


export default IntroContainer