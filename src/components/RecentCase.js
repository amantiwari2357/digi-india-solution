"use client";
import React from "react";
import "../style/RecentCase.css";

const caseStudies = [
  {
    id: 1,
    image: "/images/case1.png", 
    title: "Website Design for ?",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
  },
  {
    id: 2,
    image: "/images/case2.png", 
    title: "E-commerce Platform for ?",
    description:
      "A leading fashion brand needed a modern, responsive, and scalable e-commerce platform. Our solution included a seamless user interface, integrated payment gateways, and an efficient product management system, leading to a 35% increase in sales.",
  },
  {
    id: 3,
    image: "/images/case3.png", 
    title: "Mobile App for ?",
    description:
      "Developed a feature-rich mobile application for a food delivery startup. Implemented real-time tracking, personalized recommendations, and AI-driven order predictions, significantly enhancing user experience and retention.",
  },
  {
    id: 4,
    image: "/images/case4.png", 
    title: "Website Design for ?",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp, surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
  },
];

export default function RecentCase() {
  return (
    <section className="recent-case">
      <h2 className="section-title">
        Our recent <span>Case studies</span>
      </h2>
      <div className="case-container">
        {caseStudies.map((item, index) => (
          <div
            className="case-card"
            key={item.id}
            style={{
              backgroundColor:
                index % 3 === 0 ? "#EDEAFF" : index % 3 === 1 ? "#D6FFE8" : "#FDD7FF",
            }}
          >
            <img src={item.image} alt={item.title} className="case-image" />
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="read-more">
                Read more &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="read-more-container">
        <a href="#" className="read-more-link">
          Read more case studies &gt;
        </a>
      </div>
    </section>
  );
}
