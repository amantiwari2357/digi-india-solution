import React from "react";
import "../style/Gallery.css";

const Gallery = () => {
  const images = [
    { src: "/images/Gallery.gif", heading: "Creative Minds at Work", caption: "Team brainstorming session in action." },
    { src: "/images/Gallery1.gif", heading: "Achievement Unlocked!", caption: "Celebrating success together!" },
    { src: "/images/Gallery.gif", heading: "Work Hard, Play Hard", caption: "Office vibes: Where ideas come to life." },
    { src: "/images/Gallery1.gif", heading: "Chill Mode On", caption: "Casual Fridays be like... 😎" },
  ];

  return (
    <div className="gallery-container">
      {/* Top Video Section with Autoplay & Loop */}
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/videos/office-space.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className={`image-card ${index % 2 === 0 ? "row-reverse" : ""}`}>
            <img src={image.src} alt={`Gallery ${index + 1}`} className="fade-in" />
            <div className="text-content fade-in">
              <h3>{image.heading}</h3>
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
