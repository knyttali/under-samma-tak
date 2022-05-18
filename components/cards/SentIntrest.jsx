import React, { Component } from 'react'


export class SentIntrest extends Component {
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <form className="length-info form-template col-6" id="sentIntrest" >
      <h4 className="form-header">
        Intresseanmälan Skickad
      </h4>
      <p>Tack! Din intresseanmälan är nu skickad till din kommun! Vid eventuella frågor, kontakta oss eller din kommun.</p>
      
            </form>
    )
  }
}

export default SentIntrest