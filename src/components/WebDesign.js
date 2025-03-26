"use client";
import React, { useState, useEffect, useRef } from "react";
import "../style/WebDesign.css";

const WebDesign = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState("all");
  const portfolioItemsRef = useRef([]);

  const [portfolioItems, setPortfolioItems] = useState([
    {
      link: "https://www.example.com/pixie-m",
      image: "/images/pixie-m.jpg",
      hoverImage: "/images/pixiemarket-banner-right.jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
    {
      link: "https://www.example.com/norstorm-banner.jpg",
      image: "/images/norstorm-banner-right.jpg",
      hoverImage: "/images/newitem1-hover.jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
    {
      link: "https://www.example.com/pixie-m",
      image: "/images/adorne-banner.jpg",
      hoverImage: "/images/luxe-banner-right.jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
    {
      link: "https://www.example.com/velvetcase",
      image: "/images/shopmcmullen-banner.jpg",
      hoverImage: "/images/shopmcmullen-banner-right.jpg",
      title: "VELVETCASE",
      description: "A corporate portal for unique gold & diamond jewellery online.",
      industry: "jewellery",
    },
    {
      link: "https://www.example.com/pixie-m",
      image: "/images/annuttama-banner-right.jpg",
      hoverImage: "/images/annuttama-banner-right.jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
    {
      link: "https://www.example.com/pixie-m",
      image: "/images/revolve-banner-right.jpg",
      hoverImage: "/images/revolve-banner-right.jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
    {
      link: "https://www.example.com/pixie-m",
      image: "/images/wholesale-banner.jpg",
      hoverImage: "/images/wholesale-banner-right.jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
    {
      link: "https://www.example.com/pixie-m",
      image: "/images/ramit-batra-banner.jpg",
      hoverImage: "/images/ramit-batra-banner-right (2).jpg",
      title: "PIXIE M",
      description: "A corporate portal for latest design and fashion.",
      industry: "fashion",
    },
  ]);

  const filteredPortfolioItems =
    filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.industry === filter);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handlePortfolioItemClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="webdesign-container">
      <div className="cursor-circle" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
     <section className="hero">
        <div className="heading_items">EXPLORE<span> OUR WORK</span></div>
      </section>
      <section className="filter_main">
        <div className="por_filter">
          <div className="fi">Filter By Industry</div>
          <div className="activate_submenu">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="fashion">Fashion</option>
              <option value="jewellery">Jewellery</option>
              <option value="ecommerce">E-Commerce</option>
            </select>
          </div>
        </div>
      </section>

      <section className="projects-portfolio portfolio_inner">
        {filteredPortfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item" onClick={() => handlePortfolioItemClick(item.link)}>
            <div className="image-container">
              <img src={item.image} alt={item.title} className="main-image" />
              <img src={item.hoverImage} alt="Additional" className="hover-image" />
            </div>
            <div className="description">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="cta">
        {/* CTA content */}
      </section>
    </div>
  );
};

export default WebDesign;
