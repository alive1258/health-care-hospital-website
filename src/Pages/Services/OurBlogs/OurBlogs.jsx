import React, { useEffect, useState } from 'react'

import BlogCard from './BlogCard'

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('blogData.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="pt-40">
      <div className="bg-[#f4f5f6] py-20">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="font-bold text-center lg:text-4xl text-lg">
            Our Blogs
          </h2>
          <p className="text-center pt-4">
            Our Latest News & Articles.Get latest news in your inbox.
          </p>
        </div>

        <div className="container pt-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {blogs.map(blog => (
              <BlogCard key={blog?._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBlogs
