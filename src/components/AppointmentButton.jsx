import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa';

export default function AppointmentButton() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Hide floating action button on admin dashboard and all admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const handleClick = () => {
    navigate('/admission?tab=appointment', { state: { tab: 'appointment' } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Book Offline Counseling Appointment"
      className={`appointment-float-btn ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered
          ? '0 10px 30px rgba(255, 153, 0, 0.6)'
          : '0 6px 20px rgba(255, 153, 0, 0.4)'
      }}
    >
      <FaCalendarCheck className="appointment-icon" />
      
      {/* Subtle hover tooltip */}
      <span
        className="appointment-tooltip float-btn-tooltip"
        style={{
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)'
        }}
      >
        Offline Counseling 📅
      </span>
    </button>
  );
}

