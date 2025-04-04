import React from "react";

const VarietiesHighlight = ({ categories }) => {
  console.log('categories',categories)
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Available Things
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={category.image || "/placeholder.png"} // Default image
              alt={category?.name}
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="mt-2 text-gray-700 font-medium">{category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VarietiesHighlight;
