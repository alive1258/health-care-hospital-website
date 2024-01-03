import React from 'react'
import './BannerContact.css'
import { Link, NavLink } from 'react-router-dom'

const BannerContact = () => {
  return (
    <>
      <div className="bgBanner ">
        <div className="text-2xl font-semibold flex justify-center items-center space-x-2 pt-48">
          <Link to="/">
            <h1>Home </h1>
          </Link>
          <h2>/</h2>
          <h2>
            <NavLink>Contact</NavLink>
          </h2>
        </div>
      </div>
    </>
  )
}

export default BannerContact
