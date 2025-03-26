import React from "react";
import "../style/AboutFive.css";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa"; // Using react-icons for icons

const MissionPage = () => {
  return (
    <div className="mission-page-container">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1 className="main-heading">About Digi India Solution</h1>
        <p className="intro-text">
          At Digi India Solution, we are a team of creative minds dedicated to crafting the best apps and websites in the world. Our passion for innovation drives us to push the boundaries of digital design and development, ensuring that each project we undertake is not only visually stunning but also functionally exceptional.
        </p>
        <p className="intro-text">
          With a commitment to excellence and a focus on delivering outstanding results, we bring your digital dreams to life with precision and creativity.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <FaEye className="icon" />
        <h2 className="section-heading">Our Vision</h2>
        <p className="section-text">
          At Digi India Solutions, our vision extends far beyond the pixelated landscape of the digital world. We dream of empowering businesses, not merely marketing them. We envision a future where our clients stand tall as bastions of success, their growth fueled by our expertise and unwavering commitment.
        </p>
        <p className="section-text">
          Harmonious partnerships are the cornerstone of our success. We believe open communication, collaborative efforts, and dedication to our clients' objectives are key to maximizing their digital footprint. Our ultimate goal is to deliver lasting results that transcend fleeting trends.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <FaBullseye className="icon" />
        <h2 className="section-heading">Our Mission</h2>
        <p className="section-text">
          Our main focus is coordinating with our clients to achieve outstanding results by aligning our goals with theirs. Helping our clients engage with their target market, establish meaningful connections, and convert users into loyal clients is what we do best.
        </p>
        <p className="section-text">
          We provide comprehensive solutions and insightful strategies for sustained growth, both locally and globally. Our mission blends creativity and expertise to craft innovative digital marketing strategies, helping businesses stay ahead of rapidly changing digital trends.
        </p>
      </section>
    </div>
  );
};

export default MissionPage;
