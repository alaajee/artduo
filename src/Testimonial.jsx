import React from 'react';
import './Testimonial.css';

function Testimonial({ name, rating, text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <h3 className="testimonial-name">{name}</h3>
        <div className="testimonial-stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? 'star filled' : 'star'}>
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="testimonial-body">
        <div className="quote-mark">"</div>
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;
