import React from 'react'
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom'
import './AppointmentDoctor.css'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import { useForm } from 'react-hook-form'

const AppointmentDoctor = () => {
  const appointmentDoctor = useLoaderData()
  let { detailsId } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)
  // appointmentDoctor
  const appointmentData = appointmentDoctor.find(
    appointment => appointment._id == detailsId
  )
  const {
    _id,
    name,
    address,
    image,
    rating,
    specialist,
    education,
    experience,
    work_days,
    works_time,
    phone,
    email,
  } = appointmentData || {}

  return (
    <div>
      <div className="bgBanner">
        <div className="text-2xl font-semibold flex justify-center items-center space-x-2 pt-48">
          <Link to="/">
            <h1>Home </h1>
          </Link>
          <h2>/</h2>
          <h2>
            <NavLink>Doctor Appointment</NavLink>
          </h2>
        </div>
      </div>

      <div className="container pt-40">
        <div className="bg-[#f4f5f6]  px-6 py-8 rounded-xl">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {/* doctor img  */}
            <div className="bg-[#48cae4]  rounded-lg">
              <img className="p-3 w-full h-[430px]" src={image} alt="" />
            </div>
            {/* detail doctor  */}
            <div className="border-2 border-[#48cae4] shadow-lg rounded-lg px-3 py-2">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="text-lg font-semibold">{specialist}</p>
              <div className="pt-2 space-y-2 text-lg">
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
            {/* Appointment Time */}
            <div className="bg-[#f4f5f6] shadow-xl rounded-lg">
              <div>
                <div className="bg-[#48cae4] rounded-lg p-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="font-bold text-center lg:text-4xl text-2xl">
              Make an appointment
            </h2>
            <p className="text-center pt-8">
              Meet our esteemed team of dedicated doctors, each committed to
              providing personalized care and expertise tailored to your needs.
            </p>
          </div>

          {/* appontment  */}
          <div className=" pt-4">
            <div className="md:mx-24  mb-48 mt-[90px] md:px-20 px-6 shadow-md border-2 rounded-xl">
              <div className="py-16">
                <h1 className=" font-semibold md:text-4xl text-2xl">
                  Patient information
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <label>
                      <h1 className="text-lg font-semibold">First Name:</h1>
                      <input
                        type="text"
                        placeholder="First Name"
                        {...register('name', { required: true, maxLength: 50 })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                    <label>
                      <h1 className="text-lg font-semibold">Last Name:</h1>
                      <input
                        type="text"
                        placeholder="Last Name"
                        {...register('name', { required: true, maxLength: 50 })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <label>
                      <h1 className="text-lg font-semibold">Your Email:</h1>
                      <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                    <label>
                      <h1 className="text-lg font-semibold">Your Phone:</h1>
                      <input
                        type="tel"
                        placeholder="Phone"
                        {...register('phone', { required: true, minLength: 6 })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <label>
                      <h1 className="text-lg font-semibold">
                        Your Date of Birth:
                      </h1>
                      <input
                        type="date"
                        placeholder="date of Birth"
                        {...register('appointmentDate', { required: true })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                    <label>
                      <h1 className="text-lg font-semibold">Today Date:</h1>
                      <input
                        type="date"
                        placeholder="date of Birth"
                        {...register('appointmentDate', { required: true })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <label>
                      <h1 className="text-lg font-semibold">Doctor Name:</h1>
                      <input
                        readOnly
                        defaultValue={name}
                        type="text"
                        {...register('doctorName', {
                          required: true,
                          maxLength: 50,
                        })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                    <label>
                      <h1 className="text-lg font-semibold">
                        Department of Doctor:
                      </h1>
                      <input
                        readOnly
                        defaultValue={specialist}
                        type="text"
                        {...register('doctorDepartment', {
                          required: true,
                          maxLength: 50,
                        })}
                        className="w-full bg-gray-100 rounded-md p-3 mb-4"
                      />
                    </label>
                  </div>

                  <label>
                    <h1 className="text-lg font-semibold">Address</h1>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register('address', { min: 1, max: 99 })}
                      className="w-full bg-gray-100 rounded-md p-3 mb-4"
                    />
                  </label>
                  {/* <input type="number" {...register('age', { min: 18, max: 99 })} /> */}
                  <label>
                    <h1 className="text-lg font-semibold">Appointment Note:</h1>
                    <textarea
                      placeholder="Reason for Appointment"
                      {...register('message', { required: true })}
                      className="w-full h-40 bg-gray-100 rounded-md p-2 mb-4"
                    ></textarea>
                  </label>
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentDoctor
