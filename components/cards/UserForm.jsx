import React, { Component } from 'react'
import PersonalInfo from "./PersonalInfo"
import Living from './Living'
import Guests from './Guests'
import LivingAmountOfTime from './LivingAmountOfTime'
import CollectedInfo from './CollectedInfo'

export class UserForm extends Component {
    state = {
        step: 1,
        fname: "g",
        lname: "g",
        adress: "g",
        ort: "g",
        kommun: "g",
        postNum: "3",
        phone: "3",
        email: "g",
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
        validAdress:"",
        validOrt:"",
        validKommun:"",
        validPostNum: "",
        validPhone: "",
        validEmail:"",
        validKindOfHouse:"",
        validLivingAlone:"",
        validTypeOfGuest:"",
        validHowLongStay:"",
    }
    //next step
    nextStep = () => {
        
        const {step} = this.state;
        

               if (this.validationPersonalInfo() && step == 1) {
                this.setState({
                    step: step + 1
                })
               }
               else if (this.validationLiving() && step == 2) {
                   this.setState({
                       step: step + 1
                   })
               }
               else if (this.validationGuests() && step == 3) {
                   this.setState({
                       step: step + 1
                   })
               }
               else if (this.validationLivingAmount() && step == 4) {
                   this.setState({
                       step: step + 1
                   })
               }
  
    }

    validationPersonalInfo(){
        const {fname, lname, adress, ort, kommun, postNum, phone, email} = this.state
        var validation = "good"
        
        
            //FirstName
            if (fname =="") {
                this.setState({validFname: "Fyll i här!"})
                validation ="bad"
            }
            else{
                this.setState({validFname: ""})
            }
            if (this.isNum(fname)) {
                console.log("number in name")
                console.log("hej")
                this.setState({validFname: "Kan inte ha nummer i ditt namn!"})
                validation ="bad"
                
            }
            //LastName
            if (lname =="") {
                this.setState({validLname: "Fyll i här!"})
                validation ="bad"
            }
            else{
                this.setState({validLname: ""})
            }
            if (this.isNum(lname)) {
                console.log("number in name")
                this.setState({validLname: "Kan inte ha nummer i ditt namn!"})
                validation ="bad"
            }
            //Adress
            if (adress =="") {
                this.setState({validAdress: "Fyll i här!"})
                validation ="bad"
            }
            else{
                this.setState({validAdress: ""})
            }
            //Ort
            if (ort =="") {
                this.setState({validOrt: "Fyll i här!"})
                validation ="bad"
            }
            else{
                this.setState({validOrt: ""})
            }
            //Kommun
            if (kommun =="") {
                this.setState({validKommun: "Fyll i här!"})
                validation ="bad"
            }
            else{
                this.setState({validKommun: ""})
            }
            //PostNummer
            if (postNum =="") {
                this.setState({validPostNum: "Fyll i här"})
                console.log("bruh")
                validation ="bad"
            }
            else if (this.isNotNum(postNum)) {
                this.setState({validPostNum: "ange giltigt postNummer"})
                validation ="bad"
            }
            else{
                this.setState({validPostNum: ""})
                
            }
            //Phone
            if (phone =="") {
                this.setState({validPhone: "Fyll i här!"})
                validation ="bad"
            }
            else if (this.isNotNum(phone)) {
                this.setState({validPhone: "Ange giltigt telefonnummer"})
                validation ="bad"
            }
            else{
                this.setState({validPhone: ""})
            }
            //Email
            if (email == "") {
                this.setState({validEmail: "Fyll i här!"})
                validation ="bad"
            }
            else{
                this.setState({validEmail: ""})
            }

            if (validation === "good") {
                return true
            }
            else return false
    }

    validationLiving(){
        const { kindOfHouse, livingAlone } = this.state
        var validation = "good"
        //Typ av boende
        if(kindOfHouse == ""){
            this.setState({validKindOfHouse: "Fyll i här!"})
            validation = "bad"
        }
        else if (this.isNum(kindOfHouse)) {
            this.setState({validKindOfHouse: "skriv en valid hus sort!"})
            validation = "bad"
        }
        else{
            this.setState({validKindOfHouse: ""})
        }
        //bor du ensam
        if (livingAlone == "") {
            this.setState({validLivingAlone: "Fyll i här!"})
            validation = "bad"
        }
        else if (livingAlone.toLowerCase() == "ja" || livingAlone.toLowerCase() == "nej") {
            this.setState({validLivingAlone: ""})
        }
        else{
            this.setState({validLivingAlone: 'Svara "ja" eller "nej"'})
            validation = "bad"
        }

        if (validation === "good") {
            return true
        }
        else return false

    }

    validationGuests(){
        const { typeOfGuests } = this.state
        var validation = "good"
        if (typeOfGuests == "") {
            this.setState({validTypeOfGuest: "Fyll i här!"})
            validation = "bad"
        }
        else if (this.isNum(typeOfGuests)) {
            this.setState({validTypeOfGuest: "skriv inte med siffror!"})
            validation = "bad"
        }
        else{
            this.setState({validTypeOfGuest: ""})
        }

        if (validation === "good") {
            return true
        }
        else return false
    }
    validationLivingAmount(){
        const{howLongStay} = this.state
        var validation = "good"
        if (howLongStay == "") {
            this.setState({validHowLongStay: "Fyll i här!"})
            validation = "bad"
        }
        else{
            this.setState({validHowLongStay: ""})
        }

        if (validation === "good") {
            return true
        }
        else return false


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

    isNotNum(value){
        for (let i = 0; i < value.length; i++){
          var char = value.charAt(i)
          var noNumber = 0
          switch (char) {
            case '0':
              break;
            case '1':
                break;
            case '2':
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
            case '7':
                break;
            case '8':
                break;
            case '9':
                break;
            default:
                return true
        }
        }
        return false
    }
    
   

  render() {
      const { step } = this.state;
      const {fname, lname, adress, ort, kommun, postNum, phone, email, apartment,
        house, secondarySpace, selfOwned, sharedSpace, howLongStay, kindOfHouse,
        livingAlone, typeOfGuests, validFname, validLname, validAdress, validKommun,
        validOrt, validPostNum, validPhone, validEmail, validKindOfHouse,
        validTypeOfGuest, validLivingAlone, validHowLongStay } = this.state;
      const values = {fname, lname, adress, ort, kommun, postNum, phone, email,
        apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay,
        kindOfHouse, livingAlone, typeOfGuests, validFname, validLname, validAdress,
        validKommun, validOrt, validPostNum, validPhone, validEmail, validKindOfHouse,
        validTypeOfGuest, validLivingAlone, validHowLongStay }
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