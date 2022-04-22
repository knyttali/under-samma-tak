import React from 'react'
import IntrestIntroduction from './IntrestIntroduction'
import SideNav from './SideNav'
import PersonalInfo from './cards/PersonalInfo'
import Living from './cards/Living'
import Guests from './cards/Guests'
const FormPageContainer = () => {
  return (
    <div className='main-container row'>
        <SideNav />
        <div className="col-1"></div>
        <IntrestIntroduction />
    </div>
  )
}

export default FormPageContainer