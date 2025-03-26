"use client";
import Image from "next/image";
import "../style/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-bg"></div>
        <div className="social-icons">
          <Image src="/images/facebook-black.webp" width={50} height={50} alt="Facebook" />
          <Image src="/images/instagram-black.webp" width={40} height={40} alt="Instagram" />
          <Image src="/images/linkedin-black.webp" width={40} height={40} alt="LinkedIn" />
          <Image src="/images/twitter-black.webp" width={40} height={40} alt="Twitter" />
          <Image src="/images/behance-black.webp" width={40} height={40} alt="Behance" />
          <Image src="/images/Reddit-logo-black.webp" width={40} height={40} alt="Reddit" />
          <Image src="/images/dribbble-black.webp" width={40} height={40} alt="Dribbble" />
        </div>

        <div className="footer-content">
          <div>
            <h3>Our Offices</h3>
            <p>India</p>
            <p>Delhi</p>
            <p>Rithala, BankRoad</p>
          </div>
          <div>
            <h3>News Feed</h3>
            <p>In the Media</p>
            <p>Blogs and News</p>
            <p>Vlogs & Reels</p>
          </div>
          <div>
            <h3>Legal Terms</h3>
            <p>Terms & Conditions</p>
            <p>Copy Content Policy*</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3>Useful Links</h3>
            <p>Humans of Digi India Solution</p>
            <p>Join Digi Indis Solution as Intern</p>
            <p>Become a Part of Team</p>
          </div>
        </div>

        <div className="marquee-container">
          <p className="marquee-text">
            Welcome to DIGI INDIA SOLUTION 🚀 | Your Tech Partner 🔥 | Innovation & Excellence 💡 | Let's Build the Future Together! 🌍
          </p>
        </div>

        <div className="footer-bottom">
          <p>© 2025 DIGI INDIA SOLUTION. All Rights Reserved</p>
          <p>
            For background verification queries, contact,
            <span>amankumartiwari5255@gmil.com</span>
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ⬆
        </button>
      </footer>
    </>
  );
};

export default Footer;
