import React from 'react'
import cardilogyPic from '../../../assets/images/cardiologyPic.png'
import nurologyPic from '../../../assets/images/neurologyPic.jpg'
import orthopedicPic from '../../../assets/images/orthopedicPic.jpg'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdSms } from 'react-icons/md'

const OurBlogs = () => {
  return (
    <div className="pt-40">
      <div className="bg-[#f4f5f6] py-20">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-lg">
            Our Blogs
          </h2>
          <p className="text-center pt-4">
            Our Latest News & Articles.Get latest news in your inbox.
          </p>
        </div>

        <div className="container pt-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="hover:scale-105 hover:translate-y-4  shadow-xl delay-300 hover:bg-white px-4 py-4 rounded-xl   duration-500 ease-in-out">
              <div>
                <div>
                  <img
                    src={cardilogyPic}
                    alt=""
                    className="h-48 rounded-lg w-full"
                  />
                </div>
                <h1 className="text-lg text-center relative bottom-44 rounded-r-lg bg-[#0165ff] p-2 font-semibold text-white w-32">
                  Cardiology
                </h1>
                <div className="">
                  <h3 className="text-[#0165ff] text-xl font-semibold">
                    Publish on May 11, 2023 at 6:00 AM
                  </h3>
                  <h1 className="pt-4 font-semibold text-lg">
                    Get Latest News in you inbox
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, blanditiis...........
                  </p>
                  <div className="border-b-2 pt-4"></div>
                  <div className="py-4 flex justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <h1 className="font-semibold">Read More</h1>
                      <FaArrowUpRightFromSquare
                        size={20}
                        className="text-[#0165ff] animate-bounce "
                      />
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <MdSms className="text-[#48cae4]" size={20} />
                      <h1 className="font-semibold">50 Comments</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* orthopedicPic */}
            <div className="hover:scale-105 hover:translate-y-4  shadow-xl delay-300 hover:bg-white px-4 py-4 rounded-xl   duration-500 ease-in-out">
              <div>
                <div>
                  <img
                    src={orthopedicPic}
                    alt=""
                    className="h-48 rounded-lg w-full"
                  />
                </div>
                <h1 className="text-lg text-center relative bottom-44 rounded-r-lg bg-[#0165ff] p-2 font-semibold text-white w-32">
                  Orthopedic
                </h1>
                <div className="">
                  <h3 className="text-[#0165ff] text-xl font-semibold">
                    Publish on May 11, 2023 at 6:00 AM
                  </h3>
                  <h1 className="pt-4 font-semibold text-lg">
                    Get Latest News in you inbox
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, blanditiis...........
                  </p>
                  <div className="border-b-2 pt-4"></div>
                  <div className="py-4 flex justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <h1 className="font-semibold">Read More</h1>
                      <FaArrowUpRightFromSquare
                        size={20}
                        className="text-[#0165ff] animate-bounce "
                      />
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <MdSms className="text-[#48cae4]" size={20} />
                      <h1 className="font-semibold">50 Comments</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* nurologyPic */}
            <div className="hover:scale-105 hover:translate-y-4  shadow-xl delay-300 hover:bg-white px-4 py-4 rounded-xl   duration-500 ease-in-out">
              <div>
                <div>
                  <img
                    src={nurologyPic}
                    alt=""
                    className="h-48 rounded-lg w-full"
                  />
                </div>
                <h1 className="text-lg text-center relative bottom-44 rounded-r-lg bg-[#0165ff] p-2 font-semibold text-white w-32">
                  Neurology
                </h1>
                <div className="">
                  <h3 className="text-[#0165ff] text-xl font-semibold">
                    Publish on May 11, 2023 at 6:00 AM
                  </h3>
                  <h1 className="pt-4 font-semibold text-lg">
                    Get Latest News in you inbox
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, blanditiis...........
                  </p>
                  <div className="border-b-2 pt-4"></div>
                  <div className="py-4 flex justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <h1 className="font-semibold">Read More</h1>
                      <FaArrowUpRightFromSquare
                        size={20}
                        className="text-[#0165ff] animate-bounce "
                      />
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <MdSms className="text-[#48cae4]" size={20} />
                      <h1 className="font-semibold">50 Comments</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* See All Blogs  */}
          <div className="pt-16">
            <button>See All Blogs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBlogs
