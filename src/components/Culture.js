"use client";
import "../style/Culture.css"; // Ensure correct path
import Image from "next/image";

const Culture = () => {
  return (
    <section className="culture-section">
      <div className="culture-container">
      {/* <h1 className="culture-mainHeading">Where Cool Meets Culture</h1> */}
        {/* Left Side - Video */}
        <div className="culture-videoWrapper">
          <video className="culture-officeVideo" autoPlay loop muted playsInline>
            <source src="/videos/office-space.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="culture-overlayText"></div>
        </div>

        {/* Right Side - Content */}
        <div className="culture-content">
            {/* <h1 className="heading-culture">Cool Culture</h1> */}
          <h2>
            Be a part of <br />
            <span className="culture-highlight">An Award-Winning</span> workplace.
          </h2>

          <div className="culture-banner">
            Life at Digi India - A Creative Agency is Never Dull
          </div>

          <div className="culture-features">
            <div className="culture-featureItem">
              <Image src="/images/culture1.png" alt="Human Friendly" width={50} height={50} />
              <p>Human Friendly</p>
            </div>
            <div className="culture-featureItem">
              <Image src="/images/culture1.png" alt="Pet Friendly" width={50} height={50} />
              <p>Pet Friendly</p>
            </div>
            <div className="culture-featureItem">
              <Image src="/images/culture1.png" alt="Food Friendly" width={50} height={50} />
              <p>Food Friendly</p>
            </div>
            <div className="culture-featureItem">
              <Image src="/images/culture1.png" alt="Wellbeing Friendly" width={50} height={50} />
              <p>Wellbeing Friendly</p>
            </div>
            <div className="culture-featureItem">
              <Image src="/images/culture1.png" alt="Flexible Work Shifts" width={50} height={50} />
              <p>Flexible Work Shifts</p>
            </div>
            <div className="culture-featureItem">
              <Image src="/images/culture1.png" alt="Fun Fridays" width={50} height={50} />
              <p>Fun Fridays</p>
            </div>
          </div>

          <button className="culture-joinButton">DIGI INDIA →</button>
        </div>
      </div>
    </section>
  );
};

export default Culture;
