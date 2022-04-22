import React from 'react'

const Guests = () => {
  return (
    <div>
                <form class="guest-info form-template" id="guestInfo">
          <h4 class="form-header">Gäster</h4>
          <p>
            Det är viktigt för oss att veta den här informationen ur ett
            trygghetsperspektiv, för båda parter. Välj gärna ut alla alternativ
            för gäster som du kan ta emot.
          </p>

          <div class="space-col">
            <div class="col-6 checkBoxarMedText">
              <label for="guest-With-Kids"> Gäster med barn</label>
              <input
                type="checkbox"
                id="guest-With-Kids"
                name="guest-With-Kids"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="guest-with-babys">Gäster med spädbarn</label>
              <input
                type="checkbox"
                id="guest-with-babys"
                name="guest-with-babys"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="guest-with-pet">Gäster med husdjur</label>
              <input
                type="checkbox"
                id="guest-with-pet"
                name="guest-with-pet"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="onlyWomen">Enbart kvinnor</label>
              <input type="checkbox" id="onlyWomen" name="onlyWomen" value="" class="checkboxRight"/>
            </div>

            <div class="col-6">
              <label for="max-guests">Max antal gäster</label>
              
            </div>

            <div class="col-6 dropdown-div">
              <select name="max-guests" id="max-guests">
                <option value="1">1-2</option>
                <option value="2">3-4</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>

         {/*  <div class="btnNextAndBack">
            <button class="buttonBack" type="button" onclick="backForm()"> <img src="/Images/Arrow-left-Blue.png" alt="Left arrow"> Tillbaka</button>
            <button class="buttonNext" type="button"  onclick="nextForm()">Nästa</button>
          </div> */}
        </form>

        
    </div>
  )
}

export default Guests