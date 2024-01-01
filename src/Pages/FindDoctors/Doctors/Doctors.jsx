import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './Doctors.css'
import DoctorTab from './DoctorTab'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState([])

  useEffect(() => {
    fetch('/doctorsData.json')
      .then(res => res.json())
      .then(data => {
        setDoctors(data)
        setFilteredDoctors(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  useEffect(() => {
    const filtered = doctors.filter(
      doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredDoctors(filtered)
  }, [searchTerm, doctors])

  const surgeonDoctors = doctors.filter(
    doctor =>
      doctor.specialist === 'Surgeon' &&
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const cardiologistDoctors = doctors.filter(
    doctor =>
      doctor.specialist === 'Cardiologist' &&
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const neurologistDoctors = doctors.filter(
    doctor =>
      doctor.specialist === 'Neurologist' &&
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const orthopedistDoctors = doctors.filter(
    doctor =>
      doctor.specialist === 'Orthopedist' &&
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const dentistDoctors = doctors.filter(
    doctor =>
      doctor.specialist === 'Dentist' &&
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container pt-40">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="font-bold text-center lg:text-4xl text-lg">
          Specialist Doctors
        </h2>
        <p className="text-center pt-4">We Are Happy To Help You</p>
      </div>
      {/* tab  */}
      <div className="pt-20">
        <div>
          <Tabs>
            <div className="md:flex item-center space-y-4 justify-between">
              <TabList className="flex space-x-3 md:overflow-hidden overflow-x-scroll overflow-y-hidden font-semibold text-lg">
                <Tab>All</Tab>
                <Tab>Surgeon</Tab>
                <Tab>Cardiologist</Tab>
                <Tab>Neurologist</Tab>
                <Tab>Orthopedist</Tab>
                <Tab>Dentist</Tab>
              </TabList>

              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search Doctors..."
                  className="border border-gray-300 h-12 px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <button
                  onClick={() => setFilteredDoctors([...doctors])}
                  className="bg-blue-500 h-12  text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
                >
                  <span className="ml-2">Search</span>
                </button>
              </div>
            </div>

            <div className="md:pt-20 pt-10">
              <TabPanel>
                <DoctorTab persons={filteredDoctors} />
              </TabPanel>
              <TabPanel>
                <DoctorTab persons={surgeonDoctors} />
              </TabPanel>
              <TabPanel>
                <DoctorTab persons={cardiologistDoctors} />
              </TabPanel>

              <TabPanel>
                <DoctorTab persons={neurologistDoctors} />
              </TabPanel>
              <TabPanel>
                <DoctorTab persons={orthopedistDoctors} />
              </TabPanel>

              <TabPanel>
                <DoctorTab persons={dentistDoctors} />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Doctors
