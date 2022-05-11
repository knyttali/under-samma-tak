import React from 'react'
// import IntrestIntroduction from './IntrestIntroduction'
import UserForm from './cards/UserForm'
import SideNav from './SideNav'

const FormPageContainer = () => {
  return (
    <div className='main-container row'>
        <SideNav />
        <div className="col-1"></div>
         <UserForm /> 
    </div>
  )
}

export default FormPageContainer