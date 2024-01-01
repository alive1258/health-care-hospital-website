import React from 'react'
import hospitalPic1 from '../../../assets/images/hospitalPic1.avif'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { BiSolidQuoteRight } from 'react-icons/bi'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Testimonial = () => {
  return (
    <>
      <div className="container md:pt-40 pt-20">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            Testimonial
          </h2>
          <p className="text-center pt-8">
            Our hospital's website showcases heartfelt testimonials,
            illustrating our commitment to exceptional care and patient
            satisfaction.
          </p>
        </div>

        <div className="md:grid grid-cols-4 gap-6 pt-20">
          <div className="md:col-span-1">
            <h1 className="text-2xl font-semibold">
              What our customer say Testimonial .....
            </h1>
            <div className="pt-5">
              <img src={hospitalPic1} alt="" />
            </div>
          </div>
          <div className="md:col-span-3">
            <Swiper
              //   navigation={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
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
              className="mySwiper"
            >
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <div>
                        <h1 className="text-xl font-semibold">jon deo</h1>
                        <p>Pasiant</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8 ">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full "
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2 ">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-8 ">
                <div className="rounded  overflow-hidden shadow-lg w-80">
                  <div className="flex justify-end w-full md:pr-2">
                    <BiSolidQuoteRight className="text-[#09adfe]" size={40} />
                  </div>
                  <div className="pl-6 flex items-center space-x-3">
                    <img
                      className="w-20 20 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Person"
                    />
                    <div>
                      <h1 className="text-xl font-semibold">jon deo</h1>
                      <p>Pasiant</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="mb-2">
                      <p>
                        The hospital provided exceptional care, ensuring every
                        aspect of my health was tended to with professionalism
                        and compassion. The staff's dedication and expertise
                        made me feel safe and supported throughout my entire
                        recovery journey.
                      </p>
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

export default Testimonial
