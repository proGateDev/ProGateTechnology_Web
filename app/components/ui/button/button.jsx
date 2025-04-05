import React from "react";

//=========================================================================================
export function Button({ children, fullwidth = false, variant = "default", inverse = false, ...props }) {
//=========================================================================================
  const baseStyles = `
    flex items-center justify-center gap-2
    px-5 py-4 rounded-lg text-sm font-semibold
    transition-all duration-200 ease-in-out
    shadow-sm active:scale-95 select-none
    ${fullwidth ? "w-full" : "w-fit"}
  `;

  const variantStyles = {
    default: inverse
      ? "bg-white text-accent border border-accent hover:bg-accent hover:text-white"
      : "bg-accent text-white hover:bg-accent-muted hover:border hover:border-accent hover:text-accent",

    outline: inverse
      ? "bg-accent text-white border border-white hover:bg-white hover:text-accent"
      : "border border-accent text-accent bg-white hover:bg-accent hover:text-white hover:border hover:border-accent",

    ghost: inverse
      ? "text-white hover:bg-white/10"
      : "text-accent hover:bg-accent/10",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}
//=========================================================================================
