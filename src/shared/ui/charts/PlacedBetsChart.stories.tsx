import type { Meta, StoryObj } from '@storybook/react';
import { PlacedBetsChart } from './PlacedBetsChart';

function generateMockBetsData() {
  const data = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const dayOfWeek = date.getDay();

    let baseBets = 3 + Math.random() * 5;
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      baseBets += 2 + Math.random() * 4;
    }

    if (Math.random() > 0.85) {
      baseBets += 5 + Math.random() * 8;
    }

    if (Math.random() < 0.15) {
      baseBets = Math.max(0, baseBets - 3);
    }

    data.push({
      date: date.toISOString().split('T')[0],
      totalBets: Math.round(baseBets),
    });
  }

  return data;
}

const meta: Meta<typeof PlacedBetsChart> = {
  title: 'Ui/Charts/Bets',
  component: PlacedBetsChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "A line graph component to display the user's betting volume over 30 days",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of daily bet counts with date and totalBets',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: generateMockBetsData(),
  },
  parameters: {
    docs: {
      description: {
        story: 'A 30-day chart showing daily bets placed, with higher activity on weekends.',
      },
    },
  },
};

export const HighActivity: Story = {
  args: {
    data: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        totalBets: 8 + Math.floor(Math.random() * 12),
      };
    }),
  },
  parameters: {
    docs: {
      description: {
        story: 'A chart showing high betting activity with 8-20 bets per day.',
      },
    },
  },
};

export const LowActivity: Story = {
  args: {
    data: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        totalBets: Math.floor(Math.random() * 5),
      };
    }),
  },
  parameters: {
    docs: {
      description: {
        story: 'A chart showing low betting activity with 0-4 bets per day.',
      },
    },
  },
};

