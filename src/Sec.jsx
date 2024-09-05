import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Sec.css'; // Custom CSS file for additional styling

const Sec = () => {
  useEffect(() => {
    // Dynamically load the Lottie player component
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container text-center my-4">
      <h1 className="mb-4">How it works?</h1>
      <div className="row">
        {/* SVG Image 1 */}
        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <dotlottie-player
            src="https://lottie.host/9a4608c1-1f59-4897-90c7-442d37dbba05/uAsxSgHUI7.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', maxWidth: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

        {/* Lottie Animation */}
        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <dotlottie-player
            src="https://lottie.host/005ba324-0d46-4e1a-9a63-598e351a976e/BIRQk4UazY.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', maxWidth: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

        {/* SVG Image 3 */}
        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <dotlottie-player
            src="https://lottie.host/20137d9e-5254-47b3-81ed-097142d4303b/w7R12rqDqy.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', maxWidth: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Sec;
