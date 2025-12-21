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
    fixture: {
      control: 'object',
      description: 'Match fixture data containing teams, scores, league, and status',
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
    fixture: {
      fixture: {
        id: 1,
        date: new Date().toISOString(),
        status: {
          long: 'Match Finished',
          short: 'FT',
          elapsed: 90,
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
        name: 'English Premier League',
        country: 'England',
      },
    },
    odds: {
      home: 1.5,
      draw: 2.0,
      away: 3.7,
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
    fixture: {
      fixture: {
        id: 2,
        date: new Date().toISOString(),
        status: {
          long: 'Second Half',
          short: '2H',
          elapsed: 67,
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
    odds: {
      home: 1.5,
      draw: 2.0,
      away: 3.7,
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
    fixture: {
      fixture: {
        id: 3,
        date: new Date().toISOString(),
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      teams: {
        home: {
          id: 47,
          name: 'Tottenham',
        },
        away: {
          id: 50,
          name: 'Manchester City',
        },
      },
      goals: {
        home: null,
        away: null,
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
      },
    },
    odds: {
      home: 1.5,
      draw: 2.0,
      away: 3.7,
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

