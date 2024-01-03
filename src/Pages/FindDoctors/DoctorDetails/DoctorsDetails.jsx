import React from 'react'
import './DoctorDetails.css'
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import RelatedDoctors from './RelatedDoctors'

const DoctorsDetails = () => {
  const doctorDetails = useLoaderData()

  let { detailsId } = useParams()

  // singleDoctorData
  const singleDoctorData = doctorDetails.find(
    doctorDetail => doctorDetail._id == detailsId
  )
  const {
    _id,
    name,
    address,
    image,
    job_place1,
    job_place2,
    job_place3,
    job_place4,
    date1,
    date2,
    date3,
    date4,
    rating,
    membership1,
    membership2,
    membership3,
    membership4,
    specialist,
    education,
    experience,
    work_days,
    works_time,
    phone,
    email,
    bio1,
    bio2,
  } = singleDoctorData || {}
  console.log('works_time', works_time)

  // relatedDoctors
  const relatedDoctors = doctorDetails?.filter(
    doctor =>
      doctor?.specialist == singleDoctorData?.specialist &&
      doctor?._id !== singleDoctorData._id
  )

  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
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
          <div>
            <div className="bg-[#f4f5f6] px-6 py-8 rounded-xl">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="bg-[#48cae4] md:w-[80%] rounded-lg">
                  <img className="p-4 w-full md:h-96" src={image} alt="" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">{name}</h1>
                  <p className="text-lg font-semibold">{specialist}</p>
                  <div className="pt-6 space-y-3 text-lg">
                    <p>
                      <span className=" font-semibold">Education</span> :{' '}
                      {education}
                    </p>
                    <p>
                      <span className=" font-semibold">Experience</span> :
                      {experience}{' '}
                    </p>
                    <p>
                      <span className=" font-semibold">Phone</span> :{phone}{' '}
                    </p>
                    <p>
                      <span className=" font-semibold">Email</span> :{email}{' '}
                    </p>
                    <p>
                      <span className=" font-semibold">Address</span> :{address}
                    </p>
                    <p>
                      <span className=" font-semibold">Rating</span> :{rating}
                    </p>
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
                  <p>{bio1}</p>
                  <p className="pt-4">{bio2}</p>
                </div>

                {/* Employment */}
                <div className="pt-16">
                  <div className="bg-[#f4f5f6] py-4 px-6">
                    <h1 className="text-3xl font-semibold">Employment</h1>
                  </div>

                  <div className="pt-8 text-lg space-y-3 font-semibold">
                    <p>{job_place1}</p>
                    <p>{job_place2}</p>
                    <p>{job_place3}</p>
                    <p>{job_place4}</p>
                  </div>
                </div>
                {/* Memberships */}
                <div className="pt-16">
                  <div className="bg-[#f4f5f6] py-4 px-6">
                    <h1 className="text-3xl font-semibold">Memberships</h1>
                  </div>

                  <div className="pt-8 text-lg space-y-3 font-semibold">
                    <p>{membership1}</p>
                    <p>{membership2} 44</p>
                    <p>{membership3} 55</p>
                    <p>{membership4} 66</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                {/* Appointment Time */}
                <div className="bg-[#f4f5f6]">
                  <div>
                    <div className="bg-[#48cae4] p-4">
                      <h1 className="text-2xl text-center font-semibold text-[#ffffff]">
                        Appointment Time
                      </h1>
                    </div>

                    {/* Appointment time  */}
                    <div className="py-6 px-5 ">
                      <div className="flex justify-between items-center ">
                        <div className="space-y-3 font-semibold">
                          {work_days?.map(day => (
                            <p>{day}</p>
                          ))}
                        </div>
                        <div className="space-y-3 font-semibold">
                          {works_time?.map(time => (
                            <p>{time}</p>
                          ))}
                        </div>
                      </div>

                      <div className="items-center pt-6 ">
                        <Link to={`/doctor-appointment/${_id}`}>
                          <button
                            onClick={topFunction}
                            className="bg-[#0165ff] w-full text-white text-xl font-semibold px-4 py-2 rounded-md hover:bg-[#0165ff] transition delay-300 ease-in-out"
                          >
                            Book an Appointment
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Write A Review*/}
                <div className="pt-14">
                  <div className="bg-[#f4f5f6]">
                    <div>
                      <div className="bg-[#48cae4] p-4">
                        <h1 className="text-2xl text-center font-semibold text-[#ffffff]">
                          Write A Review
                        </h1>
                      </div>

                      {/* time  */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center space-x-4">
                          <div>
                            <img
                              src={image}
                              className="h-20 w-20 rounded-full"
                              alt=""
                            />
                          </div>
                          <div>
                            <h1 className="text-lg font-semibold">{name}</h1>
                            <h2>{specialist}</h2>
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
                          <button className="bg-[#0165ff] w-full text-white text-xl font-semibold px-4 py-2 rounded-md hover:bg-[#0165ff] transition delay-300 ease-in-out">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* related doctor  */}
          <div className="mt-24">
            <RelatedDoctors relatedDoctors={relatedDoctors} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorsDetails
