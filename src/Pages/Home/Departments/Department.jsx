import React, { useState } from 'react'
import DetailsDepartments from './DetailsDepartments'

const Department = ({ department }) => {
  const { name, img } = department || {}

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="shadow-lg  hover:scale-105 duration-500 rounded-lg overflow-hidden relative group">
      <img src={img} alt={name} className="w-full h-48 p-2" />
      <h1 className="text-xl font-semibold text-center py-3">{name}</h1>

      <div className="absolute bottom-28 left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </button>
      </div>
      <DetailsDepartments
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        department={department}
      />
    </div>
  )
}

export default Department
