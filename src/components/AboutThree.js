// AboutUs.js
"use client";
import React from 'react';
import "../style/AboutThree.css";

const AboutUs = () => {
  const infoCards = [
    {
      title: "History",
      description: "Established in 2023, Digi India Solution is a IT services company.",
    },
    {
      title: "Subsidiaries",
      description: "Digi India has made strategic investments in different domains. The company has established 1 subsidiaries across the globe.",
    },
    {
      title: "Management",
      description: "View profiles of top Executives and Members of the Digi India Board Board.",
    },
    {
      title: "Alliances",
      description: "Our network of alliance and teaming relationships creates business value, reduces implementation risk and accelerates go-to-market.",
    },
    {
      title: "Corporate Governance",
      description: "At Digi India Solution, corporate governance ensures fairness for every stakeholder—customers, investors, vendor-partners, and governments.",
    },
    {
      title: "Investor Relations",
      description: "News, events, investor calendar, presentations, and analyst coverage for our investors.",
    },
  ];

  return (
    <div className="about_aman">
      <h1 className="Title_aman">About <span>Us</span></h1>
      <div className="cards_grid_aman">
        {infoCards.map((card, index) => (
          <div key={index} className="info-card_aman">
            <h2 className="card-title_aman">{card.title}</h2>
            <div className="highlight-aman"></div>
            <p className="description_aman">{card.description}</p>
            <a href="#" className="read-more_aman">READ MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
