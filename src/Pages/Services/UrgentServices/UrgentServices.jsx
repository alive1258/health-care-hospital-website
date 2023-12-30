import React from 'react'
import { BsFillBagPlusFill } from 'react-icons/bs'
import { FaAsymmetrik } from 'react-icons/fa6'
import { PiThermometerColdFill } from 'react-icons/pi'
import { GiTestTubes } from 'react-icons/gi'
import { MdOutlineVaccines } from 'react-icons/md'
import { FaXRay } from 'react-icons/fa6'
import { ImProfile } from 'react-icons/im'
import { GrDocumentTest } from 'react-icons/gr'

import { PiFunnelFill } from 'react-icons/pi'
import { IoIosSpeedometer } from 'react-icons/io'

const UrgentServices = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-lg">
            Urgent Services
          </h2>
          <p className="text-center pt-4">
            Our Latest News & Articles.Get latest news in your inbox.
          </p>
        </div>
        <div className="grid pt-20 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {/* Sugar testing  */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <FaAsymmetrik size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Sugar </h1>
              <h3>Testing</h3>
            </div>
          </div>
          {/* Antibody Testing */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <GiTestTubes size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Antibody </h1>
              <h3>Testing</h3>
            </div>
          </div>
          {/* Vaccination Dose */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <MdOutlineVaccines size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Vaccination </h1>
              <h3>Dose</h3>
            </div>
          </div>
          {/* X-Ray And ECG */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <FaXRay size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>X-Ray</h1>
              <h3>And ECG</h3>
            </div>
          </div>
          {/* Lipid Profile */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <ImProfile size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Lipid </h1>
              <h3> Profile</h3>
            </div>
          </div>
          {/* Thyroid Test */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <GrDocumentTest size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Thyroid </h1>
              <h3>Test</h3>
            </div>
          </div>
          {/* Hepatic Function Panel */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <PiFunnelFill size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Hepatic </h1>
              <h3>Function Panel</h3>
            </div>
          </div>
          {/* Prolactin Test */}
          <div className="shadow-xl px-4 py-6 rounded-lg ">
            <div className="w-20 mx-auto">
              <div className="flex items-center justify-center bg-gray-200 p-4 h-20 w-20  rounded-full">
                <IoIosSpeedometer size={40} className="text-[#0165ff] " />
              </div>
            </div>

            <div className="text-center pt-5 text-xl font-semibold">
              <h1>Prolactin </h1>
              <h3>Test</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UrgentServices
