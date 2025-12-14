import { apiClient } from '../../../lib/api';

export async function fetchLiveMatches() {
  return apiClient.get('fixtures', { live: 'all' });
}

