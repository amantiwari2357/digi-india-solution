"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/Design.css";

const HomePage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".title",  {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
     scrollTrigger: {
      trigger: ".title",
      start: "top 80%",
      toggleActions: "play none none none",
     },
    });
    gsap.from(".title span", {
      y: -50, 
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".title span",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".subtitle", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".subtitle",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const processSteps = [
    {
      title: "Discovery Expedition",
      description: "We start with understanding your brand, goals, and target audience.",
    },
  
    {
      title: "Design & Development",
      description: "Crafting the essence of your brand while captivating your audience.",
    },
    {
      title: "Feedback & Revisions",
      description: "Present our designs for feedback to refine and enhance the final product.",
    },
    {
      title: "Finalization & Delivery",
      description: "Finishing touches and sending it out into the world.",
    },
  ];

  const stepsPerRow = 5;

  return (
    <div className="container">
      <div className="hero">
        <h1 className="title">The Digi <span>India Design</span></h1>
        <p className="subtitle">From Conception to Creation</p>
      </div>

      <div className="process">
        {processSteps.map((step, index) => {
          const row = Math.floor(index / stepsPerRow);
          return (
            <React.Fragment key={index}>
              {index % stepsPerRow === 0 && row > 0 && <div className="row-break"></div>}
              <div className="process-item">
                <h2 className="process-title">{step.title}</h2>
                <p className="process-description">{step.description}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="cta">
        <button className="cta-button" onClick={() => (window.location.href="/services")}>IMPRESSED? GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default HomePage;
