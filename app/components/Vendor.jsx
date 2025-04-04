import React from "react";

const Vendor = ({ name, category, image, location ,onClick}) => {
  return (
    <div
    onClick={onClick}
    className="cursor-pointer bg-background-section  shadow p-4 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600 ">{category}</p>
        <p className="text-xs text-gray-500  font-semibold">{location?.city}</p>
        <p className="text-xs text-gray-500  font-light">{location?.street}</p>
      </div>
    </div>
  );
};

export default Vendor;
