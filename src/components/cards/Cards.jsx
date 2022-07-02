import React from "react"
import Single from "../../assets/single.png"
import Double from "../../assets/double.png"
import Triple from "../../assets/triple.png"
import Card from "./Card"

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          headerIcon={Single}
          userNoDetails={"Single User"}
          priceDetails={"149"}
          storageDetails={"500 GB Storage"}
          userDetails={"1 Granted User"}
          dataConnectivityDetails={"Send up to 2GB"}
        />
        <Card
          headerIcon={Double}
          userNoDetails={"Single User"}
          priceDetails={"199"}
          storageDetails={"1 TB Storage"}
          userDetails={"3 Users Allowed"}
          dataConnectivityDetails={"Send up to 10GB"}
          btnBackground={"bg-[#000]"}
          btnColor={"text-[#00df90]"}
          customMargin={"my-8"}
          customCardProperties={"md:my-0 bg-gray-100"}
        />
        <Card
          headerIcon={Triple}
          userNoDetails={"Single User"}
          priceDetails={"299"}
          storageDetails={"5 TB Storage"}
          userDetails={"10 Users Allowed"}
          dataConnectivityDetails={"Send up to 20 GB"}
        />
      </div>
    </div>
  )
}

export default Cards
