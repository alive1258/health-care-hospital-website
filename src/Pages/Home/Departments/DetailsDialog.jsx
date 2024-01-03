import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import OnlineAppointment from '../OnlineAppointment/OnlineAppointment'

const DetailsDialog = ({ department }) => {
  const {
    name,
    title,
    title2,
    treatment1,
    treatment2,
    title2_ans,
    img,
    details,
  } = department || {}
  return (
    <>
      <div className="h-[340px] overflow-y-scroll mt-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <img src={img} className="h-80 w-full" alt="" />
          </div>
          <div>
            <h2 className="mt-3 text-3xl font-semibold">{title}</h2>
            <p className="mt-3 ">{treatment1}</p>
            <h2 className="mt-3 text-3xl font-semibold">{title2}</h2>
            <p className="mt-3 ">{title2_ans}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 mt-8 grid-cols-1 gap-5">
          <div>
            <h2 className="mt-3 text-3xl font-semibold">{title2}</h2>
            <div className="mt-3 space-y-2">
              {treatment2?.map(treatment => (
                <div className="flex items-center space-x-3 ">
                  <div className="font-semibold">
                    {' '}
                    <IoMdArrowRoundForward />{' '}
                  </div>
                  <div>{treatment}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mt-3 text-3xl font-semibold">{name}</h2>
            <p className="font-semibold text-lg pt-2">Details</p>
            <p className="mt-3 ">{details}</p>
          </div>
        </div>

        <div className="pt-3">
          <OnlineAppointment />
        </div>
      </div>
    </>
  )
}

export default DetailsDialog
