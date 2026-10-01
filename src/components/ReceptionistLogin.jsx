import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_BASE_URL, BACKUP_API_BASE_URL } from '../config/api';
import { 
  FaUserTie, 
  FaLock, 
  FaEnvelope, 
  FaSignInAlt, 
  FaExclamationCircle, 
  FaEye, 
  FaEyeSlash,
  FaArrowLeft,
  FaClipboardList
} from 'react-icons/fa';
import logo from '../assets/logo.webp';

export default function ReceptionistLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
        navigate('/receptionist/dashboard');
      } else {
        setError(data.message || 'Invalid receptionist credentials.');
      }
    } catch (err) {
      console.error('Receptionist login error:', err);
      setError('Unable to reach server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setEmail('receptionist@aiet.org.in');
    setPassword('Admin@123456');
    setError('');
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(15, 15, 15, 0.94)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 204, 0, 0.35)',
        borderRadius: '24px',
        padding: '36px 30px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 153, 0, 0.15)',
        boxSizing: 'border-box'
      }}>
        {/* Top Back Link */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link
            to="/"
            style={{
              color: '#a3a3a3',
              textDecoration: 'none',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffcc00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
          >
            <FaArrowLeft /> Home
          </Link>

          <Link
            to="/admin/login"
            style={{
              color: '#ff9900',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: '600',
              border: '1px solid rgba(255, 153, 0, 0.3)',
              padding: '4px 10px',
              borderRadius: '12px',
              background: 'rgba(255, 153, 0, 0.08)'
            }}
          >
            Admin Portal &rarr;
          </Link>
        </div>

        {/* Header with Logo */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, rgba(255, 153, 0, 0.2), rgba(255, 85, 0, 0.3))',
            border: '1px solid rgba(255, 204, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 8px 24px rgba(255, 153, 0, 0.2)'
          }}>
            <img src={logo} alt="AIET Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 204, 0, 0.12)',
            color: '#ffcc00',
            border: '1px solid rgba(255, 204, 0, 0.4)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            <FaClipboardList /> Front Desk Counselling
          </div>

          <h1 style={{
            fontSize: '24px',
            fontWeight: '800',
            margin: '0 0 6px 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #ffcc00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}>
            Receptionist Sign In
          </h1>
          <p style={{ color: '#a3a3a3', fontSize: '13px', margin: 0 }}>
            Manage offline visitor check-ins & counselling sessions
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            background: 'rgba(220, 38, 38, 0.15)',
            border: '1px solid rgba(220, 38, 38, 0.5)',
            borderRadius: '12px',
            padding: '12px 14px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#f87171',
            fontSize: '13px'
          }}>
            <FaExclamationCircle style={{ flexShrink: 0, fontSize: '16px' }} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', color: '#d4d4d4', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
              Reception Email Address
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <FaEnvelope style={{ position: 'absolute', left: '14px', color: '#ff9900', fontSize: '14px' }} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="receptionist@aiet.org.in"
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#ff9900')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#d4d4d4', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
              Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <FaLock style={{ position: 'absolute', left: '14px', color: '#ff9900', fontSize: '14px' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 42px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#ff9900')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  color: '#a3a3a3',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '8px',
              padding: '13px',
              background: 'linear-gradient(135deg, #ff9900, #ff5500)',
              color: '#000000',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 8px 25px rgba(255, 85, 0, 0.3)',
              opacity: loading ? 0.7 : 1,
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <FaSignInAlt /> Open Receptionist Portal
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Quick Fill */}
        <div style={{
          marginTop: '24px',
          paddingTop: '18px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#888', fontSize: '11px', margin: '0 0 10px 0' }}>
            Front Desk Default Credentials:
          </p>
          <button
            type="button"
            onClick={fillDemoCredentials}
            style={{
              background: 'rgba(255, 204, 0, 0.08)',
              border: '1px dashed rgba(255, 204, 0, 0.4)',
              color: '#ffcc00',
              padding: '6px 14px',
              borderRadius: '16px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
          >
            <FaUserTie /> Auto-Fill: receptionist@aiet.org.in
          </button>
        </div>
      </div>
    </div>
  );
}
