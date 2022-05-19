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
      <div className='main-container row'>
        <div className='col-2 sidenavPlacement'>
        <p className='sidenavStep'>Steg 4/5</p>
        <div className="sidenav">
        
        <p id="side-p0">Personlig information</p>
        <p id="side-p1">Boende</p>
        <p id="side-p2">Gäster</p>
        <p id="side-p3"  style={{fontWeight: "Bold"}}>Längd</p>
        <p id="side-p4">Skicka</p>
      </div>
      </div>
        <div className="col-1"></div>
      <form className="length-info form-template col-6" id="lengthInfo" onSubmit={this.continue}>
      <h4 className="form-header">
        Längd
      </h4>
      <br />
      <h6 style={{ fontWeight: "Bold" }}>Ungefär hur länge skulle du kunna erbjuda ditt boende?</h6>
   
    <label htmlFor="howLongStay">T.ex.: Jag är helt flexibel, ca. 1vecka, 2 veckor, en månad, 6 månader, längre än 6 månader etc.</label>
    <textarea required type="text" id="howLongStay" name="howLongStay" defaultValue={values.howLongStay} onChange={handleChange('howLongStay')} maxLength={200}/>
    <p>max 200 tecken</p>
  
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
            </div>
    )
  }
}

export default LivingAmountOfTime