import React, { Component } from "react";
import BackBtnArrow from "../../public/Images/Arrow-left.svg";
import Image from "next/image";
import InfoCircle from "../../public/Images/info-circle.svg";
export class Guests extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="main-container row">
        <div className="col-2 sidenavPlacement">
          <p className="sidenavStep">Steg 3/5</p>
          <div className="sidenav">
            <p id="side-p0">Personlig information</p>
            <p id="side-p1">Boende</p>
            <p id="side-p2" style={{ fontWeight: "Bold" }}>
              Gäster
            </p>
            <p id="side-p3">Längd</p>
            <p id="side-p4">Skicka</p>
          </div>
        </div>
        <div className="col-1"></div>
        <form
          className="guest-info form-template col-6"
          id="guestInfo"
          onSubmit={this.continue}
        >
          <div className="formTitle flex-row d-flex">
            <h4 className="form-header ">Gäster</h4>
            <div className="infoCircle flex-row d-flex">
              <div><Image src={InfoCircle}></Image></div>
              <div><p className ="MoreInfo"> Mer information</p></div>
            </div>
            
          </div>
          <h6 style={{ fontWeight: "Bold" }}>
            Har du några preferense angående vilka gäster du vill ta emot?
          </h6>
          <p>
            T.ex.: Endast gäster utan barn, endast kvinnot med barn, endast
            gäster utan husdjur etc.
          </p>

          <label htmlFor="typeOfGuests"></label>
          <br />
          <textarea
            required
            type="text"
            id="typeOfGuests"
            name="typeOfGuests"
            defaultValue={values.typeOfGuests}
            onChange={handleChange("typeOfGuests")}
            maxLength={200}
          />
          <p className="maxChar">max 200 tecken</p>
          <p className="errorRed">{values.validTypeOfGuest}</p>
          <br />

          <h6 style={{ fontWeight: "Bold" }}>Max antar gäster</h6>
          <p>Hur många gäster ryms i boendet som du erbjuder?</p>

          <label htmlFor="howManyGuests"></label>
          <br />
          <input
            required
            type="text"
            id="howManyGuests"
            name="howManyGuests"
            defaultValue={values.howManyGuests}
            onChange={handleChange("howManyGuests")}
            maxLength={200}
            className="w-100"
          />
          <p style={{ color: "white" }}>.</p>
          <div className="btnNextAndBack">
            <button className="buttonBack " type="button" onClick={this.back}>
              <Image src={BackBtnArrow} allt="back" />
              Tillbaka
            </button>

            <button
              type="button"
              className="buttonNext"
              onClick={this.continue}
            >
              Nästa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Guests;
