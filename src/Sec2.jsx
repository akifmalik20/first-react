// Sec2.js
import React from "react";
import './Sec2.css'; // Custom CSS file
import CourseCard from "./CourseCard";
import CourseCard1 from "./CourseCard1";

const Sec2 = () => {
  return (
    <div className="ma-container">
      <h1 className="center-head">Limited-Time Summer Course Bundles!</h1>
      <p className="center-head">Note: All these bundles have recorded lectures</p>
      <div className="course-cards-container">
        <div className="course-card">
          <CourseCard />
        </div>
        <div className="course-card">
          <CourseCard1 />
        </div>
      </div>
    </div>
  );
};

export default Sec2;
