import React from 'react'

const MassageContact = () => {
  return (
    <>
      <div className="container md:pt-40 pt-4">
        <div className="md:mx-24  mb-48 mt-[90px] md:px-20 px-6 shadow-md border-2 rounded-xl">
          <div className="md:pt-20 pt-10 flex justify-center items-center">
            <div>
              <h1 className=" font-semibold md:text-4xl text-2xl">
                Contact Health Care Hospital
              </h1>
              <p className=" mt-4 md:text-center">
                {' '}
                Write anything you want to say to say hello to us, or you can
                Massage
              </p>
            </div>
          </div>
          <div className="py-16">
            <form>
              <div className="md:flex gap-6">
                <input
                  name="from_name"
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered border p-2 rounded-lg w-full md:mt-2"
                />
                <input
                  name="from_name"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered border p-2 rounded-lg  w-full md:mt-2 mt-4"
                />
              </div>
              <div className="md:flex gap-6 mt-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full border p-2 rounded-lg   md:mt-2"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="input input-bordered w-full border p-2 rounded-lg   md:mt-2 mt-4"
                />
              </div>
              <div className="mt-4">
                <input
                  name="message"
                  type="text"
                  placeholder="Address"
                  className="input border p-2 rounded-lg   input-bordered w-full "
                />
              </div>

              <div className="mt-10">
                <textarea
                  name="message"
                  className="textarea border p-2 rounded-lg  textarea-bordered h-36 w-full"
                  placeholder="Message or description"
                ></textarea>
              </div>
              <div className="mt-8 flex justify-center md:justify-end">
                <input
                  type="submit"
                  value="Send Message"
                  className="py-4 px-9 rounded-md font-semibold text-lg bg-[#0165ff] text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MassageContact
