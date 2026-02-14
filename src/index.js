import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';  // HashRouter NOT BrowserRouter
import './index.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* HashRouter NOT BrowserRouter */}
      <Routes>
        <Route path="/artduo/#" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes as needed */}
        {/* <Route path="/artstore" element={<ArtStore />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </HashRouter>  {/* HashRouter NOT BrowserRouter */}
  </React.StrictMode>
);

reportWebVitals();