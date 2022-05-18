import React, { Component } from 'react'
import Link from "next/dist/client/link";

export class SentIntrest extends Component {
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <form className="length-info form-template col-6" id="sentIntrest" >
      <h1 className="form-header">
        Intresseanmälan Skickad
      </h1>
      <p>Tack! Din intresseanmälan är nu skickad till din kommun! Vid eventuella frågor, kontakta oss eller din kommun.</p>
      <Link href={"/"}>
           <button type="button" className="buttonNext">
              ok
          </button>
          </Link>
     
    </form>
    )
  }
}

export default SentIntrest