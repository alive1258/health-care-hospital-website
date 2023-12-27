import React, { useEffect, useState } from 'react'
import Department from './Department'

const Departments = () => {
  const [departmentData, setDepartmentData] = useState([])
  const [showAllData, setShowAllData] = useState(false)

  useEffect(() => {
    fetch('departmentsData.json')
      .then(res => res.json())
      .then(data => setDepartmentData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const handleSeeMore = () => {
    setShowAllData(true) // Show all data when "See More" is clicked
  }

  return (
    <div className="container pt-40">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="font-bold text-center lg:text-4xl text-lg">
          Health Care Departement
        </h2>
        <p className="text-center pt-4">
          World calss care for everyone. Our health system offers unmatched,
          experts health care.
        </p>
      </div>
      <div className="pt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
        {showAllData
          ? departmentData.map(department => (
              <Department
                key={department.id}
                department={department}
              ></Department>
            ))
          : departmentData
              .slice(0, 10)
              .map(department => (
                <Department
                  key={department.id}
                  department={department}
                ></Department>
              ))}
      </div>
      {!showAllData && (
        <div className="flex justify-center pt-14">
          <button
            onClick={handleSeeMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            See More
          </button>
        </div>
      )}
    </div>
  )
}

export default Departments
