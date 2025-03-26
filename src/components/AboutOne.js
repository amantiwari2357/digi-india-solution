"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../style/AboutOne.css";

const AboutOne = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { id: 1, src: "/images/about.png", caption: "Innovating for a better future Empowering businesses globally Committed to sustainability & growth" },
    { id: 2, src: "/images/AboutOne1.png", caption: "Innovating for a better future Empowering businesses globally Committed to sustainability & growth" },
    { id: 3, src: "/images/AboutOne2.png", caption: "Innovating for a better future Empowering businesses globally Committed to sustainability & growth" },
  ];

  // Autoplay Slider Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const AboutDetailPage = ({ onClose }) => {
    const sections = [
      {
        title: "Company Overview",
        items: ["Home", "Overview", "History"]
      },
      {
        title: "Management & ESG",
        items: ["Digi India Innovation Network (IIN)", "Management Profiles", "Clients Speak", "Alliances","Locations", "Awards"]
      },
      {
        title: "Brand Partnerships",
        items: ["Digi India  Knowledge ", " Stories", "Analyst Reports","Media","Dow Jones", "Financial Times", "The Cloud Hub"]
      }
    ];

    return (
      <div className="book-page">
        <button className="back-btn" onClick={onClose}>← Back</button>
        <h1 className="book-title">About the Company</h1>
        <div className="book-content">
          {sections.map((section, index) => (
            <div className="book-column" key={index}>
              <div className="book-column-title">{section.title}</div>
              {section.items.map((item, idx) => (
                <p key={idx} className="book-section">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="about-container">
      {showDetails ? (
        <AboutDetailPage onClose={() => setShowDetails(false)} />
      ) : (
        <div className="slider-container">
          {/* Company Button on Right Side */}
          <button className="company-btn" onClick={() => setShowDetails(true)}>
            Company
          </button>

          {/* Slider Content */}
          <motion.div
            className="slide"
            key={images[currentImage].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={images[currentImage].src} alt={`Slide ${currentImage + 1}`} />

            {/* Caption on the Left with Read More */}
            <div className="caption">
              {images[currentImage].caption}
              <button className="read-more-btn">Read More</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AboutOne;
