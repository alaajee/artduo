import './App.css';
import './AboutUs.css';
import TeamMember from './TeamMember';
import picture from './logo_no_bg.png';
import picture1 from './pic.jpeg';
import { useState } from 'react';

function AboutUs() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const teamMembers = [
    {
      name: "Racha Bentahar",
      title: "Ceramic artist & clay enthusiast",
      image: picture1 // Replace with actual image
    },
    {
      name: "Safae El Ouahabi",
      title: "Painter and visual artist",
      image: picture1 // Replace with actual image
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />

        <a href='/' className="App-link"> HOME </a>
        <a href='/aboutus' className="App-link"> ABOUT US </a>
        
        <div 
          className="services-dropdown-container"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <a href='/services' className="App-link services-link">
            SERVICES
            <span className="dropdown-arrow">▼</span>
          </a>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              <a href="/services#workshops" className="dropdown-item">WORKSHOPS</a>
              <a href="/services#teambuilding" className="dropdown-item">TEAM BUILDING</a>
              <a href="/services#privateevents" className="dropdown-item">PRIVATE EVENTS</a>
            </div>
          )}
        </div>

        <a href='/artstore' className="App-link"> ART STORE </a>
        <a href='/contact' className="App-link"> CONTACT US </a>
      </header>

      <div className="About-us-section">
        <h1 className="about-us-title">About Us</h1>
        
        <div className="mission-statement">
          <p className="mission-text">
            We started this journey with one belief: <strong>Art has the power to heal, reconnect, and bring joy.</strong>
          </p>
          <p className="mission-text">
            We invite you to slow down, explore, and reconnect with yourself, with others, and with nature. 
            Whether you're painting, shaping clay, or simply enjoying the moment — You're in the right place.
          </p>
          <p className="mission-closing">
            Welcome to the duo. <br />
            Welcome to the experience.
          </p>
        </div>

        <h2 className="team-section-title">Meet Our Artists</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;