import React from "react";

export function IconButton({ children, className, variant = "default", disabled, ...props }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-200";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      className={`font-semibold ml-2 flex items-center justify-center ${
        props.fullwidth ? "w-full" : "w-fit"
      } bg-accent text-white rounded-md p-2 mt-4 shadow hover:bg-accent-muted hover:text-accent hover:border hover:border-accent transition active:scale-95
        ${disabled ? "opacity-50 cursor-not-allowed hover:bg-accent" : ""}
      `}
      disabled={disabled} // Disables the button
      {...props}
    >
      {children}
    </button>
  );
}
