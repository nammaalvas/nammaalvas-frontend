import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { API_BASE_URL } from '../config/api';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(t("contact_status_sending"));

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage(t("contact_status_success"));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage(`${t("contact_status_fail")} ${data.error}`);
      }
    } catch (error) {
      setStatusMessage(t("contact_status_error"));
    }
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "clamp(90px, 12vh, 120px) clamp(12px, 3vw, 20px) 60px clamp(12px, 3vw, 20px)",
    boxSizing: "border-box",
    minHeight: "100vh",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif"
  };



  const blockStyle = {
    display: "flex",
    gap: "20px",
    background: "rgba(20, 20, 20, 0.9)",
    border: "1px solid rgba(255, 153, 0, 0.2)",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "20px",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.2s, border-color 0.2s"
  };

  const interactiveBlockStyle = {
    ...blockStyle,
    cursor: "pointer"
  };

  const linkActionStyle = {
    color: "#ff9900",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    display: "inline-block",
    marginTop: "8px",
    transition: "color 0.2s"
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("contact_title")}</h1>
        <p style={{ color: "#a3a3a3", margin: 0 }}>{t("contact_subtitle")}</p>
      </div>

      <div className="contact-grid" style={{ marginTop: "30px" }}>
        {/* Contact Info Channels */}
        <div>
          {/* 1. Google Maps Direct Link */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Alvas+Institute+of+Engineering+and+Technology+Mijar"
            target="_blank"
            rel="noopener noreferrer"
            style={interactiveBlockStyle}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#ff9900"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.2)"}
          >
            <div style={{ fontSize: "24px", color: "#ff9900" }}><FaMapMarkerAlt /></div>
            <div>
              <h3 style={{ margin: "0 0 5px 0", fontSize: "18px", color: "#ffffff" }}>{t("contact_loc_title")}</h3>
              <p style={{ color: "#d4d4d4", fontSize: "15px", margin: 0, lineHeight: "1.5" }}>
                {t("contact_loc_desc")}
              </p>
              <span style={linkActionStyle}>{t("contact_loc_link")}</span>
            </div>
          </a>

          {/* 2. Call Direct Links */}
          <div style={blockStyle}>
            <div style={{ fontSize: "24px", color: "#ff9900" }}><FaPhoneAlt /></div>
            <div>
              <h3 style={{ margin: "0 0 5px 0", fontSize: "18px", color: "#ffffff" }}>{t("contact_hotline_title")}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <a href="tel:+918050585606" style={{ color: "#d4d4d4", textDecoration: "none", fontSize: "15px" }}>
                  📞 +91 80505 85606 <span style={{ color: "#ff9900", fontSize: "13px", marginLeft: "5px" }}>{t("contact_call_now")}</span>
                </a>
                <a href="tel:+919845050268" style={{ color: "#d4d4d4", textDecoration: "none", fontSize: "15px" }}>
                  📞 +91 98450 50268 <span style={{ color: "#ff9900", fontSize: "13px", marginLeft: "5px" }}>{t("contact_call_now")}</span>
                </a>
                <a href="tel:+919448458334" style={{ color: "#d4d4d4", textDecoration: "none", fontSize: "15px" }}>
                  📞 +91 94484 58334 <span style={{ color: "#ff9900", fontSize: "13px", marginLeft: "5px" }}>{t("contact_call_now")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Mailbox Composer Link */}
          <a
            href="mailto:principalaiet08@gmail.com"
            style={interactiveBlockStyle}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#ff9900"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.2)"}
          >
            <div style={{ fontSize: "24px", color: "#ff9900" }}><FaEnvelope /></div>
            <div>
              <h3 style={{ margin: "0 0 5px 0", fontSize: "18px", color: "#ffffff" }}>{t("contact_mail_title")}</h3>
              <p style={{ color: "#d4d4d4", fontSize: "15px", margin: 0 }}>
                principalaiet08@gmail.com
              </p>
              <span style={linkActionStyle}>{t("contact_mail_link")}</span>
            </div>
          </a>
        </div>

        {/* Message Input Module */}
        <div style={{ background: "rgba(20, 20, 20, 0.9)", padding: "35px", borderRadius: "20px", border: "1px solid rgba(255, 153, 0, 0.2)" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "#ffffff" }}>{t("contact_form_title")}</h2>

          {statusMessage && (
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              color: statusMessage.includes('❌') ? '#ff5500' : '#ffcc00',
              fontWeight: '600'
            }}>
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("contact_form_name")}
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "15px", boxSizing: "border-box", outline: "none"
              }}
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact_form_email")}
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "15px", boxSizing: "border-box", outline: "none"
              }}
              required
            />

            <textarea
              name="message"
              placeholder={t("contact_form_msg")}
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={{
                width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "15px", boxSizing: "border-box", outline: "none"
              }}
              required
            ></textarea>

            <button type="submit" style={{
              width: "100%", background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000000", padding: "14px", border: "none",
              borderRadius: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "0.3s"
            }}>{t("contact_form_btn")}</button>
          </form>
        </div>
      </div>
    </div>
  );
}