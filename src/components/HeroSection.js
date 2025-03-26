"use client";
import React, { useState, useEffect, useRef } from "react";
import "../style/HeroSection.css";

const HomeSection = () => {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const [doorsOpen, setDoorsOpen] = useState(false);
    const [textAnimation, setTextAnimation] = useState(false);
    const bannerRef = useRef(null);

    const boxData = [
        { id: 1, image: "/images/web-design.jpg", content: "" },
        { id: 2, image: "/images/ecommerce.jpg", content: "" },
        { id: 3, image: "/images/seo.jpg", content: "" },
        { id: 4, image: "/images/branding.jpg", content: "" },
    ];

    // 🔹 Circle content ko first box ka content default value dena
    const [circleContent, setCircleContent] = useState(boxData[0].content);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOverlayVisible(false);
            setDoorsOpen(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (bannerRef.current) {
            bannerRef.current.classList.add("banner-animation");
        }
    }, []);

    const handleBoxClick = (content) => {
        setTextAnimation(false);
        setTimeout(() => {
            setCircleContent(content);
            setTextAnimation(true);
        }, 100);
    };

    return (
        <div className="home_banner">
            {overlayVisible && (
                <div className="overlay">
                    <div className={`left-panel ${doorsOpen ? "open" : ""}`}></div>
                    <div className={`right-panel ${doorsOpen ? "open" : ""}`}></div>
                </div>
            )}
            <div className="banner-container" ref={bannerRef}>
                <div className="banner-bg"></div>

                <div className="left-content">
                    <h1 className="fade-in">
                        INDIA'S TOP WEBSITE <br /> <span>DESIGN COMPANY</span>
                    </h1>
                    <h2 className="fade-in">Since 2023</h2>
                    <button className="work-btn" onClick={() => (window.location.href = "/Contact")}>
                        Work With Us
                    </button>
                    <div className="scroll-down">
                        Scroll Down <span className="arrow">↓</span>
                    </div>
                </div>

                <div className="right-content">
                    <div className="circle">
                        <p className={`animated-text ${textAnimation ? "show" : ""}`}>{circleContent}</p>
                        <button className="view-more-btn" onClick={() => (window.location.href = "/services")}>
                            View More
                        </button>
                    </div>
                    <div className="boxes">
                        {boxData.map((box) => (
                            <div
                                key={box.id}
                                className="box"
                                style={{ backgroundImage: `url(${box.image})` }}
                                onClick={() => handleBoxClick(box.content)}
                            >
                                <span className="box-title">{box.content}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
