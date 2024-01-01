import React from 'react'
import { TbUserSearch } from 'react-icons/tb'
import { FaCalendarCheck } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { HiLightBulb } from 'react-icons/hi'

const Solution = () => {
  return (
    <>
      <div className="bg-[#e9ecef] md:mt-72 mt-52">
        <div className="container">
          {/* Vision & Mission */}
          <div className="md:flex relative bottom-24">
            <div className=" bg-[#48cae4] text-[#ffffff] p-6 space-y-3">
              <h1 className="text-2xl font-semibold">Our Vision</h1>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum
                sed sit amet dui. Sed porttitor lectus nibh. Nulla quis lorem ut
                libero malesuada feugiat. Sed porttitor lectus nibh. Sed
                porttitor lectus nibh. Cras ultricies ligula sed magna dictum
                porta.
              </p>
            </div>
            <div className="bg-[#0165ff] text-[#ffffff] p-6 space-y-3">
              <h1 className="text-2xl font-semibold">Our Mission</h1>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum
                sed sit amet dui. Sed porttitor lectus nibh. Nulla quis lorem ut
                libero malesuada feugiat. Sed porttitor lectus nibh. Sed
                porttitor lectus nibh. Cras ultricies ligula sed magna dictum
                porta.
              </p>
            </div>
          </div>

          <div className="pb-20 pt-4">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="font-bold text-center lg:text-4xl text-2xl">
                SOLUTION
              </h2>
              <p className="text-center pt-4">
                Some easy steps to get your proper solution
              </p>
            </div>

            <div className="pt-8">
              <div className="flex justify-between items-center space-x-5 md:overflow-hidden overflow-x-scroll">
                <div>
                  <div className="relative top-10 ">
                    <h1 className="bg-blue-500 text-white h-12 font-semibold text-xl w-12 rounded-full flex items-center justify-center">
                      1
                    </h1>
                  </div>
                  <div className="bg-[#ffffff] md:h-48 h-36 w-36 md:w-48 rounded-full flex justify-center items-center">
                    <TbUserSearch size={70} className="text-[#0165ff]" />
                  </div>
                  <h2 className="md:text-2xl text-lg text-center pt-4 font-semibold">
                    Search Doctor
                  </h2>
                </div>
                <div>
                  <div className="relative top-10 ">
                    <h1 className="bg-blue-500 text-white h-12 font-semibold text-xl w-12 rounded-full flex items-center justify-center">
                      2
                    </h1>
                  </div>
                  <div className="bg-[#ffffff] md:h-48 h-36 w-36 md:w-48 rounded-full flex justify-center items-center">
                    <FaCalendarCheck size={70} className="text-[#0165ff]" />
                  </div>
                  <h2 className="md:text-2xl text-lg  text-center pt-4 font-semibold">
                    Doctor appointment
                  </h2>
                </div>
                <div>
                  <div className="relative top-10 ">
                    <h1 className="bg-blue-500 text-white h-12 font-semibold text-xl w-12 rounded-full flex items-center justify-center">
                      3
                    </h1>
                  </div>
                  <div className="bg-[#ffffff] md:h-48 h-36 w-36 md:w-48 rounded-full flex justify-center items-center">
                    <FaUserDoctor size={70} className="text-[#0165ff]" />
                  </div>
                  <h2 className="md:text-2xl text-lg  text-center pt-4 font-semibold">
                    Check doctor profile
                  </h2>
                </div>
                <div>
                  <div className="relative top-10 ">
                    <h1 className="bg-blue-500 text-white h-12 font-semibold text-xl w-12 rounded-full flex items-center justify-center">
                      4
                    </h1>
                  </div>
                  <div className="bg-[#ffffff] md:h-48 h-36 w-36 md:w-48 rounded-full flex justify-center items-center">
                    <HiLightBulb size={70} className="text-[#0165ff]" />
                  </div>
                  <h2 className="md:text-2xl text-lg  text-center pt-4 font-semibold">
                    Get first solution
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Solution
