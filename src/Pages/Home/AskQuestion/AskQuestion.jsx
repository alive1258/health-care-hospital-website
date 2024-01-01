import React, { useState } from 'react'
import askDrQPic2 from '../../../assets/images/dq2.jpeg'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa6'
import treatment2 from '../../../assets/images/treatment2.jpg'
import doctorpic1 from '../../../assets/images/drPic.avif'
import { FaCircleCheck } from 'react-icons/fa6'

const AskQuestion = () => {
  const data = [
    {
      question: 'What hospital services are available for pediatric care?',
      answer:
        'Our hospital offers a comprehensive range of pediatric services, including specialized pediatric units for various medical needs, pediatric emergency care, pediatric surgery, developmental assessments, and a dedicated team of pediatric specialists providing round-the-clock care for children and infants.',
    },
    {
      question: 'Can you elaborate on the emergency services provided?',
      answer:
        ' We have a fully-equipped emergency department offering 24/7 emergency care, trauma services, critical care, and rapid response teams to handle any medical emergencies.',
    },
    // Add more question-answer pairs here...
    {
      question: 'What diagnostic facilities are available at the hospital?',
      answer:
        ' Our hospital offers state-of-the-art diagnostic facilities such as MRI, CT scans, X-rays, ultrasound, laboratory services, and advanced imaging technologies.',
    },
    {
      question: ' How handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question: ' How  handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question: ' How handle patient admissions and discharge processes?',
      answer:
        ' Our hospital6 has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question: ' How  handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question: ' How handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question:
        'Are there specialized units for intensive care or critical patients?',
      answer:
        'Yes, we have specialized intensive care units (ICUs) equipped with advanced monitoring and life-support systems to cater to critically ill patients.',
    },
    {
      question:
        'Are there specialized units for intensive care or critical patients?',
      answer:
        'Yes, we have specialized intensive care units (ICUs) equipped with advanced monitoring and life-support systems to cater to critically ill patients.',
    },
    {
      question:
        'Are there specialized units for intensive care or critical patients?',
      answer:
        'Yes, we have specialized intensive care units (ICUs) equipped with advanced monitoring and life-support systems to cater to critically ill patients.',
    },
    {
      question:
        'Are there specialized units for intensive care or critical patients?',
      answer:
        'Yes, we have specialized intensive care units (ICUs) equipped with advanced monitoring and life-support systems to cater to critically ill patients.',
    },
    {
      question:
        'Are there specialized units for intensive care or critical patients?',
      answer:
        'Yes, we have specialized intensive care units (ICUs) equipped with advanced monitoring and life-support systems to cater to critically ill patients.',
    },
  ]
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false))

  const handleToggle = index => {
    const updatedState = isOpen.map((state, i) =>
      i === index ? !state : false
    )
    setIsOpen(updatedState)
  }

  return (
    <>
      <div className="container pt-40">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-2xl">
            All Questions
          </h2>
          <p className="text-center pt-8">
            Hospitals serve as crucial institutions providing comprehensive
            medical care and treatment to individuals in need
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-16">
          <div className="">
            <div className="md:flex">
              {/* doctorpic1 */}
              <div className="relative z-10 md:top-[340px] top-[470px] md:right-20   bg-white shadow-xl rounded-lg px-2 py-4 md:w-96 w-64">
                <div className="flex space-x-3 ">
                  <div>
                    <img
                      src={doctorpic1}
                      className="h-14 w-14 rounded-full "
                      alt=""
                    />
                    <FaCircleCheck className="text-[#4361ee] relative bottom-4" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">Wiliam Jon</h1>
                    <p>Senior Cardiologist</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center relative md:top-8 right-11 w-full">
                <div className="bg-white md:ml-8  z-10 px-4 py-3 shadow-xl rounded-lg ">
                  <div className="flex items-center space-x-4 justify-between ">
                    <div>
                      <FaRegQuestionCircle
                        size={25}
                        className="text-[#d90429]"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">Get Your Answer</h1>
                      <p>Frequently Asked Questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  className="rounded-lg h-96 inline-block w-full"
                  src={askDrQPic2}
                  alt=""
                />
              </div>
              <div className="relative bottom-6 ">
                <img
                  className="rounded-lg h-96 inline-block w-full"
                  src={treatment2}
                  alt=""
                />
                <div className="bg-white md:block hidden p-4 shadow-lg relative bottom-12 right-12 w-24 rounded-lg">
                  <FaHandHoldingHeart size={50} className="text-[#4361ee]" />
                </div>
              </div>
            </div>
          </div>
          {/* question  */}
          <div>
            <div className="pt-10">
              <div className="md:p-4  h-[440px] overflow-y-scroll ">
                {data.map((item, index) => (
                  <div
                    // className={`mb-2 rounded-lg p-2 ${isOpen[index] ? '' : ''}`}
                    className="space-y-2 mb-3  rounded-lg border-b"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`toggle-${index}`}
                      className="hidden"
                      checked={isOpen[index]}
                      onChange={() => handleToggle(index)}
                    />
                    <label
                      htmlFor={`toggle-${index}`}
                      className="cursor-pointer text-lg ${}"
                    >
                      <div
                        className={`flex justify-between ${
                          isOpen[index]
                            ? 'bg-[#48cae4] p-2 text-[#ffffff] '
                            : ' hover:bg-[#4361ee] p-2 hover:text-[#ffffff]'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            {isOpen[index] ? (
                              <FaRegQuestionCircle className="" />
                            ) : (
                              <FaRegQuestionCircle className="text-[#d90429]" />
                            )}
                          </div>
                          <div className="">{item.question}</div>
                        </div>
                        {isOpen[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </label>
                    {isOpen[index] && (
                      <div className="mt-2 p-2 ">
                        <p className="">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AskQuestion
