import React from 'react'
import './ServiceBanner.css'
import { Link, NavLink } from 'react-router-dom'

const ServiceBanner = () => {
  return (
    <>
      <div className="bgBanner">
        <div className="text-2xl font-semibold flex justify-center items-center space-x-2 pt-48">
          <Link to="/">
            <h1>Home </h1>
          </Link>
          <h2>/</h2>
          <h2>
            <NavLink>Services</NavLink>
          </h2>
        </div>
      </div>
    </>
  )
}

export default ServiceBanner
