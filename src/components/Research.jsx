import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import publicationsData from '../data/isePublications.json';
import { useLanguage } from '../context/LanguageContext';

function getFormattedPublication(pub) {
  let title = pub.title || '';
  let authors = pub.authors || '';
  let journal = pub.journal || '';
  let link = pub.link || '';

  if (title.startsWith('http://') || title.startsWith('https://')) {
    link = title;
    if (journal && journal.length > 40 && journal.includes('.')) {
      const parts = journal.split('. ');
      if (parts.length >= 3) {
        authors = parts[0] + (parts[1] ? '. ' + parts[1] : '');
        title = parts[2] || parts[1];
        journal = (pub.authors && !pub.authors.startsWith('http')) ? pub.authors : 'Journal Article';
      } else {
        title = (pub.authors && !pub.authors.startsWith('http')) ? pub.authors : 'Research Publication';
        journal = 'Journal Article';
      }
    } else if (authors && !authors.startsWith('http')) {
      title = authors;
      authors = 'AIET Research Team';
      journal = journal || 'Journal Article';
    } else {
      title = 'Research Publication';
    }
  }

  if (authors.startsWith('http://') || authors.startsWith('https://')) {
    if (!link) link = authors;
    authors = 'AIET Research Team';
  }

  return {
    ...pub,
    displayTitle: title,
    displayAuthors: authors,
    displayJournal: journal,
    displayLink: link
  };
}

export default function Research() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const formattedPubs = publicationsData.map(getFormattedPublication);

  const filteredPubs = formattedPubs.filter(pub => {
    const term = searchTerm.toLowerCase();
    return (
      pub.displayTitle.toLowerCase().includes(term) ||
      pub.displayAuthors.toLowerCase().includes(term) ||
      pub.displayJournal.toLowerCase().includes(term) ||
      (pub.year && pub.year.toString().toLowerCase().includes(term))
    );
  });

  const containerStyle = {
    padding: "30px clamp(12px, 3vw, 24px) 80px clamp(12px, 3vw, 24px)",
    backgroundColor: "transparent",
    minHeight: "85vh",
    color: "#ffffff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
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
    marginBottom: "35px",
    maxWidth: "750px"
  };

  return (
    <div style={containerStyle}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={titleStyle}
      >
        {t("res_title")}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={subtitleStyle}
      >
        {t("res_subtitle")}
      </motion.p>

      {/* Publications Section */}
      <div style={{
        width: "100%",
        marginBottom: "60px",
        background: "rgba(20, 20, 20, 0.85)",
        border: "1px solid rgba(255, 204, 0, 0.25)",
        borderRadius: "24px",
        padding: "35px 28px",
        backdropFilter: "blur(12px)",
        boxSizing: "border-box",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)"
      }}>
        {/* Search Bar */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "35px"
        }}>
          <div style={{
            position: "relative",
            maxWidth: "550px",
            width: "100%"
          }}>
            <FaSearch style={{
              position: "absolute",
              left: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#ff9900",
              fontSize: "16px"
            }} />
            <input 
              type="text"
              placeholder={t("res_search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 20px 14px 48px",
                background: "rgba(30, 30, 30, 0.9)",
                border: "1px solid rgba(255, 204, 0, 0.4)",
                borderRadius: "30px",
                color: "#ffffff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
              }}
            />
          </div>
        </div>

        {/* Publications Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: "24px",
          textAlign: "left"
        }}>
          {filteredPubs.slice(0, visibleCount).map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 * (idx % 6) }}
              style={{
                background: "rgba(30, 30, 30, 0.75)",
                border: "1px solid rgba(255, 204, 0, 0.2)",
                borderRadius: "16px",
                padding: "22px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ flex: 1, display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{
                    background: "rgba(255, 153, 0, 0.15)",
                    color: "#ff9900",
                    border: "1px solid rgba(255, 153, 0, 0.3)",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "600",
                    whiteSpace: "nowrap"
                  }}>
                    {pub.type || "Journal"} ({pub.year})
                  </span>
                  {pub.quartile && (
                    <span style={{
                      background: "rgba(0, 200, 100, 0.15)",
                      color: "#00e676",
                      border: "1px solid rgba(0, 230, 118, 0.3)",
                      padding: "3px 8px",
                      borderRadius: "10px",
                      fontSize: "11px",
                      fontWeight: "700",
                      whiteSpace: "nowrap"
                    }}>
                      {pub.quartile}
                    </span>
                  )}
                </div>

                <h4 style={{
                  color: "#ffcc00",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "1.45",
                  marginBottom: "10px",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere"
                }}>
                  {pub.displayTitle}
                </h4>

                <p style={{
                  color: "#d4d4d4",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  margin: "0 0 8px 0",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere"
                }}>
                  <strong style={{ color: "#ffffff" }}>{t("res_authors")}</strong> {pub.displayAuthors}
                </p>
              </div>

              <div style={{
                marginTop: "auto",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                <p style={{
                  color: "#a3a3a3",
                  fontSize: "12px",
                  margin: 0,
                  wordBreak: "break-word",
                  overflowWrap: "anywhere"
                }}>
                  <strong style={{ color: "#d4d4d4" }}>{t("res_journal")}</strong> {pub.displayJournal}
                </p>

                {pub.displayLink && (
                  <a 
                    href={pub.displayLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#ff9900",
                      fontSize: "13px",
                      fontWeight: "600",
                      textDecoration: "none",
                      marginTop: "4px"
                    }}
                  >
                    {t("res_view_pub")} <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPubs.length === 0 && (
          <p style={{ color: "#a3a3a3", marginTop: "20px" }}>
            No publications found matching "{searchTerm}". Try searching for another topic or author.
          </p>
        )}

        {/* Load More Button */}
        {visibleCount < filteredPubs.length && (
          <button
            onClick={() => setVisibleCount(prev => prev + 12)}
            style={{
              marginTop: "40px",
              padding: "12px 30px",
              background: "linear-gradient(135deg, #ff9900, #ff5500)",
              color: "#000000",
              border: "none",
              borderRadius: "25px",
              fontWeight: "700",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(255, 153, 0, 0.3)",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {t("res_load_more")} ({filteredPubs.length - visibleCount})
          </button>
        )}
      </div>
    </div>
  );
}

