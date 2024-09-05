// src/components/CardTab.js
import React from 'react';
import './CardTab.css';
import whatsappIcon from "../src/images/whatsapp_733585.png";
const CardTab = ({ title, subtitle, icon, url }) => {
  return (
    <a href={url} className="card-tab" target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="Logo" className="tab-logo" />
      <div className="tab-info">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <img src={whatsappIcon} alt="WhatsApp" className="tab-icon" />
    </a>
  );
};

export default CardTab;
