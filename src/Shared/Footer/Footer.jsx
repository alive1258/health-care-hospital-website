import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { IoArrowRedoSharp } from 'react-icons/io5'
import { AiTwotonePhone } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { MdOutlineMailOutline } from 'react-icons/md'
import logo from '../../assets/images/plusLogo.png'

const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="md:mt-40 mt-20">
        <div className="bg-[#48cae4] text-white md:pb-2 pb-20 pt-14">
          <div className="container px-6">
            <div className="py-6">
              <div className="grid border-b md:grid-cols-2 grid-cols-1 gap-2  pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Link to="/">
                      <img className="h-16 " src={logo} alt="" />
                    </Link>

                    <div>
                      <h1 className="text-2xl text-[#073b4c] font-bold ">
                        {' '}
                        Health Care Hospital
                      </h1>
                    </div>
                  </div>
                  <div className="pt-6 text-[16px] font-medium">
                    <p className="md:pl-3">
                      In our commitment to comprehensive care, our hospital{' '}
                      strives to provide <br />
                      cutting-edge medical services alongside a nurturing
                      environment,
                      <br /> ensuring the well-being of every patient
                    </p>

                    {/* -------email------  */}
                    <div className="flex items-center gap-2 pt-4">
                      <div className="bg-[#0165ff] cursor-pointer hover:bg-[#065fe5] h-10 w-10 rounded-full flex justify-center items-center">
                        <MdOutlineMailOutline className="" size={25} />
                      </div>
                      <div className="text-[16px] font-medium">
                        <p>healthcarehospital@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-4">
                      <div className="bg-[#0165ff] cursor-pointer hover:bg-[#065fe5] h-10 w-10 rounded-full flex justify-center items-center">
                        <GoLocation className="" size={25} />
                      </div>
                      <div className="text-[16px] font-medium">
                        <p>Uttra,sector-11,road-6</p>
                        <p>Dhaka ,Bangladesh</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex gap-4">
                        {/* <p className="text-white">Follow us on:</p> */}

                        <div className="duration-300 transition hover:scale-110 hover:bg-[#28589c] bg-[#0a48a0] text-white h-8 w-8 rounded-full flex items-center justify-center">
                          <a target="_blank" href="">
                            {' '}
                            <FaFacebookF />
                          </a>
                        </div>
                        <div className=" duration-300 bg-[#ed447d] hover:bg-[#ca4370] transition hover:scale-110 text-white h-8 w-8 rounded-full flex items-center justify-center">
                          <a target="_blank" href="">
                            {' '}
                            <BsInstagram />
                          </a>
                        </div>
                        <div className="duration-300 hover:bg-[#0853bb] bg-blue-700 transition hover:scale-110 text-white h-8 w-8 rounded-full flex items-center justify-center">
                          <a target="_blank" href="">
                            {' '}
                            <BiLogoLinkedin />
                          </a>
                        </div>
                        <div className="duration-300 bg-[#ff0000] transition hover:scale-110 hover:bg-[#ec4040] text-white h-8 w-8 rounded-full flex items-center justify-center">
                          <a target="_blank" href="">
                            {' '}
                            <AiFillYoutube />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid md:grid-cols-3 grid-cols-1 md:pt-6 gap-4">
                    <div cl>
                      <p className="text-2xl font-bold pb-6 text-white">
                        Let Know Us
                      </p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <Link onClick={topFunction} to="/">
                            Home
                          </Link>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <Link onClick={topFunction} to="/about">
                            About
                          </Link>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <Link onClick={topFunction} to="/services">
                            Services
                          </Link>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <Link onClick={topFunction} to="/Doctors">
                            Find Doctors
                          </Link>
                        </div>

                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <Link onClick={topFunction} to="/contact">
                            Contact
                          </Link>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <Link onClick={topFunction} to="/trmsCondition">
                            Trams & Condition
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 text-white">
                        Services link
                      </p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <p> Pediatric Clinic</p>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <p>Diagnosis Clinic</p>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <p>Psychological Counseling</p>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <p>Gynecological Clinic</p>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <p>Laboratory Analysis</p>
                        </div>
                        <div className="footerLink">
                          <IoArrowRedoSharp />
                          <p>Cardiac Clinic</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 text-white">
                        Contact Us
                      </p>
                      <div className="space-y-4">
                        {/* -------phone------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#0165ff] cursor-pointer hover:bg-[#065fe5] h-10 w-10 rounded-full flex justify-center items-center">
                            <AiTwotonePhone
                              className="animate-bounce"
                              size={25}
                            />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>+88 0179-0000000</p>
                            <p>+88 0179-2222222</p>
                          </div>
                        </div>

                        {/* -------location------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#0165ff] cursor-pointer hover:bg-[#065fe5] h-10 w-10 rounded-full flex justify-center items-center">
                            <AiTwotonePhone className="" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>Emergency - 78999</p>
                            <p>Ambulance - 33399 </p>
                          </div>
                        </div>
                        {/* -------location------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#0165ff] cursor-pointer hover:bg-[#065fe5] h-10 w-10 rounded-full flex justify-center items-center">
                            <GoLocation className="" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>Uttra,sector-11,road-6</p>
                            <p>Dhaka ,Bangladesh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-4 text-center">
                <div>
                  <p className="text-white">
                    © Copyright {currentYear}, All Rights Reserved by Health
                    Care Hospital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
