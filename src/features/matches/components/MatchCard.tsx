import { decimalToFraction } from '../../../shared/helpers/convertDecimal';
import type { MatchFixture, MatchOdds } from '../types/match';

type OddsType = 'home' | 'draw' | 'away';

interface OddsButtonProps {
  label: string;
  odds: number;
  type: OddsType;
  onClick?: (type: OddsType, odds: number) => void;
}

interface MatchCardProps {
  fixture: MatchFixture;
  odds?: MatchOdds;
  onOddsClick?: (type: keyof MatchOdds, odds: number) => void;
}

function OddsButton({ label, odds, type, onClick }: OddsButtonProps) {
  const handleClick = () => {
    onClick?.(type, odds);
  };

  return (
    <div className="flex min-w-32 flex-col items-center gap-4">
      <p className="text-sm tracking-wide text-gray-400">{label}</p>
      <button
        type="button"
        onClick={handleClick}
        className="bg-primary hover:bg-primary/80 w-full cursor-pointer rounded-lg px-8 py-2 text-center font-medium text-black transition-colors"
        aria-label={`${label} odds: ${decimalToFraction(odds)}`}
      >
        {decimalToFraction(odds)}
      </button>
    </div>
  );
}

export function MatchCard({ fixture, odds, onOddsClick }: MatchCardProps) {
  const { teams, goals, league, fixture: fixtureData } = fixture;
  const matchTime = fixtureData.status.elapsed !== null ? `${fixtureData.status.elapsed}'` : fixtureData.status.short;

  // Default odds if not provided
  const defaultOdds: MatchOdds = { home: 2.0, draw: 3.0, away: 2.5 };
  const matchOdds = odds || defaultOdds;

  return (
    <article
      data-testid="match-score-card"
      className="grid w-full grid-cols-4 flex-row items-start justify-evenly gap-10 rounded-lg bg-[#0D1A2A] p-4 text-white"
    >
      <div className="flex flex-col items-start gap-3">
        <p className="text-sm tracking-wide text-gray-400">
          {league.name} ({league.country})
        </p>
        <div className="flex items-start justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-normal">{goals.home ?? 0}</span>
              <span className="text-xl font-normal">{goals.away ?? 0}</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-normal">{teams.home.name}</span>
              <span className="font-normal">{teams.away.name}</span>
            </div>
          </div>
        </div>
        <div className="text-left text-sm text-gray-300">
          <p className="">{matchTime}</p>
        </div>
      </div>

      <OddsButton label="Home" odds={matchOdds.home} type="home" onClick={onOddsClick} />
      <OddsButton label="Draw" odds={matchOdds.draw} type="draw" onClick={onOddsClick} />
      <OddsButton label="Away" odds={matchOdds.away} type="away" onClick={onOddsClick} />
    </article>
  );
}

