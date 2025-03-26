"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import "../style/ReviewsSection.css";

const reviews = [
  {
    image: "https://iotainfotech.com/wp-content/uploads/2023/07/good-firms-744x1024.png",
    platform: "GoodFirms",
    stars: 5,
    link: "https://www.goodfirms.com",
  },
  {
    image: "https://iotainfotech.com/wp-content/uploads/2023/07/upwork-744x1024.png",
    platform: "Upwork",
    stars: 5,
    link: "https://www.upwork.com",
  },
  {
    image: "https://iotainfotech.com/wp-content/uploads/2023/07/clutch-744x1024.png",
    platform: "Clutch",
    stars: 5,
    link: "https://www.clutch.co",
  },
  {
    image: "https://iotainfotech.com/wp-content/uploads/2023/07/glasdoor-744x1024.png",
    platform: "Glassdoor",
    stars: 5,
    link: "https://www.glassdoor.com",
  },
  {
    image: "https://iotainfotech.com/wp-content/uploads/2023/07/Ambitionbox-744x1024.png",
    platform: "AmbitionBox",
    stars: 5,
    link: "https://www.ambitionbox.com",
  },
];

const ReviewsSection = () => {
  return (
    <section className="Heading-review">
      <h2 className="h2-sub-heading">
        Reviews That<span>  Tell Stories</span>
      </h2>

      <div className="review-image-main">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
