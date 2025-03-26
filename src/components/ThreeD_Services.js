"use client";
import React from "react";
import "../style/3D_services.css";

const ThreeDServices = () => {
  return (
    <>
      <section className="threeD-container">
        <div className="threeD-content">
          <h2>Product visualizations with <span>3D modeling services</span></h2>
          <p>
            Infuse unparalleled realism with 3D visualization where we comprehensively 
            boost your business capabilities.
          </p>
        </div>
        <div className="threeD-video">
          <video className="threeD-media" autoPlay loop muted playsInline>
            <source src="/videos/3d-recliner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default ThreeDServices;
