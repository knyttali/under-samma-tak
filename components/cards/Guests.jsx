import React, { Component } from 'react'
import BackBtnArrow from "../../public/Images/Arrow-left.svg"
import Image from "next/image"

export class Guests extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <form className="guest-info form-template" id="guestInfo">
      <h4 className="form-header">Gäster</h4>
        <p>
          Det är viktigt för oss att veta den här informationen ur ett
          trygghetsperspektiv, för båda parter. Välj gärna ut alla alternativ
          för gäster som du kan ta emot.
        </p>

        <div className="col-6">
            <label htmlFor="typeOfGuests"></label><br /> 
            <input
              required
              type="text"
              id="typeOfGuests"
              name="typeOfGuests"
              defaultValue={values.typeOfGuests}
              onChange={handleChange("typeOfGuests")}
              className="w-100"
            />
          </div>

       {/*  <div className="space-col">
          <div className="col-6 checkBoxarMedText">
            <label htmlFor="guest-With-Kids"> Gäster med barn</label>
            <input
              type="checkbox"
              id="guest-With-Kids"
              name="guest-With-Kids"
              value=""
              className="checkboxRight"
            />
          </div>

          <div className="col-6 checkBoxarMedText">
            <label htmlFor="guest-with-babys">Gäster med spädbarn</label>
            <input
              type="checkbox"
              id="guest-with-babys"
              name="guest-with-babys"
              value=""
              className="checkboxRight"
            />
          </div>

          <div className="col-6 checkBoxarMedText">
            <label htmlFor="guest-with-pet">Gäster med husdjur</label>
            <input
              type="checkbox"
              id="guest-with-pet"
              name="guest-with-pet"
              value=""
              className="checkboxRight"
            />
          </div>

          <div className="col-6 checkBoxarMedText">
            <label htmlFor="onlyWomen">Enbart kvinnor</label>
            <input
              type="checkbox"
              id="onlyWomen"
              name="onlyWomen"
              value=""
              className="checkboxRight"
            />
          </div>

          <div className="col-6">
            <label htmlFor="max-guests">Max antal gäster</label>
          </div>

          <div className="col-6 dropdown-div">
            <select name="max-guests" id="max-guests">
              <option value="1">1-2</option>
              <option value="2">3-4</option>
              <option value="5">5+</option>
            </select>
          </div> 
        </div>*/}
            <div className="btnNextAndBack">
        <button className="buttonBack " type="button" onClick={this.back}>
        <Image src={BackBtnArrow} allt ="back" />
            Tillbaka
        </button>
          
          <button type="button" className="buttonNext" onClick={this.continue}>
              Nästa
          </button>
          
         </div> 
            </form>
    )
  }
}

export default Guests