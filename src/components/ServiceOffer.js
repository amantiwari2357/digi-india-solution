"use client";
import React, { useState, useEffect } from "react";
import "../style/servicesOffer.css"; // External CSS file
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const services = [
  { 
    title: "Gaming", 
    image: "/images/first1.1.jpg", 
    description: "Immerse your audience with captivating gaming characters and environments crafted by meticulous detail and creative design.",
    backgroundImage: "/images/first1.jpg"
  },
  { 
    title: "E-commerce", 
    image: "/images/second2.1.png", 
    description: "Boost your online store with high-quality 3D models and realistic product representations.",
    backgroundImage: "/images/second2.jpg"
  },
  { 
    title: "Marketing", 
    image: "/images/three3.1.png", 
    description: "Create stunning visual content that enhances brand storytelling and consumer engagement.",
    backgroundImage: "/images/three3.jpg"
  },
  { 
    title: "Healthcare", 
    image: "/images/four4.jpg", 
    description: "Improve medical training and patient understanding with detailed 3D medical visualizations.",
    backgroundImage: "/images/four4.1.png"
  },
];

const ServicesOffer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services-container">
      {/* Animated Background */}
      <motion.div
        className="background-image"
        style={{ backgroundImage: `url(${services[activeIndex].backgroundImage})` }}
        initial={{ scale: 1, rotate: 0 }}
        animate={{
          scale: [1, 1.05, 1], 
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="services-slider"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="service-slide">
            <motion.div 
              className="service-card"
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}   
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="service-content">
                <div className="service-image-container">
                  <motion.img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image"
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}  
                    transition={{ duration: 1.2, ease: "easeOut" }} 
                  />
                </div>
                <motion.h3
                  initial={{ x: 100, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}  
                  transition={{ duration: 1.2, ease: "easeOut" }} 
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ x: 100, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}  
                  transition={{ duration: 1.2, ease: "easeOut" }} 
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesOffer;
