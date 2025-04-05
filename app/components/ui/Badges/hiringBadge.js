"use client";
import { useRouter } from 'next/navigation'
import React from "react";
//========================================================================
export default function HiringBadge() {
  //========================================================================
  const router = useRouter();

  const handleClick = () => {
    router.push("/jobs-openings");
  };
  //========================================================================
  return (
    <span
      onClick={handleClick}
      className="cursor-pointer ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-background-section text-accent animate-pulse hover:underline transition"
    >
      Hiring Now !
    </span>
  );
}
//========================================================================