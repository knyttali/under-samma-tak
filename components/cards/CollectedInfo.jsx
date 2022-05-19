import React, { Component } from "react";
import BackBtnArrow from "../../public/Images/Arrow-left.svg";
import Image from "next/image";

export class CollectedInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        fname,
        lname,
        address,
        ort,
        kommun,
        postNum,
        phone,
        email,
        howLongStay,
        kindOfHouse,
        livingAlone,
        typeOfGuests,
        howManyGuests
      },
    } = this.props;
    return (
      <div className='main-container row'>
        <div className='col-2 sidenavPlacement'>
        <p className='sidenavStep'>Steg 5/5</p>
        <div className="sidenav">
        
        <p id="side-p0" >Personlig information</p>
        <p id="side-p1">Boende</p>
        <p id="side-p2">Gäster</p>
        <p id="side-p3">Längd</p>
        <p id="side-p4" style={{fontWeight: "Bold"}}>Skicka</p>
      </div>
      </div>
        <div className="col-1"></div>
      <form className="guest-where-info form-template col-6" id="guestWhereInfo">
        <h6 style={{ fontWeight: "Bold" }}>Personlig Information</h6>
        <p>{fname}</p>
        <p>{lname}</p>
        <p>{address}</p>
        <p>{ort}</p>
        <p>{kommun}</p>
        <p>{postNum}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <br />
        <h6 style={{ fontWeight: "Bold" }}>Boende</h6>
        <p>Typ av boende:</p>
        <p>{kindOfHouse}</p>
        <br />
        <p>Boendesituation:</p>
        <p>{livingAlone}</p>
        <br />
        <h6 style={{ fontWeight: "Bold" }}>Gäster</h6>
        <p>{typeOfGuests}</p>
        <p>Antal gäster: {howManyGuests}</p>
        <br />
        <h6 style={{ fontWeight: "Bold" }}>Längd</h6>
        <p>{howLongStay}</p>
        

        <div className="btnNextAndBack">
          <button className="buttonBack " type="button" onClick={this.back}>
            <Image src={BackBtnArrow} allt="back" />
            Tillbaka
          </button>
          <button type="button" className="sendInInformation" onClick={this.continue}>
            Skicka in din intresseanmälan
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export default CollectedInfo;
