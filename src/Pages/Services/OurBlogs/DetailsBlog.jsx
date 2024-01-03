import React from 'react'
import './DetailsBlog.css'
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom'

const DetailsBlog = () => {
  const blogDetails = useLoaderData()
  let { detailsId } = useParams()

  // singleDoctorData
  const singleBlogData = blogDetails.find(
    blogDetail => blogDetail._id == detailsId
  )

  const { _id, name, img, details, title2 } = singleBlogData || {}
  return (
    <>
      <div>
        <div className="bgBanner">
          <div className="text-2xl font-semibold flex justify-center items-center space-x-2 pt-48">
            <Link to="/">
              <h1>Home </h1>
            </Link>
            <h2>/</h2>
            <h2>
              <NavLink> Blog Details</NavLink>
            </h2>
          </div>
        </div>
        <div className="container pt-28">
          <div className="bg-[#f4f5f6] px-6 py-8 rounded-xl">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-[#48cae4] md:w-[80%] rounded-lg">
                <img className="p-4 w-full md:h-96" src={img} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="text-lg font-semibold">specialist</p>
                <div className="pt-6 ">{/* Write A Review*/}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
            <div>
              <h1 className="text-3xl font-bold">{title2}</h1>
              <p className="pt-4">{details}</p>
            </div>
            <div className="pt-2">
              <div className="bg-[#ecedf0]">
                <div>
                  <div className="bg-[#48cae4] p-4">
                    <h1 className="text-2xl text-center font-semibold text-[#ffffff]">
                      Write Comments
                    </h1>
                  </div>

                  {/* time  */}
                  <div className="p-4 space-y-3">
                    <div className="pt-5">
                      <div className="py-5 bg-white">
                        <div className="flex px-4 pb-3 items-center space-x-2 border-b">
                          <div>5.0 rating</div>
                        </div>

                        <div className="p-4 ">
                          <textarea
                            placeholder="Comments Here....."
                            className="w-full border p-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <input
                        className="w-full p-3"
                        placeholder="email....."
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                      />
                    </div>
                    <div className="items-center py-6 ">
                      <button className="bg-[#0165ff] w-full text-white text-xl font-semibold px-4 py-2 rounded-md hover:bg-[#0165ff] transition delay-300 ease-in-out">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsBlog
