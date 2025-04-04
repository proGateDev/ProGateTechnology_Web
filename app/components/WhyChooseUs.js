import React from "react";
import { FaShieldAlt, FaRocket, FaHeadset, FaCogs } from "react-icons/fa";
const ICON_COLOR = '#e96c06'
const ICON_SIZE = 40
const features = [
  {
    icon: <FaShieldAlt color={ICON_COLOR} size={ICON_SIZE} />,
    title: "Reliable & Secure",
    description: "Enterprise-grade infrastructure ensures your data is always safe, secure, and backed up.",
  },
  {
    icon: <FaRocket color={ICON_COLOR} size={ICON_SIZE} />,
    title: "Lightning Fast Deployment",
    description: "No more weeks of setup. Get your business online with our streamlined onboarding.",
  },
  {
    icon: <FaHeadset color={ICON_COLOR} size={ICON_SIZE}/>,
    title: "Dedicated 24/7 Support",
    description: "We don’t just hand you a dashboard—we’re with you at every step with real human support.",
  },
  {
    icon: <FaCogs color={ICON_COLOR} size={ICON_SIZE}/>,
    title: "Built for Customization",
    description: "From modules to UI elements, every part of ProGateTechnology is built to be shaped around your workflow.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-25 mt-4 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Whether you're a startup or scaling enterprise, ProGateTechnology is designed to fuel your business journey.
        </p>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
