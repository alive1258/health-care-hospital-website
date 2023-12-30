import React from 'react'
import ServiceBanner from '../ServiceBanner/ServiceBanner'
import Department from '../Department/Department'
import OurAchievement from '../../Home/OurAchievement/OurAchievement'
import MeetOurDoctors from '../../Home/MeetOurDoctors/MeetourDoctors'
import OurBlogs from '../OurBlogs/OurBlogs'

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <Department />
      <OurAchievement />
      <MeetOurDoctors />
      <OurBlogs />
    </>
  )
}

export default Services
