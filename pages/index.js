import Header from '../components/Header'
import IntroContainer from '../components/IntroContainer'
import MainContentContainer from '../components/MainContentContainer'

import StoriesContainer from '../components/StoriesContainer'
import { useEffect } from 'react'

export default function Home() {
  // useEffect(()=>{
  //   var logo = document.getElementById("logoimg")
  //   logo.style.backgroundImage="linear-gradient(to bottom right,#489CB7,#004664)"
  // });
  return (
    <div>
      <Header></Header>
      <IntroContainer></IntroContainer>
    
      <MainContentContainer></MainContentContainer>
      <StoriesContainer></StoriesContainer>
    </div>
  )
}
