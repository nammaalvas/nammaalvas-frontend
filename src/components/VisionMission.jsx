import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function VisionMission() {
  const { t } = useLanguage();

  const containerStyle = {
    padding: "clamp(90px, 12vh, 120px) clamp(12px, 3vw, 20px) 60px clamp(12px, 3vw, 20px)",
    backgroundColor: "transparent",
    minHeight: "80vh",
    color: "#ffffff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box"
  };

  const titleStyle = {
    fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#ffffff"
  };

  const subtitleStyle = {
    color: "#a3a3a3",
    fontSize: "16px",
    marginBottom: "50px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    width: "100%"
  };

  const cardStyle = {
    background: "rgba(20, 20, 20, 0.8)",
    border: "1px solid rgba(128, 0, 0, 0.4)",
    borderRadius: "20px",
    padding: "40px 24px",
    textAlign: "center",
    transition: "transform 0.3s, border-color 0.3s"
  };

  const iconStyle = {
    fontSize: "50px",
    color: "#ff9900",
    marginBottom: "20px"
  };

  const cardTitleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#ffcc00"
  };

  const descStyle = {
    color: "#d4d4d4",
    fontSize: "16px",
    lineHeight: "1.8"
  };

  return (
    <div style={containerStyle}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={titleStyle}
      >
        {t("vm_title")}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={subtitleStyle}
      >
        {t("vm_subtitle")}
      </motion.p>
      
      <div className="vision-grid" style={gridStyle}>
        <motion.div 
          className="vision-card"
          style={{...cardStyle, textAlign: "left"}}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ textAlign: "center" }}>
            <FaEye style={iconStyle} />
            <h3 style={cardTitleStyle}>{t("vm_vision_title")}</h3>
          </div>
          <p style={{...descStyle, fontStyle: "italic", marginBottom: "15px", color: "#ffcc00"}}>
            {t("vm_vision_quote")}
          </p>
          <p style={descStyle}>{t("vm_vision_desc")}</p>
        </motion.div>

        <motion.div 
          className="vision-card"
          style={{...cardStyle, textAlign: "left"}}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ textAlign: "center" }}>
            <FaBullseye style={iconStyle} />
            <h3 style={cardTitleStyle}>{t("vm_mission_title")}</h3>
          </div>
          <ul style={{ color: "#d4d4d4", fontSize: "16px", lineHeight: "1.8", paddingLeft: "20px", marginBottom: "15px" }}>
            {Array.isArray(t("vm_mission_points")) && t("vm_mission_points").map((point, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>{point}</li>
            ))}
          </ul>
          <p style={descStyle}>{t("vm_mission_desc")}</p>
        </motion.div>
      </div>
    </div>
  );
}
