"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const promoImages = [
  "/banner.png",
  "/banner.png",
  "/banner.png",
  "/banner.png",
];

const ScrollingPromoBanner = () => {
  return (
    <section className="w-full bg-background-section p-4 mt-4">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 1 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="w-full"
        >
          {promoImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`promo-${idx}`}
                className="w-full h-68 rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ScrollingPromoBanner;
