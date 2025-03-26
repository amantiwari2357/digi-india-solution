"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/TextAni.css";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  useEffect(() => {
    gsap.to(".portfolio-text", {
      opacity: 1,
      scale: 1.5,
      y: -100,
      rotationX: 30,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top center",
        end: "top 100px",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="animation-container">
      <section className="portfolio-section">
        <h1 className="portfolio-text">Port<span>Folio</span></h1>
      </section>
    </div>
  );
};

export default TextAnimation;
