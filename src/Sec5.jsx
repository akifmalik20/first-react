// Sec5.js

import React, { useState } from "react"; // Import useState
import './Sec5.css'; // Custom CSS file
import w1 from "../src/images/ui.webp"; // Image import
import pic1 from "../src/images/seo_1458271.png"; // Additional images
import pic2 from "../src/images/js_15714765.png";
import pic3 from "../src/images/travel_15692786.png";
import pic4 from "../src/images/smartphone_3437364.png";
import pic5 from "../src/images/email_873388.png";
import { NavLink } from "react-router-dom";
import whatsappIcon from "../src/images/whatsapp_2504957.png"; // Add the WhatsApp icon

const Sec5 = () => {
    const [showCard, setShowCard] = useState(false); // State to control the card visibility

    // Toggle card visibility
    const handleWhatsAppClick = () => {
        setShowCard(!showCard);
    };

    return (
        <div className="man-container">
            {/* Main content */}
            <h1 className="center-heading">
                It's time to <span className="aa">start</span> investing in yourself
            </h1>
            <img className="ai" src={w1} alt="UI Design" />

            <div className="content-container">
                {/* About Section */}
                <div className="responsive-div about-section">
                    <h2 className="div-title">ABOUT</h2>
                    <p className="div-content">
                        Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
                    </p>
                </div>

                {/* Popular Courses Section */}
                <div className="responsive-div popular-courses">
                    <h2 className="div-title">POPULAR COURSES</h2>
                    <NavLink to="/link1" className="course-link">
                        <img src={pic1} alt="Online Arbitrage MasterMind" className="contact-icon" />
                        <div className="course-text">
                            <p>Online Arbitrage MasterMind 2.0....</p>
                            <p>By Husnain Ali</p>
                        </div>
                    </NavLink>
                    <NavLink to="/link2" className="course-link">
                        <img src={pic2} alt="Complete Bootcamp 2024" className="contact-icon" />
                        <div className="course-text">
                            <p>The Complete Bootcamp 2024: Node.js....</p>
                            <p>By Ezitech</p>
                        </div>
                    </NavLink>
                </div>

                {/* Pages Section */}
                <div className="responsive-div list-links">
                    <h2 className="div-title">PAGES</h2>
                    <ul>
                        <li><NavLink to="/blog">BLOG</NavLink></li>
                        <li><NavLink to="/ezicoding">EZICODING</NavLink></li>
                        <li><NavLink to="/internship">INTERNSHIP</NavLink></li>
                        <li><NavLink to="/services">OUR SERVICES</NavLink></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="responsive-div contact-info">
                    <h2 className="div-title">CONTACT</h2>
                    <div className="contact-details">
                        <img src={pic3} alt="Address Icon" className="contact-icon" />
                        <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                    </div>
                    <div className="contact-details">
                        <img src={pic4} alt="Phone Icon" className="contact-icon" />
                        <p>+923455555396</p>
                    </div>
                    <div className="contact-details">
                        <img src={pic5} alt="Email Icon" className="contact-icon" />
                        <p>info@ezitech.org</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footerr center-headingg">
                <p>Copyright © 2024 Ezitech Institute | Design & Develop by <a href="https://www.eziline.com" target="_blank" rel="noopener noreferrer">Muhammd Akif Hussain</a></p>
            </footer>

        
           
        </div>
    );
};

export default Sec5;
