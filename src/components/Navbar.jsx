import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaCaretDown, FaUserShield } from "react-icons/fa";
import logo from "../assets/logo.webp";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplyDropdownOpen, setIsApplyDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const btnStyle = {
    background: "linear-gradient(135deg, #ff9900, #ff5500)",
    color: "#000000",
    padding: "6px 16px",
    borderRadius: "20px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "13px",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 15px rgba(255, 85, 0, 0.2)",
    transition: "transform 0.2s, opacity 0.2s",
    height: "36px",
    display: "inline-flex",
    alignItems: "center",
    boxSizing: "border-box"
  };

  const navLinks = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_virtual_tour"), path: "/virtual-tour" },
    { name: t("nav_placements"), path: "/placements" },
    { name: t("nav_research"), path: "/research" },
    { name: t("nav_vision"), path: "/vision-mission" },
    { name: t("nav_contact"), path: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      <Link to="/" className="navbar-left">
        <img src={logo} alt="AIET Logo" className="logo-img" />
        <span className="logo-text">AIET</span>
      </Link>

      <ul className="navbar-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <LanguageSwitcher />

        {/* Admin Portal Quick Link */}
        <Link
          to="/admin/login"
          className="admin-nav-link"
          style={{
            color: "#ffcc00",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            height: "36px",
            boxSizing: "border-box",
            borderRadius: "20px",
            border: "1px solid rgba(255, 204, 0, 0.4)",
            background: "rgba(255, 204, 0, 0.08)",
            whiteSpace: "nowrap"
          }}
        >
          <FaUserShield /> {t("nav_admin")}
        </Link>

        <div 
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsApplyDropdownOpen(true)}
          onMouseLeave={() => setIsApplyDropdownOpen(false)}
        >
          <button
            className="apply-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsApplyDropdownOpen(!isApplyDropdownOpen);
            }}
            style={{
              ...btnStyle,
              border: "none",
              cursor: "pointer",
              gap: "6px"
            }}
          >
            {t("nav_apply")} <FaCaretDown />
          </button>

          <AnimatePresence>
            {isApplyDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "12px",
                  background: "rgba(15, 15, 15, 0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(128, 0, 0, 0.3)",
                  borderRadius: "12px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "150px",
                  zIndex: 1001,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
              >
                <Link 
                  to="/admission" 
                  style={{ 
                    color: "#fff", 
                    textDecoration: "none", 
                    padding: "10px 14px", 
                    fontSize: "14px", 
                    fontWeight: "500",
                    borderRadius: "8px", 
                    transition: "all 0.2s",
                    display: "block"
                  }} 
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 153, 0, 0.15)"; e.currentTarget.style.color = "#ff9900"; }} 
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }} 
                  onClick={() => setIsApplyDropdownOpen(false)}
                >
                  {t("nav_ug_adm")}
                </Link>
                <Link 
                  to="/pg-admission" 
                  style={{ 
                    color: "#fff", 
                    textDecoration: "none", 
                    padding: "10px 14px", 
                    fontSize: "14px", 
                    fontWeight: "500",
                    borderRadius: "8px", 
                    transition: "all 0.2s",
                    display: "block"
                  }} 
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 153, 0, 0.15)"; e.currentTarget.style.color = "#ff9900"; }} 
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }} 
                  onClick={() => setIsApplyDropdownOpen(false)}
                >
                  {t("nav_pg_adm")}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-dropdown"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "10px", marginTop: "5px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "12px", color: "#ff9900", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", textAlign: "center" }}>{t("nav_apply")}</span>
              <Link
                to="/admission"
                style={{ color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: "500", textAlign: "center", padding: "6px" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav_ug_adm")}
              </Link>
              <Link
                to="/pg-admission"
                style={{ color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: "500", textAlign: "center", padding: "6px" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav_pg_adm")}
              </Link>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px", marginTop: "5px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
              <LanguageSwitcher />
            </div>

            <Link
              to="/admin/login"
              style={{ color: "#ffcc00", fontWeight: "600", padding: "10px 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "5px" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUserShield /> {t("nav_admin_portal")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}