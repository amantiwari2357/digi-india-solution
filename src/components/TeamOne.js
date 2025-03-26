// TeamOne.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "../style/TeamOne.css";

const educators = [
  {
    category: 'Frontend Developer',
    languageSections: [
      {
        language: 'React.js',
        name: 'Name',
        image: 'https://media.licdn.com/dms/image/v2/D5635AQF4Ub2Zf77L9A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736431677839?e=1740762000&v=beta&t=wwRMeJVPENTJfPXHHKOc0t-o6pcT798e_93PhmIsyo4',
        github: 'https://github.com/pranchal',
        linkedin: 'https://linkedin.com/in/pranchal'
      },
      {
        language: 'Next.js',
        name: 'Aman Tiwari',
        image: 'https://media.licdn.com/dms/image/v2/D5635AQF4Ub2Zf77L9A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736431677839?e=1740762000&v=beta&t=wwRMeJVPENTJfPXHHKOc0t-o6pcT798e_93PhmIsyo4',
        github: 'https://github.com/projectaman2357',
        linkedin: 'https://www.linkedin.com/in/aman-tiwari-91b869225/'
      },
      {
        language: 'Php',
        name: 'Name',
        image: 'https://media.licdn.com/dms/image/v2/D5635AQF4Ub2Zf77L9A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736431677839?e=1740762000&v=beta&t=wwRMeJVPENTJfPXHHKOc0t-o6pcT798e_93PhmIsyo4',
        github: '#',
        linkedin: '#'
      },
    ]
  },
  {
    category: 'Backend Developer',
    languageSections: [
      {
        language: 'Node.js',
        name: 'Name',
        image: 'https://media.licdn.com/dms/image/v2/D5635AQF4Ub2Zf77L9A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736431677839?e=1740762000&v=beta&t=wwRMeJVPENTJfPXHHKOc0t-o6pcT798e_93PhmIsyo4',
        github: 'https://github.com/projectaman2357',
        linkedin: 'https://www.linkedin.com/in/aman-tiwari-91b869225/'
      },
      {
        language: 'Java',
        name: 'Name',
        image: 'https://media.licdn.com/dms/image/v2/D5635AQF4Ub2Zf77L9A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736431677839?e=1740762000&v=beta&t=wwRMeJVPENTJfPXHHKOc0t-o6pcT798e_93PhmIsyo4',
        github: 'https://github.com/nitin',
        linkedin: 'https://linkedin.com/in/nitin'
      },
      {
        language: 'Php',
        name: 'Name',
        image: 'https://media.licdn.com/dms/image/v2/D5635AQF4Ub2Zf77L9A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736431677839?e=1740762000&v=beta&t=wwRMeJVPENTJfPXHHKOc0t-o6pcT798e_93PhmIsyo4',
        github: 'https://github.com/projectaman2357',
        linkedin: 'https://www.linkedin.com/in/aman-tiwari-91b869225/'
      },
      
      
      
    ]
    
  }
];

const TeamOne = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Introducing Our Top Employees</h1>
      <p className="team-description">
        Meet our esteemed team members! Discover their expertise and unlock your full potential with transformative working experiences.
      </p>
      {educators.map((section, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{section.category}</h2>
          <div className="educator-grid">
            {section.languageSections.map((educator, idx) => (
              <div key={idx} className="educator-card">
                <p className="language">{educator.language}</p>
                <img src={educator.image} alt={educator.name} className="educator-image" />
                <h3 className="educator-name">{educator.name}</h3>
                <div className="social-links">
                  <a href={educator.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a>
                  <a href={educator.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamOne;
