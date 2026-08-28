import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phone = "919448458334";
  const defaultMessage = encodeURIComponent("Hello! I have an enquiry regarding AIET Admissions.");
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="whatsapp-float-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '95px',
        right: '25px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isHovered
          ? '0 10px 30px rgba(37, 211, 102, 0.6)'
          : '0 6px 20px rgba(37, 211, 102, 0.4)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        zIndex: 9999,
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      <FaWhatsapp style={{ fontSize: '32px' }} />
      
      {/* Subtle hover tooltip */}
      <span
        style={{
          position: 'absolute',
          right: '70px',
          background: 'rgba(15, 15, 15, 0.95)',
          color: '#ffffff',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '500',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
          border: '1px solid rgba(37, 211, 102, 0.4)',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all 0.2s ease',
          pointerEvents: 'none'
        }}
      >
        Chat on WhatsApp 💬
      </span>
    </a>
  );
}
