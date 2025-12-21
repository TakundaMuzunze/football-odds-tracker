import type { MatchFixture } from '../types/match';
import { MatchPanel } from './MatchPanel';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MatchPanel> = {
  title: 'Features/Matches/MatchPanel',
  component: MatchPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A panel component that groups matches by league with a table-like layout.',
      },
    },
  },
  argTypes: {
    leagueName: {
      control: 'text',
      description: 'Name of the league',
    },
    matches: {
      control: 'object',
      description: 'Array of match fixtures for this league',
    },
    onOddsClick: {
      action: 'odds-clicked',
      description: 'Callback when an odds button is clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const mockMatches: MatchFixture[] = [
  {
    fixture: {
      id: 1,
      date: new Date().toISOString(),
      status: {
        long: 'Second Half',
        short: '2H',
        elapsed: 67,
      },
    },
    teams: {
      home: {
        id: 33,
        name: 'Manchester United',
      },
      away: {
        id: 40,
        name: 'Liverpool',
      },
    },
    goals: {
      home: 2,
      away: 1,
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
    },
  },
  {
    fixture: {
      id: 2,
      date: new Date().toISOString(),
      status: {
        long: 'First Half',
        short: '1H',
        elapsed: 23,
      },
    },
    teams: {
      home: {
        id: 42,
        name: 'Arsenal',
      },
      away: {
        id: 49,
        name: 'Chelsea',
      },
    },
    goals: {
      home: 1,
      away: 0,
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
    },
  },
];

export const Default: Story = {
  args: {
    leagueName: 'Premier League',
    matches: mockMatches,
  },
  parameters: {
    docs: {
      description: {
        story: 'A match panel showing multiple matches for a league in a table-like format.',
      },
    },
  },
};

export const SingleMatch: Story = {
  args: {
    leagueName: 'FA Cup',
    matches: [mockMatches[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'A match panel with a single match.',
      },
    },
  },
};

