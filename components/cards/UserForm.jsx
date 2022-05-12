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
        apartment: true,
        house: false,
        secondarySpace: false,
        selfOwned: false,
        sharedSpace: false,
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
                            // firstname: 'andreas'
        }
    }
  render() {
      const { step } = this.state;
      const {fname, lname, address, ort, kommun, postNum, phone, email, apartment, house, secondarySpace, selfOwned, sharedSpace } = this.state;
      const values = {fname, lname, address, ort, kommun, postNum, phone, email, apartment, house, secondarySpace, selfOwned, sharedSpace }
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