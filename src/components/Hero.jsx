import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.webp';

export default function Hero() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    padding: "clamp(12px, 2.5vw, 24px) 20px clamp(40px, 5vw, 60px) 20px",
    boxSizing: "border-box",
    overflow: "hidden"
  };

  const collegeNameStyle = {
    color: "#ffcc00",
    fontSize: "clamp(0.95rem, 3vw, 1.75rem)",
    fontWeight: "800",
    letterSpacing: "clamp(1px, 0.5vw, 3px)",
    marginBottom: "30px",
    textTransform: "uppercase",
    background: "linear-gradient(135deg, #800000, #4d0000)",
    padding: "clamp(8px, 2vw, 12px) clamp(14px, 4vw, 45px)",
    borderRadius: "50px",
    border: "1px solid rgba(255, 204, 0, 0.3)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
    display: "inline-flex",
    alignItems: "center",
    gap: "clamp(8px, 2vw, 18px)",
    maxWidth: "100%",
    boxSizing: "border-box"
  };

  const preTitleStyle = {
    fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
    color: "#ffffff",
    fontWeight: "600",
    lineHeight: "1.3",
    margin: "0 0 10px 0",
    letterSpacing: "clamp(1px, 0.8vw, 4px)",
    textTransform: "uppercase",
    textShadow: "0 4px 15px rgba(0,0,0,0.8)"
  };

  const titleStyle = {
    fontSize: "clamp(2.4rem, 7.5vw, 6rem)",
    fontWeight: "900",
    lineHeight: "1.1",
    margin: "0 0 20px 0",
    letterSpacing: "-1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    textTransform: "uppercase",
    width: "100%",
    textShadow: "0 8px 25px rgba(0,0,0,0.6)",
    wordBreak: "break-word"
  };

  const highlightStyle = {
    color: "#ffcc00",
    textShadow: "0 8px 25px rgba(0,0,0,0.6)"
  };

  const suffixBadgeStyle = {
    background: "rgba(128, 0, 0, 0.8)",
    color: "#ffffff",
    fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
    padding: "6px 16px",
    marginLeft: "clamp(5px, 2vw, 20px)",
    borderRadius: "10px",
    border: "1px solid #ffcc00",
    letterSpacing: "1px",
    backdropFilter: "blur(5px)",
    textShadow: "none"
  };

  const subtitleStyle = {
    fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
    color: "#e0e0e0",
    fontWeight: "400",
    maxWidth: "800px",
    lineHeight: "1.7",
    margin: "0 auto 30px auto",
    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
    padding: "0 10px"
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "500px"
  };

  const primaryBtnStyle = {
    background: "linear-gradient(135deg, #ff9900, #ff5500)",
    color: "#000000",
    padding: "14px 32px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 20px rgba(255, 85, 0, 0.3)"
  };

  const secondaryBtnStyle = {
    background: "#000000",
    color: "#ffffff",
    padding: "14px 32px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    border: "2px solid #800000",
    cursor: "pointer",
    transition: "background 0.2s, transform 0.2s"
  };

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={collegeNameStyle}
      >
        <img src={logo} alt="AIET Logo" style={{ height: "52px", width: "52px", backgroundColor: "#ffffff", padding: "5px", borderRadius: "50%", objectFit: "contain", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "2px" }}>
          <span style={{ lineHeight: "1.1" }}>{t("hero_badge")}</span>
          <span style={{ fontSize: "1.05rem", letterSpacing: "2.5px", fontWeight: "600", color: "#ffb300", lineHeight: "1.1", marginTop: "3px" }}>{t("hero_autonomous")}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 style={preTitleStyle}>{t("hero_title_1")} {t("hero_title_2")}</h2>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={titleStyle}
      >
        {lang === 'kn' ? (
          <span style={highlightStyle}>{t("hero_title_highlight")}</span>
        ) : (
          <>
            <span style={{ color: "#ffffff" }}>{t("hero_title_highlight").slice(0, 4)}</span>
            <span style={highlightStyle}>{t("hero_title_highlight").slice(4)}</span>
          </>
        )}
        <span style={suffixBadgeStyle}>{t("hero_title_suffix")}</span>
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ fontSize: "1.8rem", fontWeight: "500", color: "#ff9900", textShadow: "0 4px 15px rgba(0,0,0,0.8)", marginBottom: "20px", letterSpacing: "1px" }}
      >
        {t("hero_sub_heading")}
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={subtitleStyle}
      >
        {t("hero_subtitle")}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={buttonContainerStyle}
      >
        <button 
          style={primaryBtnStyle}
          onClick={() => navigate('/facilities')}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          {t("hero_btn_primary")}
        </button>
      </motion.div>
    </div>
  );
}