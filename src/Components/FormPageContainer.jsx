import React from 'react'
import IntrestIntroduction from './IntrestIntroduction'
import SideNav from './SideNav'

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