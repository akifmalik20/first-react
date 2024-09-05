// JobCard.js
import React from 'react';
import './JobCard.css';

const JobCard = ({ title, subtitle, employmentType, location, jobType, titleimg }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={titleimg} alt="Job Graphic" className="job-card-image" />
        <h2>
          {title.split(' ').map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </h2>
        <hr className="divider" /> {/* Divider line between title and subtitle */}
        <p>{subtitle}</p>
      </div>
      <div className="job-card-body">
        <div className="job-detail">
          <span>Employment - <b>{employmentType}</b></span>
        </div>
        <div className="job-detail">
          <span>Location - <b>{location}</b></span>
        </div>
        <div className="job-detail">
          <span>Job Type - <b>{jobType}</b></span>
        </div>
      </div>
      <button className="read-more-button">Read More</button>
    </div>
  );
};

export default JobCard;
