import { LiveMatchesSection } from '../../features/matches/components/sections/LiveMatchesSection';

export function HomePage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <LiveMatchesSection />
    </div>
  );
}

