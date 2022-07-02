import React from "react"
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h2 className="w-full text-3xl font-bold text-[#00df9a]">React</h2>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          ducimus, voluptatibus doloribus consequuntur officia fuga incidunt
          quae soluta suscipit exercitationem, sed totam? Aut repudiandae iusto
          ea, totam assumenda cum dolorem.
          <div className="flex justify-between sm:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaGithubSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </p>
      </div>
      <div className="lg:col-span-2 flex justify-between my-6">
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ul>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ul>{" "}
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ul>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
