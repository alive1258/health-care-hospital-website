import React from 'react'
import DoctorCard from '../../../components/DoctorCard/DoctorCard'

const DoctorTab = ({ persons }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        {persons?.map(person => (
          <DoctorCard key={person._id} person={person} />
        ))}
      </div>
    </>
  )
}

export default DoctorTab
