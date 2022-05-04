import React from 'react'
import Header from '../components/Header'
import FormPageContainer from '../components/FormPageContainer'
import { useEffect } from 'react'


const FormPage = () => {

  useEffect(()=>{
    var test = document.getElementById("show-intrest")
    test.style.textDecorationThickness="3px"
    test.style.textDecorationColor="#489CB7"
    test.style.textUnderlineOffset="10px"
    test.style.textDecorationLine="underline"
  });
  
  


  return (
    <>
    <Header></Header>
    <FormPageContainer />
    
    </>
  )
}

export default FormPage