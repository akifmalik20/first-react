// src/NavScrollExample.js
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/Navbar.css'; // Import custom CSS file
function NavScrollExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-opacity text-light py-2">
      <div className="container-fluid navbar-container d-flex justify-content-between align-items-center">
        {/* Combined Flex Container to keep everything in one line */}
        <div className="d-flex flex-grow-1 flex-wrap align-items-center justify-content-between">
          {/* Contact Information */}
          <div className="d-flex align-items-center me-4 flex-grow-0">
            <i className="fa-solid fa-phone me-2"></i>
            <span>03181839916</span>
          </div>
          <div className="d-flex align-items-center me-4 flex-grow-0">
            <i className="fa-solid fa-location-dot me-2"></i>
            <span>Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan</span>
          </div>
          <div className="d-flex align-items-center me-4  flex-grow-1">
            <i className="fa-solid fa-clock me-2"></i>
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="d-flex align-items-center me-3">
          <a
            href="https://www.facebook.com"
            className="text-light me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com"
            className="text-light me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-light me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-light me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        {/* Login and Register Links */}
        <div className="d-flex align-items-center">
          <a href="/login" className=" me-2">
            <i className="fa-solid fa-user me-1"></i> Login
          </a>
          <span className=" me-2">|</span>
          <a href="/register" className="">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavScrollExample;
