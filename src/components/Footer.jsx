import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const XIcon = ({ style, onMouseEnter, onMouseLeave }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    fill="currentColor"
    style={{ width: "1em", height: "1em", ...style }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const footerStyle = {
    padding: "60px 20px 30px 20px",
    textAlign: "center",
    backgroundColor: "transparent", 
    borderTop: "none", 
    color: "#ffffff"
  };

  const textStyle = {
    color: "#a3a3a3",
    fontSize: "14px",
    marginBottom: "25px"
  };

  const socialsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    fontSize: "24px",
    marginBottom: "30px"
  };

  const iconStyle = {
    color: "#ffffff",
    cursor: "pointer",
    transition: "color 0.2s, transform 0.2s"
  };

  const copyrightStyle = {
    fontSize: "13px",
    color: "#666666",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    paddingTop: "20px",
    maxWidth: "600px",
    margin: "0 auto"
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>{t("foot_address")}</p>
      
      <div style={socialsContainerStyle}>
        <a href="https://www.facebook.com/aietmijar/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
          <FaFacebook 
            style={iconStyle} 
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ff9900'; e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
        </a>
        <a href="https://x.com/aietmoodbidri" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }} aria-label="X (formerly Twitter)">
          <XIcon 
            style={iconStyle} 
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ff9900'; e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
        </a>
        <a href="https://www.instagram.com/alvasengineeringofficial/?hl=en" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
          <FaInstagram 
            style={iconStyle} 
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ff9900'; e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
        </a>
        <a href="https://www.linkedin.com/school/aietmijar/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
          <FaLinkedin 
            style={iconStyle} 
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ff9900'; e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'scale(1)'; }}
          />
        </a>
      </div>

      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} AietVerse. {t("foot_copyright")}
      </div>
    </footer>
  );
}