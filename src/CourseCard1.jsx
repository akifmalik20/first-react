// CourseCard.js
import React from 'react';
import './CourseCard1.css'; // Ensure you use the CSS below

import Course2 from './Course2'; // Correct import

function CourseCard1() {
  return (
    <div className="card custom-card shadow-sm">
      <div className="card-header custom-card-header">
        <h2>Web Development Course with Industrial Projects</h2>
        <p>4 Courses</p>
      </div>
      <div className="card-conte">
        <ul className="course-list">
          {Course2.map((val, index) => (
            <li key={index} className={`course-item ${index >= 5 ? 'hidden-course' : ''}`}>
              <a href={val.logoUrl} target="_blank" rel="noopener noreferrer">
                <img src={val.logo} alt="Course Logo" className="course-logo" />
              </a>
              <a href={val.titleUrl} target="_blank" rel="noopener noreferrer" className="course-title">
                {val.title}
              </a>
              <a href={val.priceUrl} target="_blank" rel="noopener noreferrer" className="course-price">
                {val.price}
              </a>
            </li>
          ))}
        </ul>
        <div className="arrow-indicator">&#9662;</div> {/* Unicode for down arrow */}
      </div>
      <div className="card-footer">
        <span className="discounted-price">PKR10,000</span>
        <span className="original-price">PKR33,100</span>
      </div>
    </div>
  );
}

export default CourseCard1;
