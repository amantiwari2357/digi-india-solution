"use client";
import React from "react";
import "../style/Proof.css";

const Proof = () => {
  const data = [
    { value: "5X", text: "ROI on what client invested" },
    { value: "300%", text: "Claiming a minimum growth for any campaign" },
    { value: "300%", text: "Post reach on LinkedIn & 600+ requests in a day" },
    { value: "10K", text: "Registered User for a SAAS Brand in 4 months" },
    { value: "2M", text: "Units sold in 2 Years for Fashion Brand via Instagram" },
    { value: "70%", text: "Leads with Conversion in 2 quarters" },
    { value: "400%", text: "Revenue for a Lead Generation Campaign" },
    { value: "1M", text: "Subscribers on a YouTube Channel in 1 Year" },
    { value: "1.9M", text: "Reach on Instagram in 1 month" },
  ];

  return (
    <div className="proof-container">
      <div className="cta-section">
        <h1>Ready to kick off your<span>  growth journey? 🚀</span> </h1>
        <button className="cta-button">CONTACT NOW</button>
      </div>
      <div className="proof-section">
        <h2 className="proof-heading">Proof of <span>Concept</span></h2>
        <div className="grid-container">
          {data.map((item, index) => (
            <div key={index} className="grid-item">
              <h3>{item.value}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proof;
