import React, { useState } from 'react';
import { FaGraduationCap, FaAward, FaBriefcase, FaBuilding } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Stats() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionStyle = {
    padding: "80px 20px",
    backgroundColor: "transparent", 
    color: "#ffffff",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#ffffff"
  };

  const subtitleStyle = {
    color: "#a3a3a3",
    fontSize: "16px",
    marginBottom: "50px"
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    maxWidth: "1400px",
    margin: "0 auto"
  };

  const cardStyle = {
    background: "rgba(20, 20, 20, 0.8)", 
    border: "1px solid rgba(128, 0, 0, 0.4)", 
    borderRadius: "20px",
    padding: "35px 18px",
    width: "235px",
    textAlign: "center",
    transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
    boxSizing: "border-box"
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#ff9900", 
    marginBottom: "20px"
  };

  const metricStyle = {
    fontSize: "34px",
    fontWeight: "800",
    margin: "5px 0 10px 0",
    color: "#ffffff"
  };

  const labelStyle = {
    color: "#ffcc00", 
    fontWeight: "600",
    fontSize: "14.5px",
    marginBottom: "8px"
  };

  const descStyle = {
    color: "#d4d4d4",
    fontSize: "13px",
    lineHeight: "1.5"
  };

  const btnContainerStyle = {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center"
  };

  const btnStyle = {
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

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>{t("stats_title")}</h2>
      <p style={subtitleStyle}>{t("stats_subtitle")}</p>
      
      <div style={containerStyle}>
        {/* Card 1: Grade A+ */}
        <div 
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ffcc00";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 204, 0, 0.35)";
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.background = "rgba(30, 30, 30, 0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(20, 20, 20, 0.8)";
          }}
        >
          <FaAward style={iconStyle} />
          <div style={metricStyle}>Grade A+</div>
          <div style={labelStyle}>{t("stats_grade_label")}</div>
          <div style={descStyle}>{t("stats_grade_desc")}</div>
        </div>

        {/* Card 2: Outlook Rank #53 */}
        <div 
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ffcc00";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 204, 0, 0.35)";
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.background = "rgba(30, 30, 30, 0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(20, 20, 20, 0.8)";
          }}
        >
          <FaGraduationCap style={iconStyle} />
          <div style={metricStyle}>Rank #53</div>
          <div style={labelStyle}>{t("stats_outlook_label")}</div>
          <div style={descStyle}>{t("stats_outlook_desc")}</div>
        </div>

        {/* Card 3: Times Rank #99 */}
        <div 
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ffcc00";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 204, 0, 0.35)";
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.background = "rgba(30, 30, 30, 0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(20, 20, 20, 0.8)";
          }}
        >
          <FaGraduationCap style={iconStyle} />
          <div style={metricStyle}>Rank #99</div>
          <div style={labelStyle}>{t("stats_rank_label")}</div>
          <div style={descStyle}>{t("stats_rank_desc")}</div>
        </div>

        {/* Card 4: Shortlists */}
        <div 
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ffcc00";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 204, 0, 0.35)";
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.background = "rgba(30, 30, 30, 0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(20, 20, 20, 0.8)";
          }}
        >
          <FaBriefcase style={iconStyle} />
          <div style={metricStyle}>4,900+</div>
          <div style={labelStyle}>{t("stats_shortlist_label")}</div>
          <div style={descStyle}>{t("stats_shortlist_desc")}</div>
        </div>

        {/* Card 5: Corporate Partners */}
        <div 
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ffcc00";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 204, 0, 0.35)";
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.background = "rgba(30, 30, 30, 0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(20, 20, 20, 0.8)";
          }}
        >
          <FaBuilding style={iconStyle} />
          <div style={metricStyle}>325+</div>
          <div style={labelStyle}>{t("stats_partners_label")}</div>
          <div style={descStyle}>{t("stats_partners_desc")}</div>
        </div>
      </div>

      <div style={btnContainerStyle}>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={btnStyle}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          {t("stats_news_btn")}
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(10px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ position: "relative", width: "95%", maxWidth: "900px", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  background: "#141414",
                  border: "2px solid #ffcc00",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  color: "#ffcc00",
                  fontSize: "28px",
                  lineHeight: "1",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 10000,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.8)",
                  transition: "transform 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                &times;
              </button>
              
              <div style={{
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "rgba(10, 10, 10, 0.95)",
                borderRadius: "20px",
                border: "1px solid rgba(128, 0, 0, 0.4)",
                boxShadow: "0 15px 50px rgba(0,0,0,0.8)",
                boxSizing: "border-box"
              }}>
                <img 
                  src="/news-pamphlet.webp" 
                  alt="News Pamphlet Page 1" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", border: "1px solid rgba(255,204,0,0.2)" }}
                />
                <img 
                  src="/news-pamphlet-2.webp" 
                  alt="News Pamphlet Page 2" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", border: "1px solid rgba(255,204,0,0.2)" }}
                />
                <img 
                  src="/news-pamphlet-3.webp" 
                  alt="News Pamphlet Page 3" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", border: "1px solid rgba(255,204,0,0.2)" }}
                />
                <img 
                  src="/news-pamphlet-4.webp" 
                  alt="News Pamphlet Page 4" 
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", border: "1px solid rgba(255,204,0,0.2)" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}