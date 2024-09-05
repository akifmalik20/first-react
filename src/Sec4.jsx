// Sec4.js
import React, { useEffect, useRef } from 'react';
import './Sec4.css'; // Import the CSS file
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import w1 from "../src/images/we.svg";
import img1 from "../src/images/w.png"; // Add second image
import img2 from "../src/images/appstore-copy.webp"; // Add third image

const Sec4 = () => {
    const headerRef = useRef(null);
    const textRef = useRef(null);
    const imagesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (headerRef.current) observer.observe(headerRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (imagesRef.current) observer.observe(imagesRef.current);

        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
            if (imagesRef.current) observer.unobserve(imagesRef.current);
        };
    }, []);

    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center header-img" ref={headerRef}>
                        <img src={w1} alt="Business" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start text-section" ref={textRef}>
                        <div>
                            <h1>Learn <span className="highlight">anytime</span> from <span className="highlight">anywhere</span></h1>
                            <p>
                                Increase the mobility level with Eziline Technologies LMS App. Take your courses in your pocket and access them whenever you want without any limits. Make your learning more engaging and productive using modern LMS app.
                            </p>
                        </div>
                        <div className="image-links mt-4" ref={imagesRef}>
                            <NavLink to="/page1">
                                <img src={img1} alt="Link 1" className="img-fluid nav-img" />
                            </NavLink>
                            <NavLink to="/page2">
                                <img src={img2} alt="Link 2" className="img-fluid nav-img" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec4;
