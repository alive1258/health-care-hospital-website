import React from 'react'
import { BsFillBagPlusFill } from 'react-icons/bs'
import { FaHeartbeat } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { FaAmbulance } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'
import { FaVenusMars } from 'react-icons/fa'

const Department = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {/* Emergency unit */}
          <div className="border-2 px-4 py-3">
            <div className="flex justify-center items-center">
              <BsFillBagPlusFill size={40} className="text-[#0165ff] " />
            </div>

            <h1 className="text-center pt-3 text-lg font-semibold">
              Emergency Unit
            </h1>
            <p className="py-2">
              The hospital's Emergency Unit 24/7 hours offers immediate and
              comprehensive medical assistance to individuals facing urgent
              special health crises round the clock.
            </p>
          </div>

          {/*   Health Care*/}
          <div className="border-2 px-4 py-3">
            <div className="flex justify-center items-center">
              <FaHeartbeat size={40} className="text-[#0165ff] " />
            </div>

            <h1 className="text-center pt-3 text-lg font-semibold">
              Health Care
            </h1>
            <p className="py-2">
              Health care encompasses a broad range of services aimed at
              promoting, maintaining, and restoring health and well-being for
              individuals and communities.
            </p>
          </div>

          {/*   Qualified Doctors*/}
          <div className="border-2 px-4 py-3">
            <div className="flex justify-center items-center">
              <FaUserDoctor size={40} className="text-[#0165ff] " />
            </div>

            <h1 className="text-center pt-3 text-lg font-semibold">
              Qualified Doctors
            </h1>
            <p className="py-2">
              Qualified doctors possess the expertise, skills, and experience
              necessary to provide high-quality medical care and guidance to
              patients, ensuring effective diagnosis and treatment
            </p>
          </div>

          {/*   Ambulance*/}
          <div className="border-2 px-4 py-3">
            <div className="flex justify-center items-center">
              <FaAmbulance size={40} className="text-[#0165ff] " />
            </div>

            <h1 className="text-center pt-3 text-lg font-semibold">
              Ambulance
            </h1>
            <p className="py-2">
              Ambulances serve as rapid-response medical vehicles equipped to
              provide swift and critical care to in need during emergencies or
              while being between healthcare facilities.
            </p>
          </div>
          {/*   Drag Store*/}
          <div className="border-2 px-4 py-3">
            <div className="flex justify-center items-center">
              <GiMedicines size={40} className="text-[#0165ff] " />
            </div>

            <h1 className="text-center pt-3 text-lg font-semibold">
              Drag Store
            </h1>
            <p className="py-2">
              A drugstore typically offers a wide range of medications,
              health-related products, basic medical services, serving as a
              convenient retail outlet for healthcare needs.
            </p>
          </div>
          {/*   DNA Testing*/}
          <div className="border-2 px-4 py-3">
            <div className="flex justify-center items-center">
              <FaVenusMars size={40} className="text-[#0165ff] " />
            </div>

            <h1 className="text-center pt-3 text-lg font-semibold">DNA Test</h1>
            <p className="py-2">
              DNA testing involves analyzing genetic material to identify
              specific traits, , or diagnose potential genetic disorders, aiding
              in personalized healthcare and ancestry exploration.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Department
