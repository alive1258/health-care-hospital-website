import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Hero = () => {
  const slides = [
    {
      url: 'https://clipart-library.com/images/yikrkByMT.jpg',
      text: 'Text for Image 1111111111111111111111111111',
      thumbel:
        'https://img.freepik.com/free-photo/young-female-doctor-white-medical-suit-with-stethoscope-white_140725-16514.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais',
    },
    {
      url: 'https://clipart-library.com/images/yikrkByMT.jpg',
      text: 'Text for Image 2222222222222222222222',
      thumbel:
        'https://cdn.create.vista.com/api/media/small/135127598/stock-photo-mature-doctor-with-stethoscope',
    },
    {
      url: 'https://clipart-library.com/images/yikrkByMT.jpg',
      text: 'Text for Image 444444444444444444',
      thumbel:
        'https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg',
    },

    {
      url: 'https://clipart-library.com/images/yikrkByMT.jpg',
      thumbel:
        'https://cdn.create.vista.com/api/media/small/135128856/stock-photo-male-doctor-with-stethoscope',
      text: 'Text for Image 5666666666666666661',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="pt-6">
      <div className=" h-[780px] w-full m-auto py-16  group">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              backgroundImage: `url(${slide?.url})`,
            }}
            className={`w-full h-full  bg-center bg-cover duration-500 ${
              slideIndex === currentIndex ? '' : 'hidden'
            }`}
          >
            <div className="container">
              <div className="left-side flex justify-between py-20">
                <h1>{slide?.text}</h1>
                <div>
                  <img src={slide?.thumbel} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
