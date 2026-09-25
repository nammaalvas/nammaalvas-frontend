import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, BACKUP_API_BASE_URL } from '../config/api';
import { FaUserShield, FaLock, FaEnvelope, FaSignInAlt, FaExclamationCircle } from 'react-icons/fa';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let response;
      try {
        response = await fetch(`${API_BASE_URL}/api/admin/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email.trim(), password }),
        });
      } catch (primaryErr) {
        if (BACKUP_API_BASE_URL) {
          console.warn('Primary API connection failed, retrying with backup endpoint:', BACKUP_API_BASE_URL);
          response = await fetch(`${BACKUP_API_BASE_URL}/api/admin/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email.trim(), password }),
          });
        } else {
          throw primaryErr;
        }
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials or unauthorized role.');
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setError('Failed to connect to the authentication server. Please check your network connection or verify that the server is active.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 180px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px 80px 20px',
      boxSizing: 'border-box',
      background: 'transparent',
      fontFamily: "'Poppins', sans-serif",
      color: '#ffffff'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        background: 'rgba(20, 20, 20, 0.95)',
        border: '1px solid rgba(255, 153, 0, 0.3)',
        borderRadius: '24px',
        padding: '40px clamp(20px, 5vw, 40px)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 16px auto',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff9900, #800000)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(255, 153, 0, 0.4)'
          }}>
            <FaUserShield style={{ fontSize: '30px', color: '#ffffff' }} />
          </div>
          <h2 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', color: '#ffffff' }}>
            AIET Admin Portal
          </h2>
          <p style={{ fontSize: '13px', color: '#a3a3a3', margin: 0 }}>
            Authorized Personnel Access Only
          </p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(255, 0, 0, 0.15)',
            border: '1px solid #ff4d4d',
            color: '#ff6b6b',
            padding: '12px 16px',
            borderRadius: '12px',
            fontSize: '13px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaExclamationCircle />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} autoComplete="off">
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#ff9900', fontWeight: '600', marginBottom: '8px' }}>
              Admin Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <FaEnvelope style={{ position: 'absolute', left: '16px', top: '16px', color: '#a3a3a3', fontSize: '14px' }} />
              <input
                type="email"
                name="admin_login_email"
                id="admin_login_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                autoComplete="off"
                required
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#ff9900', fontWeight: '600', marginBottom: '8px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <FaLock style={{ position: 'absolute', left: '16px', top: '16px', color: '#a3a3a3', fontSize: '14px' }} />
              <input
                type="password"
                name="admin_login_password"
                id="admin_login_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="new-password"
                required
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #ff9900, #ff5500)',
              color: '#000000',
              padding: '14px',
              border: 'none',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: loading ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: '0.3s'
            }}
          >
            {loading ? 'Authenticating...' : (
              <>
                <FaSignInAlt /> Secure Sign In
              </>
            )}
          </button>
        </form>

        {/* Roles Badge Info */}
        <div style={{
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '11px', color: '#888888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
            Permitted Access Roles
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
            {['Principal', 'AO', 'Admission Staff', 'Super Admin'].map((role) => (
              <span key={role} style={{
                fontSize: '11px',
                background: 'rgba(128, 0, 0, 0.3)',
                border: '1px solid rgba(128, 0, 0, 0.5)',
                color: '#ffcc00',
                padding: '4px 10px',
                borderRadius: '20px'
              }}>
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
