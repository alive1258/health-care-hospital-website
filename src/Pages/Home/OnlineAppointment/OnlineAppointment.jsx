import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const OnlineAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div>
      <div className="bgBanner">
        <div className="text-2xl font-semibold flex justify-center items-center space-x-2 pt-48">
          <Link to="/">
            <h1>Home </h1>
          </Link>
          <h2>/</h2>
          <h2>
            <NavLink>Online Appointment</NavLink>
          </h2>
        </div>
      </div>

      <div className="container pt-36">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            Make an appointment
          </h2>
          <p className="text-center pt-8">
            Meet our esteemed team of dedicated doctors, each committed to
            providing personalized care and expertise tailored to your needs.
          </p>
        </div>

        {/* apponment  */}
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
                    <h1 className="text-lg font-semibold">
                      Choose Doctor Name
                    </h1>
                    <select
                      {...register('service', { required: true })}
                      className="w-full bg-gray-100 rounded-md p-3 mb-4"
                    >
                      <option value="">Select a service</option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      {/* Add other service options */}
                    </select>
                  </label>
                  <label>
                    <h1 className="text-lg font-semibold">Select Department</h1>
                    <select
                      {...register('service', { required: true })}
                      className="w-full bg-gray-100 rounded-md p-3 mb-4"
                    >
                      <option value="">Select a service</option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      {/* Add other service options */}
                    </select>
                  </label>
                </div>

                <label>
                  <h1 className="text-lg font-semibold">Address</h1>
                  <input
                    type="number"
                    placeholder="Age"
                    {...register('age', { min: 1, max: 99 })}
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
  )
}

export default OnlineAppointment
