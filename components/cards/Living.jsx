import React, { Component } from "react";
import BackBtnArrow from "../../public/Images/Arrow-left.svg";
import Image from "next/image";

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
      <form className="guest-where-info form-template col-6" id="guestWhereInfo">
        <h4 className="form-header ">Vart skulle gästerna kunna bo?</h4>
        <p>
          Alla människor har rätt till egen sovplats. Det kan vara en madrass på
          golvet eller en riktig säng. Därför är det viktigt att du anger hur
          era sovmöjligheter ser ut. Välj gärna ut alla alternativ som gäller
          för boende du erbjuder
        </p>

        <div className="space-col utrymme">
          <h6 style={{ fontWeight: "Bold" }}>Vilken typ av boende har du?</h6>
          <div className="col-6">
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
          </div>

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
          <h6 style={{ fontWeight: "Bold" }}>Bor du ensam?</h6>
          <div className="col-6">
            {/* <label htmlFor="howLongStay">I ett första skede, hur länge skulle du kunna erbjuda ditt boende?</label><br /> */}
            <input
              required
              type="text"
              id="livingAlone"
              name="livingAlone"
              defaultValue={values.livingAlone}
              onChange={handleChange("livingAlone")}
              className="w-100"
            />
          </div>
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
    );
  }
}

export default Living;
