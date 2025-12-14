import fetch from 'node-fetch';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, '.env') });

export class ApiClient {
  private baseURL = process.env.APIFOOTBALL_BASE_URL || '';
  private apiKey = process.env.APIFOOTBALL_API_KEY || '';

  constructor() {
    if (!this.baseURL) {
      throw new Error('BASE_URL environment variable is required');
    }
    if (!this.apiKey) {
      throw new Error('API_KEY environment variable is required');
    }
  }

  private buildURL(endpoint: string, params?: Record<string, any>) {
    const path = `${this.baseURL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
    const url = new URL(path);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = this.buildURL(endpoint, params);

    const res = await fetch(url, {
      headers: {
        'x-apisports-key': this.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'Failed to read error response');
      console.error('Server API Error:', res.status, errorText);
      throw new Error(`API Error: ${res.status} ${res.statusText} - ${errorText}`);
    }

    return res.json() as Promise<T>;
  }
}

export const apiClient = new ApiClient();

