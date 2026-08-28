import { useState } from "react";
import { FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Faculty() {
  const { t } = useLanguage();
  const filterTabs = [
    { id: "all", name: t("fac_dept_all") },
    { id: "administration", name: t("fac_dept_admin") },
    { id: "ug", name: t("fac_dept_ug") },
    { id: "pg", name: t("fac_dept_pg") }
  ];

  const ugDeptsIds = ["cse", "ise", "ece", "me", "civil", "aiml", "aids", "csd", "iot"];
  const pgDeptsIds = ["mba"];

  const facultyData = [
    {
      name: "Dr. Peter Fernandes",
      role: "Principal & Professor",
      dept: "administration",
      spec: "Institutional Leadership & Mechanical Systems",
      email: "petfdcm@gmail.com",
      qualification: "M.Tech, Ph.D, MBA"
    },
    {
      name: "Dr. Manjunath Kotari",
      role: "Professor & HOD",
      dept: "cse",
      spec: "Data Analytics, Machine Learning & Networks",
      email: "manjunathkotari@aiet.org.in",
      qualification: "B.E, M.Tech, Ph.D"
    },
    {
      name: "Dr. Rachana P",
      role: "Associate Professor",
      dept: "ise",
      spec: "Wireless Body Sensor Networks & Smart Systems",
      email: "rachana@aiet.org.in",
      qualification: "B.Tech, M.E, Ph.D"
    },
    {
      name: "Mr. Chandramouli Joshi",
      role: "Assistant Professor",
      dept: "cse",
      spec: "IoT Engineering & Cyber Security Frameworks",
      email: "joshicm@aiet.org.in",
      qualification: "B.E, M.Tech"
    },
    {
      name: "Ms. Aishwarya Laxmi",
      role: "Assistant Professor",
      dept: "cse",
      spec: "Blockchain Technology & Network Architectures",
      email: "aishwaryalaxmi@aiet.org.in",
      qualification: "B.E, M.Tech"
    },
    {
      name: "Mr. Raghavendra Rao",
      role: "Assistant Professor",
      dept: "ece",
      spec: "Digital Signal Processing & Microcontrollers",
      email: "raghavendrarao@aiet.org.in",
      qualification: "B.E, M.Tech"
    },
    {
      name: "Mr. Praveen",
      role: "Assistant Professor",
      dept: "ece",
      spec: "VLSI Architecture & Embedded Designs",
      email: "praveen@aiet.org.in",
      qualification: "B.E, M.Tech"
    },
    {
      name: "Mr. Surendra P",
      role: "Assistant Professor",
      dept: "civil",
      spec: "Composite Structures & Concrete Technology",
      email: "surendra@aiet.org.in",
      qualification: "B.E, M.Tech (Structural Engg.)"
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Admissions Officer",
      dept: "administration",
      spec: "Student Counseling & Enrollment Management",
      email: "admissions@aiet.org.in",
      qualification: "MBA (HR), B.Com"
    },
    {
      name: "Dr. Vinayaka B",
      role: "Professor & HOD",
      dept: "me",
      spec: "Thermal Engineering & Fluid Dynamics",
      email: "vinayaka@aiet.org.in",
      qualification: "B.E, M.Tech, Ph.D"
    },
    {
      name: "Dr. Sunil D",
      role: "Associate Professor",
      dept: "aiml",
      spec: "Deep Learning & Neural Architectures",
      email: "sunild@aiet.org.in",
      qualification: "B.E, M.Tech, Ph.D"
    },
    {
      name: "Mrs. Kavitha",
      role: "Assistant Professor",
      dept: "aids",
      spec: "Big Data Analytics & Statistical Modeling",
      email: "kavitha@aiet.org.in",
      qualification: "B.E, M.Tech"
    },
    {
      name: "Mr. Harish M",
      role: "Assistant Professor",
      dept: "csd",
      spec: "Human-Computer Interaction & UI/UX Design",
      email: "harish@aiet.org.in",
      qualification: "B.E, M.Tech"
    },
    {
      name: "Dr. Sandeep K",
      role: "Professor & HOD",
      dept: "iot",
      spec: "Network Security & Cyber Forensics",
      email: "sandeep@aiet.org.in",
      qualification: "B.E, M.Tech, Ph.D"
    }
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredFaculty = activeTab === "all" 
    ? facultyData 
    : activeTab === "ug"
      ? facultyData.filter(member => ugDeptsIds.includes(member.dept))
    : activeTab === "pg"
      ? facultyData.filter(member => pgDeptsIds.includes(member.dept))
    : facultyData.filter(member => member.dept === activeTab);

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

  const tabsWrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px"
  };

  const tabButtonStyle = (isActive) => ({
    padding: "10px 20px",
    borderRadius: "30px",
    border: isActive ? "2px solid #ff9900" : "2px solid #800000",
    background: isActive ? "linear-gradient(135deg, #ff9900, #ff5500)" : "#000000",
    color: isActive ? "#000000" : "#ffffff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.2s, transform 0.2s"
  });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    width: "100%"
  };

  const cardStyle = {
    background: "rgba(20, 20, 20, 0.8)",
    border: "1px solid rgba(128, 0, 0, 0.25)",
    borderRadius: "20px",
    padding: "35px 25px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    transition: "transform 0.2s, border-color 0.2s"
  };

  const avatarStyle = {
    width: "70px",
    height: "70px",
    background: "rgba(128, 0, 0, 0.15)",
    border: "2px solid #800000",
    borderRadius: "50%",
    margin: "0 auto 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#ff9900"
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 10px 0" }}>{t("fac_title")}</h1>
        <p style={{ color: "#a3a3a3", margin: 0 }}>{t("fac_subtitle")}</p>
      </div>

      <div style={{...tabsWrapperStyle, marginBottom: "50px"}}>
        {filterTabs.map(tab => (
          <button 
            key={tab.id} 
            style={tabButtonStyle(activeTab === tab.id)}
            onClick={() => setActiveTab(tab.id)}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.backgroundColor = "rgba(128, 0, 0, 0.4)";
                e.currentTarget.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.backgroundColor = "#000000";
                e.currentTarget.style.transform = "scale(1)";
              }
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div style={gridStyle}>
        {filteredFaculty.map((member, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 153, 0, 0.4)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(128, 0, 0, 0.25)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={avatarStyle}>
              <FaGraduationCap />
            </div>
            <h3 style={{ fontSize: "20px", margin: "0 0 4px 0", color: "#fff" }}>{member.name}</h3>
            <span style={{ display: "block", color: "#ffcc00", fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0" }}>
              {member.role === "Principal & Professor" ? t("fac_role_prin") : 
               member.role === "Professor & HOD" ? t("fac_role_prof_hod") : 
               member.role === "Associate Professor" ? t("fac_role_assoc") : 
               member.role === "Assistant Professor" ? t("fac_role_assist") : 
               member.role === "Senior Assistant Professor" ? t("fac_role_snr_assist") : 
               member.role === "Admissions Officer" ? t("fac_role_adm_off") : member.role}
            </span>
            <span style={{ display: "block", color: "#a3a3a3", fontSize: "12px", marginBottom: "12px" }}>
              {member.qualification}
            </span>
            <p style={{ color: "#d4d4d4", fontSize: "14px", lineHeight: "1.5", margin: "0 0 20px 0", flexGrow: 1 }}>
              {member.spec}
            </p>
            <div>
              <a 
                href={`mailto:${member.email}`} 
                style={{ color: "#ff9900", fontSize: "18px", transition: "color 0.2s" }} 
                onMouseEnter={(e) => e.target.style.color = '#ffcc00'} 
                onMouseLeave={(e) => e.target.style.color = '#ff9900'}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}