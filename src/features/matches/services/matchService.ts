import { apiClient } from '../../../lib/api';
import type { ApiResponse } from '../types/match';

export async function fetchLiveMatches(): Promise<ApiResponse> {
  return apiClient.get<ApiResponse>('fixtures', { live: 'all' });
}

