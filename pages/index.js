import Header from '../components/Header'
import IntroContainer from '../components/homepage/IntroContainer'
import ToBeHoast from '../components/homepage/ToBeHoast'

import { useEffect } from 'react'

export default function Home() {
  // useEffect(()=>{
  //   var logo = document.getElementById("logoimg")
  //   logo.style.backgroundImage="linear-gradient(to bottom right,#489CB7,#004664)"
  // });
  return (
    <div className='homepage'>
      <Header></Header>
      <IntroContainer></IntroContainer>
      <ToBeHoast></ToBeHoast>
    </div>
  )
}
