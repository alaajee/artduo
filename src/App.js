import './App.css';
import Testimonial from './Testimonial';
import picture from './logo_no_bg.png';
import picture1 from './pic.jpeg';
import { useState } from 'react';
import NavBar from './NavBar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Reese Miller",
      rating: 5,
      text: "I hadn't touched a paintbrush in years, but the atmosphere was so relaxing that it felt easy and fun. Such a beautiful way to spend a day outdoors"
    },
    {
      name: "Samira Hadid",
      rating: 5,
      text: "Even though I am not experienced in painting, I really enjoyed it. The team made it simple, and I left with a painting I was proud of."
    },
    {
      name: "Richard Sanchez",
      rating: 5,
      text: "I joined just for the experience,not expecting much because I hadn't painted in a long time. But I loved every moment — it was inspiring and refreshing!"
    },
    {
      name: "Pedro Fernandes",
      rating: 5,
      text: "The workshop was exactly what I needed to disconnect. Even without painting skills, I felt guided, comfortable, and creative again"
    },
    {
      name: "Juliana Silva",
      rating: 5,
      text: "it's been years since I painted, but this outdoor session gave me so much joy. Great vibes, great people, and a unique way to enjoy the city."
    },
    {
      name: "Rufus Stewart",
      rating: 5,
      text: "I was nervous at first, but the experience was beyond amazing. You don't need to be an artist to have fun — I left relaxed and happy with my artwork."
    }
  ];

  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />

  
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>

  
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href='/' className="App-link" onClick={() => setMenuOpen(false)}> HOME </a>
          <a href='/aboutus' className="App-link" onClick={() => setMenuOpen(false)}> ABOUT US </a>
          <a href='/services' className="App-link" onClick={() => setMenuOpen(false)}> SERVICES </a>
          <a href='/artstore' className="App-link" onClick={() => setMenuOpen(false)}> ART STORE </a>
          <a href='/contact' className="App-link" onClick={() => setMenuOpen(false)}> CONTACT US </a>
        </nav>
      </header> */}

      <div className="image-container">
        <img src={picture1} className="App-pic" alt="picture" />
        <div className="text-block">
          Feel, Create, Reconnect
        </div>
      </div>

      <div className="TwoPic">
        <div className="text-block1">
          <h1 className="title1">Our services</h1>
          <img src={picture1} className="App-pic1" alt="picture" />
        </div>
        <div className="text-block2">
          <h1 className="title2">Client Testimonials</h1>
          <img src={picture1} className="App-pic1" alt="picture" />
        </div>
      </div>

      <div className="Client-testimonials">
        <h1 className="testimonials-title">Clients Testimonials</h1>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;