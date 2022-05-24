import React, { Component } from 'react'
import Link from "next/dist/client/link";
import Skelleftea from "../../public/Images/skellefteaKommun.png"
import Image from "next/image";
export class SentIntrest extends Component {
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='main-container row'>
        <div className="col-3"></div>
      <form className="length-info form-template col-6" id="sentIntrest" >
      <h1 className="form-header">
        Intresseanmälan skickad
      </h1>
      <p>Tack för att du är intresserad av att hjälpa till!</p>
      <br /><br />
      <p style={{fontWeight: "Bold"}}>Vad händer nu?</p>
      <p>
        1. Din kommun kommer att se över din intresseanmälan. <br />
        2. Din kommun bjuder in dig till en orienterande träff med berörda parter. <br />
        3. Du väljer själv om du vill gå vidare och bli en värdfamilj
      </p>
      <br />
      <br />
      <p>Vid eventuella frågor, <a href=''>kontakta oss</a> eller din kommun.</p>
      <br />
      <a href="">Skellefteå kommun</a>
      <br />
      <Image src={Skelleftea}></Image>
      <br />
      <Link href={"/"}>
           <button type="button" className="buttonNext">
              Ok
          </button>
          </Link>
     
    </form>
    </div>
    )
  }
}

export default SentIntrest