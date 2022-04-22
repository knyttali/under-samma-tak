import React from "react";
import PersonalInfo from "./cards/PersonalInfo";
import NextButton from "./NextButton";
import Living from "./cards/Living";
import Guests from "./cards/Guests";
import LivingAmountOfTime from "./cards/LivingAmountOfTime";
import BackButton from "./BackButton";

const IntrestIntroduction = () => {
  function next() {
    alert("yo");
  }
  return (
    <div className="content-container col-7">
      <h1>Intresseanmälan</h1>
      <p className="desc-p">
        Via Under Samma Tak kan du skicka din intresseanmälan till din kommun om
        att du vill erbjuda ditt boende till människor i nödsituationer, t.ex.
        en naturkatastrof, en flyktingkris eller en global pandemi.
      </p>
      <form className="personal-info form-template" id="personligInfo">
        <PersonalInfo />
        <div onClick={next}>
        <div id = "buttonRow" className="row align-items-center justify-content-end"><NextButton /></div>
          
        </div>
      </form>

      <form className="guest-where-info form-template" id="guestWhereInfo">
        <Living />
        <div className="btnNextAndBack">
          <BackButton />
       {/*  <div onClick={next}> */}
          <NextButton />
        </div>
       {/*  </div> */}
      </form>
      <form className="guest-info form-template" id="guestInfo">
        <Guests />
        <div onClick={next}>
        <BackButton />
          <NextButton />
        </div>
        
      </form>
      <form class="length-info form-template" id="lengthInfo">
        <LivingAmountOfTime />
        <div onClick={next}>
        <BackButton />
          <NextButton />
        </div>
      </form>
    </div>
  );
};

export default IntrestIntroduction;
