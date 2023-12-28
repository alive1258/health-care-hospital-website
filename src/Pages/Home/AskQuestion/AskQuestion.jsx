import React, { useState } from 'react'
import askDrQPic2 from '../../../assets/images/dq2.jpeg'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

const AskQuestion = () => {
  const data = [
    {
      question: 'What hospital services are available for pediatric care?',
      answer:
        'Our hospital offers a comprehensive range of pediatric services, including specialized pediatric units for various medical needs, pediatric emergency care, pediatric surgery, developmental assessments, and a dedicated team of pediatric specialists providing round-the-clock care for children and infants.',
    },
    {
      question: ' Can you elaborate on the emergency services provided?',
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
      question:
        ' How do you 3 handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question:
        ' How do you4 handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question:
        ' How do you5 handle patient admissions and discharge processes?',
      answer:
        ' Our hospital6 has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question:
        ' How do you handle patient admissions and discharge processes?',
      answer:
        ' Our hospital has a streamlined admission process ensuring prompt and efficient registration. For discharge, our team provides comprehensive post-care instructions and necessary follow-ups.',
    },
    {
      question:
        ' How do you handle patient admissions and discharge processes?',
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
        <h1 className="max-w-48 mx-auto text-3xl font-bold">All Questions</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-24">
          <div>
            <img className="rounded-lg" src={askDrQPic2} alt="" />
          </div>
          <div>
            <div>
              <div className="p-4 h-96 overflow-y-scroll">
                {data.map((item, index) => (
                  <div className="mb-2 bg-gray-200 p-2" key={index}>
                    <input
                      type="checkbox"
                      id={`toggle-${index}`}
                      className="hidden"
                      checked={isOpen[index]}
                      onChange={() => handleToggle(index)}
                    />
                    <label
                      htmlFor={`toggle-${index}`}
                      className="cursor-pointer text-xl font-medium"
                    >
                      <div className="flex items-center justify-between">
                        <p>{item.question}</p>
                        {isOpen[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </label>
                    {isOpen[index] && (
                      <div className="mt-2 collapse-content">
                        <p>{item.answer}</p>
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

// another way
// import React, { useState } from 'react'
// import askDrQPic from '../../../assets/images/askDrQuestion.jpg'
// import { IoIosArrowDown } from 'react-icons/io'
// import { IoIosArrowUp } from 'react-icons/io'

// const AskQuestion = () => {
//   const [isOpen1, setIsOpen1] = useState(false)
//   const [isOpen2, setIsOpen2] = useState(false)
//   const [isOpen3, setIsOpen3] = useState(false)
//   const [isOpen4, setIsOpen4] = useState(false)
//   const [isOpen5, setIsOpen5] = useState(false)

//   const handleToggle1 = () => {
//     setIsOpen1(!isOpen1)
//     if (!isOpen1) {
//       setIsOpen2(false)
//       setIsOpen3(false)
//       setIsOpen4(false)
//       setIsOpen5(false)
//     }
//   }

//   const handleToggle2 = () => {
//     setIsOpen2(!isOpen2)
//     if (!isOpen2) {
//       setIsOpen1(false)
//       setIsOpen3(false)
//       setIsOpen4(false)
//       setIsOpen5(false)
//     }
//   }

//   const handleToggle3 = () => {
//     setIsOpen3(!isOpen3)
//     if (!isOpen3) {
//       setIsOpen1(false)
//       setIsOpen2(false)
//       setIsOpen4(false)
//       setIsOpen5(false)
//     }
//   }

//   const handleToggle4 = () => {
//     setIsOpen4(!isOpen4)
//     if (!isOpen4) {
//       setIsOpen1(false)
//       setIsOpen2(false)
//       setIsOpen3(false)
//       setIsOpen5(false)
//     }
//   }

//   const handleToggle5 = () => {
//     setIsOpen5(!isOpen5)
//     if (!isOpen5) {
//       setIsOpen1(false)
//       setIsOpen2(false)
//       setIsOpen3(false)
//       setIsOpen4(false)
//     }
//   }
//   return (
//     <>
//       <div className="container pt-40">
//         <h1 className="max-w-48 mx-auto text-3xl font-bold">All Question</h1>
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-24">
//           <div>
//             <img className="rounded-lg" src={askDrQPic} alt="" />
//           </div>

//           <div>
//             <div className=" p-4">
//               <div className="mb-2 bg-gray-200 p-2">
//                 <input
//                   type="checkbox"
//                   id="toggle1"
//                   className="hidden"
//                   checked={isOpen1}
//                   onChange={handleToggle1}
//                 />
//                 <label
//                   htmlFor="toggle1"
//                   className="cursor-pointer text-xl font-medium"
//                 >
//                   <div className="flex items-center justify-between">
//                     <p>Click me to</p>
//                     {isOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                   </div>
//                 </label>
//                 {isOpen1 && (
//                   <div className="mt-2 collapse-content">
//                     <p>Hello from section 1</p>
//                   </div>
//                 )}
//               </div>

//               <div className="mb-2">
//                 <input
//                   type="checkbox"
//                   id="toggle2"
//                   className="hidden"
//                   checked={isOpen2}
//                   onChange={handleToggle2}
//                 />
//                 <label
//                   htmlFor="toggle2"
//                   className="cursor-pointer text-xl font-medium"
//                 >
//                   Click me to {isOpen2 ? 'hide' : 'show'} content 2
//                 </label>
//                 {isOpen2 && (
//                   <div className="mt-2 collapse-content">
//                     <p>Hello from section 2</p>
//                   </div>
//                 )}
//               </div>

//               <div className="mb-2">
//                 <input
//                   type="checkbox"
//                   id="toggle3"
//                   className="hidden"
//                   checked={isOpen3}
//                   onChange={handleToggle3}
//                 />
//                 <label
//                   htmlFor="toggle3"
//                   className="cursor-pointer text-xl font-medium"
//                 >
//                   Click me to {isOpen3 ? 'hide' : 'show'} content 3
//                 </label>
//                 {isOpen3 && (
//                   <div className="mt-2 collapse-content">
//                     <p>Hello from section 3</p>
//                   </div>
//                 )}
//               </div>

//               <div className="mb-2">
//                 <input
//                   type="checkbox"
//                   id="toggle4"
//                   className="hidden"
//                   checked={isOpen4}
//                   onChange={handleToggle4}
//                 />
//                 <label
//                   htmlFor="toggle4"
//                   className="cursor-pointer text-xl font-medium"
//                 >
//                   Click me to {isOpen4 ? 'hide' : 'show'} content 4
//                 </label>
//                 {isOpen4 && (
//                   <div className="mt-2 collapse-content">
//                     <p>Hello from section 4</p>
//                   </div>
//                 )}
//               </div>

//               <div className="mb-2">
//                 <input
//                   type="checkbox"
//                   id="toggle5"
//                   className="hidden"
//                   checked={isOpen5}
//                   onChange={handleToggle5}
//                 />
//                 <label
//                   htmlFor="toggle5"
//                   className="cursor-pointer text-xl font-medium"
//                 >
//                   Click me to {isOpen5 ? 'hide' : 'show'} content 5
//                 </label>
//                 {isOpen5 && (
//                   <div className="mt-2 collapse-content">
//                     <p>Hello from section 5</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AskQuestion
