import React, { useState } from 'react'
import userImg from '../../assets/images/avatar-icon.png'
import dLogo from '../../assets/images/plusLogo.png'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const navLinks = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/doctors',
    display: 'Find Doctors',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const topFunction = () => {
    setNav(!nav)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  // return <header className='headerbg'>
  return (
    <header className="flex fixed  items-center w-full h-[90px] leading-10  bg-[#48cae4]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo  */}
          <div className="flex items-center">
            <img className="h-16 w-16 rounded-full" src={dLogo} alt="" />

            <div className="font-bold md:text-2xl  text-sm flex space-x-2">
              <p className="text-[#073b4c]">Health</p>
              <p className="text-[#073b4c]">Care Hospital</p>
            </div>
          </div>

          {/* menu  */}
          <div className="navigation" onClick={topFunction}>
            <ul className="menu hidden md:flex items-center text-[#ffffff] gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? 'text-[#0165ff] text-[16px]  font-[600]'
                        : 'text-textColor text-[16px]  font-[500] hover:text-[#0165ff]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right   */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="h-[35px] w-[35px] rounded-full cursor-pointer">
                  <img className="w-full rounded-full" src={userImg} alt="" />
                </figure>
              </Link>
            </div>

            <div>
              <Link to="/login">
                <button className="bg-[#0165ff] py-2 md:px-6 px-4 text-[#ffffff] font-semibold h-11 flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            </div>

            <div onClick={topFunction} className="md:hidden ">
              {!nav ? (
                <AiOutlineMenu size={25} />
              ) : (
                <AiOutlineClose size={25} />
              )}
            </div>

            {/* mobile menu  */}
            <>
              <div
                className={
                  !nav
                    ? 'hidden'
                    : 'absolute bg-gray-200  font-semibold top-[90px] h-screen w-full md:hidden px-2'
                }
                onClick={topFunction}
              >
                <ul>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={navClass =>
                          navClass.isActive
                            ? 'text-primaryColor text-[16px]  font-[600]'
                            : 'text-textColor text-[16px]  font-[500] hover:text-primaryColor'
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
