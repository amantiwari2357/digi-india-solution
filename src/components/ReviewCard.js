import React from "react";
import "../style/ReviewsSection.css";

const ReviewCard = ({ image, platform, stars, link }) => {
  return (
    <div className="text-1">
      <img src={image} alt={platform} className="review-image" />
      <h3 className="text-bold">{platform}</h3>
      <p>{"⭐".repeat(stars)}</p>
      <a href={link} target="_blank" className="yello-text">
        Visit
      </a>
    </div>
  );
};

export default ReviewCard;
