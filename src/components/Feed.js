"use client";
import React from 'react';
import '@/style/Feed.css';

const Feed = () => {
  return (
    <div className="mobile-feeds">
      <div className="social-media">
        <div>
          <span>Our Revamped</span>
          <br />
          Social Feeds
        </div>
      </div>
      <div className="feeds">
        <div className="card">
          <video
            className="elementor-video snipcss0-1-1-2"
            src="https://iotainfotech.com/wp-content/uploads/2023/07/Dribble-.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          ></video>
        </div>
        <div className="card">
          <video
            className="elementor-video snipcss0-1-1-2"
            src="https://iotainfotech.com/wp-content/uploads/2023/07/Insta-.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          ></video>
        </div>
        <div className="card">
          <video
            className="elementor-video snipcss0-1-1-2"
            src="https://iotainfotech.com/wp-content/uploads/2023/07/linkedin-.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          ></video>
        </div>
        <div className="card">
          <video
            className="elementor-video snipcss0-1-1-2"
            src="https://iotainfotech.com/wp-content/uploads/2023/07/behance-.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Feed;
