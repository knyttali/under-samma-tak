import React, { Component } from 'react'
import PersonalInfo from "./PersonalInfo"
import Living from './Living'
import Guests from './Guests'
import LivingAmountOfTime from './LivingAmountOfTime'
import CollectedInfo from './CollectedInfo'

export class UserForm extends Component {
    state = {
        step: 1,
        fname: "",
        lname: "",
        address: "",
        ort: "",
        kommun: "",
        postNum: "",
        phone: "",
        email: "",
        /* apartment: "",
        house: "",
        secondarySpace: "",
        selfOwned: "",
        sharedSpace: "", */
        kindOfHouse:"",
        livingAlone:"",
        typeOfGuests: "",
        howLongStay: ""
    }
    //next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    //go back one step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }
    //Field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
  render() {
      const { step } = this.state;
      const {fname, lname, address, ort, kommun, postNum, phone, email, apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay, kindOfHouse, livingAlone, typeOfGuests } = this.state;
      const values = {fname, lname, address, ort, kommun, postNum, phone, email, apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay, kindOfHouse, livingAlone, typeOfGuests }
    switch(step){
        case 1:
            return(
                <PersonalInfo 
                nextStep={this.nextStep}
                handleChange= {this.handleChange}
                values = {values}
                />
            )
        case 2:
            return <Living 
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
        case 3: 
            return <Guests
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
        case 4: 
            return <LivingAmountOfTime
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
        case 5: 
            return <CollectedInfo 
                    prevStep={this.prevStep}
                    values = {values}
                    />
    }
  }
}

export default UserForm