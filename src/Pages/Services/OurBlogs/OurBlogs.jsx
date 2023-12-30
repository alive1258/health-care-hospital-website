import React from 'react'
import cardilogyPic from '../../../assets/images/cardiologyPic.png'
import nurologyPic from '../../../assets/images/neurologyPic.jpg'
import orthopedicPic from '../../../assets/images/orthopedicPic.jpg'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdSms } from 'react-icons/md'

const OurBlogs = () => {
  return (
    <div className="pt-40">
      <div className="bg-[#e9ecef] py-20">
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
            <div className="shadow-xl hover:bg-white px-4 pb-6 rounded-xl duration-500 ease-in-out">
              <div>
                <div>
                  <h1 className="text-lg relative top-16 rounded-r-lg bg-[#0165ff] p-2 font-semibold text-white w-32">
                    Cardiology
                  </h1>
                  <img
                    src={cardilogyPic}
                    alt=""
                    className="h-48 rounded-lg w-full"
                  />
                </div>
                <div className="pt-6">
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
                  <div className="pt-4 flex justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <h1>Read More</h1>
                      <FaArrowUpRightFromSquare
                        size={20}
                        className="text-[#0165ff]"
                      />
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <MdSms className="text-[#48cae4]" size={20} />
                      <h1>50 Comments</h1>
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
