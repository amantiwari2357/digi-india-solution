// OverviewPage.js
import React from 'react';
import "../style/AboutTwo.css";

const OverviewPage = () => {
  return (
    <div className="overview-container p-10 bg-black text-white flex flex-col items-center justify-center">
    {/* Centered Heading */}
    <h1 className="Overview_aman">OUR REVENUE AND SERVICES</h1>

    {/* Paragraphs Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
      {/* Left-Aligned Paragraph */}
      <p className="text-lg mb-4 text-left md:w-1/2">
        {/* Digi India Solution is a global leader in next-generation digital services and consulting. We enable clients in more than 55 countries to navigate their digital transformation. */}
      </p>

   {/* Right-Aligned Paragraph */}
   <p className="text-lg mb-4 text-right md:w-1/2">
          {/* With over four decades of experience managing systems and global enterprises, we expertly guide clients across 2 countries through their digital transformation, powered by cloud and AI. Our commitment lies in creating a sustainable, inclusive workspace where diverse talents thrive. */}
        </p>
  </div>
{/* </div> */}


      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-card">
          <h2 className="stat-number">2+</h2>
          <p className="stat-label">Years of Service</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">1M</h2>
          <p className="stat-label">Total Revenue</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">2+</h2>
          <p className="stat-label">Countries We Operate In</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">50+</h2>
          <p className="stat-label">Employees</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">200+</h2>
          <p className="stat-label">Trusting Clients</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number">100%</h2>
          <p className="stat-label">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
