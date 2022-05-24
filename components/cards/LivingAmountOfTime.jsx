import React, { Component } from "react";
import BackBtnArrow from "../../public/Images/Arrow-left.svg";
import Image from "next/image";
import InfoCircle from "../../public/Images/info-circle.svg";
export class LivingAmountOfTime extends Component {
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
          <p className="sidenavStep">Steg 4/5</p>
          <div className="sidenav">
            <p id="side-p0">Personlig information</p>
            <p id="side-p1">Boende</p>
            <p id="side-p2">Gäster</p>
            <p id="side-p3" style={{ fontWeight: "Bold" }}>
              Längd
            </p>
            <p id="side-p4">Skicka</p>
          </div>
        </div>
        <div className="col-1"></div>
        <form
          className="length-info form-template col-6"
          id="lengthInfo"
          onSubmit={this.continue}
        >
          <div className="formTitle flex-row d-flex">
            <h4 className="form-header ">Längd</h4>
            <div className="infoCircle flex-row d-flex">
              <div><Image src={InfoCircle}></Image></div>
              <div><p className ="MoreInfo"> Mer information</p></div>
            </div></div>
         
          <h6 style={{ fontWeight: "Bold" }}>
            Ungefär hur länge skulle du kunna erbjuda ditt boende?
          </h6>

          <label htmlFor="howLongStay">
            T.ex.: Jag är helt flexibel, ca. 1vecka, 2 veckor, en månad, 6
            månader, längre än 6 månader etc.
          </label>
          <textarea
            required
            type="text"
            id="howLongStay"
            name="howLongStay"
            defaultValue={values.howLongStay}
            onChange={handleChange("howLongStay")}
            maxLength={200}
          />
          <p className="maxChar">max 200 tecken</p>

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

export default LivingAmountOfTime;
