import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa';

export default function AppointmentButton() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admission?tab=appointment', { state: { tab: 'appointment' } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Book Offline Counseling Appointment"
      className="appointment-float-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #ff9900, #ff5500)',
        color: '#ffffff',
        border: 'none',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isHovered
          ? '0 10px 30px rgba(255, 153, 0, 0.6)'
          : '0 6px 20px rgba(255, 153, 0, 0.4)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        zIndex: 9999,
        cursor: 'pointer'
      }}
    >
      <FaCalendarCheck style={{ fontSize: '26px' }} />
      
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
          border: '1px solid rgba(255, 153, 0, 0.4)',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all 0.2s ease',
          pointerEvents: 'none'
        }}
      >
        Offline Counseling 📅
      </span>
    </button>
  );
}
