import React from "react"

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h2>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full rounded-md text-black"
            />
            <button className="bg-[#00df90] w-[200px] rounded-md font-medium my-6 py-3 ml-4 text-[#000]">
              Notify Me
            </button>
          </div>
          <p className="">
            We care about the protection of your data.{" "}
            <span className="text-[#00df9a]">Read our Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
