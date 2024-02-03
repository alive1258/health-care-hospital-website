import React, { useEffect, useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import DoctorCard from '../../../components/DoctorCard/DoctorCard'

const MeetOurDoctors = () => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    fetch('/doctorsData.json')
      .then(res => res.json())
      .then(data => {
        const slicedData = data.slice(0, 8)
        setDoctors(slicedData)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 350
  }
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            Meet Our Popular Doctors
          </h2>
          <p className="text-center pt-8">
            Meet our esteemed team of dedicated doctors, each committed to
            providing personalized care and expertise tailored to your needs.
          </p>
        </div>

        {/* doctors  */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 pt-20">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-semibold">About All Doctors</h1>
            <p className="pt-8 pr-4">
              Our team of dedicated doctors embodies a wealth of expertise and
              compassion, ensuring personalized care for every individual. Each
              member brings a unique skill set and a shared dedication to
              improving lives through exceptional medical care. Through
              continuous learning and innovation, our doctors remain at the
              forefront of their specialties, delivering top-notch healthcare to
              our community.
            </p>
            <div className=" pt-14">
              <Link to="/doctors">
                <button
                  onClick={topFunction}
                  className="bg-[#0165ff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  See All Doctors
                </button>
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex space-x-4 mb-4 justify-end">
              <div className="custom-prev-button ">
                <MdOutlineKeyboardArrowLeft className="text-2xl bg-gray-300 hover:bg-[#0165ff] duration-500 ease-in-out hover:text-[#ffffff] h-8 w-8 rounded-full" />
              </div>
              <div className="custom-next-button">
                <MdOutlineKeyboardArrowRight className="text-2xl bg-gray-300 hover:bg-[#0165ff] duration-500 ease-in-out hover:text-[#ffffff] h-8 w-8 rounded-full" />
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                nextEl: '.custom-next-button',
                prevEl: '.custom-prev-button',
              }}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation, Scrollbar, A11y]}
              className="mySwiper"
            >
              {doctors?.map(person => (
                <SwiperSlide className="">
                  <div className="">
                    <DoctorCard key={person?._id} person={person} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetOurDoctors
