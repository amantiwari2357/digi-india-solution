"use client";
import { useState } from "react";
import Image from "next/image";
import "../style/casestudies.css";

const categories = [
  "UI/UX Coding",
  "Growth Marketing",
  "Graphic Designing",
  "Social Media",
  "3D Animation",
];

const caseStudies = [
  // UI/UX Coding - 4 Cases
  {
    before: "/images/before1.png",
    after: "/images/after1.png",
    category: "UI/UX Coding",
  },
  {
    before: "/images/before1.png",
    after: "/images/after1.png",
    category: "UI/UX Coding",
  },
  
  {
    before: "/images/before1.png",
    after: "/images/after1.png",
    category: "UI/UX Coding",
  },

  // Growth Marketing - 4 Cases
  
  {
    before: "/images/before2.png",
    after: "/images/after2.png",
    category: "Growth Marketing",
  },
  {
    before: "/images/before2.png",
    after: "/images/after2.png",
    category: "Growth Marketing",
  },
  {
    before: "/images/before2.png",
    after: "/images/after2.png",
    category: "Growth Marketing",
  },

  // Graphic Designing - 4 Cases
  
  {
    before: "/images/before3.png",
    after: "/images/after3.png",
    category: "Graphic Designing",
  },
  {
    before: "/images/before3.png",
    after: "/images/after3.png",
    category: "Graphic Designing",
  },
  {
    before: "/images/before3.png",
    after: "/images/after3.png",
    category: "Graphic Designing",
  },

  // Social Media - 4 Cases
  
  {
    before: "/images/before4.png",
    after: "/images/after4.png",
    category: "Social Media",
  },
  {
    before: "/images/before4.png",
    after: "/images/after4.png",
    category: "Social Media",
  },
  
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  // Filter case studies based on activeTab
  const filteredCaseStudies = caseStudies.filter((study) => study.category === activeTab);

  return (
    <section className="case-studies">
      <h2 className="title">
        Our cherished <span>Case Studies</span>
      </h2>

      {/* Category Tabs */}
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={activeTab === category ? "active" : ""}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid-container">
        {filteredCaseStudies.length > 0 ? (
          filteredCaseStudies.map((study, index) => (
            <div className="case-card" key={index}>
              <div className="image-container">
                <Image
                  src={study.before}
                  alt="Before"
                  width={300}
                  height={200}
                  className="before"
                />
                <div className="divider"></div>
                <Image
                  src={study.after}
                  alt="After"
                  width={300}
                  height={200}
                  className="after"
                />
              </div>
              <p className="label">BEFORE</p>
              <p className="label">AFTER</p>
            </div>
          ))
        ) : (
          <p>No case studies found.</p>
        )}
      </div>

      <button className="request-btn">REQUEST 1K+ CASE STUDIES →</button>
    </section>
  );
}
