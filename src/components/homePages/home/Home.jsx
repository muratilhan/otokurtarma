import React from 'react'
import Main from '../main/Main'
import './home.css'
import Slider from '../slider/Slider'

const Home = () => {

 
  return (
    <div className='home-container'>
        <Slider  />      
        <Main></Main>
    </div>
  )
}

export default Home