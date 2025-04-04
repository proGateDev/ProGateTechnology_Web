import React from "react";
import { FaPhoneAlt, FaRegLightbulb, FaClipboardList, FaCheckCircle } from "react-icons/fa";
const ICON_COLOR = '#ffff'
const ICON_SIZE = 40
const steps = [
  {
    title: "Initial Contact",
    description: "We connect via call or message to understand your goals, pain points, and requirements.",
    icon: <FaPhoneAlt color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: "Discovery Session",
    description: "Deep dive into your business challenges, tech needs, and growth plans.",
    icon: <FaRegLightbulb color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: "Strategy Blueprint",
    description: "We craft a custom roadmap with scalable tech and tailored solutions.",
    icon: <FaClipboardList color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: "Launch & Support",
    description: "We help you implement, train your team, and stay with you every step post-launch.",
    icon: <FaCheckCircle color={ICON_COLOR} size={ICON_SIZE} />,
  },
];

const ConsultationProcess = () => {
  return (
    <section className="bg-gray-50 py-25 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Our Consultation Process
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          From understanding your vision to building what works — here’s how we make it happen.
        </p>

        <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="cursor-pointer relative flex flex-col items-center text-center md:w-1/4 h-[200px] shadow  rounded-2xl p-4">
              <div className="p-4 bg-[#e96c06] rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 right-[-50%] w-[89%] border-t-2 border-dashed border-orange-300 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
