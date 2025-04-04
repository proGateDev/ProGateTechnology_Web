import React from "react";

const PromoBanner = ({ title, subtitle, image, ctaText, ctaLink }) => {
    return (
        <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex items-center justify-between">
            {/* Left Content */}
            <div className="max-w-md m-auto">
                <h2 className="text-5xl font-bold">{title}</h2>
                <p className="text-sm mt-2">{subtitle}</p>
                {ctaText && ctaLink && (
                    <a
                        href={ctaLink}
                        className="mt-4 inline-block bg-white text-blue-600 px-4 py-2 rounded-xl font-medium transition hover:bg-gray-100"
                    >
                        {ctaText}
                    </a>
                )}
            </div>

            {/* Right Image */}
            {image && (
                    <img
                        src={image}
                        alt="Promotion"
                        className="w-1/2   rounded-xl hidden md:block"
                    />
            )}
        </div>
    );
};

export default PromoBanner;
