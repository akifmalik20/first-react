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
import WhatsAppButton from "./WhatsApp";
import Card from "./Carddd";
const Sec6 = () => {const [cardVisible, setCardVisible] = useState(false);

    const handleButtonClick = () => {
      setCardVisible(true);
    };
  
    const handleCloseCard = () => {
      setCardVisible(false);
    };
  
    return (
      <div className="App">
        <WhatsAppButton onClick={handleButtonClick} />
        <Card isVisible={cardVisible} onClose={handleCloseCard} />
      </div>
    );
  }
  

export default Sec6;
