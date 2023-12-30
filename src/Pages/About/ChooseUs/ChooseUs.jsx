import React from 'react'
import { GiPirateCannon } from 'react-icons/gi'
import { FaUserDoctor } from 'react-icons/fa6'
import { FaBuildingCircleCheck } from 'react-icons/fa6'
import { FaAmbulance } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdPriceCheck } from 'react-icons/md'
import emergencyPic from '../../../assets/images/emergencyPic.png'
import Marquee from 'react-fast-marquee'

const ChooseUs = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-lg">
            WHY CHOOSE US
          </h2>
          <p className="text-center pt-8">
            Our hospital has professional doctors who provide low cost 24 hour
            service
          </p>
        </div>

        <div className="pt-20 grid md:grid-cols-2 grid-cols-1 gap-6 ">
          <div className="space-y-6 h-[570px] overflow-y-scroll p-4">
            {/* Modern Technology */}
            <div className="flex space-x-6">
              <div>
                <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                  <h1 className="rotate-45">1</h1>
                </div>
              </div>

              <div className="shadow-xl rounded-lg p-6">
                <div>
                  <GiPirateCannon size={40} className="text-[#0165ff]" />
                </div>
                <h1 className="text-2xl font-semibold">Modern Technology</h1>
                <p className="pt-3">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            {/* Professional Doctors */}
            <div className="flex space-x-6">
              <div>
                <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                  <h1 className="rotate-45">1</h1>
                </div>
              </div>

              <div className="shadow-xl rounded-lg p-6">
                <div>
                  <FaUserDoctor size={40} className="text-[#0165ff]" />
                </div>
                <h1 className="text-2xl font-semibold">Professional Doctors</h1>
                <p className="pt-3">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            {/* Year Of Experience*/}
            <div className="flex space-x-6">
              <div>
                <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                  <h1 className="rotate-45">1</h1>
                </div>
              </div>

              <div className="shadow-xl rounded-lg p-6">
                <div>
                  <FaBuildingCircleCheck size={40} className="text-[#0165ff]" />
                </div>
                <h1 className="text-2xl font-semibold">Year Of Experience</h1>
                <p className="pt-3">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            {/* Staff Availability*/}
            <div className="flex space-x-6">
              <div>
                <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                  <h1 className="rotate-45">1</h1>
                </div>
              </div>

              <div className="shadow-xl rounded-lg p-6">
                <div>
                  <FaPeopleGroup size={40} className="text-[#0165ff]" />
                </div>
                <h1 className="text-2xl font-semibold">Staff Availability</h1>
                <p className="pt-3">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            {/* Affordable Price*/}
            <div className="flex space-x-6">
              <div>
                <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                  <h1 className="rotate-45">1</h1>
                </div>
              </div>

              <div className="shadow-xl rounded-lg p-6">
                <div>
                  <MdPriceCheck size={40} className="text-[#0165ff]" />
                </div>
                <h1 className="text-2xl font-semibold">Affordable Price</h1>
                <p className="pt-3">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
          </div>
          <div className="pl-6 relative">
            <div className="">
              <img className="w-full  md:h-[450px]" src={emergencyPic} alt="" />
            </div>
            <div className="absolute bottom-36">
              <div className="bg-white py-4 px-5 flex space-x-4">
                <div>
                  <h1 className="text-xl font-semibold text-[#ef233c]">
                    24/7 Hours Service
                  </h1>
                  <p className="text-lg font-medium">1-885-665-2022</p>
                </div>
                <FaAmbulance size={50} className="text-[#ef233c]" />
              </div>
            </div>
            {/* marquery  */}
            <div className="">
              <div className="text-2xl bg-[#48cae4] py-4 text-white">
                <Marquee speed={30}>
                  The hospital's emergency services provide critical and
                  immediate medical care to individuals experiencing sudden
                  illness or injury. Staffed with skilled medical professionals,
                  these services offer swift assessment, treatment, and
                  stabilization to patients in urgent need, ensuring timely and
                  efficient care during emergencies. Accessible 24/7, the
                  emergency department is equipped to handle a wide range of
                  medical conditions, prioritizing patient well-being and rapid
                  intervention
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseUs
