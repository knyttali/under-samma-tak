import React, { Component } from 'react'
import BackBtnArrow from "../../public/Images/Arrow-left.svg"
import Image from "next/image"

export class CollectedInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values: {fname, lname, address, ort, kommun, postNum, phone, email, howLongStay, kindOfHouse, livingAlone, typeOfGuests} } = this.props;
    return (
      <form className="guest-where-info form-template" id="guestWhereInfo">
          <p>{ fname }</p>
          <p>{ lname }</p>
          <p>{ address }</p>
          <p>{ ort }</p>
          <p>{ kommun }</p>
          <p>{ postNum }</p>
          <p>{ phone }</p>
          <p>{ email }</p>
          <p>{ howLongStay }</p>
          <p>{ livingAlone }</p>
          <p>{ kindOfHouse }</p>
          <p>{ typeOfGuests }</p>
            <div className="btnNextAndBack">
        <button className="buttonBack " type="button" onClick={this.back}>
        <Image src={BackBtnArrow} allt ="back" />
            Tillbaka
        </button>
          
          
          
         </div> 
            </form>
    )
  }
}

export default CollectedInfo