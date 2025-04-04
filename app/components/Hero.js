"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="mt-4 rounded bg-gradient-to-r from-[#8d3018] via-[#e96c06] to-[#db630a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            From Local Hustle <br className="hidden sm:block" /> to Global Muscle
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Empower your business with ProGate’s smart SaaS solutions. Manage inventory, customers, logistics, and growth—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#get-started"
              className="bg-white text-[#8d3018] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-100 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="border border-white py-3 px-6 rounded-lg text-white hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="/hero-image.png"
            alt="Business growth illustration"
            className="w-full max-w-md md:max-w-full drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
