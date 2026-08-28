import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div 
      className="language-switcher"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        height: "36px",
        boxSizing: "border-box",
        whiteSpace: "nowrap"
      }}
    >
      <span style={{ fontSize: "13px", display: "flex", alignItems: "center" }}>🌐</span>
      <button 
        onClick={() => setLang('en')}
        style={{ 
          background: "none", 
          border: "none", 
          color: lang === 'en' ? "#ff9900" : "#a3a3a3", 
          fontWeight: lang === 'en' ? "700" : "500",
          cursor: "pointer",
          padding: 0,
          fontSize: "13px"
        }}>
        English
      </button>
      <span style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: "12px" }}>|</span>
      <button 
        onClick={() => setLang('kn')}
        style={{ 
          background: "none", 
          border: "none", 
          color: lang === 'kn' ? "#ff9900" : "#a3a3a3", 
          fontWeight: lang === 'kn' ? "700" : "500",
          cursor: "pointer",
          padding: 0,
          fontSize: "13px"
        }}>
        ಕನ್ನಡ
      </button>
    </div>
  );
}