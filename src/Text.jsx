import React, { useState, useEffect, useRef } from "react";
import './Text.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/Navbar.css'; // Import custom CSS file
import w1 from "../src/images/1.png"
import w2 from "../src/images/white-ezipos.png"
import w3 from "../src/images/3.png"
const Text = () => {
  const words = [
    { text: "social skills", color: "#FF6F61" }, // Soft Gold
    { text: "marketing", color: "#4DB6AC" }, // Cool Teal
    { text: "programming", color: "#FF6F61" }, // Vibrant Coral
    { text: "web design", color: "#4DB6AC" } // Rich Amber
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleChange = () => {
      setFade(false); // Start fading out

      // Update the words after the fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Start fading in
      }, 500); // Match this duration with the fade-out time
    };

    intervalRef.current = setInterval(handleChange, 3000); // Change word every 3 seconds (including fade time)

    return () => clearInterval(intervalRef.current); // Cleanup on component unmount
  }, []);

  return (
    <>
    <div className="text-overlay">
      <p className="static-text">Learn the fundamentals with our experts in&nbsp;
        <span
          className={`text-word ${fade ? 'fade-in' : 'fade-out'}`}
          style={{ color: words[currentIndex].color }}
        >
          {words[currentIndex].text}
        </span>
      </p>
      <p className="pa">Utilize effective learning to reach your potential</p>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Courses"
        />
      </div>
      
    </div>
    
    <div className="text-overlay1">
    <p className="pa">
        Explore Our More Useful Products 
        <i className="fas fa-heart me-2"></i>
    </p>
    <div className="icon-container">
        <a href="#logo1" className="icon-link">
            <img src={w1} alt="Logo 1" className="icon-image" />
        </a>
        <a href="#logo2" className="icon-link">
            <img src={w3}  alt="Logo 2" className="icon-image" />
        </a>
        <a href="#logo3" className="icon-link">
            <img src={w3} alt="Logo 3" className="icon-image" />
        </a>
    </div>
</div>
    </>
  );
}

export default Text;
