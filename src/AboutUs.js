import './App.css';
import './AboutUs.css';
import Navbar from './Navbar';
import TeamMember from './TeamMember';
import picture1 from './racha.jpg';
import picture2 from './safae.jpg';

function AboutUs() {
  const teamMembers = [
    {
      name: "Racha Bentahar",
      title: "Ceramic artist & clay enthusiast",
      image: picture1
    },
    {
      name: "Safae El Ouahabi",
      title: "Painter and visual artist",
      image: picture2
    }
  ];

  return (
    <div className="App">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <span className="section-tag">Our Story</span>
          <h1 className="about-hero__title">About Us</h1>
          <div className="about-hero__line" />
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-mission">
        <div className="about-mission__inner">
          <p className="about-mission__lead">
            We started this journey with one belief:
          </p>
          <blockquote className="about-mission__quote">
            Art has the power to heal,<br />reconnect, and bring joy.
          </blockquote>
          <div className="about-mission__body">
            <p>
              We invite you to slow down, explore, and reconnect — with yourself, with others, and with nature.
              Whether you're painting, shaping clay, or simply enjoying the moment, you're in the right place.
            </p>
            <p className="about-mission__closing">
              Welcome to the duo.<br />Welcome to the experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-team">
        <div className="about-team__header">
          <span className="section-tag">The Duo</span>
          <h2 className="section-title">Meet Our Artists</h2>
        </div>
        <div className="about-team__grid">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="footer-cta">
        <p className="footer-cta-sub">Come create with us</p>
        <h2 className="footer-cta-title">See Our Workshops</h2>
        <a href="/services" className="footer-cta-btn">Discover →</a>
      </section>
    </div>
  );
}

export default AboutUs;