import React from 'react'
import ServiceBanner from '../ServiceBanner/ServiceBanner'
import Department from '../Department/Department'
import OurAchievement from '../../Home/OurAchievement/OurAchievement'
import MeetOurDoctors from '../../Home/MeetOurDoctors/MeetourDoctors'
import OurBlogs from '../OurBlogs/OurBlogs'
import UrgentServices from '../UrgentServices/UrgentServices'

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <Department />
      <OurAchievement />
      <MeetOurDoctors />
      <OurBlogs />
      <UrgentServices />
    </>
  )
}

export default Services
