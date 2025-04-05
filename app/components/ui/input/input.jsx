import React from "react";

export function Input({ className = "", type = "text", ...props }) {
  const baseClasses = `mt-2 w-full px-4 py-2 bg-white text-gray-800 text-sm rounded-md border border-[#e7eaf3] focus:ring-1 border-opacity-100 shadow-md placeholder-gray-400 focus:ring-accent focus:border-accent focus:border-opacity-50 outline-none transition ${className}`;

  if (type === "textarea") {
    return <textarea className={baseClasses} rows={4} {...props} />;
  }

  return <input type={type} className={baseClasses} {...props} />;
}
