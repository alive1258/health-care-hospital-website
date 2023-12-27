import React from 'react'
import { LuCalendarDays } from 'react-icons/lu'
import { IoIosPeople } from 'react-icons/io'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { GoStopwatch } from 'react-icons/go'
import { FaUserDoctor } from 'react-icons/fa6'
import './OurAchievement.css'
import CountUp from 'react-countup'

const OurAchievement = () => {
  return (
    <>
      <div className="my-40">
        <div className="drGroupPic bg-fixed ">
          <div className="px-6 md:pt-36 pt-20 bg-[#6096ba] bg-opacity-50 h-full">
            <div className="container">
              <div className="md:flex space-y-4 justify-between ">
                {/* Satisfied patients */}
                <div className="flex space-x-3 ">
                  <IoIosPeople size={60} className="text-[#0165ff] " />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold">
                      <CountUp end={2500} duration={4} />+
                    </p>
                    <h2 className="text-lg font-semibold">
                      Satisfied patients{' '}
                    </h2>
                  </div>
                </div>
                {/* Years of experience */}
                <div className="flex space-x-3">
                  <LuCalendarDays size={60} className="text-[#0165ff] " />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold">
                      {' '}
                      <CountUp end={35} duration={4} />+
                    </p>
                    <h2 className="text-lg font-semibold">
                      Years of experience{' '}
                    </h2>
                  </div>
                </div>
                {/* Successful surgeries */}
                <div className="flex space-x-3">
                  <MdOutlineManageAccounts
                    size={60}
                    className="text-[#0165ff] "
                  />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold">
                      {' '}
                      <CountUp end={470} duration={4} />
                    </p>
                    <h2 className="text-lg font-semibold">
                      Successful surgeries
                    </h2>
                  </div>
                </div>
                {/* Specialist doctors */}
                <div className="flex space-x-3">
                  <FaUserDoctor size={60} className="text-[#0165ff] " />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white ">
                    <p className="md:text-3xl text-2xl font-semibold">
                      {' '}
                      <CountUp end={45} duration={4} />
                    </p>
                    <h2 className="font-semibold text-lg">
                      Specialist doctors
                    </h2>
                  </div>
                </div>
                {/* Working Hours */}
                {/* <div className="flex space-x-3">
                  <GoStopwatch size={60} className="text-[#0165ff] " />
                  <div className="border-r-2 border-[#0165ff]"></div>
                  <div className="text-white text-2xl font-semibold">
                    <h2>Working Hours</h2>
                    <p>800</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurAchievement
