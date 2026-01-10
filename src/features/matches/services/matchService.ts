import { apiClient } from '../../../lib/api';
import type { ApiResponse } from '../types/match';

export async function fetchLiveMatches(): Promise<ApiResponse> {
  return apiClient.get<ApiResponse>('fixtures', { live: 'all' });
}

export async function fetchUpcomingMatches(): Promise<ApiResponse> {
  const todayStr = new Date().toISOString().split('T')[0];
  return apiClient.get<ApiResponse>('fixtures', { date: todayStr });
}

