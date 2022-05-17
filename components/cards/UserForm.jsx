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
        howLongStay: "",
        validFname:"",
        validLname:"",
        validAddress:"",
        validOrt:"",
        validKommun:"",
    }
    //next step
    nextStep = () => {
        const {fname} = this.state
        const {lname} = this.state
        const {address} = this.state
        const {ort} = this.state
        const {kommun} = this.state
        const {step} = this.state;
        if (fname=="" || lname =="" || address =="" || ort=="" || kommun=="") {
            //FirstName
            if (fname =="") {
                this.setState({validFname: "Fyll i här!"})
            }
            else{
                this.setState({validFname: ""})
            }
            //LastName
            if (lname =="") {
                this.setState({validLname: "Fyll i här!"})
            }
            else{
                this.setState({validLname: ""})
            }
            //Adress
            if (lname =="") {
                this.setState({validAddress: "Fyll i här!"})
            }
            else{
                this.setState({validAddress: ""})
            }
            //Ort
            if (lname =="") {
                this.setState({validOrt: "Fyll i här!"})
            }
            else{
                this.setState({validOrt: ""})
            }
            //Kommun
            if (lname =="") {
                this.setState({validKommun: "Fyll i här!"})
            }
            else{
                this.setState({validKommun: ""})
            }
        }
        else{
            if (!fname == "" && !lname=="" && !address =="" && !ort =="" && !kommun =="") {
                this.setState({validFname: ""})
                this.setState({validLname: ""})
                this.setState({validAddress: ""})
                this.setState({validOrt: ""})
                this.setState({validKommun: ""})
            }
           
            this.setState({
                step: step + 1
            })
        }
       
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
      const {fname, lname, address, ort, kommun, postNum, phone, email, apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay, kindOfHouse, livingAlone, typeOfGuests, validFname, validLname, validAddress, validKommun, validOrt } = this.state;
      const values = {fname, lname, address, ort, kommun, postNum, phone, email, apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay, kindOfHouse, livingAlone, typeOfGuests, validFname, validLname, validAddress, validKommun, validOrt }
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