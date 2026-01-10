import { useMemo } from 'react';
import { GroupedMatchesList } from '../GroupedMatchesList';
import type { MatchOdds, MatchFixture } from '../../types/match';
import { fetchLiveMatches, fetchUpcomingMatches } from '../../services/matchService';
import { useMatches } from '../../hooks/useMatches';
import { Button } from '../../../../shared/ui/button/Button';

export function LiveMatchesSection() {
  const {
    matches: liveMatches,
    groupedMatches: liveGroupedMatches,
    loading: liveLoading,
    error: liveError,
    refetch: refetchLive,
  } = useMatches({ fetchFn: fetchLiveMatches });

  const { matches: upcomingMatchesRaw, loading: upcomingLoading, error: upcomingError } = useMatches({ fetchFn: fetchUpcomingMatches });

  const upcomingMatches = useMemo(() => {
    const now = new Date();
    const filtered = upcomingMatchesRaw.filter((match) => {
      const matchDate = new Date(match.fixture.date);
      const status = match.fixture.status.short;
      const isNotStarted = ['NS', 'TBD', 'SCHEDULED', 'POSTP', 'CANC'].includes(status);
      const isFuture = matchDate > now;
      return isNotStarted && isFuture;
    });
    return filtered;
  }, [upcomingMatchesRaw]);

  const mergedGroupedMatches = useMemo(() => {
    const merged: Record<string, MatchFixture[]> = {};

    Object.entries(liveGroupedMatches).forEach(([leagueName, matches]) => {
      merged[leagueName] = [...matches];
    });

    upcomingMatches.forEach((match) => {
      const leagueName = match.league.name;
      if (!merged[leagueName]) {
        merged[leagueName] = [];
      }
      merged[leagueName].push(match);
    });

    return merged;
  }, [liveGroupedMatches, upcomingMatches]);

  const handleOddsClick = (type: keyof MatchOdds, odds: number) => {
    // TODO: implement odds click handler
    console.log(`Clicked ${type} odds: ${odds}`);
  };

  const isLoading = liveLoading || upcomingLoading;
  const hasError = liveError || upcomingError;

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Featured Matches</h2>
        {liveMatches.length > 0 && (
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
            <span className="text-sm text-gray-400">{liveMatches.length} Live</span>
            <Button variant="ghost" size="sm" onClick={refetchLive} disabled={liveLoading}>
              {liveLoading ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 py-4">
        {isLoading ? (
          <div className="rounded-lg bg-gray-800 p-8 text-center text-gray-400">Loading matches...</div>
        ) : hasError ? (
          <div className="rounded-lg bg-red-900/20 p-8 text-center text-red-400">{liveError || upcomingError}</div>
        ) : (
          <>
            {Object.keys(mergedGroupedMatches).length > 0 && (
              <GroupedMatchesList groupedMatches={mergedGroupedMatches} onOddsClick={handleOddsClick} />
            )}
          </>
        )}
      </div>
    </section>
  );
}

