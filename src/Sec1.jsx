import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Sec1.css'; // Import custom CSS
import Dataa from './Dataa'; // Import data

const Sec1 = () => {
    return (
      <div className="container my-4">
        <div className="row g-3"> {/* Adjusted gap for better spacing */}
          {Dataa.map((item, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-44"> {/* Adjusted column sizes */}
              <a
                href={item.url}
                className="card custom-cardd h-100 text-center border-0 shadow-sm text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="icon-imagee mb-2"
                    onError={(e) => e.target.style.display = 'none'} // Hide broken images
                  />
                  <span className="fw-bold text-dark">{item.name}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Sec1;
