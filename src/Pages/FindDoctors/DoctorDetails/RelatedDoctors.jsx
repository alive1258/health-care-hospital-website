import React from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import DoctorCard from '../../../components/DoctorCard/DoctorCard'

const RelatedDoctors = ({ relatedDoctors }) => {
  return (
    <>
      <div className="pt-10">
        <h1 className="text-2xl font-bold">Related Doctors</h1>
        <div className="flex space-x-4 mb-4 justify-end pr-4">
          <div className="custom-prev-button ">
            <MdOutlineKeyboardArrowLeft className="text-2xl bg-gray-300 hover:bg-[#0165ff] hover:text-white h-8 w-8 rounded-full" />
          </div>
          <div className="custom-next-button">
            <MdOutlineKeyboardArrowRight className="text-2xl bg-gray-300 hover:bg-[#0165ff] hover:text-white h-8 w-8 rounded-full" />
          </div>
        </div>
        <div className="px-4">
          <Swiper
            // install Swiper modules
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
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            className="mySwiper"
          >
            {relatedDoctors?.map(person => (
              <SwiperSlide key={person?._id}>
                <div>
                  <DoctorCard key={person?._id} person={person} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default RelatedDoctors
