import React from 'react'
import { FaHandHoldingMedical } from 'react-icons/fa'
import { FaHandHoldingHand, FaUserDoctor } from 'react-icons/fa6'
import { GiMedicines } from 'react-icons/gi'
import doctorPic1 from '../../../assets/images/doctorPic1.jpg'
import doctorPic2 from '../../../assets/images/doctorPic2.jpg'
import hospitalPic1 from '../../../assets/images/hospital1.png'

const AboutUs = () => {
  return (
    <>
      <div className="container md:pt-40 pt-20">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            About Us
          </h2>
          <p className="text-center pt-8">
            Hospitals serve as crucial institutions providing comprehensive
            medical care and treatment to individuals in need
          </p>
        </div>
        <div className="pt-20 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="grid md:grid-rows-4 md:grid-flow-col gap-4">
            <div className="row-span-4 ">
              <img
                className="h-full w-full rounded-lg"
                src={hospitalPic1}
                alt=""
              />
            </div>
            <div className="row-span-2  ">
              <img
                className="h-full w-full rounded-lg"
                src={doctorPic1}
                alt=""
              />
            </div>
            <div className="row-span-2 ">
              <img
                className="h-full w-full rounded-lg"
                src={doctorPic2}
                alt=""
              />
            </div>
          </div>
          {/* WHO WE ARE */}
          <div>
            <div>
              <h1 className="text-2xl font-semibold">WHO WE ARE</h1>
              <p className="text-lg font-semibold">
                We have been providing services to patients for over 20 years
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-6">
              <div className="transition cursor-pointer  delay-300 duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl p-4">
                <FaHandHoldingHand size={40} className="text-[#0165ff]" />
                <h1 className="text-2xl font-semibold">1K+ Healing Hands</h1>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Proin eget tortor risus.
                </p>
              </div>
              <div className="transition cursor-pointer  delay-300 duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl p-4">
                <FaUserDoctor size={40} className="text-[#0165ff]" />
                <h1 className="text-2xl font-semibold">Experience Doctors</h1>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Proin eget tortor risus.
                </p>
              </div>
              <div className="transition cursor-pointer  delay-300 duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl p-4">
                <FaHandHoldingMedical size={40} className="text-[#0165ff]" />
                <h1 className="text-2xl font-semibold">Advanced Healthcare</h1>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Proin eget tortor risus.
                </p>
              </div>
              <div className="transition cursor-pointer delay-300 duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl p-4">
                <GiMedicines size={40} className="text-[#0165ff]" />
                <h1 className="text-2xl font-semibold">50+ Pharmacies</h1>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Proin eget tortor risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
