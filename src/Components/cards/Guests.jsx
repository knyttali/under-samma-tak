import React from "react";

const Guests = () => {
  return (
    <div>
        <h4 className="form-header">Gäster</h4>
        <p>
          Det är viktigt för oss att veta den här informationen ur ett
          trygghetsperspektiv, för båda parter. Välj gärna ut alla alternativ
          för gäster som du kan ta emot.
        </p>

        <div className="space-col">
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
        </div>

        {/*  <div className="btnNextAndBack">
            <button className="buttonBack" type="button" onclick="backForm()"> <img src="/Images/Arrow-left-Blue.png" alt="Left arrow"> Tillbaka</button>
            <button className="buttonNext" type="button"  onclick="nexthtmlForm()">Nästa</button>
          </div> */}
     
    </div>
  );
};

export default Guests;
