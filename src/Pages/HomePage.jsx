import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import IntroContainer from '../Components/startsidan/IntroContainer'
import SnakeContainer from '../Components/startsidan/SnakeContainer'
import MainContentContainer from '../Components/startsidan/MainContentContainer'
import StoriesContainer from '../Components/startsidan/StoriesContainer'

const HomePage = () => {
  return (
    <div className='home-div'>
      <Header/>
      <Navbar/>
      <IntroContainer/>
      <SnakeContainer/>
      <MainContentContainer/>
      <StoriesContainer/>
    </div>
  )
}

export default HomePage