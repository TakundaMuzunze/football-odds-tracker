export const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  apiKey: import.meta.env.VITE_API_KEY || '',
  timeout: 10000,
} as const;

if (!apiConfig.apiKey) {
  console.warn('⚠️ VITE_API_KEY is not set in environment variables');
}

if (!apiConfig.baseURL) {
  console.warn('⚠️ VITE_API_BASE_URL is not set in environment variables');
}

