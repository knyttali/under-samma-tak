import React, { Component } from 'react'


export class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <form className="personal-info form-template col-6" id="personligInfo">
       <h4 className="form-header ">Personlig information</h4>

<div className="name-row placement-inputs">
  <div className="placement">
    <label htmlFor="fname">Förnamn</label><br />
    <input required type="text" id="fname" name="fname" defaultValue={values.fname} onChange={handleChange('fname')} />
    <p className='errorRed'>{values.validFname}</p>
  </div>

  <div className="placement">
    <label htmlFor="lname">Efternamn</label><br />
    <input required type="text" id="lname" name="lname" defaultValue={values.lname} onChange={handleChange('lname')} />
    <p className='errorRed'>{values.validLname}</p>
  </div>
</div>

<div className="adress-row row">
  <div className="col-12">
    <label htmlFor="address">Gatuadress</label><br />
    <input required
      type="text"
      id="address"
      name="address"
      defaultValue={values.address}
      onChange={handleChange('address')}
      className="w-100"
    />
    <p className='errorRed'>{values.validAddress}</p>
  </div>
</div>

<div className="kommun-row placement-inputs">
  <div className="placement">
    <label htmlFor="ort">Ort</label><br />
    <input required type="text" id="ort" name="ort" defaultValue={values.ort} onChange={handleChange('ort')}  />
    <p className='errorRed'>{values.validOrt}</p>
  </div>

  <div className="placement">
    <label htmlFor="kommun">Kommun</label><br />
    <input required
      id="kommun"
      type="text"
      defaultValue={values.kommun}
      onChange={handleChange('kommun')}
      
    />
    <p className='errorRed'>{values.validKommun}</p>
  </div>
</div>
<div className="nummer-row placement-inputs">
  <div className="placement">
    <label htmlFor="postNum">Postnummer</label><br />
    <input required type="text" id="postNum" name="postNum" defaultValue={values.postNum} onChange={handleChange('postNum')} />
  </div>

  <div className="placement">
    <label htmlFor="phone">Telefonnummer</label><br />
    <input required type="text" id="phone" name="phone" defaultValue={values.phone} onChange={handleChange('phone')} />
  </div>
</div>

<div className="email-row placement-inputs">
  <div className="placement">
    <label htmlFor="email">E-mail adress</label><br />
    <input required type="email" id="email" name="email" defaultValue={values.email} onChange={handleChange('email')} />
  </div>

  <div className="placement-right"></div>

</div>
<button type="button" className="buttonNext" onClick={this.continue}>
              Nästa
          </button>
      </form>
    )
  }
}

export default PersonalInfo
