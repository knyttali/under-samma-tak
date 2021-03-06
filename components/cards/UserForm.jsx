import React, { Component, Fragment } from 'react'
import validator from 'validator';
import PersonalInfo from "./PersonalInfo"
import Living from './Living'
import Guests from './Guests'
import LivingAmountOfTime from './LivingAmountOfTime'
import CollectedInfo from './CollectedInfo'
import SentIntrest from './SentIntrest'
import LandingPage from './LandingPage';

export class UserForm extends Component {
    state = {
        step: 1,
        fname: "",
        lname: "",
        adress: "",
        ort: "",
        kommun: "",
        postNum: "",
        phone: "",
        email: "",
        kindOfHouse:"",
        livingAlone:"",
        typeOfGuests: "",
        howManyGuests: "",
        howLongStay: "",
        validFname:"",
        validLname:"",
        validAdress:"",
        validOrt:"",
        validKommun:"",
        validPostNum: "",
        validPhone: "",
        validEmail:""    
    }
    //next step
    nextStep = () => {
        
        const {step} = this.state;
        

               if (this.validationPersonalInfo()) {
                this.setState({
                    step: step + 1,
                })
               }  
    }
    firstStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step + 1,
        })
    }

    validationPersonalInfo(){
        const {fname, lname, adress, ort, kommun, postNum, phone, email} = this.state
        var validation = "good"
        
        
            //FirstName
            if (fname =="") {
                this.setState({validFname: "Du måste fylla i ett förnamn"})
                validation ="bad"
            }
            else{
                this.setState({validFname: ""})
            }
            if (this.isNum(fname)) {
                this.setState({validFname: "Kan inte ha nummer i ditt förnamn"})
                validation ="bad"
                
            }
            //LastName
            if (lname =="") {
                this.setState({validLname: "Du måste fylla i ett efternamn"})
                validation ="bad"
            }
            else{
                this.setState({validLname: ""})
            }
            if (this.isNum(lname)) {
                console.log("number in name")
                this.setState({validLname: "Kan inte ha nummer i ditt efternamn"})
                validation ="bad"
            }
            //Adress
            if (adress =="") {
                this.setState({validAdress: "Du måste fylla i en gatuadress"})
                validation ="bad"
            }
            else{
                this.setState({validAdress: ""})
            }
            //Ort
            if (ort =="") {
                this.setState({validOrt: "Du måste fylla i ort"})
                validation ="bad"
            }
            else{
                this.setState({validOrt: ""})
            }
            //Kommun
            if (kommun =="") {
                this.setState({validKommun: "Du måste fylla i en kommun"})
                validation ="bad"
            }
            else{
                this.setState({validKommun: ""})
            }
            //PostNummer
            if (postNum =="") {
                this.setState({validPostNum: "Du måste fylla i postnummer"})
                validation ="bad"
            }
            else if (this.isNotNum(postNum)) {
                this.setState({validPostNum: "Ange giltigt postNummer"})
                validation ="bad"
            }
            else{
                this.setState({validPostNum: ""})
                
            }
            //Phone
            if (phone =="") {
                this.setState({validPhone: "Du måste ange ett telefonnummer"})
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
                this.setState({validEmail: "Du måste fylla i en email adress"})
                validation ="bad"
            }
            else if (!validator.isEmail(email)){
                this.setState({validEmail: "Du måste fylla i en giltig email adress"})
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


    //go back one step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }
    //Field change
    handleChange = input => e => {
        if(e.target.type === 'checkbox'){

            if(e.target.checked){

                this.setState({[input]: true});

                console.log(e.target.value)

            }
            else{
                console.log('not checked')
            }

        }
        else{
            this.setState({[input]: e.target.value});
        }
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
        livingAlone, typeOfGuests, howManyGuests, validFname, validLname, validAdress, validKommun,
        validOrt, validPostNum, validPhone, validEmail } = this.state;
      const values = {fname, lname, adress, ort, kommun, postNum, phone, email,
        apartment, house, secondarySpace, selfOwned, sharedSpace, howLongStay,
        kindOfHouse, livingAlone, typeOfGuests, howManyGuests, validFname, validLname, validAdress,
        validKommun, validOrt, validPostNum, validPhone, validEmail }
    switch(step){
        case 1:
            return <LandingPage 
                    firstStep={this.firstStep}
                    />
                    
        case 2:
            return <PersonalInfo 
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
               
            
        case 3:
            return <Living 
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
        case 4: 
            return <Guests
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
        case 5: 
            return <LivingAmountOfTime
                    nextStep={this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                    prevStep={this.prevStep}
                    />
        case 6: 
            return <CollectedInfo 
                    prevStep={this.prevStep}
                    values = {values}
                    nextStep={this.nextStep}
                    />
        case 7:
            return <SentIntrest />

        
    }
  }
}

export default UserForm