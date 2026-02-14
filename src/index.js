import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';  // Changed to HashRouter
import './index.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* Changed from BrowserRouter to HashRouter */}
      <Routes>
      <a href='#/' className="App-link"> HOME </a>
      <a href='#/aboutus' className="App-link"> ABOUT US </a>
      <a href='#/services' className="App-link"> SERVICES </a>
        {/* Add more routes as needed */}
        {/* <Route path="/artstore" element={<ArtStore />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </HashRouter>  {/* Changed from BrowserRouter to HashRouter */}
  </React.StrictMode>
);

reportWebVitals();