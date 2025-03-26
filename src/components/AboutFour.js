import React from "react";
import "../style/AboutFour.css";

const Gallery = () => {
  const images = [
    { src: "/images/deepak.png", heading: "Senior Manager!", caption: "📊Leading with vision, inspiring with action—every strategy starts with a great brainstorm!" },
    { src: "/images/akash.png", heading: "Founder!", caption: "🎉 Turning dreams into milestones—every success begins with a bold idea!" },
    { src: "/images/shubham.png", heading: "CEO!", caption: "💡Where leadership meets innovation—shaping ideas into reality every day!" },
    // { src: "/images/Gallery1.gif", heading: "Chill Mode On", caption: "Casual Fridays be like... 😎" },
  ];
  return (
    <div className="gallery-container">
       <h1 className="main-heading">Meet Our Company Holders</h1>
      <div className="video-container">
        {/* <video autoPlay loop muted playsInline> */}
          {/* <source src="/videos/office-space.mp4" type="video/mp4" /> */}
          {/* Your browser does not support the video tag. */}
        {/* </video> */}
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className={`image-card ${index % 2 === 0 ? "row-reverse" : ""}`}>
            <img src={image.src} alt={`Gallery ${index + 1}`} className="fade-in" />
            <div className="text-content fade-in">
              <h3>{image.heading}</h3>
              <p>{image.caption}</p>
              <button className="view-more-button">Meet Our Team</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
