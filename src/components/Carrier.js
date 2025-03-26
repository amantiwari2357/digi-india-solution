"use client";
import React, { useState } from "react";
import "../style/Carrier.css"; // Import CSS for styling

const jobs = [
  { id: 1, title: "Software Engineer", domain: "Development", experience: "Fresher", description: "Develop and maintain software applications." },
  { id: 2, title: "Frontend Developer", domain: "Development", experience: "Experienced", description: "Build user interfaces and improve frontend performance." },
  { id: 3, title: "Backend Developer", domain: "Development", experience: "Fresher", description: "Manage server-side logic and database interactions." },
  { id: 4, title: "UI/UX Designer", domain: "Design", experience: "Experienced", description: "Design user-friendly interfaces and improve user experience." },
  { id: 5, title: "Data Analyst", domain: "Analytics", experience: "Fresher", description: "Analyze data trends and provide insights for business growth." },
  { id: 6, title: "Figma Developer", domain: "Figma/Graphic", experience: "Experienced", description: "Develop and create a website architecture." },

];

const Carrier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Ensure form opens in popup only
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", jobRole: "", resume: null });
  const [message, setMessage] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? job.experience === filter : true)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleApply = (job) => {
    setFormData({ ...formData, jobRole: job.title });
    setShowPopup(true); // Open popup only on Apply Now click
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.jobRole || !formData.resume) {
      setMessage("⚠️ Please fill all fields before submitting.");
      return;
    }
    setMessage("✅ Application submitted successfully!");
    setTimeout(() => {
      setShowPopup(false);
      setMessage("");
      setFormData({ name: "", email: "", phone: "", jobRole: "", resume: null });
    }, 2000);
  };

  return (
    <div className="carrier-container">
      <h2>Job <span>Openings</span></h2>

      {/* Search & Filter */}
      <div className="filter-container">
        <input type="text" placeholder="Search job titles..." value={searchTerm} onChange={handleSearch} />
        <select onChange={handleFilter}>
          <option value="">All</option>
          <option value="Fresher">Fresher</option>
          <option value="Experienced">Experienced</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>Domain: {job.domain}</p>
              <p>Experience: {job.experience}</p>
              <button onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}>Read Description</button>
              <button onClick={() => handleApply(job)}>Apply Now</button>
              {selectedJob?.id === job.id && <p className="job-description">{selectedJob.description}</p>}
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>

      {/* Application Form Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setShowPopup(false)}>✖</span>
            <h2>Apply NOW</h2>
            {message && <p className="message">{message}</p>}

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

              <select name="jobRole" value={formData.jobRole} onChange={handleChange} required>
                <option value="">Select Job Role</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
              </select>

              <label htmlFor="resumeUpload">Upload Resume:</label>
              <input type="file" id="resumeUpload" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />

              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrier;
