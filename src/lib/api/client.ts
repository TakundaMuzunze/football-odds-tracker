import { apiConfig } from '../config/api';

class ApiClient {
  private baseURL = apiConfig.baseURL;
  private apiKey = apiConfig.apiKey;

  private buildURL(endpoint: string, params?: Record<string, any>) {
    const url = new URL(endpoint, this.baseURL);

    url.searchParams.append('api_token', this.apiKey);

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
      throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
  }
}

export const apiClient = new ApiClient();

