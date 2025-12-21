import { useState, useEffect, useMemo } from 'react';
import { MatchPanel } from '../MatchPanel';
import type { MatchFixture, MatchOdds } from '../../types/match';
import { fetchLiveMatches } from '../../services/matchService';
import { isTopLeague } from '../../constants/topLeagues';
import { Button } from '../../../../shared/ui/button/Button';

export function LiveMatchesSection() {
  const [allMatches, setAllMatches] = useState<MatchFixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchLiveMatches();

      const fetchedMatches = data.response || [];
      setAllMatches(fetchedMatches);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load live matches');
      console.error('Error fetching matches:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  const matches = useMemo(() => {
    return allMatches.filter((match) => isTopLeague(match.league.name, match.league.country));
  }, [allMatches]);

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

  const handleOddsClick = (type: keyof MatchOdds, odds: number) => {
    // TODO: implement odds click handler
    console.log(`Clicked ${type} odds: ${odds}`);
  };

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Live Matches</h2>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
          <span className="text-sm text-gray-400">{matches.length} Live</span>
          <Button variant="ghost" size="sm" onClick={loadMatches} disabled={loading}>
            {loading ? 'Refreshing matches...' : 'Refresh'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 py-4">
        {loading ? (
          <div className="rounded-lg bg-gray-800 p-8 text-center text-gray-400">Loading matches...</div>
        ) : error ? (
          <div className="rounded-lg bg-red-900/20 p-8 text-center text-red-400">{error}</div>
        ) : matches.length > 0 ? (
          Object.entries(groupedMatches).map(([leagueName, leagueMatches]) => (
            <MatchPanel key={leagueName} leagueName={leagueName} matches={leagueMatches} onOddsClick={handleOddsClick} />
          ))
        ) : (
          <div className="rounded-lg bg-gray-800 p-8 text-center text-gray-400">No live matches at the moment</div>
        )}
      </div>
    </section>
  );
}

