import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdSms } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { _id, name, publishDate, time, title, massage, img, Comments } =
    blog || {}

  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <div>
      <div className="hover:scale-105 hover:translate-y-4  shadow-xl delay-300 hover:bg-white px-4 py-4 rounded-xl   duration-500 ease-in-out">
        <div>
          <div>
            <img src={img} alt="" className="h-48 rounded-lg w-full" />
          </div>
          <h1 className="text-lg text-center relative bottom-44 rounded-r-lg bg-[#0165ff] p-2 font-semibold text-white w-32">
            {name}
          </h1>
          <div className="">
            <h3 className="text-[#0165ff] text-xl font-semibold">
              Publish on {publishDate} at {time} AM
            </h3>
            <h1 className="pt-4 font-semibold text-lg">{title}</h1>
            <p>{massage}</p>
            <div className="border-b-2 pt-4"></div>
            <div className="py-4 flex justify-between">
              <Link onClick={topFunction} to={`/blog-details/${_id}`}>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <h1 className="font-semibold">Read More</h1>
                  <FaArrowUpRightFromSquare
                    size={20}
                    className="text-[#0165ff] animate-bounce "
                  />
                </div>
              </Link>
              <div className="flex items-center space-x-2 cursor-pointer">
                <MdSms className="text-[#48cae4]" size={20} />
                <h1 className="font-semibold">{Comments} Comments</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
