import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import './Welcome.css'

const Welcome = () => {
  return (
    <>
      <div className="container mt-40">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 space-y-4 ">
          <div className="md:col-span-2 ">
            <h1 className="text-3xl font-bold">
              Welcome to Health Care Hospital
            </h1>
            <p className="pt-4">
              Welcome to Health Care Hospital, where wellness meets expertise in
              healthcare. We prioritize your well-being by providing exceptional
              medical care tailored to your needs. Our dedicated team ensures
              your journey toward better health is guided by compassion and
              professionalism.
            </p>

            <div className="pt-8 space-y-3">
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
                <p>Cutting-edge surgeries performed by skilled specialists.</p>
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
              <button class="bg-[#4361ee] text-white px-4 py-2 rounded-md">
                Know More
              </button>
            </div>
          </div>
          {/* welcome hospital video  */}

          <div className="md:col-span-1">
            <iframe
              width="100%"
              height="430"
              src="https://www.youtube.com/embed/KmYm6zphh_A?si=Y-bH5ZheXkBQ97Eh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          {/* Working Time  */}
          <div className="bg-[rgb(67,97,238)] md:col-span-1">
            <div className=" p-4">
              <div className="text-[#ffffff] border-2 px-3 py-3  border-[#ffffff]">
                <h1 className="font-semibold text-xl ">Working Time</h1>

                <div className="space-y-4 pt-10">
                  <p>Saturday - 10:00am - 07:00pm</p>
                  <p>Sunday - Emergency Only</p>
                  <p>Monday - 8:00 AM – 10:00 pm</p>
                  <p>Tuesday - 8:00 AM – 7:00 pm</p>
                  <p>Wednesday - 8:00 AM – 10:00 pm</p>
                  <p>Thursday - 8:00 AM – 7:00 pm</p>
                  <p>Friday - Fri 08:00am - 10:00pm</p>
                  <p>Ambulance - 24/7 Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
