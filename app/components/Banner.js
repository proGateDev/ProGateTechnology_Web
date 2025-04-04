import React from "react";
import { HiSpeakerphone } from "react-icons/hi";

const Banner = ({ message, actionText, onAction }) => {
  return (
    <div className="mt-4 w-full bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <HiSpeakerphone className="text-2xl" />
        <p className="text-sm md:text-base font-medium">{message}</p>
      </div>
      {actionText && (
        <button
          onClick={onAction}
          className="bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default Banner;
