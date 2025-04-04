import React from "react";
import { FaBoxOpen, FaUsers, FaTruckMoving, FaStore } from "react-icons/fa";
const ICON_COLOR = '#e96c06'
const ICON_SIZE = 60
const services = [
  {
    title: "Smart Inventory",
    description: "Track, manage, and replenish stock with real-time data & automation.",
    icon: <FaBoxOpen color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: "Customer Management",
    description: "Understand your customers better with built-in CRM and analytics.",
    icon: <FaUsers color={ICON_COLOR} size={ICON_SIZE}/>,
  },
  {
    title: "Logistics & Delivery",
    description: "Streamlined shipping and last-mile delivery integrations.",
    icon: <FaTruckMoving color={ICON_COLOR} size={ICON_SIZE}/>,
  },
  {
    title: "Multi-store Support",
    description: "Operate across multiple locations with centralized control.",
    icon: <FaStore color={ICON_COLOR} size={ICON_SIZE} />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-25 mt-4">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything your business needs to scale from local to global. ProGateTechnology is your one-stop SaaS shop.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex items-center justify-center ">
                {service.icon}

              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-text">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
