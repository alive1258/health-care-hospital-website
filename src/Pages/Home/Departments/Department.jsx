import React from 'react'

const Department = ({ department }) => {
  const { name, img } = department || {}

  return (
    <div className="shadow-lg  hover:scale-105 duration-500">
      <h1>{name}</h1>
      <img src={img} alt={name} className="w-full" />
      <button className="text-white font-bold py-2 px-4 rounded  bottom-4 left-4 hidden">
        View Details
      </button>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 duration-300">
        <button className="bg-gray-400  text-white font-bold py-2 px-4 rounded absolute bottom-4 left-4">
          View Details
        </button>
      </div>
    </div>
  )
}

export default Department
