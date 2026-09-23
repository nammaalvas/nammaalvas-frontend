// // import React, { useState } from 'react';
// // import { FaCalendarAlt, FaTicketAlt, FaChair, FaUserCheck, FaFileInvoice, FaCheckCircle, FaExclamationTriangle, FaVideo } from 'react-icons/fa';

// // export default function Admission() {
// //   const [activeTab, setActiveTab] = useState('booking'); // 'booking', 'appointment', or 'online'
// //   const [bookingFormData, setBookingFormData] = useState({ name: '', email: '', phone: '', course: 'cse' });
// //   const [appointmentFormData, setAppointmentFormData] = useState({ name: '', email: '', phone: '', course: 'cse', date: '', desk: 'Principal' });
// //   const [onlineFormData, setOnlineFormData] = useState({ name: '', email: '', phone: '', course: 'cse', date: '' });
// //   const [bookingSuccess, setBookingSuccess] = useState(false);
// //   const [token, setToken] = useState(null);
// //   const [queueNumber, setQueueNumber] = useState(null);
// //   const [virtualLink, setVirtualLink] = useState('');

// //   // Dynamic system alerts tracking desk conditions
// //   const statusConfig = {
// //     Principal: {
// //       message: "⚠️ Administrative Alert: Expect a 30-minute processing delay due to an ongoing university academic board meeting.",
// //       color: "#ffcc00",
// //       bg: "rgba(255, 204, 0, 0.1)"
// //     },
// //     AO: {
// //       message: "🚨 Notice: The Admissions Officer is on official leave for the second half of today. Slots booked will be reviewed by the Assistant AO.",
// //       color: "#ff5500",
// //       bg: "rgba(255, 85, 0, 0.1)"
// //     }
// //   };

// //   const containerStyle = {
// //     width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "140px 20px 60px 20px",
// //     boxSizing: "border-box", minHeight: "100vh", backgroundColor: "transparent", color: "#ffffff",
// //     fontFamily: "'Poppins', sans-serif"
// //   };

// //   const tabWrapperStyle = {
// //     display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px", flexWrap: "wrap"
// //   };

// //   const tabButtonStyle = (isActive) => ({
// //     padding: "12px 24px", borderRadius: "30px",
// //     border: isActive ? "1px solid #ff9900" : "1px solid #800000",
// //     background: isActive ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(128, 0, 0, 0.15)",
// //     color: isActive ? "#000000" : "#ffffff",
// //     fontWeight: "600", cursor: "pointer", fontSize: "14px", transition: "0.3s"
// //   });

// //   const panelGrid = {
// //     display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start"
// //   };

// //   const infoPane = {
// //     background: "rgba(128, 0, 0, 0.1)", border: "1px solid rgba(128, 0, 0, 0.25)", padding: "35px", borderRadius: "20px"
// //   };

// //   const formPane = {
// //     background: "rgba(20, 20, 20, 0.9)", padding: "35px", borderRadius: "20px", border: "1px solid rgba(255, 153, 0, 0.2)"
// //   };

// //   const inputStyle = {
// //     width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
// //     padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none"
// //   };

// //   const labelStyle = {
// //     display: "block", fontSize: "14px", color: "#ff9900", fontWeight: "500", marginBottom: "8px"
// //   };

// //   const deskBtnStyle = (isSelected) => ({
// //     flex: "1", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.3s",
// //     border: isSelected ? "1px solid #ff9900" : "1px solid #800000",
// //     background: isSelected ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(128, 0, 0, 0.1)",
// //     color: isSelected ? "#000000" : "#ffffff"
// //   });

// //   const primaryBtnStyle = {
// //     width: "100%", background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000000", padding: "14px", border: "none",
// //     borderRadius: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "0.3s", marginTop: "10px"
// //   };

// //   const handleBookingSubmit = (e) => {
// //     e.preventDefault();
// //     setBookingSuccess(true);
// //   };

// //   const handlePhysicalSubmit = (e) => {
// //     e.preventDefault();
// //     setToken(`AIET-2026-P${Math.floor(1000 + Math.random() * 9000)}`);
// //     setQueueNumber(Math.floor(1 + Math.random() * 6));
// //     setVirtualLink('');
// //   };

// //   const handleOnlineSubmit = (e) => {
// //     e.preventDefault();
// //     setToken(`AIET-2026-O${Math.floor(1000 + Math.random() * 9000)}`);
// //     setVirtualLink(`https://meet.google.com/aie-tver-s${Math.floor(10 + Math.random() * 89)}`);
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <div style={{ textAlign: "center", marginBottom: "30px" }}>
// //         <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("adm_portal")}</h1>
// //         <p style={{ color: "#a3a3a3", margin: 0 }}>{t("adm_sub_desc")}</p>
// //       </div>

// //       {/* 3 Standalone Navigation Tabs */}
// //       <div style={tabWrapperStyle}>
// //         <button style={tabButtonStyle(activeTab === 'booking')} onClick={() => { setActiveTab('booking'); setBookingSuccess(false); }}>
// //           1. Online Seat Booking
// //         </button>
// //         <button style={tabButtonStyle(activeTab === 'appointment')} onClick={() => { setActiveTab('appointment'); setToken(null); }}>
// //           2. In-Person Campus Counseling
// //         </button>
// //         <button style={tabButtonStyle(activeTab === 'online')} onClick={() => { setActiveTab('online'); setToken(null); }}>
// //           3. Online Video Counseling (Remote)
// //         </button>
// //       </div>

// //       {/* TAB 1: ONLINE SEAT BOOKING */}
// //       {activeTab === 'booking' && (
// //         <div>
// //           {!bookingSuccess ? (
// //             <div style={panelGrid}>
// //               <div style={infoPane}>
// //                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_req")}</h2>
// //                 <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
// //                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
// //                     <FaUserCheck style={{ color: "#ff9900", marginTop: "4px" }} />
// //                     <div>
// //                       <strong style={{ color: "#ffffff", display: "block" }}>Academic Eligibility</strong>
// //                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>Minimum of 45% aggregate marks in 10+2 / PUC with Physics & Mathematics as mandatory subjects.</span>
// //                     </div>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
// //                     <FaFileInvoice style={{ color: "#ff9900", marginTop: "4px" }} />
// //                     <div>
// //                       <strong style={{ color: "#ffffff", display: "block" }}>Entrance Scorecards</strong>
// //                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>Valid metrics entry from KCET, COMEDK, or JEE Main options.</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div style={formPane}>
// //                 <form onSubmit={handleBookingSubmit}>
// //                   <label style={labelStyle}>Applicant Full Name</label>
// //                   <input type="text" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, name: e.target.value})} />
// //                   <label style={labelStyle}>Email Address</label>
// //                   <input type="email" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, email: e.target.value})} />
// //                   <label style={labelStyle}>Contact Number</label>
// //                   <input type="tel" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, phone: e.target.value})} />
// //                   <label style={labelStyle}>Desired Engineering Branch</label>
// //                   <select style={{...inputStyle, background: "#151515"}} onChange={(e) => setBookingFormData({...bookingFormData, course: e.target.value})}>
// //                     <option value="CSE">Computer Science & Engineering</option>
// //                     <option value="ISE">Information Science & Engineering</option>
// //                     <option value="ECE">Electronics & Communication Engineering</option>
// //                   </select>
// //                   <button type="submit" style={primaryBtnStyle}>Confirm Online Seat Booking</button>
// //                 </form>
// //               </div>
// //             </div>
// //           ) : (
// //             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px solid #800000", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
// //               <FaChair style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
// //               <h2 style={{ fontSize: "28px", color: "#ffcc00", marginBottom: "10px" }}>{t("adm_req_succ")}</h2>
// //               <div style={{ textAlign: "left", marginTop: "25px", background: "#151515", padding: "20px", borderRadius: "10px", color: "#d4d4d4" }}>
// //                 <p><strong>{t("adm_applicant_name")}</strong> {bookingFormData.name}</p>
// //                 <p><strong>{t("adm_selected_branch")}</strong> {bookingFormData.course}</p>
// //                 <p><strong>{t("adm_status_label")}</strong> <span style={{ color: "#ff9900", fontWeight: "600" }}>{t("adm_provisionally_saved")}</span></p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* TAB 2: IN-PERSON CAMPUS COUNSELING */}
// //       {activeTab === 'appointment' && (
// //         <div>
// //           {!token ? (
// //             <div style={panelGrid}>
// //               <div style={infoPane}>
// //                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_phys")}</h2>
// //                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "20px" }}>Schedule a physical check-in window code to visit the campus desk blocks directly.</p>

// //                 {/* Active Alerts Check */}
// //                 <div style={{ padding: "18px", background: statusConfig[appointmentFormData.desk].bg, border: `1px dashed ${statusConfig[appointmentFormData.desk].color}`, borderRadius: "12px", marginTop: "20px" }}>
// //                   <h4 style={{ margin: "0 0 6px 0", color: statusConfig[appointmentFormData.desk].color }}><FaExclamationTriangle /> {t("adm_desk_alert")}</h4>
// //                   <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[appointmentFormData.desk].message}</p>
// //                 </div>
// //               </div>

// //               <div style={formPane}>
// //                 <form onSubmit={handlePhysicalSubmit}>
// //                   <div style={{ marginBottom: "20px" }}>
// //                     <label style={labelStyle}>Select Desk Authority</label>
// //                     <div style={{ display: "flex", gap: "15px" }}>
// //                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Principal')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'Principal'})}>{t("adm_principal_desk")}</button>
// //                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'AO')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'AO'})}>{t("adm_ao_desk")}</button>
// //                     </div>
// //                   </div>
// //                   <label style={labelStyle}>Full Name</label>
// //                   <input type="text" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, name: e.target.value})} />
// //                   <label style={labelStyle}>Contact Number</label>
// //                   <input type="tel" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, phone: e.target.value})} />
// //                   <label style={labelStyle}>Appointment Date</label>
// //                   <input type="date" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, date: e.target.value})} />
// //                   <button type="submit" style={primaryBtnStyle}>Generate Entry Token</button>
// //                 </form>
// //               </div>
// //             </div>
// //           ) : (
// //             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
// //               <FaCheckCircle style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
// //               <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>{t("adm_phys_succ")}</h2>
// //               <span style={{ color: "#ffcc00", fontSize: "14px", display: "block" }}>Destination: {appointmentFormData.desk === 'AO' ? 'Admissions Officer' : 'Principal Desk'}</span>
// //               <div style={{ background: "#151515", border: "1px solid #800000", padding: "20px", borderRadius: "12px", margin: "20px 0" }}>
// //                 <strong style={{ fontSize: "32px", color: "#ffffff", letterSpacing: "2px" }}>{token}</strong>
// //                 <span style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "#a3a3a3" }}>{t("adm_live_queue")} <strong>#{queueNumber}</strong></span>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* TAB 3: STANDALONE ONLINE VIDEO COUNSELING */}
// //       {activeTab === 'online' && (
// //         <div>
// //           {!token ? (
// //             <div style={panelGrid}>
// //               <div style={infoPane}>
// //                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_rem")}</h2>
// //                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "25px" }}>
// //                   For prospective students unable to travel to our Mijar campus blocks. Lock a digital session to consult remotely with the **{t("adm_ao_desk")}** over a secure link.
// //                 </p>
// //                 <div style={{ padding: "18px", background: "rgba(255, 153, 0, 0.1)", border: "1px dashed #ff9900", borderRadius: "12px" }}>
// //                   <h4 style={{ margin: "0 0 5px 0", color: "#ff9900", display: "flex", alignItems: "center", gap: "8px" }}><FaVideo /> {t("adm_virtual_route")}</h4>
// //                   <p style={{ margin: 0, fontSize: "13px", color: "#ffffff", lineHeight: "1.4" }}>
// //                     Google Meet secure session coordinates are autogenerated instantly upon submission matching your slot date.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div style={formPane}>
// //                 <form onSubmit={handleOnlineSubmit}>
// //                   <label style={labelStyle}>Full Name</label>
// //                   <input type="text" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, name: e.target.value})} />
// //                   <label style={labelStyle}>Email Address (For Invite Link)</label>
// //                   <input type="email" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, email: e.target.value})} />
// //                   <label style={labelStyle}>Contact Number</label>
// //                   <input type="tel" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, phone: e.target.value})} />
// //                   <label style={labelStyle}>Target Branch</label>
// //                   <select style={{...inputStyle, background: "#151515"}} onChange={(e) => setOnlineFormData({...onlineFormData, course: e.target.value})}>
// //                     <option value="CSE">Computer Science & Engineering</option>
// //                     <option value="ISE">Information Science & Engineering</option>
// //                   </select>
// //                   <label style={labelStyle}>Preferred Consultation Date</label>
// //                   <input type="date" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, date: e.target.value})} />
// //                   <button type="submit" style={primaryBtnStyle}>Request Remote Consultation</button>
// //                 </form>
// //               </div>
// //             </div>
// //           ) : (
// //             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
// //               <FaVideo style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
// //               <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{t("adm_rem_succ")}</h2>
// //               <p style={{ color: "#a3a3a3", fontSize: "14px" }}>Remote session access token successfully created for AO consultation panel review.</p>

// //               <div style={{ background: "#151515", border: "1px solid #800000", padding: "25px", borderRadius: "12px", margin: "25px 0" }}>
// //                 <span style={{ fontSize: "12px", color: "#ffcc00", textTransform: "uppercase", display: "block", marginBottom: "5px" }}>Digital Token ID</span>
// //                 <strong style={{ fontSize: "30px", color: "#ffffff", letterSpacing: "1px" }}>{token}</strong>

// //                 <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
// //                   <span style={{ fontSize: "12px", color: "#a3a3a3", display: "block", marginBottom: "10px" }}>Click to open your assigned call room:</span>
// //                   <a href={virtualLink} target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000", padding: "10px 20px", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", fontWeight: "600" }}>
// //                     <FaVideo /> {t("adm_meet_room")}
// //                   </a>
// //                 </div>
// //               </div>
// //               <div style={{ textAlign: "left", color: "#d4d4d4", fontSize: "14px" }}>
// //                 <p><strong>Candidate:</strong> {onlineFormData.name}</p>
// //                 <p><strong>Scheduled Date:</strong> {onlineFormData.date}</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { FaCalendarAlt, FaTicketAlt, FaChair, FaUserCheck, FaFileInvoice, FaCheckCircle, FaExclamationTriangle, FaVideo, FaBuilding, FaAward, FaEye } from 'react-icons/fa';
// import { useLanguage } from '../context/LanguageContext';

// export default function Admission() {
//   const { t } = useLanguage();
//   const [activeTab, setActiveTab] = useState('booking'); // 'booking', 'appointment', or 'online'
//   const [bookingFormData, setBookingFormData] = useState({ name: '', email: '', phone: '', course: '' });
//   const [appointmentFormData, setAppointmentFormData] = useState({ name: '', email: '', phone: '', course: '', date: '', desk: 'Principal' });
//   const [onlineFormData, setOnlineFormData] = useState({ name: '', email: '', phone: '', course: 'CSE', date: '' });
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [token, setToken] = useState(null);
//   const [queueNumber, setQueueNumber] = useState(null);
//   const [virtualLink, setVirtualLink] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Dynamic system alerts tracking desk conditions
//   const statusConfig = {
//     Principal: {
//       message: "⚠️ Administrative Alert: Expect a 30-minute processing delay due to an ongoing university academic board meeting.",
//       color: "#ffcc00",
//       bg: "rgba(255, 204, 0, 0.1)"
//     },
//     AO: {
//       message: "🚨 Notice: The Admissions Officer is on official leave for the second half of today. Slots booked will be reviewed by the Assistant AO.",
//       color: "#ff5500",
//       bg: "rgba(255, 85, 0, 0.1)"
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
//     setLoading(true);
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
//         alert("Failed to secure seat: " + (data.message || (data.errors && data.errors[0]?.msg) || "Error"));
//       }
//     } catch (error) {
//       console.error("Error submitting admission:", error);
//       alert("An error occurred while connecting to the server. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePhysicalSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/appointment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...appointmentFormData,
//           type: 'offline'
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setToken(data.data.token);
//         setQueueNumber(data.data.queueNumber);
//         setVirtualLink('');
//       } else {
//         alert("Failed to schedule campus counseling: " + (data.message || (data.errors && data.errors[0]?.msg) || "Error"));
//       }
//     } catch (error) {
//       console.error("Error submitting physical appointment:", error);
//       alert("An error occurred while connecting to the server. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOnlineSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/appointment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...onlineFormData,
//           type: 'online'
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setToken(data.data.token);
//         setVirtualLink(data.data.virtualLink);
//         setQueueNumber(null);
//       } else {
//         alert("Failed to schedule remote counseling: " + (data.message || (data.errors && data.errors[0]?.msg) || "Error"));
//       }
//     } catch (error) {
//       console.error("Error submitting online appointment:", error);
//       alert("An error occurred while connecting to the server. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("adm_portal")}</h1>
//         <p style={{ color: "#a3a3a3", margin: 0 }}>{t("adm_sub_desc")}</p>
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
//                 <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaUserCheck style={{ color: "#ff9900", marginTop: "4px" }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_elig_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_elig_desc")}</span>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaFileInvoice style={{ color: "#ff9900", marginTop: "4px" }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_score_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_score_desc")}</span>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaBuilding style={{ color: "#ff9900", marginTop: "4px" }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_mgt_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_mgt_desc")}</span>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
//                     <FaAward style={{ color: "#ff9900", marginTop: "4px" }} />
//                     <div>
//                       <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_snq_title")}</strong>
//                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_snq_desc")}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div style={{ marginTop: "30px", borderTop: "1px solid rgba(255, 153, 0, 0.2)", paddingTop: "25px", textAlign: "center" }}>
//                   <a href="/ug_cse_syllabus.pdf" target="_blank" rel="noopener noreferrer" style={{ 
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
//                   <select defaultValue="" style={{...inputStyle, background: "#151515"}} onChange={(e) => setBookingFormData({...bookingFormData, course: e.target.value})} required>
//                     <option value="" disabled hidden></option>
//                     <option value="CSE">Computer Science & Engineering</option>
//                     <option value="ISE">Information Science & Engineering</option>
//                     <option value="ECE">Electronics & Communication Engineering</option>
//                     <option value="ME">Mechanical Engineering</option>
//                     <option value="CE">Civil Engineering</option>
//                     <option value="AIML">Artificial Intelligence & Machine Learning</option>
//                     <option value="AIDS">Artificial Intelligence & Data Science</option>
//                     <option value="CSD">Computer Science & Design</option>
//                     <option value="IOT">IoT & Cyber Security</option>
//                   </select>
//                   <button type="submit" style={primaryBtnStyle}>Confirm Online Seat Booking</button>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px solid #800000", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
//               <FaChair style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
//               <h2 style={{ fontSize: "28px", color: "#ffcc00", marginBottom: "10px" }}>{t("adm_req_succ")}</h2>
//               <div style={{ textAlign: "left", marginTop: "25px", background: "#151515", padding: "20px", borderRadius: "10px", color: "#d4d4d4" }}>
//                 <p><strong>{t("adm_applicant_name")}</strong> {bookingFormData.name}</p>
//                 <p><strong>{t("adm_selected_branch")}</strong> {bookingFormData.course}</p>
//                 <p><strong>{t("adm_status_label")}</strong> <span style={{ color: "#ff9900", fontWeight: "600" }}>{t("adm_provisionally_saved")}</span></p>
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
//                 <div style={{ padding: "18px", background: statusConfig[appointmentFormData.desk].bg, border: `1px dashed ${statusConfig[appointmentFormData.desk].color}`, borderRadius: "12px", marginTop: "20px" }}>
//                   <h4 style={{ margin: "0 0 6px 0", color: statusConfig[appointmentFormData.desk].color }}><FaExclamationTriangle /> {t("adm_desk_alert")}</h4>
//                   <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[appointmentFormData.desk].message}</p>
//                 </div>
//               </div>

//               <div style={formPane}>
//                 <form onSubmit={handlePhysicalSubmit}>
//                   <div style={{ marginBottom: "20px" }}>
//                     <label style={labelStyle}>{t("adm_form_desk")}</label>
//                     <div style={{ display: "flex", gap: "15px" }}>
//                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Principal')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'Principal'})}>{t("adm_principal_desk")}</button>
//                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'AO')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'AO'})}>{t("adm_ao_desk")}</button>
//                     </div>
//                   </div>
//                   <label style={labelStyle}>{t("adm_form_name")}</label>
//                   <input type="text" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, name: e.target.value})} />
//                   <label style={labelStyle}>Contact Number</label>
//                   <input type="tel" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, phone: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_date")}</label>
//                   <input type="date" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, date: e.target.value})} />
//                   <button type="submit" style={primaryBtnStyle}>Generate Entry Token</button>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
//               <FaCheckCircle style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
//               <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>{t("adm_phys_succ")}</h2>
//               <span style={{ color: "#ffcc00", fontSize: "14px", display: "block" }}>Destination: {appointmentFormData.desk === 'AO' ? 'Admissions Officer' : 'Principal Desk'}</span>
//               <div style={{ background: "#151515", border: "1px solid #800000", padding: "20px", borderRadius: "12px", margin: "20px 0" }}>
//                 <strong style={{ fontSize: "32px", color: "#ffffff", letterSpacing: "2px" }}>{token}</strong>
//                 <span style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "#a3a3a3" }}>{t("adm_live_queue")} <strong>#{queueNumber}</strong></span>
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
//                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "25px" }}>
//                   For prospective students unable to travel to our Mijar campus blocks. Lock a digital session to consult remotely with the **{t("adm_ao_desk")}** over a secure link.
//                 </p>
//                 <div style={{ padding: "18px", background: "rgba(255, 153, 0, 0.1)", border: "1px dashed #ff9900", borderRadius: "12px" }}>
//                   <h4 style={{ margin: "0 0 5px 0", color: "#ff9900", display: "flex", alignItems: "center", gap: "8px" }}><FaVideo /> {t("adm_virtual_route")}</h4>
//                   <p style={{ margin: 0, fontSize: "13px", color: "#ffffff", lineHeight: "1.4" }}>
//                     Google Meet secure session coordinates are autogenerated instantly upon submission matching your slot date.
//                   </p>
//                 </div>
//               </div>

//               <div style={formPane}>
//                 <form onSubmit={handleOnlineSubmit}>
//                   <label style={labelStyle}>{t("adm_form_name")}</label>
//                   <input type="text" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, name: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_email_link")}</label>
//                   <input type="email" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, email: e.target.value})} />
//                   <label style={labelStyle}>{t("adm_form_phone")}</label>
//                   <input type="tel" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, phone: e.target.value})} />

//                   <label style={labelStyle}>Preferred Consultation Date</label>
//                   <input type="date" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, date: e.target.value})} />
//                   <button type="submit" style={primaryBtnStyle}>Request Remote Consultation</button>
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
//                     <FaVideo /> {t("adm_meet_room")}
//                   </a>
//                 </div>
//               </div>
//               <div style={{ textAlign: "left", color: "#d4d4d4", fontSize: "14px" }}>
//                 <p><strong>Candidate:</strong> {onlineFormData.name}</p>
//                 <p><strong>Scheduled Date:</strong> {onlineFormData.date}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }






// --------------------------------------------------------------------------------


// // import React, { useState } from 'react';
// // import { FaCalendarAlt, FaTicketAlt, FaChair, FaUserCheck, FaFileInvoice, FaCheckCircle, FaExclamationTriangle, FaVideo } from 'react-icons/fa';

// // export default function Admission() {
// //   const [activeTab, setActiveTab] = useState('booking'); // 'booking', 'appointment', or 'online'
// //   const [bookingFormData, setBookingFormData] = useState({ name: '', email: '', phone: '', course: 'cse' });
// //   const [appointmentFormData, setAppointmentFormData] = useState({ name: '', email: '', phone: '', course: 'cse', date: '', desk: 'Principal' });
// //   const [onlineFormData, setOnlineFormData] = useState({ name: '', email: '', phone: '', course: 'cse', date: '' });
// //   const [bookingSuccess, setBookingSuccess] = useState(false);
// //   const [token, setToken] = useState(null);
// //   const [queueNumber, setQueueNumber] = useState(null);
// //   const [virtualLink, setVirtualLink] = useState('');

// //   // Dynamic system alerts tracking desk conditions
// //   const statusConfig = {
// //     Principal: {
// //       message: "⚠️ Administrative Alert: Expect a 30-minute processing delay due to an ongoing university academic board meeting.",
// //       color: "#ffcc00",
// //       bg: "rgba(255, 204, 0, 0.1)"
// //     },
// //     AO: {
// //       message: "🚨 Notice: The Admissions Officer is on official leave for the second half of today. Slots booked will be reviewed by the Assistant AO.",
// //       color: "#ff5500",
// //       bg: "rgba(255, 85, 0, 0.1)"
// //     }
// //   };

// //   const containerStyle = {
// //     width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "140px 20px 60px 20px",
// //     boxSizing: "border-box", minHeight: "100vh", backgroundColor: "transparent", color: "#ffffff",
// //     fontFamily: "'Poppins', sans-serif"
// //   };

// //   const tabWrapperStyle = {
// //     display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px", flexWrap: "wrap"
// //   };

// //   const tabButtonStyle = (isActive) => ({
// //     padding: "12px 24px", borderRadius: "30px",
// //     border: isActive ? "1px solid #ff9900" : "1px solid #800000",
// //     background: isActive ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(128, 0, 0, 0.15)",
// //     color: isActive ? "#000000" : "#ffffff",
// //     fontWeight: "600", cursor: "pointer", fontSize: "14px", transition: "0.3s"
// //   });

// //   const panelGrid = {
// //     display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start"
// //   };

// //   const infoPane = {
// //     background: "rgba(128, 0, 0, 0.1)", border: "1px solid rgba(128, 0, 0, 0.25)", padding: "35px", borderRadius: "20px"
// //   };

// //   const formPane = {
// //     background: "rgba(20, 20, 20, 0.9)", padding: "35px", borderRadius: "20px", border: "1px solid rgba(255, 153, 0, 0.2)"
// //   };

// //   const inputStyle = {
// //     width: "100%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)",
// //     padding: "12px 16px", borderRadius: "10px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none"
// //   };

// //   const labelStyle = {
// //     display: "block", fontSize: "14px", color: "#ff9900", fontWeight: "500", marginBottom: "8px"
// //   };

// //   const deskBtnStyle = (isSelected) => ({
// //     flex: "1", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.3s",
// //     border: isSelected ? "1px solid #ff9900" : "1px solid #800000",
// //     background: isSelected ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(128, 0, 0, 0.1)",
// //     color: isSelected ? "#000000" : "#ffffff"
// //   });

// //   const primaryBtnStyle = {
// //     width: "100%", background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000000", padding: "14px", border: "none",
// //     borderRadius: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "0.3s", marginTop: "10px"
// //   };

// //   const handleBookingSubmit = (e) => {
// //     e.preventDefault();
// //     setBookingSuccess(true);
// //   };

// //   const handlePhysicalSubmit = (e) => {
// //     e.preventDefault();
// //     setToken(`AIET-2026-P${Math.floor(1000 + Math.random() * 9000)}`);
// //     setQueueNumber(Math.floor(1 + Math.random() * 6));
// //     setVirtualLink('');
// //   };

// //   const handleOnlineSubmit = (e) => {
// //     e.preventDefault();
// //     setToken(`AIET-2026-O${Math.floor(1000 + Math.random() * 9000)}`);
// //     setVirtualLink(`https://meet.google.com/aie-tver-s${Math.floor(10 + Math.random() * 89)}`);
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <div style={{ textAlign: "center", marginBottom: "30px" }}>
// //         <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("adm_portal")}</h1>
// //         <p style={{ color: "#a3a3a3", margin: 0 }}>Secure your branch seat allocation or request an administrative meeting slot.</p>
// //       </div>

// //       {/* 3 Standalone Navigation Tabs */}
// //       <div style={tabWrapperStyle}>
// //         <button style={tabButtonStyle(activeTab === 'booking')} onClick={() => { setActiveTab('booking'); setBookingSuccess(false); }}>
// //           1. Online Seat Booking
// //         </button>
// //         <button style={tabButtonStyle(activeTab === 'appointment')} onClick={() => { setActiveTab('appointment'); setToken(null); }}>
// //           2. In-Person Campus Counseling
// //         </button>
// //         <button style={tabButtonStyle(activeTab === 'online')} onClick={() => { setActiveTab('online'); setToken(null); }}>
// //           3. Online Video Counseling (Remote)
// //         </button>
// //       </div>

// //       {/* TAB 1: ONLINE SEAT BOOKING */}
// //       {activeTab === 'booking' && (
// //         <div>
// //           {!bookingSuccess ? (
// //             <div style={panelGrid}>
// //               <div style={infoPane}>
// //                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_req")}</h2>
// //                 <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
// //                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
// //                     <FaUserCheck style={{ color: "#ff9900", marginTop: "4px" }} />
// //                     <div>
// //                       <strong style={{ color: "#ffffff", display: "block" }}>Academic Eligibility</strong>
// //                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>Minimum of 45% aggregate marks in 10+2 / PUC with Physics & Mathematics as mandatory subjects.</span>
// //                     </div>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
// //                     <FaFileInvoice style={{ color: "#ff9900", marginTop: "4px" }} />
// //                     <div>
// //                       <strong style={{ color: "#ffffff", display: "block" }}>Entrance Scorecards</strong>
// //                       <span style={{ fontSize: "14px", color: "#a3a3a3" }}>Valid metrics entry from KCET, COMEDK, or JEE Main options.</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div style={formPane}>
// //                 <form onSubmit={handleBookingSubmit}>
// //                   <label style={labelStyle}>Applicant Full Name</label>
// //                   <input type="text" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, name: e.target.value})} />
// //                   <label style={labelStyle}>Email Address</label>
// //                   <input type="email" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, email: e.target.value})} />
// //                   <label style={labelStyle}>Contact Number</label>
// //                   <input type="tel" style={inputStyle} required onChange={(e) => setBookingFormData({...bookingFormData, phone: e.target.value})} />
// //                   <label style={labelStyle}>Desired Engineering Branch</label>
// //                   <select style={{...inputStyle, background: "#151515"}} onChange={(e) => setBookingFormData({...bookingFormData, course: e.target.value})}>
// //                     <option value="CSE">Computer Science & Engineering</option>
// //                     <option value="ISE">Information Science & Engineering</option>
// //                     <option value="ECE">Electronics & Communication Engineering</option>
// //                   </select>
// //                   <button type="submit" style={primaryBtnStyle}>Confirm Online Seat Booking</button>
// //                 </form>
// //               </div>
// //             </div>
// //           ) : (
// //             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px solid #800000", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
// //               <FaChair style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
// //               <h2 style={{ fontSize: "28px", color: "#ffcc00", marginBottom: "10px" }}>{t("adm_req_succ")}</h2>
// //               <div style={{ textAlign: "left", marginTop: "25px", background: "#151515", padding: "20px", borderRadius: "10px", color: "#d4d4d4" }}>
// //                 <p><strong>Applicant Name:</strong> {bookingFormData.name}</p>
// //                 <p><strong>Selected Branch:</strong> {bookingFormData.course}</p>
// //                 <p><strong>Status:</strong> <span style={{ color: "#ff9900", fontWeight: "600" }}>Provisionally Saved</span></p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* TAB 2: IN-PERSON CAMPUS COUNSELING */}
// //       {activeTab === 'appointment' && (
// //         <div>
// //           {!token ? (
// //             <div style={panelGrid}>
// //               <div style={infoPane}>
// //                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_phys")}</h2>
// //                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "20px" }}>Schedule a physical check-in window code to visit the campus desk blocks directly.</p>

// //                 {/* Active Alerts Check */}
// //                 <div style={{ padding: "18px", background: statusConfig[appointmentFormData.desk].bg, border: `1px dashed ${statusConfig[appointmentFormData.desk].color}`, borderRadius: "12px", marginTop: "20px" }}>
// //                   <h4 style={{ margin: "0 0 6px 0", color: statusConfig[appointmentFormData.desk].color }}><FaExclamationTriangle /> Desk Alert:</h4>
// //                   <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[appointmentFormData.desk].message}</p>
// //                 </div>
// //               </div>

// //               <div style={formPane}>
// //                 <form onSubmit={handlePhysicalSubmit}>
// //                   <div style={{ marginBottom: "20px" }}>
// //                     <label style={labelStyle}>Select Desk Authority</label>
// //                     <div style={{ display: "flex", gap: "15px" }}>
// //                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'Principal')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'Principal'})}>Principal's Desk</button>
// //                       <button type="button" style={deskBtnStyle(appointmentFormData.desk === 'AO')} onClick={() => setAppointmentFormData({...appointmentFormData, desk: 'AO'})}>Admissions Officer (AO)</button>
// //                     </div>
// //                   </div>
// //                   <label style={labelStyle}>Full Name</label>
// //                   <input type="text" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, name: e.target.value})} />
// //                   <label style={labelStyle}>Contact Number</label>
// //                   <input type="tel" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, phone: e.target.value})} />
// //                   <label style={labelStyle}>Appointment Date</label>
// //                   <input type="date" style={inputStyle} required onChange={(e) => setAppointmentFormData({...appointmentFormData, date: e.target.value})} />
// //                   <button type="submit" style={primaryBtnStyle}>Generate Entry Token</button>
// //                 </form>
// //               </div>
// //             </div>
// //           ) : (
// //             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
// //               <FaCheckCircle style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
// //               <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>{t("adm_phys_succ")}</h2>
// //               <span style={{ color: "#ffcc00", fontSize: "14px", display: "block" }}>Destination: {appointmentFormData.desk === 'AO' ? 'Admissions Officer' : 'Principal Desk'}</span>
// //               <div style={{ background: "#151515", border: "1px solid #800000", padding: "20px", borderRadius: "12px", margin: "20px 0" }}>
// //                 <strong style={{ fontSize: "32px", color: "#ffffff", letterSpacing: "2px" }}>{token}</strong>
// //                 <span style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "#a3a3a3" }}>Live Waiting Queue: <strong>#{queueNumber}</strong></span>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* TAB 3: STANDALONE ONLINE VIDEO COUNSELING */}
// //       {activeTab === 'online' && (
// //         <div>
// //           {!token ? (
// //             <div style={panelGrid}>
// //               <div style={infoPane}>
// //                 <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "20px" }}>{t("adm_rem")}</h2>
// //                 <p style={{ color: "#d4d4d4", lineHeight: "1.6", marginBottom: "25px" }}>
// //                   For prospective students unable to travel to our Mijar campus blocks. Lock a digital session to consult remotely with the **Admissions Officer (AO)** over a secure link.
// //                 </p>
// //                 <div style={{ padding: "18px", background: "rgba(255, 153, 0, 0.1)", border: "1px dashed #ff9900", borderRadius: "12px" }}>
// //                   <h4 style={{ margin: "0 0 5px 0", color: "#ff9900", display: "flex", alignItems: "center", gap: "8px" }}><FaVideo /> Virtual Desk Route:</h4>
// //                   <p style={{ margin: 0, fontSize: "13px", color: "#ffffff", lineHeight: "1.4" }}>
// //                     Google Meet secure session coordinates are autogenerated instantly upon submission matching your slot date.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div style={formPane}>
// //                 <form onSubmit={handleOnlineSubmit}>
// //                   <label style={labelStyle}>Full Name</label>
// //                   <input type="text" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, name: e.target.value})} />
// //                   <label style={labelStyle}>Email Address (For Invite Link)</label>
// //                   <input type="email" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, email: e.target.value})} />
// //                   <label style={labelStyle}>Contact Number</label>
// //                   <input type="tel" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, phone: e.target.value})} />
// //                   <label style={labelStyle}>Target Branch</label>
// //                   <select style={{...inputStyle, background: "#151515"}} onChange={(e) => setOnlineFormData({...onlineFormData, course: e.target.value})}>
// //                     <option value="CSE">Computer Science & Engineering</option>
// //                     <option value="ISE">Information Science & Engineering</option>
// //                   </select>
// //                   <label style={labelStyle}>Preferred Consultation Date</label>
// //                   <input type="date" style={inputStyle} required onChange={(e) => setOnlineFormData({...onlineFormData, date: e.target.value})} />
// //                   <button type="submit" style={primaryBtnStyle}>Request Remote Consultation</button>
// //                 </form>
// //               </div>
// //             </div>
// //           ) : (
// //             <div style={{ background: "rgba(20, 20, 20, 0.95)", border: "2px dashed #ff9900", borderRadius: "20px", padding: "50px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
// //               <FaVideo style={{ fontSize: "48px", color: "#ff9900", marginBottom: "15px" }} />
// //               <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{t("adm_rem_succ")}</h2>
// //               <p style={{ color: "#a3a3a3", fontSize: "14px" }}>Remote session access token successfully created for AO consultation panel review.</p>

// //               <div style={{ background: "#151515", border: "1px solid #800000", padding: "25px", borderRadius: "12px", margin: "25px 0" }}>
// //                 <span style={{ fontSize: "12px", color: "#ffcc00", textTransform: "uppercase", display: "block", marginBottom: "5px" }}>Digital Token ID</span>
// //                 <strong style={{ fontSize: "30px", color: "#ffffff", letterSpacing: "1px" }}>{token}</strong>

// //                 <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
// //                   <span style={{ fontSize: "12px", color: "#a3a3a3", display: "block", marginBottom: "10px" }}>Click to open your assigned call room:</span>
// //                   <a href={virtualLink} target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg, #ff9900, #ff5500)", color: "#000", padding: "10px 20px", borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", fontWeight: "600" }}>
// //                     <FaVideo /> Join Live Google Meet Room
// //                   </a>
// //                 </div>
// //               </div>
// //               <div style={{ textAlign: "left", color: "#d4d4d4", fontSize: "14px" }}>
// //                 <p><strong>Candidate:</strong> {onlineFormData.name}</p>
// //                 <p><strong>Scheduled Date:</strong> {onlineFormData.date}</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaCalendarAlt, FaTicketAlt, FaChair, FaUserCheck, FaFileInvoice, FaCheckCircle, FaExclamationTriangle, FaVideo, FaBuilding, FaAward, FaEye } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { API_BASE_URL } from '../config/api';

export default function Admission() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const getInitialTab = () => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab') || location.state?.tab;
    if (tabParam === 'appointment' || tabParam === 'offline') {
      return 'appointment';
    }
    if (tabParam === 'online') {
      return 'online';
    }
    if (tabParam === 'booking') {
      return 'booking';
    }
    return 'booking';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab') || location.state?.tab;
    if (tabParam === 'appointment' || tabParam === 'offline') {
      setActiveTab('appointment');
    } else if (tabParam === 'online') {
      setActiveTab('online');
    } else if (tabParam === 'booking') {
      setActiveTab('booking');
    }
  }, [location]);

  const [bookingFormData, setBookingFormData] = useState({ name: '', email: '', phone: '', course: '' });
  const [appointmentFormData, setAppointmentFormData] = useState({ name: '', email: '', phone: '', course: '', date: '', desk: 'Principal' });
  const [onlineFormData, setOnlineFormData] = useState({ name: '', email: '', phone: '', course: 'CSE', date: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [token, setToken] = useState(null);
  const [queueNumber, setQueueNumber] = useState(null);
  const [virtualLink, setVirtualLink] = useState('');
  const [loading, setLoading] = useState(false);

  // Dynamic system alerts tracking desk conditions
  const statusConfig = {
    Principal: {
      message: "⚠️ Administrative Alert: Expect a 30-minute processing delay due to an ongoing university academic board meeting.",
      color: "#ffcc00",
      bg: "rgba(255, 204, 0, 0.1)"
    },
    AdminOfficer: {
      message: "ℹ️ Desk Notice: Administrative Officer (Mr. Nikhil Alva) available for executive campus administration inquiries.",
      color: "#00ccff",
      bg: "rgba(0, 204, 255, 0.1)"
    },
    AdmissionOfficer: {
      message: "ℹ️ Desk Notice: Admission Officer (Mr. Tilak) available for seat allocation, document verification, and counseling desk.",
      color: "#33ff99",
      bg: "rgba(51, 255, 153, 0.1)"
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
    width: "100%",
    height: "100%",
    minHeight: "60px",
    padding: "8px 6px",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: isSelected ? "1px solid #ff9900" : "1px solid rgba(255, 255, 255, 0.12)",
    background: isSelected ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(255, 255, 255, 0.04)",
    color: isSelected ? "#000000" : "#e2e8f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "1.25",
    boxShadow: isSelected ? "0 4px 15px rgba(255, 153, 0, 0.25)" : "none",
    boxSizing: "border-box"
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

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("adm_portal")}</h1>
        <p style={{ color: "#a3a3a3", margin: 0 }}>{t("adm_sub_desc")}</p>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaUserCheck style={{ color: "#ff9900", marginTop: "4px" }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_elig_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_elig_desc")}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaFileInvoice style={{ color: "#ff9900", marginTop: "4px" }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_score_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_score_desc")}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaBuilding style={{ color: "#ff9900", marginTop: "4px" }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_mgt_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_mgt_desc")}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                    <FaAward style={{ color: "#ff9900", marginTop: "4px" }} />
                    <div>
                      <strong style={{ color: "#ffffff", display: "block" }}>{t("adm_snq_title")}</strong>
                      <span style={{ fontSize: "14px", color: "#a3a3a3" }}>{t("adm_snq_desc")}</span>
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
                  <select defaultValue="" style={{ ...inputStyle, background: "#151515" }} onChange={(e) => setBookingFormData({ ...bookingFormData, course: e.target.value })} required>
                    <option value="" disabled hidden></option>
                    <optgroup label={t("adm_opt_ug_group") || "Undergraduate (UG) - B.E."}>
                      <option value="CSE">Computer Science & Engineering</option>
                      <option value="ISE">Information Science & Engineering</option>
                      <option value="ECE">Electronics & Communication Engineering</option>
                      <option value="ME">Mechanical Engineering</option>
                      <option value="CE">Civil Engineering</option>
                      <option value="AIML">Artificial Intelligence & Machine Learning</option>
                      <option value="AIDS">Artificial Intelligence & Data Science</option>
                      <option value="CSD">Computer Science & Design</option>
                      <option value="IOT">IoT & Cyber Security</option>
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
                <div style={{ padding: "18px", background: statusConfig[appointmentFormData.desk].bg, border: `1px dashed ${statusConfig[appointmentFormData.desk].color}`, borderRadius: "12px", marginTop: "20px" }}>
                  <h4 style={{ margin: "0 0 6px 0", color: statusConfig[appointmentFormData.desk].color }}><FaExclamationTriangle /> Desk Alert:</h4>
                  <p style={{ margin: 0, fontSize: "14px", color: "#ffffff", lineHeight: "1.4" }}>{statusConfig[appointmentFormData.desk].message}</p>
                </div>
              </div>

              <div style={formPane}>
                <form onSubmit={handlePhysicalSubmit}>
                  <div style={{ marginBottom: "24px" }}>
                    <label style={labelStyle}>{t("adm_form_desk")}</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px", width: "100%", alignItems: "stretch" }}>
                      <button
                        type="button"
                        style={deskBtnStyle(appointmentFormData.desk === 'Principal')}
                        onClick={() => setAppointmentFormData({ ...appointmentFormData, desk: 'Principal' })}
                      >
                        <span style={{ fontWeight: "600" }}>{t("adm_principal_desk")}</span>
                      </button>
                      <button
                        type="button"
                        style={deskBtnStyle(appointmentFormData.desk === 'AdminOfficer')}
                        onClick={() => setAppointmentFormData({ ...appointmentFormData, desk: 'AdminOfficer' })}
                      >
                        <span style={{ fontWeight: "600" }}>{t("adm_admin_officer_title")}</span>
                        <span style={{ fontSize: "11px", fontWeight: "500", opacity: 0.9, marginTop: "2px" }}>{t("adm_admin_officer_name")}</span>
                      </button>
                      <button
                        type="button"
                        style={deskBtnStyle(appointmentFormData.desk === 'AdmissionOfficer')}
                        onClick={() => setAppointmentFormData({ ...appointmentFormData, desk: 'AdmissionOfficer' })}
                      >
                        <span style={{ fontWeight: "600" }}>{t("adm_admission_officer_title")}</span>
                        <span style={{ fontSize: "11px", fontWeight: "500", opacity: 0.9, marginTop: "2px" }}>{t("adm_admission_officer_name")}</span>
                      </button>
                    </div>
                  </div>
                  <label style={labelStyle}>{t("adm_form_name")}</label>
                  <input type="text" style={inputStyle} required onChange={(e) => setAppointmentFormData({ ...appointmentFormData, name: e.target.value })} />
                  <label style={labelStyle}>{t("adm_form_email_link") || "Email Address"}</label>
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
              <span style={{ color: "#ffcc00", fontSize: "14px", display: "block" }}>
                Destination: {
                  appointmentFormData.desk === 'AdminOfficer' ? t("adm_admin_officer_desk") :
                    appointmentFormData.desk === 'AdmissionOfficer' ? t("adm_admission_officer_desk") :
                      t("adm_principal_desk")
                }
              </span>
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
                  For prospective students unable to travel to our Mijar campus blocks. Lock a digital session to consult remotely with the **Administrative Officer** over a secure link.
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
                  <select style={{ ...inputStyle, background: "#151515" }} value={onlineFormData.course} onChange={(e) => setOnlineFormData({ ...onlineFormData, course: e.target.value })}>
                    <option value="CSE">Computer Science & Engineering</option>
                    <option value="ISE">Information Science & Engineering</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="CE">Civil Engineering</option>
                    <option value="AIML">Artificial Intelligence & Machine Learning</option>
                    <option value="AIDS">Artificial Intelligence & Data Science</option>
                    <option value="CSD">Computer Science & Design</option>
                    <option value="IOT">IoT & Cyber Security</option>
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
