import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import IntroContainer from '../Components/IntroContainer'
import SnakeContainer from '../Components/SnakeContainer'
import MainContentContainer from '../Components/MainContentContainer'
import StoriesContainer from '../Components/StoriesContainer'

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