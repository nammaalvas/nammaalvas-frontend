import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Hide floating action button on admin dashboard and all admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const phone = "919448458334";
  const defaultMessage = encodeURIComponent("Hello! I have an enquiry regarding AIET Admissions.");
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={`whatsapp-float-btn ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered
          ? '0 10px 30px rgba(37, 211, 102, 0.6)'
          : '0 6px 20px rgba(37, 211, 102, 0.4)'
      }}
    >
      <FaWhatsapp className="whatsapp-icon" />
      
      {/* Subtle hover tooltip */}
      <span
        className="whatsapp-tooltip float-btn-tooltip"
        style={{
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)'
        }}
      >
        Chat on WhatsApp 💬
      </span>
    </a>
  );
}

