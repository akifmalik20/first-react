// Sec3.js
import React from "react";
import './Sec3.css'; // Custom CSS file
import JobCard from "./JobCard"; // Import the JobCard component
import Intern from "./InterDetail"; // Import the Intern data array

const Sec3 = () => {
  return (
    <div className="main-container">
      <h1 className="center-heading">Perfect Internships For You!</h1>
      <div className="job-cards-container">
        {Intern.map((intern, index) => (
          <JobCard
            key={index}
            title={intern.title}
            subtitle={intern.subtitle}
            employmentType={intern.employmentType}
            location={intern.location}
            jobType={intern.jobType}
            
            titleimg={intern.titleimg} // Passing image prop
          />
        ))}
      </div>
      <button className="read-more-button">Read More</button>
    </div>
  );
};

export default Sec3;
