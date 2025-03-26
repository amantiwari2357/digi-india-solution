import Marquee from "react-fast-marquee";
import Image from "next/image";
import "../style/MarqueeImages.css"; // Importing separate CSS file

const images = [
  "https://iotainfotech.com/wp-content/uploads/2023/04/Group-36.png",
  "https://iotainfotech.com/wp-content/uploads/2021/11/upwork.png",
  "https://iotainfotech.com/wp-content/uploads/2023/05/tiecon.png",
  "https://iotainfotech.com/wp-content/uploads/2023/04/Group-36.png",
  "https://iotainfotech.com/wp-content/uploads/2021/11/upwork.png",
  "https://iotainfotech.com/wp-content/uploads/2023/05/tiecon.png",
  "https://iotainfotech.com/wp-content/uploads/2023/04/Group-36.png",
  "https://iotainfotech.com/wp-content/uploads/2021/11/upwork.png",
  "https://iotainfotech.com/wp-content/uploads/2023/05/tiecon.png",
];

const MarqueeImages = () => {
  return (
    <div className="marquee-container">
      <Marquee speed={50} pauseOnHover={true} gradient={true}>
        {images.map((src, index) => (
          <div key={index} className="marquee-item">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={150}
              height={100}
              className="marquee-image"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeImages;
