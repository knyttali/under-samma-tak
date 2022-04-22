import React from 'react'
import IntrestIntroduction from './IntrestIntroduction'
import SideNav from './SideNav'
import PersonalInfo from './PersonalInfo'
import Living from './Living'
import Guests from './Guests'
const FormPageContainer = () => {
  return (
    <div className='main-container row'>
        <SideNav />
        <div className="col-1"></div>
        <IntrestIntroduction />
        <Living />
        <Guests />

        

    </div>
  )
}

export default FormPageContainer