import React from 'react'

const Living = () => {
  return (
    <div>
        
          <h4 className="form-header ">Vart skulle gästerna kunna bo?</h4>
          <p>
            Alla människor har rätt till egen sovplats. Det kan vara en madrass
            på golvet eller en riktig säng. Därför är det viktigt att du anger
            hur era sovmöjligheter ser ut. Välj gärna ut alla alternativ som
            gäller för boende du erbjuder
          </p>

          <div className="space-col utrymme">
            <h6>Utrymme</h6>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="apartment"> Lägenhet</label>
              <input className="checkboxRight" type="checkbox" id="apartment" name="apartment" value="" />
            </div>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="house">Hus</label>
              <input className="checkboxRight" type="checkbox" id="house" name="house" value="" />
            </div>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="secondarySpace">Sekundär enhet <small>(t.ex. stuga eller attefallshus)</small> </label>
              <input
              className="checkboxRight"
                type="checkbox"
                id="secondarySpace"
                name="secondarySpace"
                value=""
              />
            </div>
          </div>

          <div className="space-col houseTypes">
            <h6>Typ av boende</h6>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="selfOwned">Eget boende</label>
              <input className="checkboxRight" type="checkbox" id="selfOwned" name="selfOwned" value="" />
            </div>

            <div className="col-6 checkBoxarMedText">
              <label htmlFor="sharedSpace">Delat boende</label>
              <input
              className="checkboxRight"
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
          

    </div>
  )
}

export default Living