import React, { useState } from 'react';
import { FaArrowLeft, FaBed, FaUtensils, FaRunning, FaSwimmer, FaUsers, FaMedal, FaDumbbell, FaTree, FaHospital, FaBus, FaHamburger, FaSnowflake, FaBuilding, FaBriefcase, FaFlask, FaBook, FaCreditCard, FaStore, FaCode, FaCubes, FaLaptopCode, FaServer, FaNetworkWired, FaRocket, FaIndustry, FaCalendarAlt, FaLightbulb, FaGlassCheers, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { GiTennisCourt } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Features() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);
  const [isHostelModalOpen, setIsHostelModalOpen] = useState(false);
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isStartupModalOpen, setIsStartupModalOpen] = useState(false);
  const [isIndustrialModalOpen, setIsIndustrialModalOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const [isClubsModalOpen, setIsClubsModalOpen] = useState(false);
  const [isSportsModalOpen, setIsSportsModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const sectionStyle = {
    padding: "clamp(90px, 12vh, 120px) clamp(12px, 3vw, 20px) 60px clamp(12px, 3vw, 20px)", 
    backgroundColor: "transparent",
    minHeight: "100vh",
    color: "#ffffff",
    textAlign: "center",
    width: "100%",
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
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    marginBottom: "40px"
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "clamp(16px, 3vw, 30px)",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box"
  };

  const cardStyle = {
    background: "rgba(20, 20, 20, 0.8)",
    border: "1px solid rgba(128, 0, 0, 0.4)",
    borderRadius: "20px",
    padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 25px)",
    textAlign: "center",
    transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
    boxSizing: "border-box",
    width: "100%"
  };

  const iconStyle = {
    display: "none"
  };

  const cardTitleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffcc00",
    lineHeight: "1.3",
    wordBreak: "keep-all"
  };

  const descStyle = {
    color: "#d4d4d4",
    fontSize: "14px",
    lineHeight: "1.6"
  };

  const previewBtnStyle = {
    marginTop: "20px", 
    padding: "8px 20px", 
    background: "rgba(255, 204, 0, 0.15)", 
    color: "#ffcc00", 
    border: "1px solid rgba(255, 204, 0, 0.4)", 
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s",
    display: "inline-block"
  };

  const renderImageGallery = (images) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "15px", marginTop: "20px", overflowX: "auto", paddingBottom: "10px" }}>
      {images.map((src, idx) => (
        <img 
          key={idx} 
          src={src} 
          alt={`Gallery Image ${idx + 1}`} 
          onClick={(e) => { e.stopPropagation(); setZoomedImage({ images, index: idx }); }} 
          style={{ cursor: "pointer", width: "260px", height: "160px", objectFit: "cover", flexShrink: 0, borderRadius: "10px", border: "1px solid rgba(255,204,0,0.3)", transition: "transform 0.2s" }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      ))}
    </div>
  );

  return (
    <div style={sectionStyle}>
      {/* Back Button */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 20px auto", textAlign: "left" }}>
        <button
          type="button"
          onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, rgba(255, 153, 0, 0.15), rgba(128, 0, 0, 0.25))",
            color: "#ffcc00",
            border: "1px solid rgba(255, 204, 0, 0.4)",
            padding: "9px 20px",
            borderRadius: "25px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #ff9900, #ff5500)";
            e.currentTarget.style.color = "#000000";
            e.currentTarget.style.transform = "translateX(-4px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 153, 0, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 153, 0, 0.15), rgba(128, 0, 0, 0.25))";
            e.currentTarget.style.color = "#ffcc00";
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
          }}
        >
          <FaArrowLeft /> {t("nav_back")}
        </button>
      </div>

      <h2 style={titleStyle}>{t("feat_title")}</h2>
      <p style={subtitleStyle}>{t("feat_subtitle")}</p>
      
      <div style={containerStyle}>
        {/* 1. Campus Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsCampusModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaTree style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_shoba_title")}</h3>
          <p style={descStyle}>{t("feat_shoba_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 2. Hostel Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsHostelModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaBed style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_hostel_title")}</h3>
          <p style={descStyle}>{t("feat_hostel_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 3. Our Startups Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsStartupModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaRocket style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_startups_title")}</h3>
          <p style={descStyle}>{t("feat_startups_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 4. Industrial In-House Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsIndustrialModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaIndustry style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_industrial_title")}</h3>
          <p style={descStyle}>{t("feat_industrial_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 5. College Events Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsEventsModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaCalendarAlt style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_events_title")}</h3>
          <p style={descStyle}>{t("feat_events_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 4. Food Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsFoodModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaUtensils style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_foodcourt_title")}</h3>
          <p style={descStyle}>{t("feat_foodcourt_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 5. Active Clubs Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsClubsModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaUsers style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_clubs_title")}</h3>
          <p style={descStyle}>{t("feat_clubs_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>

        {/* 6. Sports Card */}
        <div 
          style={{ ...cardStyle, cursor: "pointer" }}
          onClick={() => setIsSportsModalOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaRunning style={iconStyle} />
          <h3 style={cardTitleStyle}>{t("feat_sports_title")}</h3>
          <p style={descStyle}>{t("feat_sports_desc")}</p>
          <div 
            style={previewBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 204, 0, 0.15)" }}
          >
            {t("btn_preview")}
          </div>
        </div>
      </div>

      {/* Shobhavana Campus Modal */}
      <AnimatePresence>
        {isCampusModalOpen && (
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
            onClick={() => setIsCampusModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsCampusModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                {/* 6.5 Main Campus Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBuilding style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_campus_main_title")}</h3>
                  <p style={descStyle}>{t("feat_campus_main_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/campus1.webp", 
                    "/campus/campus2.webp", 
                    "/campus/campus3.webp", 
                    "/campus/campus4.webp"
                  ])}
                </div>

                {/* 7. AC Classroom Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaSnowflake style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_ac_class_title")}</h3>
                  <p style={descStyle}>{t("feat_ac_class_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/ac1.webp", 
                    "/campus/ac2.webp", 
                    "/campus/ac3.webp", 
                    "/campus/class1.webp", 
                    "/campus/class2.webp", 
                    "/campus/class3.webp"
                  ])}
                </div>

                {/* 9. Library Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBook style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_lib_title")}</h3>
                  <p style={descStyle}>{t("feat_lib_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/lib1.webp", 
                    "/campus/lib2.webp", 
                    "/campus/lib4.webp",
                    "/campus/lib5.webp"
                  ])}
                </div>

                {/* 11. Advanced Lab Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaFlask style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_adv_lab_title")}</h3>
                  <p style={descStyle}>{t("feat_adv_lab_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/lab1.webp", "/campus/lab2.webp", "/campus/lab3.webp", "/campus/lab4.webp", 
                    "/campus/lab5.webp", "/campus/lab6.webp", "/campus/lab7.webp", "/campus/lab8.webp", 
                    "/campus/lab9.webp", "/campus/lab10.webp", "/campus/lab11.webp", "/campus/lab12.webp", 
                    "/campus/lab14.webp", "/campus/lab15.webp", "/campus/lab16.webp"
                  ])}
                </div>

                {/* 12. Bus Facility Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBus style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_bus_title")}</h3>
                  <p style={descStyle}>{t("feat_bus_desc")}</p>
                </div>

                {/* 8. Elevator Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBuilding style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_lift_title")}</h3>
                  <p style={descStyle}>{t("feat_lift_desc")}</p>
                </div>

                {/* 10. ATM Card */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaCreditCard style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_atm_title")}</h3>
                  <p style={descStyle}>{t("feat_atm_desc")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Hostels Modal */}
      <AnimatePresence>
        {isHostelModalOpen && (
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
            onClick={() => setIsHostelModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsHostelModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                {/* 1. Hostel Room */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBuilding style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_hostel_title")}</h3>
                  <p style={descStyle}>{t("feat_hostel_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/hostel1.webp", 
                    "/campus/hostel2.webp", 
                    "/campus/hostel3.webp", 
                    "/campus/hostel4.webp"
                  ])}
                </div>

                {/* 1b. Hostel Room */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBed style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_hostel_room_title")}</h3>
                  <p style={descStyle}>{t("feat_hostel_room_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/room1.webp", 
                    "/campus/room2.webp", 
                    "/campus/room3.webp"
                  ])}
                </div>

                {/* 2. Medical Room */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaHospital style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_medical_title")}</h3>
                  <p style={descStyle}>{t("feat_medical_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/med1.webp", 
                    "/campus/med2.webp", 
                    "/campus/med3.webp"
                  ])}
                </div>

                {/* 3. Mess */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaUtensils style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_food_title")}</h3>
                  <p style={descStyle}>{t("feat_food_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/mess1.webp", 
                    "/campus/mess2.webp", 
                    "/campus/mess3.webp", 
                    "/campus/mess4.webp", 
                    "/campus/mess5.webp"
                  ])}
                </div>

                {/* 4. Gym */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaDumbbell style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_gym_title")}</h3>
                  <p style={descStyle}>{t("feat_gym_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/gym1.webp", 
                    "/campus/gym2.webp"
                  ])}
                </div>

                {/* 5. Park */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaTree style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_park_title")}</h3>
                  <p style={descStyle}>{t("feat_park_desc")}</p>
                </div>

                {/* 6. Stationary */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaStore style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_stationary_title")}</h3>
                  <p style={descStyle}>{t("feat_stationary_desc")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Food Court Modal */}
      <AnimatePresence>
        {isFoodModalOpen && (
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
            onClick={() => setIsFoodModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsFoodModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                {/* Kudla Military Hotel */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaUtensils style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_kudla_title")}</h3>
                  <p style={descStyle}>{t("feat_kudla_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/food1.webp"
                  ])}
                </div>

                {/* Kitchen Express */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaHamburger style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_kitchen_title")}</h3>
                  <p style={descStyle}>{t("feat_kitchen_desc")}</p>
                  
                  {renderImageGallery([
                    "/campus/food2.webp", 
                    "/campus/food3.webp", 
                    "/campus/food4.webp"
                  ])}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Startups Modal */}
      <AnimatePresence>
        {isStartupModalOpen && (
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
            onClick={() => setIsStartupModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsStartupModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", margin: "0 0 5px 0", textAlign: "center" }}>
                  {t("feat_startups_title")}
                </h2>
                <p style={{ color: "#a3a3a3", fontSize: "14px", textAlign: "center", marginBottom: "15px" }}>
                  {t("feat_startup_modal_title")}
                </p>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "20px"
                }}>
                  {/* 1. Vithsutra Technologies */}
                  <div 
                    style={{ ...cardStyle, display: "flex", flexDirection: "column", alignItems: "center" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 204, 102, 0.6)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ width: "100%", height: "160px", borderRadius: "12px", overflow: "hidden", marginBottom: "15px", background: "#000" }}>
                      <img src="/startups/vithsutra.webp" alt="Vithsutra Technologies" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h3 style={{ ...cardTitleStyle, color: "#00cc66" }}>VITHSUTRA TECHNOLOGIES</h3>
                    <p style={{ ...descStyle, fontStyle: "italic", fontSize: "13.5px", color: "#d4d4d4", margin: "10px 0 15px 0" }}>
                      "Bridging IoT, Robotics, and Industrial Automation with practical business solutions. Focus: Enhanced product life and customer satisfaction."
                    </p>
                    <span style={{ color: "#a3a3a3", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "15px" }}>
                      {t("label_founder")} KIRAN KASHYAP
                    </span>
                    <a 
                      href="https://visutra.in/" 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        background: "#00cc66",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "13px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        letterSpacing: "0.5px",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#00b359"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "#00cc66"}
                    >
                      {t("btn_visit_website")} <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                    </a>
                  </div>

                  {/* 2. HACFY */}
                  <div 
                    style={{ ...cardStyle, display: "flex", flexDirection: "column", alignItems: "center" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 204, 102, 0.6)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ width: "100%", height: "160px", borderRadius: "12px", overflow: "hidden", marginBottom: "15px", background: "#000" }}>
                      <img src="/startups/hacfy.webp" alt="Hacfy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h3 style={{ ...cardTitleStyle, color: "#00cc66" }}>HACFY</h3>
                    <p style={{ ...descStyle, fontStyle: "italic", fontSize: "13.5px", color: "#d4d4d4", margin: "10px 0 15px 0" }}>
                      "Cybersecurity education and consultancy offering ethical hacking training, VAPT services, and digital environment security solutions."
                    </p>
                    <span style={{ color: "#a3a3a3", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "15px" }}>
                      {t("label_founder")} SUJAY KUMAR
                    </span>
                    <a 
                      href="https://hacfy.com/" 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        background: "#00cc66",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "13px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        letterSpacing: "0.5px",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#00b359"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "#00cc66"}
                    >
                      {t("btn_visit_website")} <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                    </a>
                  </div>

                  {/* 3. Homza Cart India Pvt. Ltd. */}
                  <div 
                    style={{ ...cardStyle, display: "flex", flexDirection: "column", alignItems: "center" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 204, 102, 0.6)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ width: "100%", height: "160px", borderRadius: "12px", overflow: "hidden", marginBottom: "15px", background: "#000" }}>
                      <img src="/startups/homzacart.webp" alt="Homza Cart India" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h3 style={{ ...cardTitleStyle, color: "#00cc66" }}>HOMZA CART INDIA PVT. LTD.</h3>
                    <p style={{ ...descStyle, fontStyle: "italic", fontSize: "13.5px", color: "#d4d4d4", margin: "10px 0 15px 0" }}>
                      "Redefining convenience with seamless delivery services for food and groceries. Mission: Simplify life through efficient doorstep delivery."
                    </p>
                    <span style={{ color: "#a3a3a3", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "15px" }}>
                      {t("label_founder")} ANJALI DESAI
                    </span>
                    <a 
                      href="https://homzacart.in/" 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        background: "#00cc66",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "13px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        letterSpacing: "0.5px",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#00b359"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "#00cc66"}
                    >
                      {t("btn_visit_website")} <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                    </a>
                  </div>

                  {/* 4. Vulcans Academy */}
                  <div 
                    style={{ ...cardStyle, display: "flex", flexDirection: "column", alignItems: "center" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 204, 102, 0.6)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.4)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ width: "100%", height: "160px", borderRadius: "12px", overflow: "hidden", marginBottom: "15px", background: "#000" }}>
                      <img src="/startups/vulcans.webp" alt="Vulcans Academy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h3 style={{ ...cardTitleStyle, color: "#00cc66" }}>VULCANS ACADEMY</h3>
                    <p style={{ ...descStyle, fontStyle: "italic", fontSize: "13.5px", color: "#d4d4d4", margin: "10px 0 15px 0" }}>
                      "Edutech platform elevating careers through innovative testing solutions and practical skill development for BPO roles and study abroad programs."
                    </p>
                    <span style={{ color: "#a3a3a3", fontSize: "12px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "15px" }}>
                      {t("label_founder")} ANJALI DESAI
                    </span>
                    <a 
                      href="https://share.google/lJSFpeOUojhB3vUje" 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        background: "#00cc66",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "13px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        letterSpacing: "0.5px",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#00b359"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "#00cc66"}
                    >
                      {t("btn_visit_website")} <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industrial In-House Modal */}
      <AnimatePresence>
        {isIndustrialModalOpen && (
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
            onClick={() => setIsIndustrialModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsIndustrialModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", margin: "0 0 10px 0", textAlign: "center" }}>
                  {t("feat_industrial_title")}
                </h2>

                {/* 1. Infosys */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaCode style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_co_infosys_title")}</h3>
                  <p style={descStyle}>{t("feat_co_infosys_desc")}</p>
                </div>

                {/* 2. Stellium */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaCubes style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_co_stellium_title")}</h3>
                  <p style={descStyle}>{t("feat_co_stellium_desc")}</p>
                </div>

                {/* 3. Kakunje Software */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaLaptopCode style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_co_kakunje_title")}</h3>
                  <p style={descStyle}>{t("feat_co_kakunje_desc")}</p>
                </div>

                {/* 4. Metasoft */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaServer style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_co_metasoft_title")}</h3>
                  <p style={descStyle}>{t("feat_co_metasoft_desc")}</p>
                </div>

                {/* 5. StraeCon */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaNetworkWired style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_co_strae_title")}</h3>
                  <p style={descStyle}>{t("feat_co_strae_desc")}</p>
                </div>

                {/* 4. Industry Skill Centers */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaIndustry style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_co_toyota_title")}</h3>
                  <p style={descStyle}>{t("feat_co_toyota_desc")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* College Events Modal */}
      <AnimatePresence>
        {isEventsModalOpen && (
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
            onClick={() => setIsEventsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsEventsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", margin: "0 0 10px 0", textAlign: "center" }}>
                  {t("feat_events_title")}
                </h2>

                {/* 1. Alva's Nudisiri */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBook style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_evt_nudisiri_title")}</h3>
                  <p style={descStyle}>{t("feat_evt_nudisiri_desc")}</p>
                </div>

                {/* 2. Alva's Virasat */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaGlassCheers style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_evt_virasat_title")}</h3>
                  <p style={descStyle}>{t("feat_evt_virasat_desc")}</p>
                </div>

                {/* 3. Alva's Pragati */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaBriefcase style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_evt_pragati_title")}</h3>
                  <p style={descStyle}>{t("feat_evt_pragati_desc")}</p>
                </div>

                {/* 2. Technical Symposium */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaLaptopCode style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_evt_tech_title")}</h3>
                  <p style={descStyle}>{t("feat_evt_tech_desc")}</p>
                </div>

                {/* 3. Sports & Athletics */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaTrophy style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_evt_sports_title")}</h3>
                  <p style={descStyle}>{t("feat_evt_sports_desc")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Clubs Modal */}
      <AnimatePresence>
        {isClubsModalOpen && (
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
            onClick={() => setIsClubsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsClubsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", margin: "0 0 10px 0", textAlign: "center" }}>
                  {t("feat_clubs_title")}
                </h2>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "15px"
                }}>
                  {["ASTRONOMY CLUB (ALVA'S SPACE EXPLORERS)", "CAMPUS NEWS & MAGAZINE CLUB", "CHIRPP CLUB", "CULTURAL CLUB (FINE ARTS, DRAMATICS)", "DHWANI TEAM", "DOLLU KUNITHA", "IMAGE - IN CLUB", "KANNADA SANGHA", "NCC (AIR FORCE)", "NCC (ARMY)", "NCC (NAVY)", "NSS (SWACHH MIJAR AND RED CROSS)", "PUBLIC SPEAKING CLUB", "READERS CLUB", "ROSTRUM CLUB", "ROVERS AND RANGERS", "SAMSKRUTHA CLUB", "SINGARIMELA (CHANDE)", "SPORTS AND ATHLETICS CLUB (JOGGERS CLUB)", "SRISHTI CLUB", "TULU SANGHA", "WOMEN EMPOWERMENT CELL"].map((club, idx) => (
                    <div 
                      key={idx}
                      style={{
                        background: "rgba(30, 30, 30, 0.8)",
                        border: "1px solid rgba(255, 204, 0, 0.2)",
                        borderRadius: "12px",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <FaUsers style={{ color: "#ffcc00", fontSize: "20px", flexShrink: 0 }} />
                      <span style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px" }}>{club}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sports & Athletics Infrastructure Modal */}
      <AnimatePresence>
        {isSportsModalOpen && (
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
            onClick={() => setIsSportsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1100px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "transparent",
                scrollbarWidth: "none"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsSportsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
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
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                padding: "60px 10px 20px 10px"
              }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", margin: "0 0 10px 0", textAlign: "center" }}>
                  {t("feat_sports_modal_title")}
                </h2>

                {/* 1. Swimming Pool */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaSwimmer style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_pool_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_pool_desc")}</p>
                </div>

                {/* 2. Badminton Court */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <GiTennisCourt style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_badm_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_badm_desc")}</p>
                </div>

                {/* 3. Synthetic Athletic Track */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaRunning style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_track_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_track_desc")}</p>
                </div>

                {/* 4. Football Ground */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaTrophy style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_football_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_football_desc")}</p>
                </div>

                {/* 5. Volleyball Court */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaMedal style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_volleyball_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_volleyball_desc")}</p>
                </div>

                {/* 6. Kabaddi Mat */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaUsers style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_kabaddi_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_kabaddi_desc")}</p>
                </div>

                {/* 7. Indoor Games & Gym */}
                <div 
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaDumbbell style={iconStyle} />
                  <h3 style={cardTitleStyle}>{t("feat_sports_gym_title")}</h3>
                  <p style={descStyle}>{t("feat_sports_gym_desc")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
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
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              zIndex: 100000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setZoomedImage(null)}
          >
            <button 
              onClick={() => setZoomedImage(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "40px",
                cursor: "pointer",
                zIndex: 100001
              }}
            >
              &times;
            </button>
            
            {/* Prev Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(prev => ({
                  ...prev,
                  index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1
                }));
              }}
              style={{
                position: "absolute",
                left: "20px",
                background: "rgba(255,204,0,0.2)",
                border: "1px solid rgba(255,204,0,0.5)",
                color: "#ffcc00",
                fontSize: "30px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 100001,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "background 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,204,0,0.4)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,204,0,0.2)"}
            >
              &#10094;
            </button>

            <motion.img 
              key={zoomedImage.index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              src={zoomedImage.images[zoomedImage.index]}
              alt="Zoomed Photo"
              style={{
                maxWidth: "85vw",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 0 30px rgba(0,0,0,0.8)"
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(prev => ({
                  ...prev,
                  index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1
                }));
              }}
              style={{
                position: "absolute",
                right: "20px",
                background: "rgba(255,204,0,0.2)",
                border: "1px solid rgba(255,204,0,0.5)",
                color: "#ffcc00",
                fontSize: "30px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 100001,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "background 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,204,0,0.4)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,204,0,0.2)"}
            >
              &#10095;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}