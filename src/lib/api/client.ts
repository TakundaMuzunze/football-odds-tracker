import { apiConfig } from '../config/api';

class ApiClient {
  private baseURL = apiConfig.baseURL;

  private buildURL(endpoint: string, params?: Record<string, any>) {
    const path = `${this.baseURL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
    const url = new URL(path, window.location.origin);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = this.buildURL(endpoint, params);
    const res = await fetch(url);

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'Failed to read error response');
      console.error('Frontend API Error:', res.status, errorText);
      throw new Error(`API Error: ${res.status} ${res.statusText} - ${errorText}`);
    }

    return res.json();
  }
}

export const apiClient = new ApiClient();

