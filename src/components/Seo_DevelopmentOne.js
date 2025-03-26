// components/Website_DevelopmentOne.js
import Image from 'next/image';
import "../style/Website_DevelopmentOne.css";
export default function Website_DevelopmentOne() {
  return (
    <div className="webDevContainer">
      <h1 className="backgroundText">Seo Development</h1>
      {/* Scrolling Phone Animation */}
      <div className="scrollingPhone">
        <Image 
          src="/image/your-phone-image.png" 
          alt="Phone Display" 
          width={300} 
          height={600} 
          className="phoneImage" 
        />
      </div>
    </div>
  );
}
