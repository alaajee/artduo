import './App.css';
import picture from './logo_no_bg.png';
import picture1 from './pic.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />

        <a href='#' className="App-link"> HOME </a>
        <a href='#' className="App-link"> ABOUT US </a>
        <a href='#' className="App-link"> SERVICES </a>
        <a href='#' className="App-link"> ART STORE </a>
        <a href='#' className="App-link"> CONTACT US </a>

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
      <img src={picture1} className="App-pic1" alt="picture" />
      </div>
      <div className="text-block2">
      <h1 className="title2">Client Testimonials</h1>
      <img src={picture1} className="App-pic1" alt="picture" />
      </div>
    </div>

    
    </div>
  );
}

export default App;
