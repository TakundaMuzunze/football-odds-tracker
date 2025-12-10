import fetch from 'node-fetch';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, '.env') });

export class ApiClient {
  private baseURL = process.env.SPORTSMONKS_BASE_URL || '';
  private apiKey = process.env.SPORTSMONKS_API_KEY || '';

  constructor() {
    if (!this.baseURL) {
      throw new Error('SPORTMONKS_BASE_URL environment variable is required');
    }
    if (!this.apiKey) {
      throw new Error('SPORTMONKS_API_KEY environment variable is required');
    }
  }

  private buildURL(endpoint: string) {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const cleanBase = this.baseURL.endsWith('/') ? this.baseURL.slice(0, -1) : this.baseURL;
    const url = new URL(`${cleanBase}/${cleanEndpoint}`);
    url.searchParams.append('api_token', this.apiKey);
    return url.toString();
  }

  async get<T>(endpoint: string): Promise<T> {
    const url = this.buildURL(endpoint);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json() as Promise<T>;
  }
}

export const apiClient = new ApiClient();

