import React, { Component } from "react";
import BackBtnArrow from "../../public/Images/Arrow-left.svg";
import Image from "next/image";
import InfoCircle from "../../public/Images/Info-circle.svg";

export class Living extends Component {
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
      <div className='main-container row'>
        <div className='col-2 sidenavPlacement'>
        <p className='sidenavStep'>Steg 2/5</p>
        <div className="sidenav">
        
        <p id="side-p0">Personlig information</p>
        <p id="side-p1" style={{fontWeight: "Bold"}}>Boende</p>
        <p id="side-p2">Gäster</p>
        <p id="side-p3">Längd</p>
        <p id="side-p4">Skicka</p>
      </div>
      </div>
        <div className="col-1"></div>
      <form className="guest-where-info form-template col-6" id="guestWhereInfo">
        <div className="formTitle flex-row d-flex">
        <h4 className="form-header ">Boende</h4>
        <div className="infoCircle">
        <Image src={InfoCircle}></Image>
        </div>
        </div>
        
        <div className="space-col utrymme">
          <h6 style={{ fontWeight: "Bold" }}>Typ av boende</h6>
          <p>Vilken typ av boende skulle du kunna erbjuda? <br /> Ex. Lägenhet, hus, sekundär enhet (exepelsvis attenfallshus)</p>
          
            {/* <label htmlFor="howLongStay">I ett första skede, hur länge skulle du kunna erbjuda ditt boende?</label><br /> */}
            <input
              required
              type="text"
              id="kindOfHouse"
              name="kindOfHouse"
              defaultValue={values.kindOfHouse}
              onChange={handleChange("kindOfHouse")}
              className="w-100"
            />
            <p className='errorRed'>{values.validKindOfHouse}</p>
         

          {/* <div className="col-6 checkBoxarMedText">
              <label htmlFor="apartment"> Lägenhet</label>
              <input className="checkboxRight" type="checkbox" id="apartment" name="apartment" defaultValue={values.apartment} onChange={handleChange('apartment')} />
            </div>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="house">Hus</label>
              <input className="checkboxRight" type="checkbox" id="house" name="house" defaultValue={values.house} onChange={handleChange('house')} />
            </div>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="secondarySpace">Sekundär enhet <small>(t.ex. stuga eller attefallshus)</small> </label>
              <input
              className="checkboxRight"
                type="checkbox"
                id="secondarySpace"
                name="secondarySpace"
                defaultValue={values.secondarySpace}
                onChange={handleChange('secondarySpace')}
              />
            </div> */}
        </div>

        <div className="space-col houseTypes">
          <h6 style={{ fontWeight: "Bold" }}>Eget eller delat boende</h6>
          <p>Beskriv hur boendesituationen skulle kunna se ut för de som kommer. Eget eller detal <br /> boende? Tillgång till toalett, kök och andra utrymmen?</p>
          
            {/* <label htmlFor="howLongStay">I ett första skede, hur länge skulle du kunna erbjuda ditt boende?</label><br /> */}
            <textarea
              required
              type="text"
              id="livingAlone"
              name="livingAlone"
              defaultValue={values.livingAlone}
              onChange={handleChange("livingAlone")}
              className="w-100"
              maxLength={200}
            />
            <p className="maxChar">Max 200 tecken</p>
            <p className='errorRed'>{values.validLivingAlone}</p>
          
          {/* <div className="col-6 checkBoxarMedText">
              <label htmlFor="selfOwned">Eget boende</label>
              <input className="checkboxRight" type="checkbox" id="selfOwned" name="selfOwned" defaultValue={values.selfOwned} onChange={handleChange('selfOwned')} />
            </div>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="sharedSpace">Delat boende</label>
              <input
              className="checkboxRight"
                type="checkbox"
                id="sharedSpace"
                name="sharedSpace"
                defaultValue={values.sharedSpace}
                onChange={handleChange('sharedSpace')}
              />
            </div> */}
        </div>
        <div className="btnNextAndBack">
          <button className="buttonBack " type="button" onClick={this.back}>
            <Image src={BackBtnArrow} allt="back" />
            Tillbaka
          </button>

          <button type="button" className="buttonNext" onClick={this.continue}>
            Nästa
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export default Living;
