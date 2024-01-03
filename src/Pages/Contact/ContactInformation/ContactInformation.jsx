import React from 'react'

const ContactInformation = () => {
  const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29054.478762397906!2d89.67888152468166!3d24.4573818193587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdc1df830dba1b%3A0x58f0cbb092e78b62!2sSirajganj!5e0!3m2!1sen!2sbd!4v1704114221894!5m2!1sen!2sbd`
  return (
    <div>
      <div className="lg:w-[470px] mx-auto mt-28">
        <h2 className="font-bold text-center lg:text-4xl text-2xl">
          Contact Information
        </h2>
        <p className="text-center pt-4">
          Get latest news in your inbox.A Doctor Anytime, Anywhere By Search
        </p>
      </div>
      <div className="bg-gray-100 mt-20">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={url}
                className="w-full h-full"
                frameborder="0"
                title="Embedded Map"
              ></iframe>
            </div>

            <div>
              <div className="bg-[rgb(67,97,238)]">
                <div className=" p-4">
                  <div className="text-[#ffffff] border-2 px-3 py-3  border-[#ffffff]">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <div className="space-y-4 md:border-r-2">
                        <h1 className="font-semibold text-xl ">Working Time</h1>
                        <p>Saturday - 10:00am - 07:00pm</p>
                        <p>Sunday - Emergency Only</p>
                        <p>Monday - 8:00 AM – 10:00 pm</p>
                        <p>Tuesday - 8:00 AM – 7:00 pm</p>
                        <p>Wednesday- 8:00 AM–9:00 pm</p>
                        <p>Thursday - 8:00 AM – 7:00 pm</p>
                        <p>Friday - Fri 08:00am - 10:00pm</p>
                        <p>Ambulance - 24/7 Service</p>
                      </div>

                      <div>
                        <h1 className="text-xl font-bold">Address</h1>
                        <div className="space-y-3 pt-5">
                          <p>
                            <span className="font-bold text-lg">Place:</span>SS
                            Road, Hk Tower,5th Floor
                          </p>
                          <p>
                            <span className="font-bold text-lg">Place:</span>
                            Sirajganj,Bangladesh
                          </p>
                          <p>
                            <span className="font-bold text-lg">Email:</span>{' '}
                            healthcarehospital@gmail.com
                          </p>
                          <p>
                            <span className="font-bold text-lg">Phone :</span>
                            +88 0179-0000000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
