import React, { useState } from "react";
import PersonalInfo from "./cards/PersonalInfo";
import Living from "./cards/Living";
import Guests from "./cards/Guests";
import LivingAmountOfTime from "./cards/LivingAmountOfTime";
import BackBtnArrow from "../Images/Arrow-left-Blue.png"


const IntrestIntroduction = () => {
  var counter = 0
  const[formCards, setForm] = useState(<form className="personal-info form-template" id="personligInfo">
    <PersonalInfo />
    
    <div id = "buttonRow" className="row align-items-center justify-content-end">
    <button type="button" className="buttonNext" onClick={next}>
      Nästa
    </button>
    </div>
  </form>)

  function next() {
    counter = counter + 1
    if (counter === 0) {
      setForm(
      <form className="personal-info form-template" id="personligInfo">
        <PersonalInfo />
        <div onClick={next}>
        <div id = "buttonRow" className="row align-items-center justify-content-end">
        <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button>
        </div>
          
        </div>
      </form>
      )
    }
    else if (counter === 1) {
      setForm(
      <form className="guest-where-info form-template" id="guestWhereInfo">
        <Living />
        <div className="btnNextAndBack">
        <button class="buttonBack " type="button" onClick={back}>
          <img src={BackBtnArrow} />
            Tillbaka
        </button>
          
          <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button>
          
         </div> 
      </form>
      )
    }
    else if (counter === 2) {
      setForm(
      <form className="guest-info form-template" id="guestInfo">
        <Guests />
        <button class="buttonBack " type="button" onClick={back}>
        <img src={BackBtnArrow} />
            Tillbaka
        </button>
        <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button>  
      </form>
      )
    }
    else if (counter === 3) {
      setForm(
      <form class="length-info form-template" id="lengthInfo">
        <LivingAmountOfTime />
        <button class="buttonBack " type="button" onClick={back}>
        <img src={BackBtnArrow} />
            Tillbaka
        </button>
        <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button> 
      </form>
      )
    }
      
  }

  function back(){
    counter = counter - 1
    if (counter === 0) {
      setForm(
      <form className="personal-info form-template" id="personligInfo">
        <PersonalInfo />
        <div onClick={next}>
        <div id = "buttonRow" className="row align-items-center justify-content-end">
        <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button>
        </div>
          
        </div>
      </form>
      )
    }
    else if (counter === 1) {
      setForm(
      <form className="guest-where-info form-template" id="guestWhereInfo">
        <Living />
        <div className="btnNextAndBack">
        <button class="buttonBack " type="button" onClick={back}>
        <img src={BackBtnArrow} />
            Tillbaka
        </button>
          
          <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button>
          
         </div> 
      </form>
      )
    }
    else if (counter === 2) {
      setForm(
      <form className="guest-info form-template" id="guestInfo">
        <Guests />
        <button class="buttonBack " type="button" onClick={back}>
        <img src={BackBtnArrow} />
            Tillbaka
        </button>
        <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button>  
      </form>
      )
    }
    else if (counter === 3) {
      setForm(
      <form class="length-info form-template" id="lengthInfo">
        <LivingAmountOfTime />
        <button class="buttonBack " type="button" onClick={back}>
        <img src={BackBtnArrow} />
            Tillbaka
        </button>
        <button type="button" className="buttonNext" onClick={next}>
              Nästa
          </button> 
      </form>
      )
    }
  }
  

  


  return (
    <div className="content-container col-7">
      <h1>Intresseanmälan</h1>
      <p className="desc-p">
        Via Under Samma Tak kan du skicka din intresseanmälan till din kommun om
        att du vill erbjuda ditt boende till människor i nödsituationer, t.ex.
        en naturkatastrof, en flyktingkris eller en global pandemi.
      </p>

      <div>{formCards}</div>
      
    </div>
  );
};

export default IntrestIntroduction;
