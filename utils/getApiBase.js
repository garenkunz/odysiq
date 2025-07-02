/**
 * Get the appropriate API base URL for the current environment
 * - Local development: http://localhost:3000
 * - Production: https://api.odysiq.com
 */
export const getApiBase = () => {
  if (typeof window !== 'undefined') {
    // Browser side
    return window.location.hostname === 'localhost'
      ? 'http://localhost:3000'
      : 'https://api.odysiq.com';
  }
  // Server side (SSR) - though not used in this project
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.odysiq.com';
};

// For backward compatibility and direct window usage
if (typeof window !== 'undefined') {
  window.getApiBase = getApiBase;
  window.API_BASE_URL = getApiBase();
} 