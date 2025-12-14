import { ProfitLossChart } from './ProfitLossChart';
import type { Meta, StoryObj } from '@storybook/react';

function generateMockData() {
  const data = [];
  const today = new Date();
  let cumulativePnl = 0;

  cumulativePnl = Math.random() * 200 - 100;

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const dailyChange = (Math.random() - 0.4) * 130;
    cumulativePnl += dailyChange;

    if (Math.random() > 0.85) {
      cumulativePnl += (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 100);
    }

    data.push({
      date: date.toISOString().split('T')[0],
      cumulativePnl: Math.round(cumulativePnl * 100) / 100,
    });
  }

  return data;
}

const meta: Meta<typeof ProfitLossChart> = {
  title: 'Ui/Charts/Profit & Loss',
  component: ProfitLossChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "An area chart component to display the user's profit and loss over 30 days",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of P&L data points with date and cumulativePnl',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: generateMockData(),
  },
  parameters: {
    docs: {
      description: {
        story: 'A 30-day profit and loss chart showing cumulative P&L over time.',
      },
    },
  },
};

export const PositiveTrend: Story = {
  args: {
    data: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        cumulativePnl: 50 + i * 8 + Math.random() * 20,
      };
    }),
  },
  parameters: {
    docs: {
      description: {
        story: 'A chart showing a positive trend with consistent gains.',
      },
    },
  },
};

export const NegativeTrend: Story = {
  args: {
    data: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        cumulativePnl: -50 - i * 5 - Math.random() * 15,
      };
    }),
  },
  parameters: {
    docs: {
      description: {
        story: 'A chart showing a negative trend with losses.',
      },
    },
  },
};

