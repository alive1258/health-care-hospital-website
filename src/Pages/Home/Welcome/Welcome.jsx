import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'

const Welcome = () => {
  return (
    <>
      <div className="container mt-40">
        <div className="">
          <div>
            <h1 className="text-3xl">Welcome to Health Care Hospital</h1>
            <p className="pt-4">
              Welcome to Health Care Hospital, where wellness meets expertise in
              healthcare. We prioritize your well-being by providing exceptional
              medical care tailored to your needs. Our dedicated team ensures
              your journey toward better health is guided by compassion and
              professionalism.
            </p>

            <div className="pt-8 space-y-3">
              <div className="flex items-center space-x-2">
                <IoCheckmarkCircle size={20} className="text-[#9d4edd]" />
                <p>
                  Precision diagnostics and tailored treatments for optimal
                  care.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <IoCheckmarkCircle size={20} className="text-[#9d4edd]" />
                <p>Holistic wellness programs promoting mind-body harmony.</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoCheckmarkCircle size={20} className="text-[#9d4edd]" />
                <p>Cutting-edge surgeries performed by skilled specialists.</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoCheckmarkCircle size={20} className="text-[#9d4edd]" />
                <p>Expert consultations covering diverse health domains.</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoCheckmarkCircle size={20} className="text-[#9d4edd]" />
                <p>Compassionate care at the heart of our services.</p>
              </div>
            </div>
            <div className="pt-6">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
                Know More
              </button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Welcome
