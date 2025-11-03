import type { Meta, StoryObj } from '@storybook/react';
import { MatchCard } from './MatchCard';

const meta: Meta<typeof MatchCard> = {
  title: 'Features/Matches/MatchCard',
  component: MatchCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A match card component showing live scores of a game with match details.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    homeTeam: {
      control: 'text',
      description: 'Name of the home team',
    },
    awayTeam: {
      control: 'text',
      description: 'Name of the away team',
    },
    homeScore: {
      control: 'number',
      description: 'Home team score',
    },
    awayScore: {
      control: 'number',
      description: 'Away team score',
    },
    matchTime: {
      control: 'text',
      description: 'Match time or status',
    },
    league: {
      control: 'text',
      description: 'League name (optional)',
    },
    odds: {
      control: 'object',
      description: 'Decimal odds for home, draw, and away outcomes',
    },
    onOddsClick: {
      action: 'odds-clicked',
      description: 'Callback when an odds button is clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    homeScore: 2,
    awayScore: 1,
    matchTime: "90+3'",
    league: 'English Premier League',
    odds: {
      home: 1.5,
      away: 3.7,
      draw: 2,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A typical match card showing a completed game with scores.',
      },
    },
  },
};

export const LiveMatch: Story = {
  args: {
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 1,
    awayScore: 0,
    matchTime: "67'",
    league: 'English Premier League',
    odds: {
      home: 1.5,
      away: 3.7,
      draw: 2,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A live match card showing an ongoing game.',
      },
    },
  },
};

export const UpcomingMatch: Story = {
  args: {
    homeTeam: 'Tottenham',
    awayTeam: 'Manchester City',
    homeScore: 0,
    awayScore: 0,
    matchTime: '15:30',
    league: 'English Premier League',
    odds: {
      home: 1.5,
      away: 3.7,
      draw: 2,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'An upcoming match card showing a scheduled game.',
      },
    },
  },
};

