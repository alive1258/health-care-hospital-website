import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import patient1 from '../../../assets/images/patainent1.jpg'
import patient2 from '../../../assets/images/patinet2.jpg'
import patient3 from '../../../assets/images/patient3.jpeg'
import treatment1 from '../../../assets/images/treatment1.jpg'
import treatment2 from '../../../assets/images/treatment2.jpg'
import doctorpic1 from '../../../assets/images/drPic.avif'
import { FaCircleCheck } from 'react-icons/fa6'
import { FaUserDoctor } from 'react-icons/fa6'
import { IoStar } from 'react-icons/io5'
import { AiFillLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HospitalCare = () => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 350
  }
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            Consult A Doctor
          </h2>
          <p className="text-center pt-4">
            Get latest news in your inbox.A Doctor Anytime, Anywhere By Search
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 pt-20">
          <div>
            <div className="flex items-center justify-center ">
              <div className="bg-white ml-8 z-10 px-4 py-3 shadow-lg rounded-lg w-96">
                <div className="flex justify-between ">
                  <div>
                    <h1 className="text-xl font-semibold">3.5K Plus</h1>
                    <p>Satisfied Patients</p>
                  </div>
                  <div className="flex ">
                    <img
                      className="h-12 w-12 rounded-full  relative left-10"
                      src={patient1}
                      alt=""
                    />
                    <img
                      className="h-12 w-12 rounded-full relative left-5"
                      src={patient2}
                      alt=""
                    />
                    <img
                      className="h-12 w-12 rounded-full "
                      src={patient3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-8 mt-3">
              <div className="bg-[#e5f4f7] pt-6 md:px-4 h-[420px] rounded-xl">
                <div className="grid grid-cols-3 md:gap-4 gap-2">
                  <div className="col-span-2">
                    <img
                      src={treatment2}
                      className="md:h-[430px] h-[330px] w-full rounded-lg"
                      alt=""
                    />

                    <div className="bg-white shadow-lg md:px-3 px-2 md:py-4 pb-2 md:w-52 rounded-lg relative bottom-24 md:right-14 right-4">
                      <div className="flex justify-center">
                        <div className="w-20">
                          <div className="flex space-x-1">
                            <IoStar size={20} className="text-[#fb8500]" />
                            <IoStar
                              size={30}
                              className="relative animate-bounce bottom-3 text-[#fb8500]"
                            />
                            <IoStar size={20} className="text-[#fb8500]" />
                          </div>
                          <div className="flex justify-center">
                            <AiFillLike
                              size={30}
                              className="relative bottom-3 text-[#4361ee]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 p-2 rounded-lg">
                        <div className="flex items-center justify-center space-x-1">
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <p>5.0</p>
                        </div>
                      </div>
                      <div className="pt-2 text-center">
                        <h1 className="md:text-lg font-semibold">
                          Mark A. Wilson
                        </h1>
                        <p>Heart Patient</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <img
                      src={treatment1}
                      className="md:h-64 w-full h-48 relative bottom-12 md:bottom-20 rounded-lg"
                      alt=""
                    />
                    <div className="relative md:block hidden z-10 right-24 bottom-32">
                      <div className="flex bg-white w-60 rounded-lg space-x-2 px-2 py-2 ">
                        <div>
                          <img
                            src={doctorpic1}
                            className="h-14 w-14 rounded-full "
                            alt=""
                          />
                          <FaCircleCheck className="text-[#4361ee] relative bottom-4" />
                        </div>
                        <div>
                          <h1 className="text-lg font-semibold">
                            Lily A. Wilson
                          </h1>
                          <p>Senior Cardiologist</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#9d4edd] text-[#ffffff] md:py-6 py-3 px-1 rounded-lg relative bottom-6 md:bottom-36">
                      <div className="">
                        <div className="flex justify-center">
                          <FaUserDoctor size={40} />
                        </div>
                        <div className="text-center ">
                          <h1 className="font-semibold">150 Plus</h1>
                          <p>World's Top Doctors</p>
                          <p>Senior Cardiologist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Care */}
          <div className="md:pl-4 md:pt-1 pt-28">
            <div className="md:col-span-2 ">
              <h1 className="text-3xl font-bold md:text-start text-center">
                Hospital Care
              </h1>
              <p className="pt-4">
                Welcome to Health Care Hospital, where wellness meets expertise
                in healthcare. We prioritize your well-being by providing
                exceptional medical care tailored to your needs. Our dedicated
                team ensures your journey toward better health is guided by
                compassion and professionalism. in healthcare. We prioritize
                your well-being by providing exceptional medical care tailored
                to your needs. Our dedicated team ensures your journey toward
                better health is guided by compassion and professionalism.
              </p>

              <div className="pt-12 space-y-5">
                <div className="flex items-center space-x-2">
                  <IoCheckmarkCircle size={20} className="text-[#4361ee]" />
                  <p>
                    Precision diagnostics and tailored treatments for optimal
                    care.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <IoCheckmarkCircle size={20} className="text-[#4361ee]" />
                  <p>Holistic wellness programs promoting mind-body harmony.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <IoCheckmarkCircle size={20} className="text-[#4361ee]" />
                  <p>
                    Cutting-edge surgeries performed by skilled specialists.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <IoCheckmarkCircle size={20} className="text-[#4361ee]" />
                  <p>Expert consultations covering diverse health domains.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <IoCheckmarkCircle size={20} className="text-[#4361ee]" />
                  <p>Compassionate care at the heart of our services.</p>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/doctors">
                  <button
                    onClick={topFunction}
                    className="bg-[#4361ee] text-white px-4 py-2 rounded-md"
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HospitalCare
