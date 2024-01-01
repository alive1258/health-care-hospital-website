import './Hero.css'
import shapeBgpic from '../../../assets/images/bgShape.png'
import drHeroPic from '../../../assets/images/drHero.png'
import { IoStar } from 'react-icons/io5'
import { AiFillLike } from 'react-icons/ai'
import { FaUserDoctor } from 'react-icons/fa6'
import { RiMedicineBottleLine } from 'react-icons/ri'
import { GiMedicines } from 'react-icons/gi'

const Hero = () => {
  return (
    <div className="pt-6 heroBg">
      <div className="md:h-[700px] h-[780px] w-full m-auto py-16 z-10 ">
        <div className="container md:pt-14 pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="md:text-5xl text-2xl md:text-start text-center font-bold pt-10">
                Transforming lives through innovative treatments and unwavering
                dedication at <span className="">Health Care Hospital</span>
              </h1>
              <div className="md:pt-12 pt-6 md:block flex items-center justify-center">
                <button class="bg-[#4361ee] text-lg font-semibold text-white px-4 py-2 rounded-md">
                  Know More
                </button>
              </div>
            </div>
            {/* imgae part  */}
            <div className="pt-2">
              <div className="">
                <div className="relative top-10">
                  <div className="p-4 w-28 flex justify-center items-center bg-[#ffffff] shadow-lg rounded-lg">
                    <RiMedicineBottleLine
                      size={40}
                      className="text-[#4361ee]"
                    />
                    <GiMedicines size={40} className="text-[#e07c41]" />
                  </div>
                </div>
                <img src={shapeBgpic} className="h-96" alt="" />
                <div className="relative md:bottom-[450px] bottom-[310px]">
                  <img
                    src={drHeroPic}
                    className="w-full md:h-[400px] h-[270px]"
                    alt=""
                  />

                  <div className="flex justify-between relative bottom-28">
                    <div className="relative md:right-14 md:h-44 h-32 py-2 bg-white  shadow-lg md:px-3 px-2 md:py-4 md:pb-2 md:w-52 w-48 rounded-lg ">
                      <div className="">
                        <div className="flex justify-center items-center">
                          <div className="md:space-y-3">
                            <FaUserDoctor
                              size={40}
                              className="text-[#4361ee]"
                            />
                            <h1 className="font-bold md:text-xl">250 +</h1>
                          </div>
                        </div>
                        <div className="text-center md:pt-3 md:space-y-2">
                          <p className="font-semibold">World’s Top Doctors</p>

                          <p>Consultation</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white relative md:left-24 md:bottom-60 bottom-80 shadow-lg md:px-3 px-2 md:py-4 pb-2 md:w-52 rounded-lg">
                      <div className="flex justify-center">
                        <div className="w-20">
                          <div className="flex space-x-1">
                            <IoStar size={20} className="text-[#fb8500]" />
                            <IoStar
                              size={30}
                              className="relative bottom-3 text-[#fb8500]"
                            />
                            <IoStar size={20} className="text-[#fb8500]" />
                          </div>
                          <div className="flex justify-center">
                            <AiFillLike
                              size={30}
                              className="relative bottom-3 text-[#4361ee]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 p-2 rounded-lg">
                        <div className="flex items-center justify-center space-x-1">
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <IoStar size={15} className="text-[#fb8500]" />
                          <p>5.0</p>
                        </div>
                      </div>
                      <div className="pt-2 text-center">
                        <h1 className="md:text-lg font-semibold">
                          Mark A. Wilson
                        </h1>
                        <p>Heart Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
