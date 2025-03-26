"use client";
import React from "react";
import Image from "next/image";
import "../style/Services.css";

const MergedComponent = () => {
  return (
    <div>
      {/* Background Glassdoor Image Section */}
      <div className="main-container-background">
        <div className="background-container">
          <div className="background">
            {/* Left Side Images */}
            <div className="left">
              {[...Array(3)].map((_, index) => (
                <div className="card" key={index}>
                  <Image
                    src="https://iotainfotech.com/wp-content/uploads/2023/07/glasdoor.png"
                    alt="Glassdoor"
                    width={200}
                    height={100}
                  />
                </div>
              ))}
            </div>
            {/* Right Side Images */}
            <div className="right">
              {[...Array(3)].map((_, index) => (
                <div className="card" key={index}>
                  <Image
                    src="https://iotainfotech.com/wp-content/uploads/2023/07/glasdoor.png"
                    alt="Glassdoor"
                    width={200}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <section>
        <div className="top-container">
          <div className="heading">
            <h1>
              <span>Results</span> <br />
              Matching People’s Expectations
            </h1>
          </div>
          <div className="button">Request 1k+ case studies</div>
        </div>
      </section>
    </div>
  );
};

export default MergedComponent;
