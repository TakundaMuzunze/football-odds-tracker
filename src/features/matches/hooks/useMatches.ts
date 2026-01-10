import { useState, useEffect, useMemo } from 'react';
import type { MatchFixture } from '../types/match';
import { isTopLeague } from '../constants/topLeagues';

interface UseMatchesOptions {
  fetchFn: () => Promise<{ response: MatchFixture[] }>;
  filterByTopLeagues?: boolean;
}

export function useMatches({ fetchFn, filterByTopLeagues = true }: UseMatchesOptions) {
  const [allMatches, setAllMatches] = useState<MatchFixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFn();
      const fetchedMatches = data.response || [];
      setAllMatches(fetchedMatches);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load matches');
      console.error('Error fetching matches:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  const matches = useMemo(() => {
    let filtered = allMatches;
    
    if (filterByTopLeagues) {
      filtered = filtered.filter((match) => isTopLeague(match.league.name, match.league.country));
    }
    
    return filtered;
  }, [allMatches, filterByTopLeagues]);

  const groupedMatches = useMemo(() => {
    return matches.reduce(
      (acc, match) => {
        const leagueName = match.league.name;
        if (!acc[leagueName]) {
          acc[leagueName] = [];
        }
        acc[leagueName].push(match);
        return acc;
      },
      {} as Record<string, MatchFixture[]>,
    );
  }, [matches]);

  return {
    matches,
    groupedMatches,
    loading,
    error,
    refetch: loadMatches,
  };
}

