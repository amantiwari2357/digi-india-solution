"use client";
import React, { useState, useEffect } from "react";
import "../style/ContactForm.css";

const images = [
  { src: "/images/contact_background1.jpg", text: "We create stunning web experiences" },
  { src: "/images/contact_background1.jpg", text: "Contact us for better results" },
  { src: "/images/contact_background2.jpg", text: "Your vision, our innovation" },
  { src: "/images/contact_background3.jpg", text: "Turning ideas into reality" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    website: "",
    source: "",
    budget: "",
    country: "",
    state: "",
    designation: "",
    vision: "",
  });

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="contact-form-container">
      <div className="left-section" style={{ backgroundImage: `url(${images[currentImage].src})` }}>
        <h2>99% Project Success Rate</h2>
        <p>{images[currentImage].text}</p>
        <button className="contact-btn">Contact Us</button>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <select name="source" value={formData.source} onChange={handleChange}>
              <option value="">How did you get to know about us?*</option>
              <option value="google">Google</option>
              <option value="social-media">Social Media</option>
              <option value="referral">Referral</option>
            </select>
            <select name="budget" value={formData.budget} onChange={handleChange}>
              <option value="">What's your budget?*</option>
              <option value="low">Less than $1000</option>
              <option value="medium">$1000 - $5000</option>
              <option value="high">More than $5000</option>
            </select>
          </div>
          <div className="form-group">
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
              <option value="australia">Australia</option>
              <option value="pakistan">Pakistan</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="nigeria">Nigeria</option>
            </select>
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              <option value="delhi">Delhi</option>
              <option value="up">Uttar Pradesh</option>
              <option value="bihar">Bihar</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="odisha">Odisha</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="westbengal">West Bengal</option>
              <option value="goa">Goa</option>
              <option value="karnataka">Karnataka</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="kerala">Kerala</option>
              <option value="tamilnadu">Tamil Nadu</option>
            </select>
          </div>
          <input
            type="text"
            className="designation-profile"
            name="designation"
            placeholder="Your Designation/Profile "
            required
            value={formData.designation}
            onChange={handleChange}
          />
          <textarea
            name="vision"
            placeholder="Your vision for your brand"
            required
            value={formData.vision}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
