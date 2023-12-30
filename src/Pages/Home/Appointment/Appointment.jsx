import { useForm } from 'react-hook-form'
import patient1 from '../../../assets/images/pataint1.jpg'
import patient2 from '../../../assets/images/patin2.jpg'
import patient3 from '../../../assets/images/patin3.jpg'
import patient4 from '../../../assets/images/patin4.png'
import patient5 from '../../../assets/images/patin5.jpg'

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div className="container pt-40">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="font-bold text-center lg:text-4xl text-lg">
          Appointment
        </h2>
        <p className="text-center pt-4">
          Get latest news in your inbox.A Doctor Anytime, Anywhere By Search
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-20">
        <div>
          <div className="mb-6">
            <h1 className="md:text-3xl text-xl font-bold">
              The Most Recent Information
            </h1>
            <p className="pt-4">
              The groundbreaking discovery is poised to unveil fresh insights
              into human prehistory, sparking enthusiasm among geneticists and
              researchers eager to explore its implications.
            </p>
          </div>

          {/* Information */}
          <div className="pt-4 h-96 overflow-y-scroll px-3 space-y-2">
            {/* patinet 1  */}
            <div className="shadow-lg p-3 rounded-lg">
              <div className="md:flex space-x-4 ">
                <div>
                  <img className="h-40 w-80" src={patient1} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">
                    Your Medical Records are Safe
                  </h1>
                  <p className="font-semibold">21 Octobar 2022</p>
                  <p>
                    Clicking sounds were generted size of cig arette smoke
                    particles chemical compositions
                  </p>
                </div>
              </div>
            </div>
            {/* patinet 2  */}
            <div className="shadow-lg p-3 rounded-lg">
              <div className="md:flex space-x-4 ">
                <div>
                  <img className="h-40 w-80" src={patient2} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">
                    How To Build a Long Distance Care
                  </h1>
                  <p className="font-semibold">21 January 2024</p>
                  <p>
                    Clicking sounds were generted size of cig arette smoke
                    particles chemical compositions
                  </p>
                </div>
              </div>
            </div>
            {/* patinet 3  */}
            <div className="shadow-lg p-3 rounded-lg">
              <div className="md:flex space-x-4 ">
                <div>
                  <img className="h-40 w-80" src={patient3} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">
                    Center for Medical Technology Innovation
                  </h1>
                  <p className="font-semibold">26 March 2023</p>
                  <p>
                    Clicking sounds were generted size of cig arette smoke
                    particles chemical compositions
                  </p>
                </div>
              </div>
            </div>
            {/* patinet 4  */}
            <div className="shadow-lg p-3 rounded-lg">
              <div className="md:flex space-x-4 ">
                <div>
                  <img className="h-40 w-80" src={patient4} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">
                    We guarantee the safety of your medical data.
                  </h1>
                  <p className="font-semibold">21 Octobar 2017</p>
                  <p>
                    Clicking sounds were generted size of cig arette smoke
                    particles chemical compositions
                  </p>
                </div>
              </div>
            </div>
            {/* patinet 5  */}
            <div className="shadow-lg p-3 rounded-lg">
              <div className="md:flex space-x-4 ">
                <div>
                  <img className="h-40 w-80" src={patient5} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">
                    our privacy is paramount; your records are protected.
                  </h1>
                  <p className="font-semibold">21 Octobar 2017</p>
                  <p>
                    Clicking sounds were generted size of cig arette smoke
                    particles chemical compositions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-16">
            <h1 className="md:text-3xl text-xl font-bold">
              Make an appointment now!
            </h1>
            <p className="pt-4">
              Book your doctor's appointment swiftly with just a click, and
              leave the rest to us to ensure a hassle-free experience.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
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
      </div>
    </div>
  )
}

export default Appointment
