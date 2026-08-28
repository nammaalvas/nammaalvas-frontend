import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';
import {
  FaChartBar,
  FaFileExcel,
  FaSearch,
  FaCalendarAlt,
  FaUserGraduate,
  FaSignOutAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaVideo,
  FaBuilding,
  FaChair,
  FaFilter,
  FaDownload,
  FaSync
} from 'react-icons/fa';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'ug', 'pg'
  
  // Dashboard Data State
  const [stats, setStats] = useState({
    todayAdmissions: 0,
    todayUG: 0,
    todayPG: 0,
    onlineAppointments: 0,
    offlineAppointments: 0,
    seatSlotsBooked: 0,
    pendingAdmissions: 0,
    confirmedAdmissions: 0,
    totalAdmissions: 0,
  });
  const [charts, setCharts] = useState({ daily: [], monthly: [] });

  // Table & Filters State
  const [reportsData, setReportsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('all'); // 'all', 'today', 'yesterday', 'last7days', 'last30days', 'custom'
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userStr = localStorage.getItem('adminUser');

    if (!token || !userStr) {
      navigate('/admin/login');
      return;
    }

    try {
      const user = JSON.parse(userStr);
      setAdminUser(user);
    } catch (e) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Fetch Dashboard Stats & Charts
  const fetchDashboardStats = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
        setCharts(data.charts);
      }
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    }
  };

  // Fetch UG or PG Reports
  const fetchReports = async (category) => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    setLoading(true);
    try {
      const endpoint = category === 'pg' ? 'pg' : 'ug';
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (dateFilter && dateFilter !== 'all') params.append('dateFilter', dateFilter);
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      params.append('page', page);
      params.append('limit', 50);

      const response = await fetch(`${API_BASE_URL}/api/admin/reports/${endpoint}?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setReportsData(data.data);
        setTotalPages(data.pages || 1);
      }
    } catch (err) {
      console.error('Error fetching reports:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'ug' || activeTab === 'pg') {
      fetchReports(activeTab);
    }
  }, [activeTab, search, dateFilter, startDate, endDate, page]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleDownloadExcel = (type) => {
    const token = localStorage.getItem('adminToken');
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (dateFilter && dateFilter !== 'all') params.append('dateFilter', dateFilter);
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);

    const downloadUrl = `${API_BASE_URL}/api/admin/reports/download/${type}?${params.toString()}`;
    
    // Trigger download with auth token using fetch blob
    fetch(downloadUrl, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${type.toUpperCase()}_Admissions_Report.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => console.error('Download error:', err));
  };

  if (!adminUser) return null;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: "'Poppins', sans-serif",
      padding: '110px clamp(12px, 3vw, 30px) 60px clamp(12px, 3vw, 30px)',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Top Header & Admin Profile */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(255, 153, 0, 0.2)',
          borderRadius: '20px',
          padding: '20px 30px',
          marginBottom: '30px'
        }}>
          <div>
            <span style={{ fontSize: '12px', color: '#ffcc00', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>
              Executive Control Portal
            </span>
            <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '4px 0 0 0', color: '#ffffff' }}>
              AIET Admission Management & Excel Reporting
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: '#ffffff' }}>{adminUser.name}</strong>
              <span style={{
                fontSize: '11px',
                background: 'linear-gradient(135deg, #ff9900, #ff5500)',
                color: '#000000',
                padding: '2px 10px',
                borderRadius: '12px',
                fontWeight: '700'
              }}>
                {adminUser.role}
              </span>
            </div>

            <button
              onClick={handleLogout}
              style={{
                background: 'rgba(128, 0, 0, 0.2)',
                border: '1px solid #800000',
                color: '#ff6b6b',
                padding: '10px 16px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600',
                fontSize: '13px',
                transition: '0.3s'
              }}
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {[
            { id: 'overview', label: 'Dashboard & Analytics', icon: <FaChartBar /> },
            { id: 'ug', label: 'UG Admissions Excel Reports', icon: <FaFileExcel /> },
            { id: 'pg', label: 'PG Admissions Excel Reports', icon: <FaFileExcel /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeTab === tab.id ? '2px solid #ff9900' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #ff9900, #ff5500)' : 'rgba(20, 20, 20, 0.8)',
                color: activeTab === tab.id ? '#000000' : '#ffffff',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: '0.3s'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: DASHBOARD & STATS ANALYTICS */}
        {activeTab === 'overview' && (
          <div>
            {/* 8 Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {[
                { title: "Today's Admissions", value: stats.todayAdmissions, icon: <FaClock style={{ color: '#ffcc00' }} />, border: '#ffcc00' },
                { title: "Today's UG", value: stats.todayUG, icon: <FaUserGraduate style={{ color: '#00ccff' }} />, border: '#00ccff' },
                { title: "Today's PG", value: stats.todayPG, icon: <FaUserGraduate style={{ color: '#ff66cc' }} />, border: '#ff66cc' },
                { title: "Online Appointments", value: stats.onlineAppointments, icon: <FaVideo style={{ color: '#33ff99' }} />, border: '#33ff99' },
                { title: "Offline Appointments", value: stats.offlineAppointments, icon: <FaBuilding style={{ color: '#ff9933' }} />, border: '#ff9933' },
                { title: "Seat Slots Booked", value: stats.seatSlotsBooked, icon: <FaChair style={{ color: '#cc99ff' }} />, border: '#cc99ff' },
                { title: "Pending Admissions", value: stats.pendingAdmissions, icon: <FaExclamationTriangle style={{ color: '#ff5555' }} />, border: '#ff5555' },
                { title: "Confirmed Admissions", value: stats.confirmedAdmissions, icon: <FaCheckCircle style={{ color: '#55ff55' }} />, border: '#55ff55' },
              ].map((card, idx) => (
                <div key={idx} style={{
                  background: 'rgba(20, 20, 20, 0.9)',
                  border: `1px solid ${card.border}40`,
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '13px', color: '#a3a3a3', fontWeight: '500' }}>{card.title}</span>
                    <div style={{ fontSize: '20px' }}>{card.icon}</div>
                  </div>
                  <strong style={{ fontSize: '32px', color: '#ffffff', fontWeight: '700' }}>{card.value}</strong>
                </div>
              ))}
            </div>

            {/* Analytics Charts Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              {/* Daily Chart */}
              <div style={{
                background: 'rgba(20, 20, 20, 0.9)',
                border: '1px solid rgba(255, 153, 0, 0.2)',
                borderRadius: '20px',
                padding: '28px'
              }}>
                <h3 style={{ fontSize: '18px', color: '#ffcc00', marginBottom: '20px' }}>
                  Daily Admissions Breakdown (Past 7 Days)
                </h3>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', height: '220px', paddingBottom: '30px' }}>
                  {charts.daily.map((item, i) => {
                    const maxVal = Math.max(...charts.daily.map(d => d.total), 1);
                    const barHeight = Math.max((item.total / maxVal) * 160, 15);
                    return (
                      <div key={i} style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#ffcc00', marginBottom: '6px', fontWeight: '600' }}>{item.total}</span>
                        <div style={{
                          width: '100%',
                          maxWidth: '36px',
                          height: `${barHeight}px`,
                          background: 'linear-gradient(180deg, #ff9900, #800000)',
                          borderRadius: '6px 6px 0 0',
                          transition: 'height 0.5s'
                        }} />
                        <span style={{ fontSize: '10px', color: '#a3a3a3', marginTop: '8px' }}>{item.dayLabel}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Chart */}
              <div style={{
                background: 'rgba(20, 20, 20, 0.9)',
                border: '1px solid rgba(255, 153, 0, 0.2)',
                borderRadius: '20px',
                padding: '28px'
              }}>
                <h3 style={{ fontSize: '18px', color: '#ffcc00', marginBottom: '20px' }}>
                  Monthly Admissions Trend (Past 6 Months)
                </h3>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', height: '220px', paddingBottom: '30px' }}>
                  {charts.monthly.map((item, i) => {
                    const maxVal = Math.max(...charts.monthly.map(m => m.total), 1);
                    const barHeight = Math.max((item.total / maxVal) * 160, 15);
                    return (
                      <div key={i} style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#ffcc00', marginBottom: '6px', fontWeight: '600' }}>{item.total}</span>
                        <div style={{
                          width: '100%',
                          maxWidth: '36px',
                          height: `${barHeight}px`,
                          background: 'linear-gradient(180deg, #00ccff, #0044aa)',
                          borderRadius: '6px 6px 0 0',
                          transition: 'height 0.5s'
                        }} />
                        <span style={{ fontSize: '10px', color: '#a3a3a3', marginTop: '8px' }}>{item.monthLabel}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2 & 3: UG / PG ADMISSIONS REPORTS & EXCEL */}
        {(activeTab === 'ug' || activeTab === 'pg') && (
          <div style={{
            background: 'rgba(20, 20, 20, 0.9)',
            border: '1px solid rgba(255, 153, 0, 0.2)',
            borderRadius: '20px',
            padding: '28px'
          }}>
            
            {/* Header Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
              <div>
                <h2 style={{ fontSize: '22px', color: '#ffcc00', margin: '0 0 6px 0' }}>
                  {activeTab.toUpperCase()} Admissions Master Database
                </h2>
                <p style={{ fontSize: '13px', color: '#a3a3a3', margin: 0 }}>
                  Automatically appended into /excel/YYYY/MonthName/{activeTab.toUpperCase()}_Admissions.xlsx
                </p>
              </div>

              <button
                onClick={() => handleDownloadExcel(activeTab)}
                style={{
                  background: 'linear-gradient(135deg, #107c41, #1f4e38)', // Excel green theme
                  color: '#ffffff',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(16, 124, 65, 0.4)',
                  transition: '0.3s'
                }}
              >
                <FaDownload /> Download {activeTab.toUpperCase()} Excel
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              background: '#151515',
              padding: '16px 20px',
              borderRadius: '16px',
              marginBottom: '24px',
              alignItems: 'center'
            }}>
              {/* Search input */}
              <div style={{ flex: '1 1 250px', position: 'relative' }}>
                <FaSearch style={{ position: 'absolute', left: '14px', top: '14px', color: '#a3a3a3' }} />
                <input
                  type="text"
                  placeholder="Search by Name, Phone, Email, Course, Token..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '10px 14px 10px 38px',
                    borderRadius: '10px',
                    color: 'white',
                    outline: 'none',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Date Filter Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                <FaFilter style={{ color: '#ff9900', fontSize: '14px', marginRight: '4px' }} />
                {[
                  { id: 'all', label: 'All' },
                  { id: 'today', label: 'Today' },
                  { id: 'yesterday', label: 'Yesterday' },
                  { id: 'last7days', label: 'Last 7 Days' },
                  { id: 'last30days', label: 'Last 30 Days' },
                  { id: 'custom', label: 'Custom Date' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setDateFilter(f.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      border: dateFilter === f.id ? '1px solid #ff9900' : '1px solid rgba(255, 255, 255, 0.15)',
                      background: dateFilter === f.id ? '#ff9900' : 'rgba(255, 255, 255, 0.05)',
                      color: dateFilter === f.id ? '#000000' : '#ffffff',
                      cursor: 'pointer'
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Custom Date Pickers */}
              {dateFilter === 'custom' && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <span style={{ fontSize: '12px', color: '#aaa' }}>to</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Data Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#151515', color: '#ffcc00', borderBottom: '2px solid rgba(255,153,0,0.3)' }}>
                    <th style={{ padding: '14px' }}>Token Number</th>
                    <th style={{ padding: '14px' }}>Date & Time</th>
                    <th style={{ padding: '14px' }}>Student Name</th>
                    <th style={{ padding: '14px' }}>Phone / Email</th>
                    <th style={{ padding: '14px' }}>Course & Dept</th>
                    <th style={{ padding: '14px' }}>Appointment Type</th>
                    <th style={{ padding: '14px' }}>Seat Slot</th>
                    <th style={{ padding: '14px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>
                        Loading admissions records...
                      </td>
                    </tr>
                  ) : reportsData.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>
                        No admission records found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    reportsData.map((row) => (
                      <tr key={row._id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <td style={{ padding: '14px', fontWeight: '700', color: '#ffcc00' }}>
                          {row.tokenNumber || row.token || 'N/A'}
                        </td>
                        <td style={{ padding: '14px', color: '#d4d4d4' }}>
                          <div>{row.admissionDate || (row.createdAt ? new Date(row.createdAt).toLocaleDateString() : 'N/A')}</div>
                          <span style={{ fontSize: '11px', color: '#888' }}>{row.admissionTime || ''}</span>
                        </td>
                        <td style={{ padding: '14px', fontWeight: '600', color: '#ffffff' }}>
                          {row.name}
                        </td>
                        <td style={{ padding: '14px', color: '#d4d4d4' }}>
                          <div>{row.phone}</div>
                          <span style={{ fontSize: '11px', color: '#a3a3a3' }}>{row.email}</span>
                        </td>
                        <td style={{ padding: '14px', color: '#ffffff' }}>
                          <strong>{row.course}</strong>
                          <div style={{ fontSize: '11px', color: '#a3a3a3' }}>{row.department}</div>
                        </td>
                        <td style={{ padding: '14px', color: '#d4d4d4' }}>
                          <span style={{
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '600',
                            background: row.appointmentType === 'Online' ? 'rgba(51, 255, 153, 0.15)' : 'rgba(255, 153, 0, 0.15)',
                            color: row.appointmentType === 'Online' ? '#33ff99' : '#ff9900'
                          }}>
                            {row.appointmentType}
                          </span>
                        </td>
                        <td style={{ padding: '14px', color: '#d4d4d4' }}>
                          {row.seatSlot || 'N/A'}
                        </td>
                        <td style={{ padding: '14px' }}>
                          <span style={{
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '700',
                            background: row.status === 'Confirmed' ? 'rgba(85, 255, 85, 0.2)' : 'rgba(255, 204, 0, 0.2)',
                            color: row.status === 'Confirmed' ? '#55ff55' : '#ffcc00'
                          }}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
