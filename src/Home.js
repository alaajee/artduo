import './App.css';
import Testimonial from './Testimonial';
import picture from './logo_no_bg.png';
import picture1 from './pic.jpeg';
import picture2 from './picture10.jpeg';
import picture3 from './picture11.jpeg';
import picture4 from './picture12.jpeg';
import picture5 from './picture13.jpeg';
import { Link } from 'react-router-dom';  // ADD THIS

function Home() {
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
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />

        <Link to="/" className="App-link"> HOME </Link>
        <Link to="/aboutus" className="App-link"> ABOUT US </Link>
        <Link to="/services" className="App-link"> SERVICES </Link>
        <Link to="/artstore" className="App-link"> ART STORE </Link>
        <Link to="/contact" className="App-link"> CONTACT US </Link>

      </header>

      
     
    <div className="image-container">
      <img src={picture1} className="App-pic" alt="picture" />
      <div className="text-block">
        Feel, Create, Reconnect
      </div>
    </div>

    <div className="TwoPic">
      <div className="text-block1">
      <h1 className="title1">Our services</h1>
      <img src={picture2} className="App-pic1" alt="picture" />
      </div>
      <div className="text-block2">
      <h1 className="title2">Client Testimonials</h1>
      <img src={picture4} className="App-pic1" alt="picture" />
      </div>
    </div>

    <div className="Client-testimonials">
      <h1 className="testimonials-title">Client Testimonials</h1>
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

export default Home;