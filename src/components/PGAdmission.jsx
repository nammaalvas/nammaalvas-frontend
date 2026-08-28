// import React, { useState } from 'react';
// import { 
//   FaArrowLeft, FaCalendarAlt, FaTicketAlt, FaChair, FaUserCheck, FaFileInvoice, FaCheckCircle, 
//   FaExclamationTriangle, FaVideo, FaBuilding, FaAward, FaEye, FaGraduationCap, 
//   FaChartLine, FaGlobe, FaHandshake, FaBullhorn, FaUsers, FaBookReader, FaLightbulb, 
//   FaTimes, FaLaptopCode, FaCoins, FaBriefcase 
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLanguage } from '../context/LanguageContext';

// const aboutMbaContent = {
//   en: {
//     badge: "Autonomous PG Program • AIET",
//     title: "ABOUT MBA - MASTER OF BUSINESS ADMINISTRATION",
//     intro: "The PG Department of Business Administration at Alva's Institute of Engineering & Technology is a vibrant centre of management education committed to academic excellence, research, industry integration, and holistic student development.",
//     intake: "Intake: 180 Seats",
//     duration: "Duration: 2 Years (4 Semesters)",
//     courses: "40 Comprehensive Courses",
//     lseg: "LSEG Lab On-Campus",
//     specHighlight: "Specialisations Highlight",
//     launchTitle: "Launch Your Future: Alva's MBA Program",
//     launchSubtitle: "Our intensive 2-year program allows you to specialise in high-demand corporate domains:",
//     finTitle: "Finance",
//     finDesc: "Master strategic investment, risk analysis, portfolio management, and corporate valuation.",
//     baTitle: "Business Analytics",
//     baDesc: "Leverage data-driven insights using Power BI, predictive modeling, and analytics platforms.",
//     mktTitle: "Marketing Management",
//     mktDesc: "Develop digital marketing strategies, brand positioning, and consumer research expertise.",
//     hrTitle: "Human Resources",
//     hrDesc: "Lead high-performing teams, talent acquisition, strategic HR, and organizational behavior.",
//     visionTitle: "Vision",
//     visionDesc: "To develop competent and ethical managers and entrepreneurs, sensitive to the environment and culture, responsible to their communities and global in their outlook and approach.",
//     missionTitle: "Mission",
//     mission1: "Provide necessary knowledge & skills for effective domain specialization.",
//     mission2: "Foster curiosity, leadership skills, and academic rigour grounded in the job market.",
//     mission3: "Adopt systems thinking to excel in a complex global environment.",
//     mission4: "Develop strong commitment to cross-cultural diversity and an entrepreneurial mindset.",
//     indTitle: "Industry Partnerships & Corporate Readiness",
//     indDesc: "Students undergo Industry-Integrated Training & Certification (ITTC), soft skills, aptitude training, and value-added certifications (Power BI, Digital Marketing, NISM, Advanced Excel, and Grant Thornton Certifications). The on-campus London Stock Exchange Group (LSEG) Lab provides real-time financial market analytics tools.",
//     mouTitle: "International MoUs",
//     mouDesc: "Partnerships with INTI International University & Spectrum International University, Malaysia for student/faculty exchange, joint research, and global networking.",
//     kcciTitle: "KCCI Industry Links",
//     kcciDesc: "Build valuable connections through the Kanara Chamber of Commerce and Industry (KCCI), giving graduates real-world skills and unique employer preference.",
//     bootcampTitle: "25-Day Residential Bootcamp",
//     bootcampDesc: "A 25-day intensive residential bootcamp covering accounting, finance, aptitude, digital marketing, HR, and lectures from industry experts.",
//     budgetTitle: "Union Budget Analysis",
//     budgetDesc: "Annual Post-Budget Analysis event with experts from Agriculture, SME, Banking, Defense, Manufacturing, and Income Tax offering financial insights.",
//     forumTitle: "Weekly Forum Activities",
//     forumDesc: "Student-driven weekly competitions in Marketing, Finance, and HR to apply theoretical knowledge directly to practical corporate challenges.",
//     csrTitle: "VANAS & Social Responsibility",
//     csrDesc: "VANAS agricultural field immersion program for rural economics and sustainability, plus CSR activities (orphanages, beach cleanups, tree planting).",
//     hideBtn: "Hide About MBA",
//     showBtn: "About MBA"
//   },
//   kn: {
//     badge: "ಸ್ವಾಯತ್ತ ಪಿಜಿ ಕಾರ್ಯಕ್ರಮ • AIET",
//     title: "MBA ಬಗ್ಗೆ - ಮಾಸ್ಟರ್ ಆಫ್ ಬಿಸಿನೆಸ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಷನ್",
//     intro: "ಆಳ್ವಾಸ್ ಇಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಯ ಸ್ನಾತಕೋತ್ತರ ವ್ಯವಹಾರ ನಿರ್ವಹಣೆ ವಿಭಾಗವು (MBA) ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ, ಸಂಶೋಧನೆ, ಉದ್ಯಮ ಸಂಯೋಜನೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಸಮಗ್ರ ವಿಕಾಸಕ್ಕೆ ಬದ್ಧವಾಗಿರುವ ಕ್ರಿಯಾಶೀಲ ನಿರ್ವಹಣಾ ಶಿಕ್ಷಣ ಕೇಂದ್ರವಾಗಿದೆ.",
//     intake: "ಪ್ರವೇಶ ಮಿತಿ: 180 ಸೀಟುಗಳು",
//     duration: "ಅವಧಿ: 2 ವರ್ಷಗಳು (4 ಸೆಮಿಸ್ಟರ್‌ಗಳು)",
//     courses: "40 ಸಮಗ್ರ ಪಠ್ಯಕ್ರಮಗಳು",
//     lseg: "ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ LSEG ಲ್ಯಾಬ್",
//     specHighlight: "ವಿಶೇಷತೆಗಳ ಮುಖ್ಯಾಂಶಗಳು",
//     launchTitle: "ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಿಕೊಳ್ಳಿ: ಆಳ್ವಾಸ್ MBA ಕಾರ್ಯಕ್ರಮ",
//     launchSubtitle: "ನಮ್ಮ 2 ವರ್ಷದ ತೀವ್ರತರವಾದ ಕಾರ್ಯಕ್ರಮವು ನಿಮಗೆ ಪ್ರಮುಖ ಕಾರ್ಪೊರೇಟ್ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ತಜ್ಞತೆ ಪಡೆಯಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ:",
//     finTitle: "ಫೈನಾನ್ಸ್ (ಹಣಕಾಸು ನಿರ್ವಹಣೆ)",
//     finDesc: "ಕಾರ್ಯತಂತ್ರದ ಹೂಡಿಕೆ, ಅಪಾಯದ ವಿಶ್ಲೇಷಣೆ, ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ ಪ್ರವೀಣರಾಗಿ.",
//     baTitle: "ಬಿಸಿನೆಸ್ ಅನಾಲಿಟಿಕ್ಸ್",
//     baDesc: "Power BI, ಪ್ರಿಡಿಕ್ಟಿವ್ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ವೇದಿಕೆಗಳನ್ನು ಬಳಸಿ ಮಾಹಿತಿಯಾಧಾರಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
//     mktTitle: "ಮಾರ್ಕೆಟಿಂಗ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್",
//     mktDesc: "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ತಂತ್ರಗಳು, ಬ್ರ್ಯಾಂಡಿಂಗ್ ಮತ್ತು ಗ್ರಾಹಕ ಸಂಶೋಧನಾ ಪರಿಣತಿಯನ್ನು ವೃದ್ಧಿಸಿಕೊಳ್ಳಿ.",
//     hrTitle: "ಮಾನವ ಸಂಪನ್ಮೂಲ (HR)",
//     hrDesc: "ಉತ್ತಮ ತಂಡಗಳ ನಿರ್ಮಾಣ, ಪ್ರತಿಭಾನ್ವಿತರ ಆಯ್ಕೆ, ಕಾರ್ಯತಂತ್ರದ HR ಮತ್ತು ಸಾಂಸ್ಥಿಕ ನಡವಳಿಕೆಯಲ್ಲಿ ನಾಯಕರಾಗಿ.",
//     visionTitle: "ದೃಷ್ಟಿಕೋನ (Vision)",
//     visionDesc: "ಪರಿಸರ ಮತ್ತು ಸಂಸ್ಕೃತಿಗೆ ಸ್ಪಂದಿಸುವ, ತಮ್ಮ ಸಮುದಾಯಗಳಿಗೆ ಜವಾಬ್ದಾರಿಯುತರಾದ ಮತ್ತು ಜಾಗತಿಕ ದೃಷ್ಟಿಕೋನ ಹೊಂದಿರುವ ಸಮರ್ಥ ಹಾಗೂ ನೈತಿಕ ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ಉದ್ಯಮಿಗಳನ್ನು ರೂಪಿಸುವುದು.",
//     missionTitle: "ಧ್ಯೇಯ (Mission)",
//     mission1: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ವಿಶೇಷತೆಯ ಕ್ಷೇತ್ರದಲ್ಲಿ ಪರಿಣಾಮಕಾರಿಯಾಗಲು ಅಗತ್ಯವಾದ ಜ್ಞಾನ ಮತ್ತು ಕೌಶಲ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು.",
//     mission2: "ವೃತ್ತಿಪರ ಜಗತ್ತಿಗೆ ಸೂಕ್ತವಾದ ಶೈಕ್ಷಣಿಕ ಗಂಭೀರತೆಯನ್ನು ಸಾಧಿಸಲು ಕುತೂಹಲ, ನಾಯಕತ್ವ ಕೌಶಲ್ಯಗಳನ್ನು ಬೆಳೆಸುವುದು.",
//     mission3: "ಸಂಕೀರ್ಣ ಮತ್ತು ಸದಾ ಬದಲಾಗುತ್ತಿರುವ ಜಾಗತಿಕ ಪರಿಸರದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ಮಿಂಚಲು ಸಿಸ್ಟಮ್ಸ್ ಆಲೋಚನಾ ವಿಧಾನವನ್ನು ಅಳವಡಿಸುವುದು.",
//     mission4: "ಸಾಂಸ್ಕೃತಿಕ ವೈವಿಧ್ಯತೆ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆಯ ಮನೋಭಾವವನ್ನು ಸ್ವೀಕರಿಸುವ ಬಲವಾದ ಬದ್ಧತೆಯನ್ನು ಬೆಳೆಸುವುದು.",
//     indTitle: "ಉದ್ಯಮ ಸಂಯೋಜನೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸಿದ್ಧತೆ",
//     indDesc: "ವಿದ್ಯಾರ್ಥಿಗಳು ITTC ತರಬೇತಿ, ಮೃದು ಕೌಶಲ್ಯಗಳು, ಆಪ್ಟಿಟ್ಯೂಡ್ ತರಬೇತಿ ಮತ್ತು ಮೌಲ್ಯವರ್ಧಿತ ಪ್ರಮಾಣೀಕರಣಗಳನ್ನು (Power BI, Digital Marketing, NISM, Advanced Excel, Grant Thornton) ಪಡೆಯುತ್ತಾರೆ. ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿರುವ ಲಂಡನ್ ಸ್ಟಾಕ್ ಎಕ್ಸ್‌ಚೇಂಜ್ ಗ್ರೂಪ್ (LSEG) ಲ್ಯಾಬ್ ಹಣಕಾಸು ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣಾ ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
//     mouTitle: "ಅಂತರರಾಷ್ಟ್ರೀಯ MoUs",
//     mouDesc: "ಮಲೇಷ್ಯಾದ INTI ಇಂಟರ್ನ್ಯಾಷನಲ್ ಯುನಿವರ್ಸಿಟಿ ಮತ್ತು ಸ್ಪೆಕ್ಟ್ರಮ್ ಇಂಟರ್ನ್ಯಾಷನಲ್ ಯುನಿವರ್ಸಿಟಿಯೊಂದಿಗೆ ಶೈಕ್ಷಣಿಕ ವಿನಿಮಯ ಮತ್ತು ಸಂಶೋಧನಾ ಸಹಭಾಗಿತ್ವ.",
//     kcciTitle: "KCCI ಉದ್ಯಮ ಸಂಪರ್ಕಗಳು",
//     kcciDesc: "ಕೆನರಾ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಅಂಡ್ ಇಂಡಸ್ಟ್ರಿ (KCCI) ಮೂಲಕ ಅಮೂಲ್ಯವಾದ ಉದ್ಯಮ ಸಂಪರ್ಕಗಳನ್ನು ಬೆಳೆಸಿ ನೈಜ-ಜಗತ್ತಿನ ಕೌಶಲ್ಯಗಳನ್ನು ಪಡೆಯಿರಿ.",
//     bootcampTitle: "25-ದಿನಗಳ ವಸತಿ ಬೂಟ್‌ಕ್ಯಾಂಪ್",
//     bootcampDesc: "ಅಕೌಂಟಿಂಗ್, ಫೈನಾನ್ಸ್, ಆಪ್ಟಿಟ್ಯೂಡ್, ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್, HR ಮತ್ತು ಉದ್ಯಮ ತಜ್ಞರ ಉಪನ್ಯಾಸಗಳನ್ನು ಒಳಗೊಂಡ 25 ದಿನಗಳ ತೀವ್ರ ವಸತಿ ಕಾರ್ಯಕ್ರಮ.",
//     budgetTitle: "ಕೇಂದ್ರ ಬಜೆಟ್ ವಿಶ್ಲೇಷಣೆ",
//     budgetDesc: "ಕೃಷಿ, ಬ್ಯಾಂಕಿಂಗ್, ರಕ್ಷಣೆ, ತೆರಿಗೆ ಮುಂತಾದ ರಂಗಗಳ ತಜ್ಞರೊಂದಿಗೆ ಪ್ರತಿವರ್ಷ ನಡೆಯುವ ಕೇಂದ್ರ ಬಜೆಟ್ ವಿಶ್ಲೇಷಣೆ ಕಾರ್ಯಕ್ರಮ.",
//     forumTitle: "ವಾರದ ವೇದಿಕೆ ಚಟುವಟಿಕೆಗಳು",
//     forumDesc: "ಮಾರ್ಕೆಟಿಂಗ್, ಫೈನಾನ್ಸ್ ಮತ್ತು HR ವಿಷಯಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ ನಡೆಸಲ್ಪಡುವ ಸ್ಪರ್ಧೆಗಳು ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಕಲಿಕೆ.",
//     csrTitle: "ವನಸ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿ",
//     csrDesc: "ಗ್ರಾಮೀಣ ಆರ್ಥಿಕತೆಗಾಗಿ 'ವನಸ್' ಕೃಷಿ ಕ್ಷೇತ್ರ ಅನುಭವ ಕಾರ್ಯಕ್ರಮ ಮತ್ತು CSR ಚಟುವಟಿಕೆಗಳು (ಅನಾಥಾಶ್ರಮ ಭೇಟಿ, ಕಡಲತೀರ ಸ್ವಚ್ಛತೆ, ಸಸಿ ನೆಡುವುದು).",
//     hideBtn: "MBA ವಿವರಗಳನ್ನು ಮರೆಮಾಡಿ",
//     showBtn: "MBA ಬಗ್ಗೆ ವಿವರಗಳು"
//   }
// };

// const companyLogoMap = {
//   "Accord": "/logos/accord.webp",
//   "Nandi Toyota": "/logos/nandi-toyota.webp",
//   "iWave Systems": "/logos/iwave.webp",
//   "Cognizant": "/logos/cognizant.webp",
//   "Juego Studios": "/logos/juego-studios.webp",
//   "Manipal Group": "/logos/manipal-group.webp",
//   "Innova Diesel": "/logos/innova-diesel.webp",
//   "Ninjacart": "/logos/ninjacart.webp",
//   "Medpac": "/logos/medpac.webp",
//   "Pratian Technologies": "/logos/pratian.webp",
//   "Mitsubishi Elevators": "/logos/mitsubishi-elevators.webp",
//   "Royal Arabian": "/logos/royal-arabian.webp",
//   "Net Connect": "/logos/net-connect.webp",
//   "Nidec": "/logos/nidec.webp",
//   "Mobinius": "/logos/mobinius.webp",
//   "Oracle": "/logos/oracle.webp",
//   "Subex": "/logos/subex.webp",
//   "QualityKiosk": "/logos/qualitykiosk.webp",
//   "Nuware": "/logos/nuware.webp",
//   "SSI": "/logos/ssi.webp",
//   "Mylan": "/logos/mylan.webp",
//   "Tietoevry": "/logos/tietoevry.webp",
//   "Sogefi Group": "/logos/sogefi-group.webp",
//   "Wipro": "/logos/wipro.webp",
//   "TTE India": "/logos/tte-india.webp",
//   "VMware": "/logos/vmware.webp",
//   "42Gears": "/logos/42gears.webp",
//   "Smartlink": "/logos/smartlink.webp",
//   "Amazon": "/logos/amazon.webp",
//   "SAP": "/logos/sap.webp",
//   "KPIT": "/logos/kpit.webp",
//   "SLK Software": "/logos/slk-software.webp",
//   "PathFront": "/logos/pathfront.webp",
//   "Robosoft": "/logos/robosoft.webp",
//   "Tessolve": "/logos/tessolve.webp",
//   "Bosch": "/logos/bosch.webp",
//   "TCS": "/logos/tcs.webp",
//   "Strata": "/logos/strata.webp",
//   "TEKsystems": "/logos/teksystems.webp",
//   "Sunrise Biztech": "/logos/sunrise-biztech.webp",
//   "Virtusa": "/logos/virtusa.webp",
//   "Amphisoft": "/logos/amphisoft.webp",
//   "ZoomTail": "/logos/zoomtail.webp",
//   "United Rubber": "/logos/united-rubber.webp",
//   "TSTS": "/logos/tsts.webp",
//   "Ageina": "/logos/ageina.webp",
//   "Refinitiv": "/logos/refinitiv.webp",
//   "Vee Technologies": "/logos/vee-technologies.webp",
//   "Tayana Software": "/logos/tayana-software.webp",
//   "Swiggy": "/logos/swiggy.webp",
//   "Ashwin Precision": "/logos/ashwin-precision.webp",
//   "Alpha 9": "/logos/alpha9.webp",
//   "Aarbee Structures": "/logos/aarbee.webp",
//   "British Biologicals": "/logos/british-biologicals.webp",
//   "Syngene": "/logos/syngene.webp",
//   "Torry Harris": "/logos/torry-harris.webp",
//   "ArisGlobal": "/logos/arisglobal.webp",
//   "Kaynes Technology": "/logos/kaynes.webp",
//   "NTT Data": "/logos/ntt-data.webp",
//   "Faurecia": "/logos/faurecia.webp",
//   "Indian Armed Forces": "/logos/indian-armed-forces.webp",
//   "Kadamb Steels": "/logos/kadamb-steels.webp",
//   "Novo Nordisk": "/logos/novo-nordisk.webp",
//   "FACE": "/logos/face.webp",
//   "Informatica": "/logos/informatica.webp",
//   "Infosys": "/logos/infosys.webp",
//   "EverestIMS": "/logos/everestims.webp",
//   "Hexaware": "/logos/hexaware.webp",
//   "Ribbon Communications": "/logos/ribbon.webp",
//   "Tech Mahindra": "/logos/tech-mahindra.webp",
//   "Aspiring Minds": "/logos/aspiring-minds.webp",
//   "Automotive Axles": "/logos/automotive-axles.webp",
//   "Sasken": "/logos/sasken.webp",
//   "Kotak Mahindra Bank": "/logos/kotak.webp",
//   "Indo-MIM": "/logos/indo-mim.webp",
//   "Digicall": "/logos/digicall.webp",
//   "Accenture": "/logos/accenture.webp",
//   "Solugenix": "/logos/solugenix.webp",
//   "CMS IT Services": "/logos/cms.webp",
//   "Jaro Education": "/logos/jaro.webp",
//   "GICE": "/logos/gice.webp",
//   "Kalpataru Power": "/logos/kalpataru.webp",
//   "IBM": "/logos/ibm.webp",
//   "Conzulere": "/logos/conzulere.webp",
//   "Edureka": "/logos/edureka.webp",
//   "Indian Navy": "/logos/indian-navy.webp",
//   "Cadence": "/logos/cadence.webp",
//   "Extramarks": "/logos/extramarks.webp",
//   "Demand NXT": "/logos/demand-nxt.webp",
//   "Epic": "/logos/epic.webp",
//   "LM Wind Power": "/logos/lm-wind-power.webp",
//   "Captain Tractors": "/logos/captain.webp",
//   "Novigo Solutions": "/logos/novigo.webp",
//   "Mphasis": "/logos/mphasis.webp",
//   "EASi": "/logos/easi.webp",
//   "Maventic": "/logos/maventic.webp",
//   "L&T Infotech": "/logos/lnt-infotech.webp",
//   "Prakruti Products": "/logos/prakruti.webp",
//   "Kreatio": "/logos/kreatio.webp",
//   "Kambala Solutions": "/logos/kambala.webp",
//   "CGI": "/logos/cgi.webp",
//   "Elemental": "/logos/elemental.webp",
//   "42hertz": "/logos/42hertz.webp",
//   "[24]7.ai": "/logos/247-ai.webp",
//   "Odessa": "/logos/odessa.webp",
//   "Juspay": "/logos/juspay.webp",
//   "Mu Sigma": "/logos/mu-sigma.webp",
//   "L&T": "/logos/lnt.webp",
//   "Straecon": "/logos/straecon.webp",
//   "ICICI Bank": "/logos/icici.webp",
//   "Axis Bank": "/logos/axis-bank.webp",
//   "Grant Thornton": "/logos/grant-thornton.webp",
//   "LSEG": "/logos/lseg.webp",
//   "Toyota": "/logos/toyota.webp",
//   "FactSet": "/logos/factset.webp",
//   "WITHUM": "/logos/withum.webp",
//   "Withum": "/logos/withum.webp",
//   "Asian Paints": "/logos/asian-paints.webp",
//   "UltraTech Cement": "/logos/ultratech.webp",
//   "Ramco": "/logos/ramco.webp",
//   "HashedIn": "/logos/hashedin.webp",
//   "Hashedin": "/logos/hashedin.webp",
//   "KPMG": "/logos/kpmg.webp",
//   "Synopsys": "/logos/synopsys.webp",
//   "HCL": "/logos/hcl.webp",
//   "PwC": "/logos/pwc.webp",
//   "Netmeds": "/logos/netmeds.webp",
//   "HealthEdge": "/logos/healthedge.webp",
//   "Blazeclan": "/logos/blazeclan.webp",
//   "ThoughtClan": "/logos/thoughtclan.webp",
//   "Mavenir": "/logos/mavenir.webp",
//   "GainInsights": "/logos/gaininsights.webp",
//   "Infinite": "/logos/infinite.webp",
//   "Wipfli": "/logos/wipfli.webp",
//   "Ajax": "/logos/ajax.webp"
// };

// export default function PGAdmission() {
//   const { lang, t } = useLanguage();
//   const content = aboutMbaContent[lang] || aboutMbaContent.en;
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState('booking'); // 'booking', 'appointment', or 'online'
//   const [bookingFormData, setBookingFormData] = useState({ name: '', email: '', phone: '', course: 'MBA' });
//   const [appointmentFormData, setAppointmentFormData] = useState({ name: '', email: '', phone: '', course: '', date: '', desk: 'HOD' });
//   const [onlineFormData, setOnlineFormData] = useState({ name: '', email: '', phone: '', course: 'MBA', date: '', desk: 'Harshitha' });
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [token, setToken] = useState(null);
//   const [queueNumber, setQueueNumber] = useState(null);
//   const [virtualLink, setVirtualLink] = useState('');
//   const [isAboutMbaModalOpen, setIsAboutMbaModalOpen] = useState(false);

//   // Dynamic system alerts tracking desk conditions
//   const statusConfig = {
//     HOD: {
//       message: "⚠️ Notice: The MBA HOD is currently reviewing final year projects. Short waiting times expected.",
//       color: "#ffcc00",
//       bg: "rgba(255, 204, 0, 0.1)"
//     },
//     Harshitha: {
//       message: "✅ Available: Ms. Harshitha Shetty is currently available for PG admissions consultation.",
//       color: "#00cc66",
//       bg: "rgba(0, 204, 102, 0.1)"
//     },
//     Guruprasad: {
//       message: "✅ Available: Dr. Guruprasad Pai is currently available for PG admissions consultation.",
//       color: "#00cc66",
//       bg: "rgba(0, 204, 102, 0.1)"
//     },
//     Johnson: {
//       message: "✅ Available: Dr. Johnson Fernandes is currently available for PG admissions consultation.",
//       color: "#00cc66",
//       bg: "rgba(0, 204, 102, 0.1)"
//     }
//   };

//   const containerStyle = {
//     width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(90px, 12vh, 120px) clamp(12px, 3vw, 20px) 60px clamp(12px, 3vw, 20px)",
//     boxSizing: "border-box", minHeight: "100vh", backgroundColor: "transparent", color: "#ffffff",
//     fontFamily: "'Poppins', sans-serif"
//   };

//   const tabWrapperStyle = {
//     display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px", flexWrap: "wrap"
//   };

//   const tabButtonStyle = (isActive) => ({
//     padding: "10px 20px", borderRadius: "30px",
//     border: isActive ? "2px solid #ff9900" : "2px solid #800000",
//     background: isActive ? "linear-gradient(135deg, #ff9900, #ff5500)" : "#000000",
//     color: isActive ? "#000000" : "#ffffff",
//     fontWeight: "600", cursor: "pointer", fontSize: "14px", transition: "background 0.2s, transform 0.2s"
//   });

//   const infoPane = {
//     background: "rgba(20, 20, 20, 0.9)", border: "1px solid rgba(255, 153, 0, 0.2)", padding: "clamp(18px, 4vw, 35px)", borderRadius: "20px"
//   };

//   const formPane = {
//     background: "rgba(20, 20, 20, 0.9)", padding: "clamp(18px, 4vw, 35px)", borderRadius: "20px", border: "1px solid rgba(255, 153, 0, 0.2)"
//   };

//   const inputStyle = {
//     width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
//     padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none"
//   };

//   const labelStyle = {
//     display: "block", fontSize: "14px", color: "#ff9900", fontWeight: "500", marginBottom: "8px"
//   };

//   const deskBtnStyle = (isSelected) => ({
//     flex: "1", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.3s",
//     border: isSelected ? "1px solid #ff9900" : "1px solid #800000",
//     background: isSelected ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(128, 0, 0, 0.1)",
//     color: isSelected ? "#000000" : "#ffffff"
//   });

//   const primaryBtnStyle = {
//     width: "100%", background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000000", padding: "14px", border: "none",
//     borderRadius: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "0.3s", marginTop: "10px"
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/admission', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingFormData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setBookingSuccess(true);
//       } else {
//         alert("Failed to secure seat: " + data.message);
//       }
//     } catch (error) {
//       console.error("Error submitting admission:", error);
//       alert("An error occurred while connecting to the server. Please try again later.");
//     }
//   };

//   const handlePhysicalSubmit = (e) => {
//     e.preventDefault();
//     setToken(`AIET-2026-P${Math.floor(1000 + Math.random() * 9000)}`);
//     setQueueNumber(Math.floor(1 + Math.random() * 6));
//     setVirtualLink('');
//   };

//   const handleOnlineSubmit = (e) => {
//     e.preventDefault();
//     setToken(`AIET-2026-O${Math.floor(1000 + Math.random() * 9000)}`);
//     setVirtualLink(`https://meet.google.com/aie-tver-s${Math.floor(10 + Math.random() * 89)}`);
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "0px", marginBottom: "30px" }}>
//         <button 
//           type="button"
//           onClick={() => setIsAboutMbaModalOpen(prev => !prev)}
//           style={{
//             background: "linear-gradient(135deg, #ff9900, #ff5500)",
//             color: "#000000",
//             border: "none",
//             padding: "12px 28px",
//             borderRadius: "30px",
//             fontWeight: "700",
//             cursor: "pointer",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "8px",
//             transition: "all 0.3s ease",
//             boxShadow: "0 4px 15px rgba(255, 85, 0, 0.3)",
//             fontSize: "15px"
//           }}
//           onMouseEnter={(e) => { 
//             e.currentTarget.style.transform = "translateY(-2px)"; 
//             e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 85, 0, 0.5)";
//           }}
//           onMouseLeave={(e) => { 
//             e.currentTarget.style.transform = "translateY(0)"; 
//             e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 85, 0, 0.3)";
//           }}
//         >
//           <FaGraduationCap style={{ fontSize: "18px" }} />
//           {isAboutMbaModalOpen ? content.hideBtn : content.showBtn}
//         </button>
//       </div>

//       {/* IN-PAGE EXPANDABLE ABOUT MBA SHOWCASE */}
//       <AnimatePresence>
//         {isAboutMbaModalOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0, overflow: "hidden" }}
//             animate={{ opacity: 1, height: "auto", overflow: "visible" }}
//             exit={{ opacity: 0, height: 0, overflow: "hidden" }}
//             transition={{ duration: 0.4 }}
//             style={{ marginBottom: "40px" }}
//           >
//             <div style={{
//               background: "#121218",
//               border: "2px solid rgba(255, 204, 0, 0.4)",
//               borderRadius: "24px",
//               padding: "clamp(16px, 4vw, 35px)",
//               boxShadow: "0 20px 40px rgba(0, 0, 0, 0.7)",
//               color: "#ffffff"
//             }}>
//               {/* Header Title & Badges */}
//               <div style={{ textAlign: "center", marginBottom: "30px" }}>
//                 <span style={{ 
//                   background: "rgba(255, 204, 0, 0.15)", 
//                   color: "#ffcc00", 
//                   border: "1px solid rgba(255, 204, 0, 0.4)",
//                   padding: "6px 16px", 
//                   borderRadius: "20px", 
//                   fontSize: "12px", 
//                   fontWeight: "700", 
//                   letterSpacing: "1px",
//                   textTransform: "uppercase",
//                   display: "inline-block",
//                   marginBottom: "12px"
//                 }}>
//                   {content.badge}
//                 </span>
//                 <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.75rem)", fontWeight: "800", color: "#ffffff", margin: "0 0 10px 0" }}>
//                   {content.title}
//                 </h2>
//                 <p style={{ color: "#a3a3a3", fontSize: "14px", maxWidth: "850px", margin: "0 auto 20px auto", lineHeight: "1.6" }}>
//                   {content.intro}
//                 </p>
//                 <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
//                   <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
//                     {content.intake}
//                   </span>
//                   <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
//                     {content.duration}
//                   </span>
//                   <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
//                     {content.courses}
//                   </span>
//                   <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
//                     {content.lseg}
//                   </span>
//                 </div>
//               </div>

//               {/* SPECIALISATIONS GRID (PROMINENTLY HIGHLIGHTED) */}
//               <div style={{ 
//                 background: "linear-gradient(135deg, rgba(255, 153, 0, 0.12), rgba(128, 0, 0, 0.3))", 
//                 border: "2px solid rgba(255, 204, 0, 0.6)", 
//                 borderRadius: "20px", 
//                 padding: "25px", 
//                 marginBottom: "30px"
//               }}>
//                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                   <span style={{ background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000", padding: "4px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>
//                     {content.specHighlight}
//                   </span>
//                   <h3 style={{ fontSize: "24px", color: "#ffcc00", margin: "8px 0 4px 0", fontWeight: "800" }}>
//                     {content.launchTitle}
//                   </h3>
//                   <p style={{ color: "#e2e8f0", fontSize: "13px", margin: 0 }}>
//                     {content.launchSubtitle}
//                   </p>
//                 </div>

//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
//                   {/* Finance */}
//                   <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
//                     <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
//                       <FaCoins />
//                     </div>
//                     <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.finTitle}</h4>
//                     <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
//                       {content.finDesc}
//                     </p>
//                   </div>

//                   {/* Business Analytics */}
//                   <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
//                     <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
//                       <FaChartLine />
//                     </div>
//                     <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.baTitle}</h4>
//                     <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
//                       {content.baDesc}
//                     </p>
//                   </div>

//                   {/* Marketing Management */}
//                   <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
//                     <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
//                       <FaBullhorn />
//                     </div>
//                     <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.mktTitle}</h4>
//                     <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
//                       {content.mktDesc}
//                     </p>
//                   </div>

//                   {/* Human Resources Management */}
//                   <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
//                     <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
//                       <FaUsers />
//                     </div>
//                     <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.hrTitle}</h4>
//                     <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
//                       {content.hrDesc}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* VISION & MISSION */}
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px", marginBottom: "30px" }}>
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "20px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
//                     <FaLightbulb style={{ color: "#ffcc00", fontSize: "18px" }} />
//                     <h3 style={{ fontSize: "18px", color: "#ffcc00", margin: 0, fontWeight: "700" }}>{content.visionTitle}</h3>
//                   </div>
//                   <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
//                     {content.visionDesc}
//                   </p>
//                 </div>

//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "20px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
//                     <FaBookReader style={{ color: "#ffcc00", fontSize: "18px" }} />
//                     <h3 style={{ fontSize: "18px", color: "#ffcc00", margin: 0, fontWeight: "700" }}>{content.missionTitle}</h3>
//                   </div>
//                   <ul style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "1.5", margin: 0, paddingLeft: "16px" }}>
//                     <li style={{ marginBottom: "4px" }}>{content.mission1}</li>
//                     <li style={{ marginBottom: "4px" }}>{content.mission2}</li>
//                     <li style={{ marginBottom: "4px" }}>{content.mission3}</li>
//                     <li>{content.mission4}</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* INDUSTRY RECRUITERS & INITIATIVES */}
//               <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "20px", marginBottom: "25px" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
//                   <FaBriefcase style={{ color: "#ffcc00", fontSize: "18px" }} />
//                   <h3 style={{ fontSize: "18px", color: "#ffcc00", margin: 0, fontWeight: "700" }}>{content.indTitle}</h3>
//                 </div>
//                 <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", marginBottom: "12px" }}>
//                   {content.indDesc}
//                 </p>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//                   {["Accord", "Nandi Toyota", "iWave Systems", "Cognizant", "Juego Studios", "Manipal Group", "Innova Diesel", "Ninjacart", "Medpac", "Pratian Technologies", "Mitsubishi Elevators", "Royal Arabian", "Net Connect", "Nidec", "Mobinius", "Oracle", "Subex", "QualityKiosk", "Nuware", "SSI", "Mylan", "Tietoevry", "Sogefi Group", "Wipro", "TTE India", "VMware", "42Gears", "Smartlink", "Amazon", "SAP", "KPIT", "SLK Software", "PathFront", "Robosoft", "Tessolve", "Bosch", "TCS", "Strata", "TEKsystems", "Sunrise Biztech", "Virtusa", "Amphisoft", "ZoomTail", "United Rubber", "TSTS", "Ageina", "Refinitiv", "Vee Technologies", "Tayana Software", "Swiggy", "Ashwin Precision", "Alpha 9", "Aarbee Structures", "British Biologicals", "Syngene", "Torry Harris", "ArisGlobal", "Kaynes Technology", "NTT Data", "Faurecia", "Indian Armed Forces", "Kadamb Steels", "Novo Nordisk", "FACE", "Informatica", "Infosys", "EverestIMS", "Hexaware", "Ribbon Communications", "Tech Mahindra", "Aspiring Minds", "Automotive Axles", "Sasken", "Kotak Mahindra Bank", "Indo-MIM", "Digicall", "Accenture", "Solugenix", "CMS IT Services", "Jaro Education", "GICE", "Kalpataru Power", "IBM", "Conzulere", "Edureka", "Indian Navy", "Cadence", "Extramarks", "Demand NXT", "Epic", "LM Wind Power", "Captain Tractors", "Novigo Solutions", "Mphasis", "EASi", "Maventic", "L&T Infotech", "Prakruti Products", "Kreatio", "Kambala Solutions", "CGI", "Elemental", "42hertz", "[24]7.ai", "Odessa", "Juspay", "Mu Sigma", "L&T", "Straecon", "ICICI Bank", "Axis Bank", "EY", "Grant Thornton", "LSEG", "Toyota", "FactSet", "WITHUM", "Asian Paints", "UltraTech Cement", "Ramco"].map((company, idx) => {
//                     const logoUrl = companyLogoMap[company];
//                     return (
//                       <span 
//                         key={idx} 
//                         style={{ 
//                           background: "rgba(20, 20, 25, 0.9)", 
//                           border: "1px solid rgba(255, 204, 0, 0.3)", 
//                           padding: "4px 10px", 
//                           borderRadius: "12px", 
//                           fontSize: "11px", 
//                           color: "#e2e8f0", 
//                           fontWeight: "600", 
//                           display: "inline-flex", 
//                           alignItems: "center", 
//                           gap: "6px",
//                           cursor: "pointer",
//                           position: "relative",
//                           zIndex: 1,
//                           transition: "all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.9)";
//                           e.currentTarget.style.boxShadow = "0 6px 18px rgba(255, 204, 0, 0.4)";
//                           e.currentTarget.style.transform = "translateY(-4px) scale(1.18)";
//                           e.currentTarget.style.zIndex = "20";
//                           e.currentTarget.style.background = "rgba(35, 35, 45, 1)";
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.borderColor = "rgba(255, 204, 0, 0.3)";
//                           e.currentTarget.style.boxShadow = "none";
//                           e.currentTarget.style.transform = "translateY(0) scale(1)";
//                           e.currentTarget.style.zIndex = "1";
//                           e.currentTarget.style.background = "rgba(20, 20, 25, 0.9)";
//                         }}
//                       >
//                         {logoUrl && (
//                           <img
//                             src={logoUrl}
//                             alt={company}
//                             style={{ width: "16px", height: "16px", objectFit: "contain", borderRadius: "3px", background: "#ffffff", padding: "1px" }}
//                             onError={(e) => { e.target.style.display = 'none'; }}
//                           />
//                         )}
//                         {company}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* DETAILED INITIATIVES GRID */}
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "25px" }}>
//                 {/* International MoUs */}
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <FaGlobe style={{ color: "#ff9900", fontSize: "16px" }} />
//                     <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.mouTitle}</strong>
//                   </div>
//                   <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
//                     {content.mouDesc}
//                   </p>
//                 </div>

//                 {/* KCCI Connections */}
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <FaHandshake style={{ color: "#ff9900", fontSize: "16px" }} />
//                     <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.kcciTitle}</strong>
//                   </div>
//                   <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
//                     {content.kcciDesc}
//                   </p>
//                 </div>

//                 {/* 25-Day Bootcamp */}
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <FaGraduationCap style={{ color: "#ff9900", fontSize: "16px" }} />
//                     <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.bootcampTitle}</strong>
//                   </div>
//                   <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
//                     {content.bootcampDesc}
//                   </p>
//                 </div>

//                 {/* Union Budget Analysis */}
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <FaChartLine style={{ color: "#ff9900", fontSize: "16px" }} />
//                     <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.budgetTitle}</strong>
//                   </div>
//                   <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
//                     {content.budgetDesc}
//                   </p>
//                 </div>

//                 {/* Weekly Forum Activity */}
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <FaLaptopCode style={{ color: "#ff9900", fontSize: "16px" }} />
//                     <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.forumTitle}</strong>
//                   </div>
//                   <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
//                     {content.forumDesc}
//                   </p>
//                 </div>

//                 {/* VANAS & CSR */}
//                 <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <FaAward style={{ color: "#ff9900", fontSize: "16px" }} />
//                     <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.csrTitle}</strong>
//                   </div>
//                   <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
//                     {content.csrDesc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: "700", margin: "0 0 10px 0" }}>{t("pg_adm_portal")}</h1>
//         <p style={{ color: "#a3a3a3", margin: 0 }}>{t("pg_adm_subtitle")}</p>
//       </div>

//       <div style={tabWrapperStyle}>
//         <button style={tabButtonStyle(activeTab === 'booking')} 
//           onClick={() => { setActiveTab('booking'); setBookingSuccess(false); }}
//           onMouseEnter={(e) => { if (activeTab !== 'booking') { e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)"; e.currentTarget.style.transform = "scale(1.05)"; } }}
//           onMouseLeave={(e) => { if (activeTab !== 'booking') { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "scale(1)"; } }}
//         >
//           {t("adm_tab_1")}
//         </button>
//         <button style={tabButtonStyle(activeTab === 'appointment')} 
//           onClick={() => { setActiveTab('appointment'); setToken(null); }}
//           onMouseEnter={(e) => { if (activeTab !== 'appointment') { e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)"; e.currentTarget.style.transform = "scale(1.05)"; } }}
//           onMouseLeave={(e) => { if (activeTab !== 'appointment') { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "scale(1)"; } }}
//         >
//           {t("adm_tab_2")}
//         </button>
//         <button style={tabButtonStyle(activeTab === 'online')} 
//           onClick={() => { setActiveTab('online'); setToken(null); }}
//           onMouseEnter={(e) => { if (activeTab !== 'online') { e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)"; e.currentTarget.style.transform = "scale(1.05)"; } }}
//           onMouseLeave={(e) => { if (activeTab !== 'online') { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "scale(1)"; } }}
//         >
//           {t("adm_tab_3")}
//         </button>
//       </div>

//       {/* TAB 1: ONLINE SEAT BOOKING */}
//       {activeTab === 'booking' && (
//         <div>
//           {!bookingSuccess ? (
//             <div className="contact-grid">
//               <div style={infoPane}>
//                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_req")}</h2>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaUserCheck style={{ color: "#ff9900", marginTop: "4px", fontSize: "18px", flexShrink: 0 }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>{t("pg_adm_elig_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: "1.5" }}>
//                         {t("pg_adm_elig_desc")}
//                       </span>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaFileInvoice style={{ color: "#ff9900", marginTop: "4px", fontSize: "18px", flexShrink: 0 }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>{t("pg_adm_score_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: "1.5" }}>
//                         {t("pg_adm_score_desc")}
//                       </span>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaAward style={{ color: "#ff9900", marginTop: "4px", fontSize: "18px", flexShrink: 0 }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>{t("pg_adm_sel_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: "1.5" }}>
//                         {t("pg_adm_sel_desc")}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div style={{ marginTop: "30px", borderTop: "1px solid rgba(255, 153, 0, 0.2)", paddingTop: "25px", textAlign: "center" }}>
//                   <a href="#" style={{ 
//                     display: "inline-flex", 
//                     alignItems: "center", 
//                     gap: "10px", 
//                     background: "rgba(255, 153, 0, 0.1)", 
//                     color: "#ffcc00", 
//                     padding: "14px 24px", 
//                     borderRadius: "10px", 
//                     border: "1px dashed #ff9900", 
//                     textDecoration: "none", 
//                     fontWeight: "600",
//                     transition: "all 0.3s ease",
//                     width: "100%",
//                     justifyContent: "center",
//                     boxSizing: "border-box"
//                   }}
//                   onMouseEnter={(e) => { 
//                     e.currentTarget.style.background = "rgba(255, 153, 0, 0.2)"; 
//                     e.currentTarget.style.transform = "translateY(-3px)"; 
//                     e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 153, 0, 0.2)";
//                   }}
//                   onMouseLeave={(e) => { 
//                     e.currentTarget.style.background = "rgba(255, 153, 0, 0.1)"; 
//                     e.currentTarget.style.transform = "translateY(0)"; 
//                     e.currentTarget.style.boxShadow = "none";
//                   }}
//                   onClick={(e) => { e.preventDefault(); alert("Opening Interactive Syllabus Viewer..."); }}
//                   >
//                     <FaEye /> {t("adm_view_syl")}
//                   </a>
//                 </div>
//               </div>

//               <div style={formPane}>
//                 <form onSubmit={handleBookingSubmit}>
//                   <label style={labelStyle}>{t("adm_form_name")}</label>
//                   <input type="text" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, name: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_email")}</label>
//                   <input type="email" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, email: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_phone")}</label>
//                   <input type="tel" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, phone: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_branch")}</label>
//                   <select defaultValue="MBA" style={{...inputStyle, background: "#151515"}} onChange={(e) => setBookingFormData({...bookingFormData, course: e.target.value})} required>
//                     <option value="" disabled hidden></option>
//                     <optgroup label="Postgraduate (PG)">
//                       <option value="MBA">Master of Business Administration (MBA)</option>
//                     </optgroup>
//                   </select>
//                   <button type="submit" style={primaryBtnStyle}>{t("adm_btn_confirm")}</button>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px solid #800000", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
//               <FaChair style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
//               <h2 style={{ fontSize: "28px", color: "#ffcc00", marginBottom: "10px" }}>{t("adm_req_succ")}</h2>
//               <div style={{ textAlign: "left", marginTop: "25px", background: "#151515", padding: "20px", borderRadius: "10px", color: "#d4d4d4" }}>
//                 <p><strong>Applicant Name:</strong> {bookingFormData.name}</p>
//                 <p><strong>Selected Branch:</strong> {bookingFormData.course}</p>
//                 <p><strong>Status:</strong> <span style={{ color: "#ff9900", fontWeight: "600" }}>Provisionally Saved</span></p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* TAB 2: IN-PERSON CAMPUS COUNSELING */}
//       {activeTab === 'appointment' && (
//         <div>
//           {!token ? (
//             <div className="contact-grid">
//               <div style={infoPane}>
//                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_phys")}</h2>
//                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "20px" }}>Schedule a physical check-in window code to visit the campus desk blocks directly.</p>

//                 {/* Active Alerts Check */}
//                 {statusConfig[appointmentFormData.desk || 'HOD'] && (
//                   <div style={{ padding: "18px", background: statusConfig[appointmentFormData.desk || 'HOD'].bg, border: `1px dashed ${statusConfig[appointmentFormData.desk || 'HOD'].color}`, borderRadius: "12px", marginTop: "20px" }}>
//                     <h4 style={{ margin: "0 0 6px 0", color: statusConfig[appointmentFormData.desk || 'HOD'].color }}><FaExclamationTriangle /> Desk Alert:</h4>
//                     <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[appointmentFormData.desk || 'HOD'].message}</p>
//                   </div>
//                 )}
//               </div>

//               <div style={formPane}>
//                 <form onSubmit={handlePhysicalSubmit}>
//                   <div style={{ marginBottom: "20px" }}>
//                     <label style={labelStyle}>{t("adm_form_desk")}</label>
//                     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'HOD')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'HOD'})}>HOD (MBA)</button>
//                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Harshitha')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'Harshitha'})}>Ms. Harshitha Shetty</button>
//                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Guruprasad')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'Guruprasad'})}>Dr. Guruprasad Pai</button>
//                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Johnson')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'Johnson'})}>Dr. Johnson Fernandes</button>
//                     </div>
//                   </div>
//                   <label style={labelStyle}>{t("adm_form_name")}</label>
//                   <input type="text" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, name: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_phone")}</label>
//                   <input type="tel" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, phone: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_date")}</label>
//                   <input type="date" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, date: e.target.value})} />
//                   <button type="submit" style={primaryBtnStyle}>{t("adm_btn_token")}</button>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
//               <FaCheckCircle style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
//               <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>{t("adm_phys_succ")}</h2>
//               <span style={{ color: "#ffcc00", fontSize: "14px", display: "block" }}>
//                 Destination: {
//                   appointmentFormData.desk === 'HOD' ? 'HOD (MBA)' :
//                   appointmentFormData.desk === 'Harshitha' ? 'Ms. Harshitha Shetty' :
//                   appointmentFormData.desk === 'Guruprasad' ? 'Dr. Guruprasad Pai' :
//                   appointmentFormData.desk === 'Johnson' ? 'Dr. Johnson Fernandes' : 'Desk Authority'
//                 }
//               </span>
//               <div style={{ background: "#151515", border: "1px solid #800000", padding: "20px", borderRadius: "12px", margin: "20px 0" }}>
//                 <strong style={{ fontSize: "32px", color: "#ffffff", letterSpacing: "2px" }}>{token}</strong>
//                 <span style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "#a3a3a3" }}>Live Waiting Queue: <strong>#{queueNumber}</strong></span>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* TAB 3: STANDALONE ONLINE VIDEO COUNSELING */}
//       {activeTab === 'online' && (
//         <div>
//           {!token ? (
//             <div className="contact-grid">
//               <div style={infoPane}>
//                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_rem")}</h2>
//                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "20px" }}>
//                   For prospective students unable to travel to our Mijar campus blocks. Lock a digital session to consult remotely over a secure link.
//                 </p>

//                 {/* Active Desk Alert */}
//                 {statusConfig[onlineFormData.desk || 'Harshitha'] && (
//                   <div style={{ padding: "18px", background: statusConfig[onlineFormData.desk || 'Harshitha'].bg, border: `1px dashed ${statusConfig[onlineFormData.desk || 'Harshitha'].color}`, borderRadius: "12px", marginBottom: "20px" }}>
//                     <h4 style={{ margin: "0 0 6px 0", color: statusConfig[onlineFormData.desk || 'Harshitha'].color }}><FaExclamationTriangle /> Desk Alert:</h4>
//                     <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[onlineFormData.desk || 'Harshitha'].message}</p>
//                   </div>
//                 )}

//                 <div style={{ padding: "18px", background: "rgba(255, 153, 0, 0.1)", border: "1px dashed #ff9900", borderRadius: "12px" }}>
//                   <h4 style={{ margin: "0 0 5px 0", color: "#ff9900", display: "flex", alignItems: "center", gap: "8px" }}><FaVideo /> Virtual Desk Route:</h4>
//                   <p style={{ margin: 0, fontSize: "13px", color: "#ffffff", lineHeight: "1.4" }}>
//                     Google Meet secure session coordinates are autogenerated instantly upon submission matching your slot date.
//                   </p>
//                 </div>
//               </div>

//               <div style={formPane}>
//                 <form onSubmit={handleOnlineSubmit}>
//                   <div style={{ marginBottom: "20px" }}>
//                     <label style={labelStyle}>{t("adm_form_desk")}</label>
//                     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                       <button type="button" style={deskBtnStyle(onlineFormData.desk === 'Harshitha')} onClick={() => setOnlineFormData({...onlineFormData, desk: 'Harshitha'})}>Ms. Harshitha Shetty</button>
//                       <button type="button" style={deskBtnStyle(onlineFormData.desk === 'Guruprasad')} onClick={() => setOnlineFormData({...onlineFormData, desk: 'Guruprasad'})}>Dr. Guruprasad Pai</button>
//                       <button type="button" style={deskBtnStyle(onlineFormData.desk === 'Johnson')} onClick={() => setOnlineFormData({...onlineFormData, desk: 'Johnson'})}>Dr. Johnson Fernandes</button>
//                     </div>
//                   </div>
//                   <label style={labelStyle}>{t("adm_form_name")}</label>
//                   <input type="text" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, name: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_email_link")}</label>
//                   <input type="email" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, email: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_phone")}</label>
//                   <input type="tel" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, phone: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_target")}</label>
//                   <select defaultValue="MBA" style={{...inputStyle, background: "#151515"}} onChange={(e) => setOnlineFormData({...onlineFormData, course: e.target.value})} required>
//                     <option value="" disabled hidden></option>
//                     <option value="MBA">Master of Business Administration (MBA)</option>
//                   </select>

//                   <label style={labelStyle}>{t("adm_form_pref_date")}</label>
//                   <input type="date" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, date: e.target.value})} />
//                   <button type="submit" style={primaryBtnStyle}>{t("adm_btn_remote")}</button>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
//               <FaVideo style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
//               <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{t("adm_rem_succ")}</h2>
//               <p style={{ color: "#a3a3a3", fontSize: "14px" }}>Remote session access token successfully created for AO consultation panel review.</p>

//               <div style={{ background: "#151515", border: "1px solid #800000", padding: "25px", borderRadius: "12px", margin: "25px 0" }}>
//                 <span style={{ fontSize: "12px", color: "#ffcc00", textTransform: "uppercase", display: "block", marginBottom: "5px" }}>Digital Token ID</span>
//                 <strong style={{ fontSize: "30px", color: "#ffffff", letterSpacing: "1px" }}>{token}</strong>

//                 <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
//                   <span style={{ fontSize: "12px", color: "#a3a3a3", display: "block", marginBottom: "10px" }}>Click to open your assigned call room:</span>
//                   <a href={virtualLink} target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000", padding: "10px 20px", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", fontWeight: "600" }}>
//                     <FaVideo /> Join Live Google Meet Room
//                   </a>
//                 </div>
//               </div>
//               <div style={{ textAlign: "left", color: "#d4d4d4", fontSize: "14px" }}>
//                 <p><strong>Candidate:</strong> {onlineFormData.name}</p>
//                 <p><strong>Assigned Authority:</strong> {
//                   onlineFormData.desk === 'Harshitha' ? 'Ms. Harshitha Shetty' :
//                   onlineFormData.desk === 'Guruprasad' ? 'Dr. Guruprasad Pai' :
//                   onlineFormData.desk === 'Johnson' ? 'Dr. Johnson Fernandes' : 'Ms. Harshitha Shetty'
//                 }</p>
//                 <p><strong>Scheduled Date:</strong> {onlineFormData.date}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }







import React, { useState } from 'react';
import {
  FaArrowLeft, FaCalendarAlt, FaTicketAlt, FaChair, FaUserCheck, FaFileInvoice, FaCheckCircle,
  FaExclamationTriangle, FaVideo, FaBuilding, FaAward, FaEye, FaGraduationCap,
  FaChartLine, FaGlobe, FaHandshake, FaBullhorn, FaUsers, FaBookReader, FaLightbulb,
  FaTimes, FaLaptopCode, FaCoins, FaBriefcase
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { API_BASE_URL } from '../config/api';

const aboutMbaContent = {
  en: {
    badge: "Autonomous PG Program • AIET",
    title: "ABOUT MBA - MASTER OF BUSINESS ADMINISTRATION",
    intro: "The PG Department of Business Administration at Alva's Institute of Engineering & Technology is a vibrant centre of management education committed to academic excellence, research, industry integration, and holistic student development.",
    intake: "Intake: 180 Seats",
    duration: "Duration: 2 Years (4 Semesters)",
    courses: "40 Comprehensive Courses",
    lseg: "LSEG Lab On-Campus",
    specHighlight: "Specialisations Highlight",
    launchTitle: "Launch Your Future: Alva's MBA Program",
    launchSubtitle: "Our intensive 2-year program allows you to specialise in high-demand corporate domains:",
    finTitle: "Finance",
    finDesc: "Master strategic investment, risk analysis, portfolio management, and corporate valuation.",
    baTitle: "Business Analytics",
    baDesc: "Leverage data-driven insights using Power BI, predictive modeling, and analytics platforms.",
    mktTitle: "Marketing Management",
    mktDesc: "Develop digital marketing strategies, brand positioning, and consumer research expertise.",
    hrTitle: "Human Resources",
    hrDesc: "Lead high-performing teams, talent acquisition, strategic HR, and organizational behavior.",
    visionTitle: "Vision",
    visionDesc: "To develop competent and ethical managers and entrepreneurs, sensitive to the environment and culture, responsible to their communities and global in their outlook and approach.",
    missionTitle: "Mission",
    mission1: "Provide necessary knowledge & skills for effective domain specialization.",
    mission2: "Foster curiosity, leadership skills, and academic rigour grounded in the job market.",
    mission3: "Adopt systems thinking to excel in a complex global environment.",
    mission4: "Develop strong commitment to cross-cultural diversity and an entrepreneurial mindset.",
    indTitle: "Industry Partnerships & Corporate Readiness",
    indDesc: "Students undergo Industry-Integrated Training & Certification (ITTC), soft skills, aptitude training, and value-added certifications (Power BI, Digital Marketing, NISM, Advanced Excel, and Grant Thornton Certifications). The on-campus London Stock Exchange Group (LSEG) Lab provides real-time financial market analytics tools.",
    mouTitle: "International MoUs",
    mouDesc: "Partnerships with INTI International University & Spectrum International University, Malaysia for student/faculty exchange, joint research, and global networking.",
    kcciTitle: "KCCI Industry Links",
    kcciDesc: "Build valuable connections through the Kanara Chamber of Commerce and Industry (KCCI), giving graduates real-world skills and unique employer preference.",
    bootcampTitle: "25-Day Residential Bootcamp",
    bootcampDesc: "A 25-day intensive residential bootcamp covering accounting, finance, aptitude, digital marketing, HR, and lectures from industry experts.",
    budgetTitle: "Union Budget Analysis",
    budgetDesc: "Annual Post-Budget Analysis event with experts from Agriculture, SME, Banking, Defense, Manufacturing, and Income Tax offering financial insights.",
    forumTitle: "Weekly Forum Activities",
    forumDesc: "Student-driven weekly competitions in Marketing, Finance, and HR to apply theoretical knowledge directly to practical corporate challenges.",
    csrTitle: "VANAS & Social Responsibility",
    csrDesc: "VANAS agricultural field immersion program for rural economics and sustainability, plus CSR activities (orphanages, beach cleanups, tree planting).",
    hideBtn: "Hide About MBA",
    showBtn: "About MBA"
  },
  kn: {
    badge: "ಸ್ವಾಯತ್ತ ಪಿಜಿ ಕಾರ್ಯಕ್ರಮ • AIET",
    title: "MBA ಬಗ್ಗೆ - ಮಾಸ್ಟರ್ ಆಫ್ ಬಿಸಿನೆಸ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಷನ್",
    intro: "ಆಳ್ವಾಸ್ ಇಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಯ ಸ್ನಾತಕೋತ್ತರ ವ್ಯವಹಾರ ನಿರ್ವಹಣೆ ವಿಭಾಗವು (MBA) ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ, ಸಂಶೋಧನೆ, ಉದ್ಯಮ ಸಂಯೋಜನೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಸಮಗ್ರ ವಿಕಾಸಕ್ಕೆ ಬದ್ಧವಾಗಿರುವ ಕ್ರಿಯಾಶೀಲ ನಿರ್ವಹಣಾ ಶಿಕ್ಷಣ ಕೇಂದ್ರವಾಗಿದೆ.",
    intake: "ಪ್ರವೇಶ ಮಿತಿ: 180 ಸೀಟುಗಳು",
    duration: "ಅವಧಿ: 2 ವರ್ಷಗಳು (4 ಸೆಮಿಸ್ಟರ್‌ಗಳು)",
    courses: "40 ಸಮಗ್ರ ಪಠ್ಯಕ್ರಮಗಳು",
    lseg: "ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ LSEG ಲ್ಯಾಬ್",
    specHighlight: "ವಿಶೇಷತೆಗಳ ಮುಖ್ಯಾಂಶಗಳು",
    launchTitle: "ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಿಕೊಳ್ಳಿ: ಆಳ್ವಾಸ್ MBA ಕಾರ್ಯಕ್ರಮ",
    launchSubtitle: "ನಮ್ಮ 2 ವರ್ಷದ ತೀವ್ರತರವಾದ ಕಾರ್ಯಕ್ರಮವು ನಿಮಗೆ ಪ್ರಮುಖ ಕಾರ್ಪೊರೇಟ್ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ತಜ್ಞತೆ ಪಡೆಯಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ:",
    finTitle: "ಫೈನಾನ್ಸ್ (ಹಣಕಾಸು ನಿರ್ವಹಣೆ)",
    finDesc: "ಕಾರ್ಯತಂತ್ರದ ಹೂಡಿಕೆ, ಅಪಾಯದ ವಿಶ್ಲೇಷಣೆ, ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ ಪ್ರವೀಣರಾಗಿ.",
    baTitle: "ಬಿಸಿನೆಸ್ ಅನಾಲಿಟಿಕ್ಸ್",
    baDesc: "Power BI, ಪ್ರಿಡಿಕ್ಟಿವ್ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ವೇದಿಕೆಗಳನ್ನು ಬಳಸಿ ಮಾಹಿತಿಯಾಧಾರಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
    mktTitle: "ಮಾರ್ಕೆಟಿಂಗ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್",
    mktDesc: "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ತಂತ್ರಗಳು, ಬ್ರ್ಯಾಂಡಿಂಗ್ ಮತ್ತು ಗ್ರಾಹಕ ಸಂಶೋಧನಾ ಪರಿಣತಿಯನ್ನು ವೃದ್ಧಿಸಿಕೊಳ್ಳಿ.",
    hrTitle: "ಮಾನವ ಸಂಪನ್ಮೂಲ (HR)",
    hrDesc: "ಉತ್ತಮ ತಂಡಗಳ ನಿರ್ಮಾಣ, ಪ್ರತಿಭಾನ್ವಿತರ ಆಯ್ಕೆ, ಕಾರ್ಯತಂತ್ರದ HR ಮತ್ತು ಸಾಂಸ್ಥಿಕ ನಡವಳಿಕೆಯಲ್ಲಿ ನಾಯಕರಾಗಿ.",
    visionTitle: "ದೃಷ್ಟಿಕೋನ (Vision)",
    visionDesc: "ಪರಿಸರ ಮತ್ತು ಸಂಸ್ಕೃತಿಗೆ ಸ್ಪಂದಿಸುವ, ತಮ್ಮ ಸಮುದಾಯಗಳಿಗೆ ಜವಾಬ್ದಾರಿಯುತರಾದ ಮತ್ತು ಜಾಗತಿಕ ದೃಷ್ಟಿಕೋನ ಹೊಂದಿರುವ ಸಮರ್ಥ ಹಾಗೂ ನೈತಿಕ ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ಉದ್ಯಮಿಗಳನ್ನು ರೂಪಿಸುವುದು.",
    missionTitle: "ಧ್ಯೇಯ (Mission)",
    mission1: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ವಿಶೇಷತೆಯ ಕ್ಷೇತ್ರದಲ್ಲಿ ಪರಿಣಾಮಕಾರಿಯಾಗಲು ಅಗತ್ಯವಾದ ಜ್ಞಾನ ಮತ್ತು ಕೌಶಲ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು.",
    mission2: "ವೃತ್ತಿಪರ ಜಗತ್ತಿಗೆ ಸೂಕ್ತವಾದ ಶೈಕ್ಷಣಿಕ ಗಂಭೀರತೆಯನ್ನು ಸಾಧಿಸಲು ಕುತೂಹಲ, ನಾಯಕತ್ವ ಕೌಶಲ್ಯಗಳನ್ನು ಬೆಳೆಸುವುದು.",
    mission3: "ಸಂಕೀರ್ಣ ಮತ್ತು ಸದಾ ಬದಲಾಗುತ್ತಿರುವ ಜಾಗತಿಕ ಪರಿಸರದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ಮಿಂಚಲು ಸಿಸ್ಟಮ್ಸ್ ಆಲೋಚನಾ ವಿಧಾನವನ್ನು ಅಳವಡಿಸುವುದು.",
    mission4: "ಸಾಂಸ್ಕೃತಿಕ ವೈವಿಧ್ಯತೆ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆಯ ಮನೋಭಾವವನ್ನು ಸ್ವೀಕರಿಸುವ ಬಲವಾದ ಬದ್ಧತೆಯನ್ನು ಬೆಳೆಸುವುದು.",
    indTitle: "ಉದ್ಯಮ ಸಂಯೋಜನೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸಿದ್ಧತೆ",
    indDesc: "ವಿದ್ಯಾರ್ಥಿಗಳು ITTC ತರಬೇತಿ, ಮೃದು ಕೌಶಲ್ಯಗಳು, ಆಪ್ಟಿಟ್ಯೂಡ್ ತರಬೇತಿ ಮತ್ತು ಮೌಲ್ಯವರ್ಧಿತ ಪ್ರಮಾಣೀಕರಣಗಳನ್ನು (Power BI, Digital Marketing, NISM, Advanced Excel, Grant Thornton) ಪಡೆಯುತ್ತಾರೆ. ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿರುವ ಲಂಡನ್ ಸ್ಟಾಕ್ ಎಕ್ಸ್‌ಚೇಂಜ್ ಗ್ರೂಪ್ (LSEG) ಲ್ಯಾಬ್ ಹಣಕಾಸು ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣಾ ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    mouTitle: "ಅಂತರರಾಷ್ಟ್ರೀಯ MoUs",
    mouDesc: "ಮಲೇಷ್ಯಾದ INTI ಇಂಟರ್ನ್ಯಾಷನಲ್ ಯುನಿವರ್ಸಿಟಿ ಮತ್ತು ಸ್ಪೆಕ್ಟ್ರಮ್ ಇಂಟರ್ನ್ಯಾಷನಲ್ ಯುನಿವರ್ಸಿಟಿಯೊಂದಿಗೆ ಶೈಕ್ಷಣಿಕ ವಿನಿಮಯ ಮತ್ತು ಸಂಶೋಧನಾ ಸಹಭಾಗಿತ್ವ.",
    kcciTitle: "KCCI ಉದ್ಯಮ ಸಂಪರ್ಕಗಳು",
    kcciDesc: "ಕೆನರಾ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಅಂಡ್ ಇಂಡಸ್ಟ್ರಿ (KCCI) ಮೂಲಕ ಅಮೂಲ್ಯವಾದ ಉದ್ಯಮ ಸಂಪರ್ಕಗಳನ್ನು ಬೆಳೆಸಿ ನೈಜ-ಜಗತ್ತಿನ ಕೌಶಲ್ಯಗಳನ್ನು ಪಡೆಯಿರಿ.",
    bootcampTitle: "25-ದಿನಗಳ ವಸತಿ ಬೂಟ್‌ಕ್ಯಾಂಪ್",
    bootcampDesc: "ಅಕೌಂಟಿಂಗ್, ಫೈನಾನ್ಸ್, ಆಪ್ಟಿಟ್ಯೂಡ್, ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್, HR ಮತ್ತು ಉದ್ಯಮ ತಜ್ಞರ ಉಪನ್ಯಾಸಗಳನ್ನು ಒಳಗೊಂಡ 25 ದಿನಗಳ ತೀವ್ರ ವಸತಿ ಕಾರ್ಯಕ್ರಮ.",
    budgetTitle: "ಕೇಂದ್ರ ಬಜೆಟ್ ವಿಶ್ಲೇಷಣೆ",
    budgetDesc: "ಕೃಷಿ, ಬ್ಯಾಂಕಿಂಗ್, ರಕ್ಷಣೆ, ತೆರಿಗೆ ಮುಂತಾದ ರಂಗಗಳ ತಜ್ಞರೊಂದಿಗೆ ಪ್ರತಿವರ್ಷ ನಡೆಯುವ ಕೇಂದ್ರ ಬಜೆಟ್ ವಿಶ್ಲೇಷಣೆ ಕಾರ್ಯಕ್ರಮ.",
    forumTitle: "ವಾರದ ವೇದಿಕೆ ಚಟುವಟಿಕೆಗಳು",
    forumDesc: "ಮಾರ್ಕೆಟಿಂಗ್, ಫೈನಾನ್ಸ್ ಮತ್ತು HR ವಿಷಯಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ ನಡೆಸಲ್ಪಡುವ ಸ್ಪರ್ಧೆಗಳು ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಕಲಿಕೆ.",
    csrTitle: "ವನಸ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿ",
    csrDesc: "ಗ್ರಾಮೀಣ ಆರ್ಥಿಕತೆಗಾಗಿ 'ವನಸ್' ಕೃಷಿ ಕ್ಷೇತ್ರ ಅನುಭವ ಕಾರ್ಯಕ್ರಮ ಮತ್ತು CSR ಚಟುವಟಿಕೆಗಳು (ಅನಾಥಾಶ್ರಮ ಭೇಟಿ, ಕಡಲತೀರ ಸ್ವಚ್ಛತೆ, ಸಸಿ ನೆಡುವುದು).",
    hideBtn: "MBA ವಿವರಗಳನ್ನು ಮರೆಮಾಡಿ",
    showBtn: "MBA ಬಗ್ಗೆ ವಿವರಗಳು"
  }
};

export default function PGAdmission() {
  const { lang, t } = useLanguage();
  const content = aboutMbaContent[lang] || aboutMbaContent.en;
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('booking'); // 'booking', 'appointment', or 'online'
  const [bookingFormData, setBookingFormData] = useState({ name: '', email: '', phone: '', course: 'MBA' });
  const [appointmentFormData, setAppointmentFormData] = useState({ name: '', email: '', phone: '', course: 'MBA', date: '', desk: 'HOD' });
  const [onlineFormData, setOnlineFormData] = useState({ name: '', email: '', phone: '', course: 'MBA', date: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [token, setToken] = useState(null);
  const [queueNumber, setQueueNumber] = useState(null);
  const [virtualLink, setVirtualLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAboutMbaModalOpen, setIsAboutMbaModalOpen] = useState(false);

  // Dynamic system alerts tracking desk conditions
  const statusConfig = {
    HOD: {
      message: "⚠️ Notice: The MBA HOD is currently reviewing final year projects. Short waiting times expected.",
      color: "#ffcc00",
      bg: "rgba(255, 204, 0, 0.1)"
    },
    Harshitha: {
      message: "✅ Available: Ms. Harshitha Shetty is currently available for PG admissions consultation.",
      color: "#00cc66",
      bg: "rgba(0, 204, 102, 0.1)"
    }
  };

  const containerStyle = {
    width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(90px, 12vh, 120px) clamp(12px, 3vw, 20px) 60px clamp(12px, 3vw, 20px)",
    boxSizing: "border-box", minHeight: "100vh", backgroundColor: "transparent", color: "#ffffff",
    fontFamily: "'Poppins', sans-serif"
  };

  const tabWrapperStyle = {
    display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px", flexWrap: "wrap"
  };

  const tabButtonStyle = (isActive) => ({
    padding: "10px 20px", borderRadius: "30px",
    border: isActive ? "2px solid #ff9900" : "2px solid #800000",
    background: isActive ? "linear-gradient(135deg, #ff9900, #ff5500)" : "#000000",
    color: isActive ? "#000000" : "#ffffff",
    fontWeight: "600", cursor: "pointer", fontSize: "14px", transition: "background 0.2s, transform 0.2s"
  });

  const infoPane = {
    background: "rgba(20, 20, 20, 0.9)", border: "1px solid rgba(255, 153, 0, 0.2)", padding: "clamp(18px, 4vw, 35px)", borderRadius: "20px"
  };

  const formPane = {
    background: "rgba(20, 20, 20, 0.9)", padding: "clamp(18px, 4vw, 35px)", borderRadius: "20px", border: "1px solid rgba(255, 153, 0, 0.2)"
  };

  const inputStyle = {
    width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
    padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none"
  };

  const labelStyle = {
    display: "block", fontSize: "14px", color: "#ff9900", fontWeight: "500", marginBottom: "8px"
  };

  const deskBtnStyle = (isSelected) => ({
    flex: "1", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.3s",
    border: isSelected ? "1px solid #ff9900" : "1px solid #800000",
    background: isSelected ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(128, 0, 0, 0.1)",
    color: isSelected ? "#000000" : "#ffffff"
  });

  const primaryBtnStyle = {
    width: "100%", background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000000", padding: "14px", border: "none",
    borderRadius: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "0.3s", marginTop: "10px"
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/admission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingFormData),
      });

      const data = await response.json();

      if (data.success) {
        setBookingSuccess(true);
      } else {
        alert("Failed to secure seat: " + (data.message || (data.errors && data.errors[0]?.msg) || "Error"));
      }
    } catch (error) {
      console.error("Error submitting admission:", error);
      alert("An error occurred while connecting to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhysicalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...appointmentFormData,
          course: appointmentFormData.course || 'MBA',
          type: 'offline'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setToken(data.data.token);
        setQueueNumber(data.data.queueNumber);
        setVirtualLink('');
      } else {
        alert("Failed to schedule campus counseling: " + (data.message || (data.errors && data.errors[0]?.msg) || "Error"));
      }
    } catch (error) {
      console.error("Error submitting physical appointment:", error);
      alert("An error occurred while connecting to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleOnlineSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...onlineFormData,
          course: onlineFormData.course || 'MBA',
          type: 'online'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setToken(data.data.token);
        setVirtualLink(data.data.virtualLink);
        setQueueNumber(null);
      } else {
        alert("Failed to schedule remote counseling: " + (data.message || (data.errors && data.errors[0]?.msg) || "Error"));
      }
    } catch (error) {
      console.error("Error submitting online appointment:", error);
      alert("An error occurred while connecting to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", marginBottom: "15px" }}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 153, 0, 0.3)",
            color: "#ffcc00",
            padding: "8px 18px",
            borderRadius: "25px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.2s ease",
            backdropFilter: "blur(8px)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #ff9900, #ff5500)";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.color = "#ffcc00";
          }}
        >
          <FaArrowLeft /> {t("nav_back") || "Back"}
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "0px", marginBottom: "30px" }}>
        <button
          type="button"
          onClick={() => setIsAboutMbaModalOpen(prev => !prev)}
          style={{
            background: "linear-gradient(135deg, #ff9900, #ff5500)",
            color: "#000000",
            border: "none",
            padding: "12px 28px",
            borderRadius: "30px",
            fontWeight: "700",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(255, 85, 0, 0.3)",
            fontSize: "15px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 85, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 85, 0, 0.3)";
          }}
        >
          <FaGraduationCap style={{ fontSize: "18px" }} />
          {isAboutMbaModalOpen ? content.hideBtn : content.showBtn}
        </button>
      </div>

      {/* IN-PAGE EXPANDABLE ABOUT MBA SHOWCASE */}
      <AnimatePresence>
        {isAboutMbaModalOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto", overflow: "visible" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "40px" }}
          >
            <div style={{
              background: "#121218",
              border: "2px solid rgba(255, 204, 0, 0.4)",
              borderRadius: "24px",
              padding: "clamp(16px, 4vw, 35px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.7)",
              color: "#ffffff"
            }}>
              {/* Header Title & Badges */}
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <span style={{
                  background: "rgba(255, 204, 0, 0.15)",
                  color: "#ffcc00",
                  border: "1px solid rgba(255, 204, 0, 0.4)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "12px"
                }}>
                  {content.badge}
                </span>
                <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.75rem)", fontWeight: "800", color: "#ffffff", margin: "0 0 10px 0" }}>
                  {content.title}
                </h2>
                <p style={{ color: "#a3a3a3", fontSize: "14px", maxWidth: "850px", margin: "0 auto 20px auto", lineHeight: "1.6" }}>
                  {content.intro}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                  <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
                    {content.intake}
                  </span>
                  <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
                    {content.duration}
                  </span>
                  <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
                    {content.courses}
                  </span>
                  <span style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>
                    {content.lseg}
                  </span>
                </div>
              </div>

              {/* SPECIALISATIONS GRID (PROMINENTLY HIGHLIGHTED) */}
              <div style={{
                background: "linear-gradient(135deg, rgba(255, 153, 0, 0.12), rgba(128, 0, 0, 0.3))",
                border: "2px solid rgba(255, 204, 0, 0.6)",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "30px"
              }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <span style={{ background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000", padding: "4px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>
                    {content.specHighlight}
                  </span>
                  <h3 style={{ fontSize: "24px", color: "#ffcc00", margin: "8px 0 4px 0", fontWeight: "800" }}>
                    {content.launchTitle}
                  </h3>
                  <p style={{ color: "#e2e8f0", fontSize: "13px", margin: 0 }}>
                    {content.launchSubtitle}
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  {/* Finance */}
                  <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
                      <FaCoins />
                    </div>
                    <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.finTitle}</h4>
                    <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
                      {content.finDesc}
                    </p>
                  </div>

                  {/* Business Analytics */}
                  <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
                      <FaChartLine />
                    </div>
                    <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.baTitle}</h4>
                    <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
                      {content.baDesc}
                    </p>
                  </div>

                  {/* Marketing Management */}
                  <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
                      <FaBullhorn />
                    </div>
                    <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.mktTitle}</h4>
                    <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
                      {content.mktDesc}
                    </p>
                  </div>

                  {/* Human Resources Management */}
                  <div style={{ background: "rgba(20, 20, 28, 0.95)", border: "1px solid rgba(255, 204, 0, 0.4)", borderRadius: "14px", padding: "18px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255, 204, 0, 0.15)", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffcc00", fontSize: "18px", marginBottom: "10px" }}>
                      <FaUsers />
                    </div>
                    <h4 style={{ fontSize: "16px", color: "#ffffff", margin: "0 0 6px 0", fontWeight: "700" }}>{content.hrTitle}</h4>
                    <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4", margin: 0 }}>
                      {content.hrDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* VISION & MISSION */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px", marginBottom: "30px" }}>
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <FaLightbulb style={{ color: "#ffcc00", fontSize: "18px" }} />
                    <h3 style={{ fontSize: "18px", color: "#ffcc00", margin: 0, fontWeight: "700" }}>{content.visionTitle}</h3>
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    {content.visionDesc}
                  </p>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <FaBookReader style={{ color: "#ffcc00", fontSize: "18px" }} />
                    <h3 style={{ fontSize: "18px", color: "#ffcc00", margin: 0, fontWeight: "700" }}>{content.missionTitle}</h3>
                  </div>
                  <ul style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "1.5", margin: 0, paddingLeft: "16px" }}>
                    <li style={{ marginBottom: "4px" }}>{content.mission1}</li>
                    <li style={{ marginBottom: "4px" }}>{content.mission2}</li>
                    <li style={{ marginBottom: "4px" }}>{content.mission3}</li>
                    <li>{content.mission4}</li>
                  </ul>
                </div>
              </div>

              {/* INDUSTRY RECRUITERS & INITIATIVES */}
              <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "20px", marginBottom: "25px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <FaBriefcase style={{ color: "#ffcc00", fontSize: "18px" }} />
                  <h3 style={{ fontSize: "18px", color: "#ffcc00", margin: 0, fontWeight: "700" }}>{content.indTitle}</h3>
                </div>
                <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", marginBottom: "12px" }}>
                  {content.indDesc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {["EY", "Grant Thornton", "LSEG", "Toyota", "FactSet", "WITHUM", "Asian Paints", "UltraTech Cement", "Ramco", "TCS"].map((company, idx) => (
                    <span key={idx} style={{ background: "rgba(20, 20, 25, 0.9)", border: "1px solid rgba(255, 204, 0, 0.3)", padding: "4px 12px", borderRadius: "12px", fontSize: "11px", color: "#e2e8f0", fontWeight: "600" }}>
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              {/* DETAILED INITIATIVES GRID */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "25px" }}>
                {/* International MoUs */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <FaGlobe style={{ color: "#ff9900", fontSize: "16px" }} />
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.mouTitle}</strong>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {content.mouDesc}
                  </p>
                </div>

                {/* KCCI Connections */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <FaHandshake style={{ color: "#ff9900", fontSize: "16px" }} />
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.kcciTitle}</strong>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {content.kcciDesc}
                  </p>
                </div>

                {/* 25-Day Bootcamp */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <FaGraduationCap style={{ color: "#ff9900", fontSize: "16px" }} />
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.bootcampTitle}</strong>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {content.bootcampDesc}
                  </p>
                </div>

                {/* Union Budget Analysis */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <FaChartLine style={{ color: "#ff9900", fontSize: "16px" }} />
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.budgetTitle}</strong>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {content.budgetDesc}
                  </p>
                </div>

                {/* Weekly Forum Activity */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <FaLaptopCode style={{ color: "#ff9900", fontSize: "16px" }} />
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.forumTitle}</strong>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {content.forumDesc}
                  </p>
                </div>

                {/* VANAS & CSR */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 204, 0, 0.2)", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <FaAward style={{ color: "#ff9900", fontSize: "16px" }} />
                    <strong style={{ color: "#ffffff", fontSize: "14px" }}>{content.csrTitle}</strong>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {content.csrDesc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: "700", margin: "0 0 10px 0" }}>{t("pg_adm_portal")}</h1>
        <p style={{ color: "#a3a3a3", margin: 0 }}>{t("pg_adm_subtitle")}</p>
      </div>

      <div style={tabWrapperStyle}>
        <button style={tabButtonStyle(activeTab === 'booking')}
          onClick={() => { setActiveTab('booking'); setBookingSuccess(false); }}
          onMouseEnter={(e) => { if (activeTab !== 'booking') { e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)"; e.currentTarget.style.transform = "scale(1.05)"; } }}
          onMouseLeave={(e) => { if (activeTab !== 'booking') { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "scale(1)"; } }}
        >
          {t("adm_tab_1")}
        </button>
        <button style={tabButtonStyle(activeTab === 'appointment')}
          onClick={() => { setActiveTab('appointment'); setToken(null); }}
          onMouseEnter={(e) => { if (activeTab !== 'appointment') { e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)"; e.currentTarget.style.transform = "scale(1.05)"; } }}
          onMouseLeave={(e) => { if (activeTab !== 'appointment') { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "scale(1)"; } }}
        >
          {t("adm_tab_2")}
        </button>
        <button style={tabButtonStyle(activeTab === 'online')}
          onClick={() => { setActiveTab('online'); setToken(null); }}
          onMouseEnter={(e) => { if (activeTab !== 'online') { e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)"; e.currentTarget.style.transform = "scale(1.05)"; } }}
          onMouseLeave={(e) => { if (activeTab !== 'online') { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "scale(1)"; } }}
        >
          {t("adm_tab_3")}
        </button>
      </div>

      {/* TAB 1: ONLINE SEAT BOOKING */}
      {activeTab === 'booking' && (
        <div>
          {!bookingSuccess ? (
            <div className="contact-grid">
              <div style={infoPane}>
                <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_req")}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaUserCheck style={{ color: "#ff9900", marginTop: "4px", fontSize: "18px", flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>{t("pg_adm_elig_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: "1.5" }}>
                        {t("pg_adm_elig_desc")}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaFileInvoice style={{ color: "#ff9900", marginTop: "4px", fontSize: "18px", flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>{t("pg_adm_score_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: "1.5" }}>
                        {t("pg_adm_score_desc")}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaAward style={{ color: "#ff9900", marginTop: "4px", fontSize: "18px", flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>{t("pg_adm_sel_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: "1.5" }}>
                        {t("pg_adm_sel_desc")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={formPane}>
                <form onSubmit={handleBookingSubmit}>
                  <label style={labelStyle}>{t("adm_form_name")}</label>
                  <input type="text" style={inputStyle} required onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_email")}</label>
                  <input type="email" style={inputStyle} required onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_phone")}</label>
                  <input type="tel" style={inputStyle} required onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_branch")}</label>
                  <select defaultValue="MBA" style={{ ...inputStyle, background: "#151515" }} onChange={(e) => setBookingFormData({ ...bookingFormData, course: e.target.value })} required>
                    <option value="" disabled hidden></option>
                    <optgroup label="Postgraduate (PG)">
                      <option value="MBA">Master of Business Administration (MBA)</option>
                    </optgroup>
                  </select>
                  <button type="submit" style={primaryBtnStyle} disabled={loading}>{loading ? "Processing..." : t("adm_btn_confirm")}</button>
                </form>
              </div>
            </div>
          ) : (
            <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px solid #800000", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              <FaChair style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
              <h2 style={{ fontSize: "28px", color: "#ffcc00", marginBottom: "10px" }}>{t("adm_req_succ")}</h2>
              <div style={{ textAlign: "left", marginTop: "25px", background: "#151515", padding: "20px", borderRadius: "10px", color: "#d4d4d4" }}>
                <p><strong>Applicant Name:</strong> {bookingFormData.name}</p>
                <p><strong>Selected Branch:</strong> {bookingFormData.course}</p>
                <p><strong>Status:</strong> <span style={{ color: "#ff9900", fontWeight: "600" }}>Provisionally Saved</span></p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: IN-PERSON CAMPUS COUNSELING */}
      {activeTab === 'appointment' && (
        <div>
          {!token ? (
            <div className="contact-grid">
              <div style={infoPane}>
                <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_phys")}</h2>
                <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "20px" }}>Schedule a physical check-in window code to visit the campus desk blocks directly.</p>

                {/* Active Alerts Check */}
                {statusConfig[appointmentFormData.desk || 'HOD'] && (
                  <div style={{ padding: "18px", background: statusConfig[appointmentFormData.desk || 'HOD'].bg, border: `1px dashed ${statusConfig[appointmentFormData.desk || 'HOD'].color}`, borderRadius: "12px", marginTop: "20px" }}>
                    <h4 style={{ margin: "0 0 6px 0", color: statusConfig[appointmentFormData.desk || 'HOD'].color }}><FaExclamationTriangle /> Desk Alert:</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[appointmentFormData.desk || 'HOD'].message}</p>
                  </div>
                )}
              </div>

              <div style={formPane}>
                <form onSubmit={handlePhysicalSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>{t("adm_form_desk")}</label>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'HOD')} onClick={() => setAppointmentFormData({ ...appointmentFormData, desk: 'HOD' })}>HOD (MBA)</button>
                      <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Harshitha')} onClick={() => setAppointmentFormData({ ...appointmentFormData, desk: 'Harshitha' })}>Ms. Harshitha Shetty</button>
                    </div>
                  </div>
                  <label style={labelStyle}>{t("adm_form_name")}</label>
                  <input type="text" style={inputStyle} required onChange={(e) => setAppointmentFormData({ ...appointmentFormData, name: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_email")}</label>
                  <input type="email" style={inputStyle} required onChange={(e) => setAppointmentFormData({ ...appointmentFormData, email: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_phone")}</label>
                  <input type="tel" style={inputStyle} required onChange={(e) => setAppointmentFormData({ ...appointmentFormData, phone: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_date")}</label>
                  <input type="date" style={inputStyle} required onChange={(e) => setAppointmentFormData({ ...appointmentFormData, date: e.target.value })} />
                  <button type="submit" style={primaryBtnStyle} disabled={loading}>{loading ? "Processing..." : t("adm_btn_token")}</button>
                </form>
              </div>
            </div>
          ) : (
            <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              <FaCheckCircle style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
              <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>{t("adm_phys_succ")}</h2>
              <span style={{ color: "#ffcc00", fontSize: "14px", display: "block" }}>Destination: {appointmentFormData.desk === 'HOD' ? 'HOD (MBA)' : 'Ms. Harshitha Shetty'}</span>
              <div style={{ background: "#151515", border: "1px solid #800000", padding: "20px", borderRadius: "12px", margin: "20px 0" }}>
                <strong style={{ fontSize: "32px", color: "#ffffff", letterSpacing: "2px" }}>{token}</strong>
                <span style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "#a3a3a3" }}>Live Waiting Queue: <strong>#{queueNumber}</strong></span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: STANDALONE ONLINE VIDEO COUNSELING */}
      {activeTab === 'online' && (
        <div>
          {!token ? (
            <div className="contact-grid">
              <div style={infoPane}>
                <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_rem")}</h2>
                <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "25px" }}>
                  For prospective students unable to travel to our Mijar campus blocks. Lock a digital session to consult remotely with <strong>Ms. Harshitha Shetty</strong> over a secure link.
                </p>
                <div style={{ padding: "18px", background: "rgba(255, 153, 0, 0.1)", border: "1px dashed #ff9900", borderRadius: "12px" }}>
                  <h4 style={{ margin: "0 0 5px 0", color: "#ff9900", display: "flex", alignItems: "center", gap: "8px" }}><FaVideo /> Virtual Desk Route:</h4>
                  <p style={{ margin: 0, fontSize: "13px", color: "#ffffff", lineHeight: "1.4" }}>
                    Google Meet secure session coordinates are autogenerated instantly upon submission matching your slot date.
                  </p>
                </div>
              </div>

              <div style={formPane}>
                <form onSubmit={handleOnlineSubmit}>
                  <label style={labelStyle}>{t("adm_form_name")}</label>
                  <input type="text" style={inputStyle} required onChange={(e) => setOnlineFormData({ ...onlineFormData, name: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_email_link")}</label>
                  <input type="email" style={inputStyle} required onChange={(e) => setOnlineFormData({ ...onlineFormData, email: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_phone")}</label>
                  <input type="tel" style={inputStyle} required onChange={(e) => setOnlineFormData({ ...onlineFormData, phone: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_target")}</label>
                  <select defaultValue="MBA" style={{ ...inputStyle, background: "#151515" }} onChange={(e) => setOnlineFormData({ ...onlineFormData, course: e.target.value })} required>
                    <option value="" disabled hidden></option>
                    <option value="MBA">Master of Business Administration (MBA)</option>
                  </select>

                  <label style={labelStyle}>{t("adm_form_pref_date")}</label>
                  <input type="date" style={inputStyle} required onChange={(e) => setOnlineFormData({ ...onlineFormData, date: e.target.value })} />
                  <button type="submit" style={primaryBtnStyle} disabled={loading}>{loading ? "Processing..." : t("adm_btn_remote")}</button>
                </form>
              </div>
            </div>
          ) : (
            <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              <FaVideo style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
              <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{t("adm_rem_succ")}</h2>
              <p style={{ color: "#a3a3a3", fontSize: "14px" }}>Remote session access token successfully created for AO consultation panel review.</p>

              <div style={{ background: "#151515", border: "1px solid #800000", padding: "25px", borderRadius: "12px", margin: "25px 0" }}>
                <span style={{ fontSize: "12px", color: "#ffcc00", textTransform: "uppercase", display: "block", marginBottom: "5px" }}>Digital Token ID</span>
                <strong style={{ fontSize: "30px", color: "#ffffff", letterSpacing: "1px" }}>{token}</strong>

                <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "12px", color: "#a3a3a3", display: "block", marginBottom: "10px" }}>Click to open your assigned call room:</span>
                  <a href={virtualLink} target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000", padding: "10px 20px", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", fontWeight: "600" }}>
                    <FaVideo /> Join Live Google Meet Room
                  </a>
                </div>
              </div>
              <div style={{ textAlign: "left", color: "#d4d4d4", fontSize: "14px" }}>
                <p><strong>Candidate:</strong> {onlineFormData.name}</p>
                <p><strong>Scheduled Date:</strong> {onlineFormData.date}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
