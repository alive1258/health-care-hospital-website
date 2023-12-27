import React from 'react'
import Hero from '../Hero/Hero'
import Medical from '../Medical/Medical'
import Welcome from '../Welcome/Welcome'
import Departments from '../Departments/Departments'
import OurAchievement from '../OurAchievement/OurAchievement'
import MeetOurDoctors from '../MeetOurDoctors/MeetourDoctors'

const Home = () => {
  return (
    <div>
      <Hero />
      <Medical />
      <Welcome />
      <Departments />
      <OurAchievement />
      <MeetOurDoctors />
    </div>
  )
}

export default Home
