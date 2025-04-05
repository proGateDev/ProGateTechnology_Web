import React from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

// Define office hours: Mon–Sat, 09:30–17:30 IST
const isOfficeOpen = () => {
  const now = new Date();

  // Convert to IST
  const utcOffset = 5.5 * 60 * 60000; // IST is UTC+5:30
  const istTime = new Date(now.getTime() + utcOffset);

  const day = istTime.getUTCDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
  const hours = istTime.getUTCHours();
  const minutes = istTime.getUTCMinutes();

  const currentMinutes = hours * 60 + minutes;
  const startMinutes = 9 * 60 + 30;   // 09:30 AM
  const endMinutes = 17 * 60 + 30;    // 05:30 PM

  const isWeekday = day >= 1 && day <= 6; // Mon–Sat
  const isWithinHours = currentMinutes >= startMinutes && currentMinutes <= endMinutes;

  return isWeekday && isWithinHours;
};

const OurLocation = () => {
  const openStatus = isOfficeOpen();

  return (
    <section className="bg-white py-12 px-4 md:px-12 rounded-2xl shadow-lg mt-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <FiMapPin className="text-accent" size={26} />
        <h2 className="text-3xl font-bold text-primary-text tracking-tight">
          Our Location
        </h2>
      </div>

      {/* Map + Address */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Map */}
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.4568106979564!2d81.06105542971292!3d26.84618451481996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be30048795153%3A0x5ec42b82b4370864!2slolai!5e0!3m2!1sen!2sin!4v1743850400741!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Address */}
        <div className="space-y-4 flex flex-col items-center justify-center h-full text-center">
          <h3 className="text-2xl font-semibold text-primary-text">Visit Us</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            <span className="font-medium text-lg text-accent">
              ProGateTechnology
            </span>
            <br />
            Lolai, Chinhat, <br />
            Lucknow, Uttar Pradesh – 226010 <br />
            India
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
            <FiClock className="text-accent" />
            <div>
              <span className="font-semibold">Open Hours:</span>{" "}
              Mon – Sat, <span className="text-gray-500">09:30 AM – 5:30 PM</span>
            </div>
          </div>

          <div className="mt-2">
            {openStatus ? (
              <span className="inline-flex items-center text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                We are open now
              </span>
            ) : (
              <span className="inline-flex items-center text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                We are closed now
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
