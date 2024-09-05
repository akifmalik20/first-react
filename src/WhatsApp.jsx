// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from "../src/images/whatsapp_2504957.png";
const WhatsAppButton = ({ onClick }) => {
  return (
    <div className="whatsapp-button" onClick={onClick}>
      <img src={whatsappIcon} alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppButton;
