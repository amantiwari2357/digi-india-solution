"use client";
import React from "react";
import "../style/Feature.css";

const Feature = () => {
  const resources = [
    {
      id: 1,
      image: "/images/resource1.png",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "#",
    },
    {
      id: 1,
      image: "/images/resource1.png",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "#",
    },
    {
      id: 1,
      image: "/images/resource1.png",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "#",
    },
    {
      id: 2,
      image: "/images/resource2.png",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "#",
    },
    {
      id: 3,
      image: "/images/resource3.png",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "#",
    },
    {
      id: 4,
      image: "/images/resource4.png",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      link: "#",
    },
  ];

  return (
    <div className="feature-container">
      <h2 className="feature-title">
        Featured <span>Resources</span>
      </h2>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <img src={resource.image} alt={resource.title} />
            <h3>{resource.title}</h3>
            <a href={resource.link} className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
      <div className="hire-developers">
        <h3>Hire The Best Developers and<span>Designers Around!</span></h3>
        <button className="hire-button">Hire Top Developers</button>
      </div>
    </div>
  );
};

export default Feature;
