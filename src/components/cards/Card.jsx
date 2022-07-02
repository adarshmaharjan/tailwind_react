import React from "react"
import Single from "../../assets/single.png"

const Card = ({
  headerIcon,
  userNoDetails,
  priceDetails,
  storageDetails,
  userDetails,
  dataConnectivityDetails,
  btnBackground,
  btnColor,
  customMargin,
  customCardProperties,
}) => {
  return (
    <div
      className={` w-full shadow-xl flex flex-col p-4 ${
        customMargin || "my-4"
      } rounded-lg hover:scale-105 duration-300 ${customCardProperties}`}
    >
      <img
        src={headerIcon || Single}
        alt="/"
        className="w-20 mx-auto mt-[-3rem] bg-white"
      />
      <h2 className="text-2xl font-bold text-center py-8">
        {userNoDetails || "Single User"}
      </h2>
      <p className="text-center text-4xl font-bold">
        {"$" + (priceDetails || "149")}
      </p>

      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">
          {storageDetails || "500 GB Storage"}
        </p>
        <p className="py-2 border-b mx-8">{userDetails || "1 Granted User"}</p>
        <p className="py-2 border-b mx-8">
          {dataConnectivityDetails || "Send up to 2GB"}
        </p>
      </div>
      <button
        className={`
        ${btnBackground || "bg-[#00df90]"} ${
          btnColor || "text-[#000]"
        } w-[200px] rounded-md font-medium my-6 mx-auto py-3
        `}
      >
        Start Trial
      </button>
    </div>
  )
}

export default Card
