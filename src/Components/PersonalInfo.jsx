import React from 'react'
import NextButton from './NextButton'
const PersonalInfo = () => {
  return (
    <>
    <h4 className="form-header ">Personlig information</h4>

    <div className="name-row row">
      <div className="col-6">
        <label htmlFor="fname">Förnamn</label><br />
        <input required type="text" id="fname" name="fname" value="" className="w-100"/>
      </div>

      <div className="col-6">
        <label htmlFor="lname">Efternamn</label><br />
        <input required type="text" id="lname" name="lname" value="" className="w-100"/>
      </div>
    </div>

    <div className="adress-row row">
      <div className="col-12">
        <label htmlFor="address">Gatuadress</label><br />
        <input required
          type="text"
          id="address"
          name="address"
          value=""
          className="w-100"
          // onChange={} Nödvändig men vet inte vad den gör, behövs på alla inputs
        />
      </div>
    </div>

    <div className="kommun-row row">
      <div className="col-6">
        <label htmlFor="ort">Ort</label><br />
        <input required type="text" id="ort" name="ort" value="" className="w-100" />
      </div>

      <div className="col-6">
        <label htmlFor="kommun">Kommun</label><br />
        <input required
          id="autoComplete"
          type="text"
          dir="ltr"
          spellCheck="false"
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          className="w-100"
        />
      </div>
    </div>
    <div className="nummer-row row">
      <div className="col-6">
        <label htmlFor="postNum">Postnummer</label><br />
        <input required type="text" id="postNum" name="postNum" value="" className="w-100"/>
      </div>

      <div className="col-6">
        <label htmlFor="phone">Telefonnummer</label><br />
        <input required type="text" id="phone" name="phone" value="" className="w-100"/>
      </div>
    </div>

    <div className="email-row row">
      <div className="col-6">
        <label htmlFor="email">E-mail adress</label><br />
        <input required type="email" id="email" name="email" value="" className="w-100"/>
      </div>

      <div className="col-6"></div>

    </div>
    
   </>
  
  )
}

export default PersonalInfo