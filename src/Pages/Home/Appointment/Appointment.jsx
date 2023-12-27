import { useForm } from 'react-hook-form'

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div className="container py-40">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <input
                type="text"
                placeholder="Name"
                {...register('name', { required: true, maxLength: 50 })}
                className="w-full bg-gray-200 rounded-md p-2 mb-4"
              />
              <input
                type="date"
                placeholder="date of Birth"
                {...register('appointmentDate', { required: true })}
                className="w-full bg-gray-200 rounded-md p-2 mb-4"
              />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-full bg-gray-200 rounded-md p-2 mb-4"
              />
              <input
                type="tel"
                placeholder="Phone"
                {...register('phone', { required: true, minLength: 6 })}
                className="w-full bg-gray-200 rounded-md p-2 mb-4"
              />
            </div>

            <select
              {...register('service', { required: true })}
              className="w-full bg-gray-200 rounded-md p-2 mb-4"
            >
              <option value="">Select a service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              {/* Add other service options */}
            </select>
            <input
              type="number"
              placeholder="Age"
              {...register('age', { min: 1, max: 99 })}
              className="w-full bg-gray-200 rounded-md p-2 mb-4"
            />
            {/* <input type="number" {...register('age', { min: 18, max: 99 })} /> */}
            <textarea
              placeholder="Message"
              {...register('message', { required: true })}
              className="w-full h-40 bg-gray-200 rounded-md p-2 mb-4"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
            />
          </form>
        </div>
        <div>
          <h1>aboy worl</h1>
        </div>
      </div>
    </div>
  )
}

export default Appointment
