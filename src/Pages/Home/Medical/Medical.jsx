import icon03 from '../../../assets/images/icon03.png'
import icon01 from '../../../assets/images/icon01.png'
import icon02 from '../../../assets/images/icon02.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Medical = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-lg">
            Providing the best medical services
          </h2>
          <p className="text-center pt-4">
            World calss care for everyone. Our health system offers unmatched,
            experts health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {/* Find a Doctor */}

          {/* <div className="py-[30px] px-6 hover:shadow-2xl rounded-xl"> */}
          <div className="py-[30px] px-6 transition rounded-xl s duration-500 ease-in-out  hover:shadow-2xl ">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="" />
            </div>
            <div className="mt-[30px]">
              <h1 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Find a Doctor
              </h1>
              <p className="text-[16px] leading-7 text-textColor font-medium mt-4 text-center">
                Discover your perfect match in healthcare with our exceptional
                roster of skilled and compassionate doctors
              </p>
              <div className="w-[44px] h-[44px] rounded-full border border-solid  mx-auto items-center justify-center border-[#181A1E] mt-[30px]  group hover:bg-primaryColor ">
                <Link
                  to="/doctors"
                  className="flex justify-center items-center pt-2"
                >
                  <BsArrowRight className=" w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>

          {/* Find Location */}
          <div className="py-[30px] px-6 rounded-xl transition duration-500 ease-in-out  hover:shadow-2xl ">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="" />
            </div>
            <div className="mt-[30px]">
              <h1 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Find Location
              </h1>
              <p className="text-[16px] leading-7 text-textColor font-medium mt-4 text-center">
                Effortlessly pinpoint our location and explore our inviting
                facilities, all designed to cater to your needs conveniently
              </p>
              <div
                className="w-[44px] h-[44px] rounded-full border border-solid  mx-auto items-center 
    justify-center border-[#181A1E] mt-[30px]  group hover:bg-primaryColor "
              >
                <Link
                  to="/doctors"
                  className="flex justify-center items-center pt-2"
                >
                  <BsArrowRight className=" w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>

          {/* Book Appointment */}
          <div className="py-[30px] px-6 rounded-xl transition duration-500 ease-in-out  hover:shadow-2xl ">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="" />
            </div>
            <div className="mt-[30px]">
              <h1 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Online Appointment
              </h1>
              <p className="text-[16px] leading-7 text-textColor font-medium mt-4 text-center">
                Secure your health seamlessly with our convenient and efficient
                online appointment system.
              </p>
              <div
                className="w-[44px] h-[44px] rounded-full border border-solid  mx-auto items-center 
    justify-center border-[#181A1E] mt-[30px]  group hover:bg-primaryColor "
              >
                <Link
                  to="/doctors"
                  className="flex justify-center items-center pt-2"
                >
                  <BsArrowRight className=" w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Medical
