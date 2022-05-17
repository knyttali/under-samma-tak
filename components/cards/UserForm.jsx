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
            if (this.isNum(fname)) {
                console.log("number in name")
                this.setState({validFname: "Kan inte ha nummer i ditt namn!"})
            }
            //LastName
            if (lname =="") {
                this.setState({validLname: "Fyll i här!"})
            }
            else{
                this.setState({validLname: ""})
            }
            if (this.isNum(lname)) {
                console.log("number in name")
                this.setState({validLname: "Kan inte ha nummer i ditt namn!"})
            }
            //Adress
            if (address =="") {
                this.setState({validAddress: "Fyll i här!"})
            }
            else{
                this.setState({validAddress: ""})
            }
            //Ort
            if (ort =="") {
                this.setState({validOrt: "Fyll i här!"})
            }
            else{
                this.setState({validOrt: ""})
            }
            //Kommun
            if (kommun =="") {
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

    //check if something has a number
    isNum(value){
        for (let i = 0; i < value.length; i++){
          var char = value.charAt(i)
          switch (char) {
            case '0':
                return true
            case '1':
                return true
            case '2':
                return true
            case '3':
                return true
            case '4':
                return true
            case '5':
                return true
            case '6':
                return true
            case '7':
                return true
            case '8':
                return true
            case '9':
                return true
        }
        }
        return false
    }
    
   

  render() {
      const { step } = this.state;
      const {fname, lname, address, ort, kommun, postNum, phone, email, apartment,
        house, secondarySpace, selfOwned, sharedSpace, howLongStay, kindOfHouse,
        livingAlone, typeOfGuests, validFname, validLname, validAddress, validKommun,
        validOrt } = this.state;
      const values = {fname, lname, address, ort, kommun, postNum, phone, email,
        apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay,
        kindOfHouse, livingAlone, typeOfGuests, validFname, validLname, validAddress,
        validKommun, validOrt }
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