import React from 'react'

const Doctors = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-lg">
            Specialist Doctors
          </h2>
          <p className="text-center pt-4">We Are Happy To Help You</p>
        </div>

        <div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Doctors..."
              className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctors
