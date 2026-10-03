// API Configuration with automatic fallback
const rawEnvUrl = import.meta.env.VITE_API_URL;

// Ensure non-existent domains like api.nammaalvas.org are never used
const validEnvUrl = (rawEnvUrl && !rawEnvUrl.includes('api.nammaalvas.org')) ? rawEnvUrl : null;

const AZURE_BACKEND_URL = 'https://nammaalvasbackend-e5graxdnaderdrcx.centralindia-01.azurewebsites.net';
const LOCAL_BACKEND_URL = 'http://localhost:5000';

const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

// When testing on localhost, use local backend port 5000; in production use env/Azure URL
export const API_BASE_URL = isLocalhost ? LOCAL_BACKEND_URL : (validEnvUrl || AZURE_BACKEND_URL);

// Secondary fallback URL for resilient failover
export const BACKUP_API_BASE_URL = (API_BASE_URL === LOCAL_BACKEND_URL) 
  ? (validEnvUrl || AZURE_BACKEND_URL) 
  : LOCAL_BACKEND_URL;
