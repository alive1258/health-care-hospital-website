import React from 'react'
import './DoctorDetails.css'
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import RelatedDoctors from './RelatedDoctors'

const DoctorsDetails = () => {
  const doctorDetails = useLoaderData()
  console.log(doctorDetails)
  let { detailsId } = useParams()

  // singleDoctorData
  const singleDoctorData = doctorDetails.find(
    doctorDetail => doctorDetail._id == detailsId
  )
  const { _id, name } = singleDoctorData || {}
  console.log('name', name)

  // relatedDoctors
  const relatedDoctors = doctorDetails?.filter(
    doctor =>
      doctor?.specialist == singleDoctorData?.specialist &&
      doctor?._id !== singleDoctorData._id
  )
  // console.log('relatedDoctors----', relatedDoctors)

  return (
    <>
      <div>
        <div className="bgBanner">
          <div className="text-2xl font-semibold flex justify-center items-center space-x-2 pt-48">
            <Link to="/">
              <h1>Home </h1>
            </Link>
            <h2>/</h2>
            <h2>
              <NavLink> Doctors Details</NavLink>
            </h2>
          </div>
        </div>
        {/* Doctors Details */}
        <div className="container pt-20">
          <div className="bg-[#f4f5f6] px-6 py-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-[#0165ff] rounded-lg">
                <img
                  className="p-4 w-full"
                  src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg"
                  alt=""
                />
              </div>
              <div cla>
                <h1 className="text-2xl font-semibold">name</h1>
                <p>specialist</p>
                <div>
                  <p>Education </p>
                  <p>Experience </p>
                  <p>Phone </p>
                  <p>Email </p>
                  <p>Address</p>
                  <p>Rating</p>
                </div>
                <div className="flex  py-6 space-x-4">
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
          {/* Biography */}

          <div className="pt-20 grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="md:col-span-2">
              {/* Biography */}
              <div className="bg-[#f4f5f6] py-4 px-6">
                <h1 className="text-3xl font-semibold">Biography</h1>
              </div>
              <div className="pt-6">
                <p>
                  Donec rutrum congue leo eget malesuada. Donec rutrum congue
                  leo eget malesuada. Nulla porttitor accumsan tincidunt. Sed
                  porttitor lectus nibh. Curabitur arcu erat, accumsan id
                  imperdiet et, porttitor at sem. Cras ultricies ligula sed
                  magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
                  et, porttitor at sem.
                </p>
                <p className="pt-4">
                  Donec rutrum congue leo eget malesuada. Donec rutrum congue
                  leo eget malesuada. Nulla porttitor accumsan tincidunt. Sed
                  porttitor lectus nibh. Curabitur arcu erat, accumsan id
                  imperdiet et, porttitor at sem. Cras ultricies ligula sed
                  magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
                  et, porttitor at sem.
                </p>
              </div>

              {/* Employment */}
              <div className="pt-16">
                <div className="bg-[#f4f5f6] py-4 px-6">
                  <h1 className="text-3xl font-semibold">Employment</h1>
                </div>

                <div className="pt-8">
                  <p>fkjjksdgfkjdsgkjgs</p>
                  <p>fkjjksdgfkjdsgkjgs</p>
                  <p>fkjjksdgfkjdsgkjgs</p>
                  <p>fkjjksdgfkjdsgkjgs</p>
                </div>
              </div>
              {/* Memberships */}
              <div className="pt-16">
                <div className="bg-[#f4f5f6] py-4 px-6">
                  <h1 className="text-3xl font-semibold">Memberships</h1>
                </div>

                <div className="pt-8">
                  <p>Memberships 222</p>
                  <p>Memberships 44</p>
                  <p>Memberships 55</p>
                  <p>Memberships 66</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              {/* Appointment Time */}
              <div className="bg-[#f4f5f6]">
                <div>
                  <div className="bg-[#0165ff] p-4">
                    <h1 className="text-2xl text-center font-semibold text-[#ffffff]">
                      Appointment Time
                    </h1>
                  </div>

                  {/* time  */}
                  <div className="p-4 space-y-3">
                    <p>sun</p>
                    <p>sun</p>
                    <p>sun</p>
                    <p>sun</p>
                    <p>sun</p>
                    <p>sun</p>
                    <p>sun</p>
                    <div className="items-center py-6 ">
                      <button className="bg-black w-full text-white text-xl font-semibold px-4 py-2 rounded-md hover:bg-[#0165ff] transition delay-300 ease-in-out">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Write A Review*/}
              <div className="pt-14">
                <div className="bg-[#f4f5f6]">
                  <div>
                    <div className="bg-[#0165ff] p-4">
                      <h1 className="text-2xl text-center font-semibold text-[#ffffff]">
                        Write A Review
                      </h1>
                    </div>

                    {/* time  */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center space-x-4">
                        <div>
                          <img
                            src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg"
                            className="h-20 w-20 rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 className="text-lg font-semibold">name</h1>
                          <h2>specilist</h2>
                        </div>
                      </div>

                      <div className="pt-5">
                        <div className="py-5 bg-white">
                          <div className="flex px-4 pb-3 items-center space-x-2 border-b">
                            <div>5.0 rating</div>
                            <h1> Overall provider rating</h1>
                          </div>

                          <div className="p-4 ">
                            <textarea
                              placeholder="massage....."
                              className="w-full border p-2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <input
                          className="w-full p-3"
                          placeholder="email....."
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                        />
                      </div>
                      <div className="items-center py-6 ">
                        <button className="bg-black w-full text-white text-xl font-semibold px-4 py-2 rounded-md hover:bg-[#0165ff] transition delay-300 ease-in-out">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* related doctor  */}
          <RelatedDoctors relatedDoctors={relatedDoctors} />
        </div>
      </div>
    </>
  )
}

export default DoctorsDetails
