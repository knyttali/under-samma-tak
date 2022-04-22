import React from 'react'

const Living = () => {
  return (
    <div>
        <form class="guest-where-info form-template" id="guestWhereInfo">
          <h4 class="form-header ">Vart skulle gästerna kunna bo?</h4>
          <p>
            Alla människor har rätt till egen sovplats. Det kan vara en madrass
            på golvet eller en riktig säng. Därför är det viktigt att du anger
            hur era sovmöjligheter ser ut. Välj gärna ut alla alternativ som
            gäller för boende du erbjuder
          </p>

          <div class="space-col utrymme">
            <h6>Utrymme</h6>

            <div class="col-6 checkBoxarMedText">
              <label for="apartment"> Lägenhet</label>
              <input class="checkboxRight" type="checkbox" id="apartment" name="apartment" value="" />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="house">Hus</label>
              <input class="checkboxRight" type="checkbox" id="house" name="house" value="" />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="secondarySpace">Sekundär enhet <small>(t.ex. stuga eller attefallshus)</small> </label>
              <input
              class="checkboxRight"
                type="checkbox"
                id="secondarySpace"
                name="secondarySpace"
                value=""
              />
            </div>
          </div>

          <div class="space-col houseTypes">
            <h6>Typ av boende</h6>

            <div class="col-6 checkBoxarMedText">
              <label for="selfOwned">Eget boende</label>
              <input class="checkboxRight" type="checkbox" id="selfOwned" name="selfOwned" value="" />
            </div>

            <div class="col-6 checkBoxarMedText">
              <label for="sharedSpace">Delat boende</label>
              <input
              class="checkboxRight"
                type="checkbox"
                id="sharedSpace"
                name="sharedSpace"
                value=""
              />
            </div>
          </div>
        {/*   <div class="btnNextAndBack">
            <button class="buttonBack" type="button" onclick="backForm()"> <img src="/Images/Arrow-left-Blue.png" alt="Left arrow"> Tillbaka</button>
            <button class="buttonNext" type="button"  onclick="nextForm()">Nästa</button>
            
          </div> */}
          
        </form>

    </div>
  )
}

export default Living