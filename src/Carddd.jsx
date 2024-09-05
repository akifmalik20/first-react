// src/components/Card.js

import React from 'react';
import CardTab from './CardTab';
import Wats from '../src/Contact'; // Adjust the path to where you have saved the Wats data
import './Carddd.css';
import whatsappIcon from "../src/images/whatsapp_733585.png";

const Card = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="carddd">
      <div className="car-header">
        <img src={whatsappIcon} alt="WhatsApp Logo" className="heade-logo" />
        <div className="heade-title">
          <h1 className="title-text">Start a Conversation</h1>
          <h2 className="subtitle-text">Hi! Click one of our members to Chat on WhatsApp</h2>
        </div>
        <button className="close-buton" onClick={onClose}>X</button>
      </div>
      <div className="cad-body">
        {Wats.map((tab, index) => (
          <CardTab
            key={index}
            title={tab.title}
            subtitle={tab.subtitle}
            icon={tab.icon}
            url={tab.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
