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

        <form class="length-info form-template" id="lengthInfo">
          <h4 class="form-header">I ett första skede, hur länge skulle du kunna erbjuda ditt boende?</h4>

          <p>
            Det är viktigt för att vi ska förstå när och hur länge man är villig att ta emot människor på flykt.
            Detta förenklar processen i en eventuell matchning
          </p>

          <div class="space-col">
            <div class="col-6 checkBoxarMedText">
              <label for="one-week">ca 1 vecka</label>
              <input
                type="checkbox"
                id="one-week"
                name="one-week"
                value=""
                class="checkboxRight"
              />
            </div>
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="two-weeks">ca 2 veckor</label>
              <input
                type="checkbox"
                id="two-weeks"
                name="two-weeks"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="one-month">ca 1 månad</label>
              <input
                type="checkbox"
                id="one-month"
                name="one-month"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="six-months">ca 6 månader</label>
              <input
                type="checkbox"
                id="six-months"
                name="six-months"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="long-stay">längre än 6 månader</label>
              <input
                type="checkbox"
                id="long-stay"
                name="long-stay"
                value=""
                class="checkboxRight"
              />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="flexible-stay">flexibel</label>
              <input
                type="checkbox"
                id="flexible-stay"
                name="flexible-stay"
                value=""
                class="checkboxRight"
              />
            </div>

          <div class="btnNextAndBack">
            <button class="buttonBack" type="button" onclick="backForm()"> <img src="/Images/Arrow-left-Blue.png" alt="Left arrow"/> Tillbaka</button>
            <button class="buttonNext" type="button"  onclick="nextForm()">Nästa</button>
          </div>
        </form>
    </div>
  )
}

export default Guests