import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImages, FaSearchPlus, FaTimes, FaBuilding } from 'react-icons/fa';

export default function Placements() {
  const { t } = useLanguage();
  const [isMilestonesModalOpen, setIsMilestonesModalOpen] = useState(false);
  const [isCompaniesModalOpen, setIsCompaniesModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  
  const metrics = [
    { label: t("place_high_ctc"), value: "₹36.00 LPA", desc: t("place_high_desc") },
    { label: t("place_sec_ctc"), value: "₹21.00 LPA", desc: t("place_sec_desc") },
    { label: t("place_avg_ctc"), value: "₹4.20 LPA", desc: t("place_avg_desc") },
    { label: t("place_corp"), value: "325+ Firms", desc: t("place_corp_desc") }
  ];

  const companies = [
    { name: "Visa", logoUrl: "/logos/visa.svg", featured: true },
    { name: "Accord", logoUrl: "/logos/accord.webp", featured: true },
    { name: "Nandi Toyota", logoUrl: "/logos/nandi-toyota.webp", featured: true },
    { name: "iWave Systems", logoUrl: "/logos/iwave.webp", featured: true },
    { name: "Cognizant", logoUrl: "/logos/cognizant.webp", featured: true },
    { name: "Juego Studios", logoUrl: "/logos/juego-studios.webp", featured: true },
    { name: "Manipal Group", logoUrl: "/logos/manipal-group.webp", featured: true },
    { name: "Innova Diesel", logoUrl: "/logos/innova-diesel.webp", featured: true },
    { name: "Ninjacart", logoUrl: "/logos/ninjacart.webp", featured: true },
    { name: "Medpac", logoUrl: "/logos/medpac.webp", featured: true },
    { name: "Pratian Technologies", logoUrl: "/logos/pratian.webp", featured: true },
    { name: "Mitsubishi Elevators", logoUrl: "/logos/mitsubishi-elevators.webp", featured: true },
    { name: "Royal Arabian", logoUrl: "/logos/royal-arabian.webp", featured: true },
    { name: "Net Connect", logoUrl: "/logos/net-connect.webp", featured: true },
    { name: "Nidec", logoUrl: "/logos/nidec.webp", featured: true },
    { name: "Mobinius", logoUrl: "/logos/mobinius.webp", featured: true },
    { name: "Oracle", logoUrl: "/logos/oracle.webp", featured: true },
    { name: "Subex", logoUrl: "/logos/subex.webp", featured: true },
    { name: "QualityKiosk", logoUrl: "/logos/qualitykiosk.webp", featured: true },
    { name: "Nuware", logoUrl: "/logos/nuware.webp", featured: true },
    { name: "SSI", logoUrl: "/logos/ssi.webp", featured: true },
    { name: "Mylan", logoUrl: "/logos/mylan.webp", featured: true },
    { name: "Tietoevry", logoUrl: "/logos/tietoevry.webp", featured: true },
    { name: "Sogefi Group", logoUrl: "/logos/sogefi-group.webp", featured: true },
    { name: "Wipro", logoUrl: "/logos/wipro.webp", featured: true },
    { name: "TTE India", logoUrl: "/logos/tte-india.webp", featured: true },
    { name: "VMware", logoUrl: "/logos/vmware.webp", featured: true },
    { name: "42Gears", logoUrl: "/logos/42gears.webp", featured: true },
    { name: "Smartlink", logoUrl: "/logos/smartlink.webp", featured: true },
    { name: "Amazon", logoUrl: "/logos/amazon.webp", featured: true },
    { name: "SAP", logoUrl: "/logos/sap.webp", featured: true },
    { name: "KPIT", logoUrl: "/logos/kpit.webp", featured: true },
    { name: "SLK Software", logoUrl: "/logos/slk-software.webp", featured: true },
    { name: "PathFront", logoUrl: "/logos/pathfront.webp", featured: true },
    { name: "Robosoft", logoUrl: "/logos/robosoft.webp", featured: true },
    { name: "Tessolve", logoUrl: "/logos/tessolve.webp", featured: true },
    { name: "Bosch", logoUrl: "/logos/bosch.webp", featured: true },
    { name: "TCS", logoUrl: "/logos/tcs.webp", featured: true },
    { name: "Strata", logoUrl: "/logos/strata.webp", featured: true },
    { name: "TEKsystems", logoUrl: "/logos/teksystems.webp", featured: true },
    { name: "Sunrise Biztech", logoUrl: "/logos/sunrise-biztech.webp", featured: true },
    { name: "Virtusa", logoUrl: "/logos/virtusa.webp", featured: true },
    { name: "Amphisoft", logoUrl: "/logos/amphisoft.webp", featured: true },
    { name: "ZoomTail", logoUrl: "/logos/zoomtail.webp", featured: true },
    { name: "United Rubber", logoUrl: "/logos/united-rubber.webp", featured: true },
    { name: "TSTS", logoUrl: "/logos/tsts.webp", featured: true },
    { name: "Ageina", logoUrl: "/logos/ageina.webp", featured: true },
    { name: "Refinitiv", logoUrl: "/logos/refinitiv.webp", featured: true },
    { name: "Vee Technologies", logoUrl: "/logos/vee-technologies.webp", featured: true },
    { name: "Tayana Software", logoUrl: "/logos/tayana-software.webp", featured: true },
    { name: "Swiggy", logoUrl: "/logos/swiggy.webp", featured: true },
    { name: "Ashwin Precision", logoUrl: "/logos/ashwin-precision.webp", featured: true },
    { name: "Alpha 9", logoUrl: "/logos/alpha9.webp", featured: true },
    { name: "Aarbee Structures", logoUrl: "/logos/aarbee.webp", featured: true },
    { name: "British Biologicals", logoUrl: "/logos/british-biologicals.webp", featured: true },
    { name: "Syngene", logoUrl: "/logos/syngene.webp", featured: true },
    { name: "Torry Harris", logoUrl: "/logos/torry-harris.webp", featured: true },
    { name: "ArisGlobal", logoUrl: "/logos/arisglobal.webp", featured: true },
    { name: "Kaynes Technology", logoUrl: "/logos/kaynes.webp", featured: true },
    { name: "NTT Data", logoUrl: "/logos/ntt-data.webp", featured: true },
    { name: "Faurecia", logoUrl: "/logos/faurecia.webp", featured: true },
    { name: "Indian Armed Forces", logoUrl: "/logos/indian-armed-forces.webp", featured: true },
    { name: "Kadamb Steels", logoUrl: "/logos/kadamb-steels.webp", featured: true },
    { name: "Novo Nordisk", logoUrl: "/logos/novo-nordisk.webp", featured: true },
    { name: "FACE", logoUrl: "/logos/face.webp", featured: true },
    { name: "Informatica", logoUrl: "/logos/informatica.webp", featured: true },
    { name: "Infosys", logoUrl: "/logos/infosys.webp", featured: true },
    { name: "EverestIMS", logoUrl: "/logos/everestims.webp", featured: true },
    { name: "Hexaware", logoUrl: "/logos/hexaware.webp", featured: true },
    { name: "Ribbon Communications", logoUrl: "/logos/ribbon.webp", featured: true },
    { name: "Tech Mahindra", logoUrl: "/logos/tech-mahindra.webp", featured: true },
    { name: "Aspiring Minds", logoUrl: "/logos/aspiring-minds.webp", featured: true },
    { name: "Automotive Axles", logoUrl: "/logos/automotive-axles.webp", featured: true },
    { name: "Sasken", logoUrl: "/logos/sasken.webp", featured: true },
    { name: "Kotak Mahindra Bank", logoUrl: "/logos/kotak.webp", featured: true },
    { name: "Indo-MIM", logoUrl: "/logos/indo-mim.webp", featured: true },
    { name: "Digicall", logoUrl: "/logos/digicall.webp", featured: true },
    { name: "Accenture", logoUrl: "/logos/accenture.webp", featured: true },
    { name: "Solugenix", logoUrl: "/logos/solugenix.webp", featured: true },
    { name: "CMS IT Services", logoUrl: "/logos/cms.webp", featured: true },
    { name: "Jaro Education", logoUrl: "/logos/jaro.webp", featured: true },
    { name: "GICE", logoUrl: "/logos/gice.webp", featured: true },
    { name: "Kalpataru Power", logoUrl: "/logos/kalpataru.webp", featured: true },
    { name: "IBM", logoUrl: "/logos/ibm.webp", featured: true },
    { name: "Conzulere", logoUrl: "/logos/conzulere.webp", featured: true },
    { name: "Edureka", logoUrl: "/logos/edureka.webp", featured: true },
    { name: "Indian Navy", logoUrl: "/logos/indian-navy.webp", featured: true },
    { name: "Cadence", logoUrl: "/logos/cadence.webp", featured: true },
    { name: "Extramarks", logoUrl: "/logos/extramarks.webp", featured: true },
    { name: "Capgemini", logoUrl: "/logos/capgemini.webp", featured: true },
    { name: "EY", logoUrl: "/logos/ey.webp", featured: true },
    { name: "Demand NXT", logoUrl: "/logos/demand-nxt.webp", featured: true },
    { name: "Epic", logoUrl: "/logos/epic.webp", featured: true },
    { name: "LM Wind Power", logoUrl: "/logos/lm-wind-power.webp", featured: true },
    { name: "Captain Tractors", logoUrl: "/logos/captain.webp", featured: true },
    { name: "Novigo Solutions", logoUrl: "/logos/novigo.webp", featured: true },
    { name: "Mphasis", logoUrl: "/logos/mphasis.webp", featured: true },
    { name: "EASi", logoUrl: "/logos/easi.webp", featured: true },
    { name: "Maventic", logoUrl: "/logos/maventic.webp", featured: true },
    { name: "L&T Infotech", logoUrl: "/logos/lnt-infotech.webp", featured: true },
    { name: "Prakruti Products", logoUrl: "/logos/prakruti.webp", featured: true },
    { name: "Kreatio", logoUrl: "/logos/kreatio.webp", featured: true },
    { name: "Kambala Solutions", logoUrl: "/logos/kambala.webp", featured: true },
    { name: "CGI", logoUrl: "/logos/cgi.webp", featured: true },
    { name: "Elemental", logoUrl: "/logos/elemental.webp", featured: true },
    { name: "42hertz", logoUrl: "/logos/42hertz.webp", featured: true },
    { name: "[24]7.ai", logoUrl: "/logos/247-ai.webp", featured: true },
    { name: "Juspay", logoUrl: "/logos/juspay.webp", featured: true },
    { name: "Mu Sigma", logoUrl: "/logos/mu-sigma.webp", featured: true },
    { name: "L&T", logoUrl: "/logos/lnt.webp", featured: true },
    { name: "Straecon", logoUrl: "/logos/straecon.webp", featured: true },
    { name: "Odessa", logoUrl: "/logos/odessa.webp", featured: true },
    { name: "ICICI Bank", logoUrl: "/logos/icici.webp", featured: true },
    { name: "Axis Bank", logoUrl: "/logos/axis-bank.webp", featured: true },
    { name: "LSEG", logoUrl: "/logos/lseg.webp", featured: true },
    { name: "Toyota", logoUrl: "/logos/toyota.webp", featured: true },
    { name: "Grant Thornton", logoUrl: "/logos/grant-thornton.webp", featured: true },
    { name: "Asian Paints", logoUrl: "/logos/asian-paints.webp", featured: true },
    { name: "UltraTech Cement", logoUrl: "/logos/ultratech.webp", featured: true },
    { name: "FactSet", logoUrl: "/logos/factset.webp", featured: true },
    { name: "Withum", logoUrl: "/logos/withum.webp", featured: true },
    { name: "Ramco", logoUrl: "/logos/ramco.webp", featured: true },
    { name: "HashedIn", logoUrl: "/logos/hashedin.webp", featured: true },
    { name: "KPMG", logoUrl: "/logos/kpmg.webp", featured: true },
    { name: "Synopsys", logoUrl: "/logos/synopsys.webp", featured: true },
    { name: "HCL", logoUrl: "/logos/hcl.webp", featured: true },
    { name: "PwC", logoUrl: "/logos/pwc.webp", featured: true },
    { name: "Netmeds", logoUrl: "/logos/netmeds.webp", featured: true },
    { name: "HealthEdge", logoUrl: "/logos/healthedge.webp", featured: true },
    { name: "Blazeclan", logoUrl: "/logos/blazeclan.webp", featured: true },
    { name: "ThoughtClan", logoUrl: "/logos/thoughtclan.webp", featured: true },
    { name: "Mavenir", logoUrl: "/logos/mavenir.webp", featured: true },
    { name: "GainInsights", logoUrl: "/logos/gaininsights.webp", featured: true },
    { name: "Infinite", logoUrl: "/logos/infinite.webp", featured: true },
    { name: "Wipfli", logoUrl: "/logos/wipfli.webp", featured: true },
    { name: "Ajax", logoUrl: "/logos/ajax.webp", featured: true },
    { name: "CodeCraft", logoUrl: "/logos/codecraft.webp", domain: "codecraft.co.in", featured: true },
    { name: "Comviva", logoUrl: "/logos/comviva.webp", domain: "comviva.com", featured: true },
    { name: "Stellium", logoUrl: "/logos/stellium.webp", domain: "stellium.com", featured: true },
    { name: "EPAM", logoUrl: "/logos/epam.webp", domain: "epam.com", featured: true },
    { name: "SignDesk", logoUrl: "/logos/signdesk.webp", domain: "signdesk.com", featured: true },
    { name: "Sobha", logoUrl: "/logos/sobha.webp", domain: "sobha.com", featured: true },
    { name: "ANZ", logoUrl: "/logos/anz.webp", domain: "anz.com", featured: true },
    { name: "MResult", domain: "mresult.com" }, { name: "Lekha", domain: "lekhawireless.com" },
    { name: "Knowledge Lens", logoUrl: "/logos/knowledge-lens.webp", domain: "knowledgelens.com", featured: true },
    { name: "Infra Market", logoUrl: "/logos/infra-market.webp", domain: "infra.market", featured: true },
    { name: "Quest", logoUrl: "/logos/quest.webp", domain: "quest-global.com", featured: true },
    { name: "7Edge", domain: "7edge.com" }, { name: "Mitsubishi", domain: "mitsubishielectric.com" },
    { name: "Edelweiss", domain: "edelweissfin.com" },
    { name: "Nidec", domain: "nidec.com" }, { name: "Sanria", domain: "sanria.com" },
    { name: "Expertise", domain: "expertise.in" },
    { name: "Nagarro", domain: "nagarro.com" }, { name: "aCorp", domain: "acorp.com" },
    { name: "Berger", domain: "bergerpaints.com" }
  ];

  const containerStyle = {
    width: "100%", 
    maxWidth: "1400px", 
    margin: "0 auto", 
    padding: "clamp(90px, 12vh, 120px) clamp(12px, 3vw, 20px) 60px clamp(12px, 3vw, 20px)",
    boxSizing: "border-box", 
    minHeight: "100vh", 
    backgroundColor: "transparent", 
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif"
  };

  const cardStyle = {
    flex: "1 1 200px", 
    maxWidth: "100%", 
    background: "rgba(20, 20, 20, 0.8)", 
    border: "1px solid rgba(128, 0, 0, 0.3)", 
    borderRadius: "16px", 
    padding: "25px", 
    textAlign: "center",
    transition: "transform 0.2s, border-color 0.2s"
  };

  const companyBadgeStyle = {
    background: "rgba(255, 255, 255, 0.95)", // White background for logos
    border: "2px solid rgba(128, 0, 0, 0.2)", 
    padding: "8px 16px", 
    borderRadius: "12px", 
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#0a0a0a", 
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  };

  const placementFeatures = [
    t("place_feat_1"),
    t("place_feat_2"),
    t("place_feat_3"),
    t("place_feat_4"),
    t("place_feat_5"),
    t("place_feat_6"),
    t("place_feat_7"),
    t("place_feat_8"),
    t("place_feat_9")
  ];

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("place_title")}</h1>
        <p style={{ color: "#a3a3a3", margin: 0 }}>{t("place_subtitle")}</p>
      </div>

      {/* Metrics Layout Block */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px" }}>
        {metrics.map((m, idx) => (
          <div 
            key={idx} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#ffcc00", textTransform: "uppercase", margin: "0 0 8px 0", fontWeight: "600" }}>{m.label}</h3>
            <h1 style={{ fontSize: "32px", fontWeight: "700", margin: "0 0 5px 0", color: "#ffffff" }}>{m.value}</h1>
            <p style={{ color: "#d4d4d4", fontSize: "13px", margin: 0 }}>{m.desc}</p>
          </div>
        ))}
      </div>

      {/* {t("place_why_aiet")} */}
      <div style={{
        marginBottom: "60px",
        background: "rgba(20, 20, 20, 0.8)",
        border: "1px solid rgba(128, 0, 0, 0.4)",
        borderRadius: "20px",
        padding: "45px 35px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#ffcc00", marginBottom: "12px" }}>
            {t("place_why_aiet")}
          </h2>
          <p style={{ color: "#a3a3a3", fontSize: "16px", maxWidth: "850px", margin: "0 auto" }}>
            {t("place_ecosystem_subtitle")}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px"
        }}>
          {placementFeatures.map((feat, idx) => (
            <div 
              key={idx}
              style={{
                background: "rgba(30, 30, 30, 0.7)",
                border: "1px solid rgba(255, 204, 0, 0.2)",
                borderRadius: "14px",
                padding: "20px 22px",
                display: "flex",
                alignItems: "flex-start",
                gap: "15px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.6)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "rgba(40, 40, 40, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(30, 30, 30, 0.7)";
              }}
            >
              <div style={{
                minWidth: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff9900, #ff5500)",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "14px",
                marginTop: "2px",
                flexShrink: 0
              }}>
                ✓
              </div>
              <p style={{ color: "#e5e5e5", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "500" }}>
                {feat}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Recruiter Track */}
      <div style={{ marginBottom: "60px", background: "linear-gradient(135deg, rgba(128, 0, 0, 0.15), rgba(255, 255, 255, 0.05))", border: "1px solid rgba(255, 204, 0, 0.3)", borderRadius: "20px", padding: "40px 20px", textAlign: "center", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", color: "#ffcc00", fontWeight: "700", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>{t("place_prom_title")}</h2>
        <p style={{ color: "#ffffff", fontSize: "16px", marginBottom: "35px", maxWidth: "800px", margin: "0 auto 35px auto", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>{t("place_prom_subtitle")}</p>
        
        {/* Top Prominent Companies Preview (Top 24 Featured Companies) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center", maxWidth: "1100px", margin: "0 auto" }}>
          {companies.slice(0, 24).map((c, idx) => (
            <div 
              key={idx} 
              style={{
                ...companyBadgeStyle,
                border: "2px solid #ffcc00",
                boxShadow: "0 0 12px rgba(255, 204, 0, 0.4)",
                background: "#ffffff"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 204, 0, 1)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(255, 204, 0, 0.6), 0 0 20px rgba(255, 204, 0, 0.4)";
                e.currentTarget.style.transform = "translateY(-8px) scale(1.15)";
                e.currentTarget.style.zIndex = "20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ffcc00";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(255, 204, 0, 0.4)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.zIndex = "1";
              }}
            >
              <img 
                src={c.logoUrl || `https://logo.clearbit.com/${c.domain}`} 
                alt={`${c.name} logo`} 
                style={{ width: "28px", height: "28px", objectFit: "contain" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {c.name}
            </div>
          ))}
        </div>

        {/* View All Hiring Partners Button */}
        <div style={{ marginTop: "35px" }}>
          <button
            onClick={() => setIsCompaniesModalOpen(true)}
            style={{
              padding: "16px 36px",
              borderRadius: "30px",
              border: "2px solid #ffcc00",
              background: "linear-gradient(135deg, #ff9900, #ff5500)",
              color: "#000000",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 6px 25px rgba(255, 153, 0, 0.4)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 10px 35px rgba(255, 204, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 25px rgba(255, 153, 0, 0.4)";
            }}
          >
            <FaBuilding style={{ fontSize: "20px" }} />
            {t("place_view_all_partners")}
          </button>
        </div>
      </div>

      {/* Full Hiring Partners Modal */}
      <AnimatePresence>
        {isCompaniesModalOpen && (
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
              backgroundColor: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(12px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}
            onClick={() => setIsCompaniesModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1200px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "rgba(18, 18, 18, 0.98)",
                border: "2px solid #ffcc00",
                borderRadius: "24px",
                padding: "45px 25px 30px 25px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
                scrollbarWidth: "thin"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsCompaniesModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#141414",
                  border: "2px solid #ffcc00",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  color: "#ffcc00",
                  fontSize: "22px",
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

              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", marginBottom: "8px", textAlign: "center" }}>
                {t("place_prom_title")}
              </h2>
              <p style={{ color: "#a3a3a3", fontSize: "14px", textAlign: "center", marginBottom: "30px" }}>
                {t("place_modal_subtitle")}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
                {companies.map((c, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      ...companyBadgeStyle,
                      ...(c.featured ? {
                        border: "2px solid #ffcc00",
                        boxShadow: "0 0 10px rgba(255, 204, 0, 0.3)",
                        background: "#ffffff"
                      } : {})
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 204, 0, 1)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 204, 0, 0.5), 0 0 15px rgba(255, 204, 0, 0.3)";
                      e.currentTarget.style.transform = "translateY(-6px) scale(1.15)";
                      e.currentTarget.style.zIndex = "20";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = c.featured ? "#ffcc00" : "rgba(128, 0, 0, 0.2)";
                      e.currentTarget.style.boxShadow = c.featured ? "0 0 10px rgba(255, 204, 0, 0.3)" : "none";
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.zIndex = "1";
                    }}
                  >
                    <img 
                      src={c.logoUrl || `https://logo.clearbit.com/${c.domain}`} 
                      alt={`${c.name} logo`} 
                      style={{ width: c.logoUrl ? "28px" : "24px", height: c.logoUrl ? "28px" : "24px", objectFit: "contain" }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {c.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Placement Milestones Section */}
      <div style={{ textAlign: "center", background: "rgba(20, 20, 20, 0.6)", padding: "40px 20px", borderRadius: "20px", border: "1px solid rgba(128, 0, 0, 0.2)" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", color: "#ffcc00", fontWeight: "700", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
          {t("place_recent_milestones")}
        </h2>
        <p style={{ color: "#a3a3a3", fontSize: "15px", maxWidth: "600px", margin: "0 auto 30px auto", lineHeight: "1.5" }}>
          {t("place_recent_subtitle")}
        </p>

        {/* Action Button */}
        <button
          onClick={() => setIsMilestonesModalOpen(true)}
          style={{
            padding: "16px 36px",
            borderRadius: "30px",
            border: "2px solid #ffcc00",
            background: "linear-gradient(135deg, #ff9900, #ff5500)",
            color: "#000000",
            fontSize: "17px",
            fontWeight: "700",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 6px 25px rgba(255, 153, 0, 0.4)",
            transition: "all 0.3s ease",
            marginBottom: "35px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
            e.currentTarget.style.boxShadow = "0 10px 35px rgba(255, 204, 0, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 25px rgba(255, 153, 0, 0.4)";
          }}
        >
          <FaImages style={{ fontSize: "22px" }} />
          {t("place_view_posters")}
        </button>

        {/* Teaser Preview Grid (4 Posters) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "1000px", margin: "0 auto" }}>
          {["visa_36lpa.jpg", "p1.webp", "p2.webp", "p3.webp"].map((src, idx) => (
            <div 
              key={idx}
              onClick={() => setZoomedImage(`/placements/${src}`)}
              style={{
                width: "100%",
                height: "260px",
                borderRadius: "14px",
                border: src === "visa_36lpa.jpg" ? "2px solid #ffcc00" : "2px solid rgba(255, 204, 0, 0.3)",
                boxShadow: src === "visa_36lpa.jpg" ? "0 8px 25px rgba(255, 204, 0, 0.4)" : "0 8px 20px rgba(0,0,0,0.6)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#ffcc00";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(255, 204, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = src === "visa_36lpa.jpg" ? "#ffcc00" : "rgba(255, 204, 0, 0.3)";
                e.currentTarget.style.boxShadow = src === "visa_36lpa.jpg" ? "0 8px 25px rgba(255, 204, 0, 0.4)" : "0 8px 20px rgba(0,0,0,0.6)";
              }}
            >
              {src === "visa_36lpa.jpg" && (
                <div style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "linear-gradient(135deg, #ffcc00, #ff9900)",
                  color: "#000",
                  fontWeight: "800",
                  fontSize: "11px",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  zIndex: 2
                }}>
                  ⭐ 36 LPA • VISA
                </div>
              )}
              <img 
                src={`/placements/${src}`} 
                alt={`Placement preview ${idx + 1}`} 
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.3)",
                opacity: 0,
                transition: "opacity 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffcc00",
                fontSize: "24px"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
              >
                <FaSearchPlus />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {isMilestonesModalOpen && (
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
              backgroundColor: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(12px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}
            onClick={() => setIsMilestonesModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                position: "relative", 
                width: "95%", 
                maxWidth: "1200px", 
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "rgba(18, 18, 18, 0.98)",
                border: "2px solid #ffcc00",
                borderRadius: "24px",
                padding: "45px 25px 25px 25px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
                scrollbarWidth: "thin"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsMilestonesModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#141414",
                  border: "2px solid #ffcc00",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  color: "#ffcc00",
                  fontSize: "22px",
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

              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffcc00", marginBottom: "8px", textAlign: "center" }}>
                {t("place_recent_milestones")}
              </h2>
              <p style={{ color: "#a3a3a3", fontSize: "14px", textAlign: "center", marginBottom: "30px" }}>
                {t("place_click_poster")}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                {[
                  "visa_36lpa.jpg",
                  "p1.webp", "p2.webp", "p3.webp", "p4.webp", "p6.webp", "p7.webp", "p8.webp", 
                  "p9.webp", "p10.webp", "p11.webp", "p12.webp", "p13.webp", "p14.webp", 
                  "p15.webp", "p16.webp", "p17.webp", "p18.webp", "p19.webp", "p20.webp",
                  "p21.webp", "p22.webp", "p23.webp", "p24.webp", "p25.webp", "p26.webp", "p27.webp"
                ].map((src, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setZoomedImage(`/placements/${src}`)}
                    style={{
                      width: "100%",
                      height: "280px",
                      borderRadius: "12px",
                      border: src === "visa_36lpa.jpg" ? "2px solid #ffcc00" : "1px solid rgba(255, 204, 0, 0.3)",
                      boxShadow: src === "visa_36lpa.jpg" ? "0 4px 20px rgba(255, 204, 0, 0.35)" : "none",
                      backgroundColor: "#ffffff",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      position: "relative"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.borderColor = "#ffcc00";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = src === "visa_36lpa.jpg" ? "#ffcc00" : "rgba(255, 204, 0, 0.3)";
                    }}
                  >
                    {src === "visa_36lpa.jpg" && (
                      <div style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        background: "linear-gradient(135deg, #ffcc00, #ff9900)",
                        color: "#000",
                        fontWeight: "800",
                        fontSize: "11px",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        zIndex: 2
                      }}>
                        ⭐ 36 LPA • VISA
                      </div>
                    )}
                    <img src={`/placements/${src}`} alt={`Milestone poster ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Image Zoom Modal */}
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
              backdropFilter: "blur(15px)",
              zIndex: 100000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setZoomedImage(null)}
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  background: "#141414",
                  border: "2px solid #ffcc00",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  color: "#ffcc00",
                  fontSize: "24px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 100001,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                &times;
              </button>
              <img 
                src={zoomedImage} 
                alt="Placement Poster Full Resolution" 
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: "12px",
                  border: "2px solid #ffcc00",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.9)"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}