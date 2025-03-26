// components/Website_DevelopmentOne.js
"use client";
import Image from 'next/image';
import "../style/Website_DevelopmentOne.css";
export default function Website_DevelopmentOne() {
  return (
    <div className="webDevContainer">
      <h1 className="backgroundText">Web Development</h1>
      <div className="scrollingPhone">
        <Image 
          src="/images/Web_Image_One.png" 
          alt="Phone Display" 
          width={300} 
          height={600} 
          className="phoneImage" 
        />
      </div>
    </div>
  );
}
