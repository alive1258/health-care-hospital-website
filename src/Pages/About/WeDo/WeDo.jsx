import React from 'react'
import { FaAmbulance } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'
import { MdBloodtype } from 'react-icons/md'
import { GiBrain } from 'react-icons/gi'

const WeDo = () => {
  return (
    <>
      <div className="container md:pt-40 pt-20">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            What We Do
          </h2>
          <p className="text-center pt-8">
            Hospitals serve as crucial institutions providing comprehensive
            medical care and treatment to individuals in need
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 pt-20">
          <div>
            <div className="border-2 bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 left-24 ">
              <FaAmbulance size={50} className="-rotate-45  text-[#7b2cbf]" />
            </div>

            <div className="border-2 bg-[#ffffff] px-2 pt-16 pb-4 space-y-2 hover:bg-[#7b2cbf] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">
                EMERGENCY CARE
              </h1>
              <p>
                Emergency care at our hospital swift and comprehensive medical
                attention for urgent health needs round the clock.
              </p>
            </div>
          </div>

          <div>
            <div className="border-2 bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 left-24">
              <FaHeartbeat size={50} className="-rotate-45  text-[#ff5400]" />
            </div>

            <div className="border-2 bg-[#ffffff] px-2 pt-16 pb-4 space-y-2 hover:bg-[#ff5400] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">HEART CARE</h1>
              <p>
                Our hospital specializes in heart care, offering advanced
                treatments and personalized care for cardiac health
                ofcomprehensive .
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 left-24">
              <MdBloodtype size={50} className="-rotate-45  text-[#d90429]" />
            </div>

            <div className="border-2 bg-[#ffffff] px-2 pt-16 pb-4 space-y-2 hover:bg-[#d90429] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">
                {' '}
                BLOOD TEST{' '}
              </h1>
              <p>
                Blood tests involve analyzing a small sample of blood to assess
                various of health, aiding in conditions or monitoring overall
                well-being
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 left-24">
              <GiBrain size={50} className="-rotate-45 text-[#38b000]" />
            </div>

            <div className="border-2 px-2 pt-16 pb-4 space-y-2 hover:bg-[#38b000] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">BRAIN CARE</h1>
              <p>
                Brain care encompasses a range of medical specialties and
                treatments dedicated to diagnosing, managing, and the brain and
                nervous system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeDo
