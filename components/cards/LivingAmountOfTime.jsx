import React, { Component } from 'react'
import BackBtnArrow from "../../public/Images/Arrow-left.svg"
import Image from "next/image"

export class LivingAmountOfTime extends Component {
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
      <form className="length-info form-template" id="lengthInfo">
      <h4 className="form-header">
        I ett första skede, hur länge skulle du kunna erbjuda ditt boende?
      </h4>

      <p>
        Det är viktigt för att vi ska förstå när och hur länge man är villig att
        ta emot människor på flykt. Detta förenklar processen i en eventuell
        matchning
      </p>
      <div className="col-6">
    <label htmlFor="howLongStay">I ett första skede, hur länge skulle du kunna erbjuda ditt boende?</label><br />
    <input required type="text" id="howLongStay" name="howLongStay" defaultValue={values.howLongStay} onChange={handleChange('howLongStay')} className="w-100"/>
  </div>
{/*
      <div className="space-col">
        <div className="col-6 checkBoxarMedText">
          <label htmlFor="one-week">ca 1 vecka</label>
          <input
            type="text"
            id="one-week"
            name="one-week"
            value=""
            className="checkboxRight"
          />
        </div>
      </div>

       <div className="col-6 checkBoxarMedText">
        <label htmlFor="two-weeks">ca 2 veckor</label>
        <input
          type="checkbox"
          id="two-weeks"
          name="two-weeks"
          value=""
          className="checkboxRight"
        />
      </div>

      <div className="col-6 checkBoxarMedText">
        <label htmlFor="one-month">ca 1 månad</label>
        <input
          type="checkbox"
          id="one-month"
          name="one-month"
          value=""
          className="checkboxRight"
        />
      </div>

      <div className="col-6 checkBoxarMedText">
        <label htmlFor="six-months">ca 6 månader</label>
        <input
          type="checkbox"
          id="six-months"
          name="six-months"
          value=""
          className="checkboxRight"
        />
      </div>

      <div className="col-6 checkBoxarMedText">
        <label htmlFor="long-stay">längre än 6 månader</label>
        <input
          type="checkbox"
          id="long-stay"
          name="long-stay"
          value=""
          className="checkboxRight"
        />
      </div>

      <div className="col-6 checkBoxarMedText">
        <label htmlFor="flexible-stay">flexibel</label>
        <input
          type="checkbox"
          id="flexible-stay"
          name="flexible-stay"
          value=""
          className="checkboxRight"
        />
      </div> */}
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

export default LivingAmountOfTime