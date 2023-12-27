import React from 'react'

const DoctorCard = () => {
  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <div className="py-8">
          <img
            className="w-48 h-auto rounded-full mx-auto"
            src="https://via.placeholder.com/150"
            alt="Person"
          />
        </div>
        <div className="px-6 py-4">
          <div className=" mb-2 space-y-1">
            <h1 className="text-xl font-semibold flex justify-center ">
              Dr.Nayeem Kader
            </h1>
            <h4 className="flex justify-center text-lg font-semibold">
              Cardiology
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
        </div>
      </div>
    </div>
  )
}

export default DoctorCard
