import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const DoctorCard = ({ person }) => {
  const { _id, name, image, specialist } = person || {}

  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className="group py-4">
      <div className="rounded-lg hover:scale-105 duration-500 ease-in-out  overflow-hidden shadow-lg relative">
        <div className="p-3 ">
          <div className="relative group">
            <img
              className="w-full rounded-lg h-48 transition-opacity duration-500 ease-in-out group-hover:opacity-75"
              src={image}
              alt="Person"
            />
            <div className="absolute top-24 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Link to={`/doctor-details/${_id}`} onClick={topFunction}>
                <button className="text-[#0165ff] flex items-center space-x-2 bg-gray-100 text-lg font-semibold px-4 py-2 rounded-md">
                  <span>View Details</span>
                  <FiArrowUpRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className=" ">
            <h1 className="text-xl font-semibold flex justify-center">
              {name}
            </h1>
            <h4 className="flex justify-center text-lg font-semibold">
              {specialist}
            </h4>
          </div>
          <div className="flex justify-center py-6 space-x-4">
            {/* Replace the links with actual social media profile links */}
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              <GrInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="w-28 mx-auto pb-2 ">
            <Link
              to={`/doctor-appointment/${_id}`}
              onClick={topFunction}
              className="cursor-pointer"
              style={{ opacity: 1 }} // Ensure opacity is set to 1
            >
              <button className="bg-blue-500 font-semibold text-white px-4 py-2 rounded-md">
                Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard
