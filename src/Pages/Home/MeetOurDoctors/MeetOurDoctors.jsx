import React from 'react'
import drPic1 from '../../../assets/images/drPic.avif'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa6'
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

const MeetOurDoctors = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            Meet Our Doctors
          </h2>
          <p className="text-center pt-8">
            Meet our esteemed team of dedicated doctors, each committed to
            providing personalized care and expertise tailored to your needs.
          </p>
        </div>

        {/* doctors  */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 pt-20">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-semibold">About our doctors</h1>
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                See All Doctors
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex space-x-4 mb-4 justify-end">
              <div className="custom-prev-button ">
                <MdOutlineKeyboardArrowLeft className="text-2xl bg-gray-300 h-8 w-8 rounded-full" />
              </div>
              <div className="custom-next-button">
                <MdOutlineKeyboardArrowRight className="text-2xl bg-gray-300 h-8 w-8 rounded-full" />
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
              <SwiperSlide className="py-4">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6 ">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                {' '}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                {' '}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                {' '}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                {' '}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                {' '}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-4">
                {' '}
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                  <div className="py-6">
                    <img
                      className="w-48 h-auto rounded-full mx-auto"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className=" mb-2 space-y-1">
                      <h1 className="text-xl font-semibold flex justify-center ">
                        Dr.Nayeem Kader
                      </h1>
                      <h4 className="flex justify-center text-lg font-semibold">
                        Cardiology
                      </h4>
                    </div>
                    <div className="flex justify-center py-6 space-x-4">
                      {/* Replace the links with actual social media profile links */}
                      <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <GrInstagram />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetOurDoctors
