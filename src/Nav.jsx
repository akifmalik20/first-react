// src/CustomNavbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Nav.css'; // Include your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-logo">
          <img
            src="https://ezitech.org/wp-content/uploads/2024/07/blue-official.png"
            alt="Logo"
            className="logo-image"
            style={{ maxWidth: '120px', height: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-links text-center"> {/* Centered Links */}
            <Nav.Link href="#home" className="qw">Home</Nav.Link>
            <Nav.Link href="#about" className="qw">About Us</Nav.Link>
            <Nav.Link href="#certifications" className="qw">Certifications</Nav.Link>
            <Nav.Link href="#careers" className="qw">Careers</Nav.Link>
            <Nav.Link href="#seminars" className="qw">Seminars</Nav.Link>
            <Nav.Link href="#tech-blogs" className="qw">Tech Blogs</Nav.Link>
            <Nav.Link href="#iportal" className="qw">iPortal Login</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <span className="separator me-2 d-none d-lg-block">|</span>
            <div className="navbar-icons d-flex flex-row"> {/* Right-aligned Icons */}
              <Nav.Link href="#favorites" className="icon-link">
                <i className="fas fa-heart me-2"></i>
              </Nav.Link>
              <Nav.Link href="#search" className="icon-link">
                <i className="fas fa-search"></i>
              </Nav.Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
