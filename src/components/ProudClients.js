"use client";
import Image from "next/image";
import "../style/ProudClients.css";
const ProudClients = () => {
  return (
    <div className="container">
      <div className="header">Proud <span>Clients</span></div>
      {/* ✅ Marquee for scrolling logos */}
      <div className="logoSlider">
        <marquee className="logos" scrollamount="6">
          <div className="logo">
            <Image src="/images/1.png" alt="MOTIVINCI" width={100} height={50} />
          </div>
          <div className="logo">
            <Image src="/images/2.png" alt="FEDERICO MAHORA" width={100} height={50} />
          </div>
          <div className="logo">
            <Image src="/images/3.png" alt="PANDROMS" width={100} height={50} />
          </div>
          <div className="logo">
            <Image src="/images/4.png" alt="MOLÉKULAIRE" width={100} height={50} />
          </div>
          <div className="logo">
            <Image src="/images/5.png" alt="fraghill" width={100} height={50} />
          </div>
          <div className="logo">
            <Image src="/images/6.png" alt="TO YOU" width={100} height={50} />
          </div>
        </marquee>
      </div>
      <div className="stats">
        <div className="statBox">
          <h2>99%</h2>
          <h3>Project Success Rate</h3>
          <p>We have delivered 1000+ Design & 3D Models.</p>
        </div>
        <div className="statBox">
          <h2>96%</h2>
          <h3>Client Retention Rate</h3>
          <p>Almost every client comes back since we deliver quality & clarity at affordable prices.</p>
        </div>
        <div className="statBox">
          <h2>200%</h2>
          <h3>Increase Buyer Confidence</h3>
          <p>Customers have seen drastic growth when they run ads with our 3D Models.</p>
        </div>
      </div>
    </div>
  );
};

export default ProudClients;
