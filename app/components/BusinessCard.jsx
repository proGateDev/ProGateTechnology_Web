
import { FaImage, } from "react-icons/fa";

//========================================================================================
export default function BusinessCard() {
  const business = {
    name: "Tandoori Flames",
    banner: "shop-bg.jpg",
    rating: 4.5,
    location: "Hazratganj, Lucknow",
    phone: "+91 9876543210",
    menu: [
      { category: "Starters", items: ["Paneer Tikka", "Chicken Tandoori"] },
      { category: "Main Course", items: ["Butter Chicken", "Dal Makhani"] },
      { category: "Desserts", items: ["Gulab Jamun", "Rasmalai"] },
    ],
  };
  //========================================================================================
  return (
    <div className="container mx-auto p-2">

      <div className="relative">
        <img
          src="banner.png"
          alt="banner"
          className="w-full h-60 sm:h-72 md:h-80 lg:h-96  rounded-xl"
        />
        <div className=" text-white bg-[#0e0d12] bg-opacity-50 p-3 rounded-lg mt-5">
          <h1 className="text-3xl font-bold">{business.name}</h1>
          <p className="flex items-center"><FaImage className="w-5 h-5 text-yellow-400 mr-1" /> {business.rating}</p>
          <p className="flex items-center"><FaImage className="w-5 h-5 mr-1" /> {business.location}</p>
          <p className="flex items-center"><FaImage className="w-5 h-5 mr-1" /> {business.phone}</p>
        </div>
      </div>


    </div>
  );
}

//========================================================================================
