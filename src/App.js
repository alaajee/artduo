import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div className="menu-container">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Services</a>
        <a href="/gallery">Gallery</a>
      </div>
    </header>
    <div className="App-body">
      <div className="slogan">
        <h1>L'Art en Duo</h1>
      </div>

      <div className="bubbles-container">
        <div className="bubble">Feel</div>
        <div className="bubble">Create</div>
        <div className="bubble">Reconnect</div>
      </div>
    </div>

    </div>
  );
}

export default App;
