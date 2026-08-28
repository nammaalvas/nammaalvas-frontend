import React from 'react';
import bgImage from '../assets/collage-bg.webp';

export default function Background() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      background: `linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.75)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      zIndex: -1,
      pointerEvents: 'none'
    }} />
  );
}