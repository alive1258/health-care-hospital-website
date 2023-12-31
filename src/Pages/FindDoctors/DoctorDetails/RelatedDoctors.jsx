import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import DoctorCard from '../../../components/DoctorCard/DoctorCard'

const RelatedDoctors = ({ relatedDoctors }) => {
  return (
    <>
      <div className="container pt-10">
        <h1 className="text-2xl font-bold">Related Doctors</h1>
        <div className="flex space-x-4 mb-4 justify-end">
          <div className="custom-prev-button ">
            <MdOutlineKeyboardArrowLeft className="text-2xl bg-gray-300 h-8 w-8 rounded-full" />
          </div>
          <div className="custom-next-button">
            <MdOutlineKeyboardArrowRight className="text-2xl bg-gray-300 h-8 w-8 rounded-full" />
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          //   onSwiper={swiper => console.log(swiper)}
          //   onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="py-4">
            {relatedDoctors?.map(person => (
              <DoctorCard key={person?._id} person={person} />
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default RelatedDoctors
