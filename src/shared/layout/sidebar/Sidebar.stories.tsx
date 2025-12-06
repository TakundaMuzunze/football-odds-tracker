import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPanel } from './Sidebar';

const meta: Meta<typeof SidebarPanel> = {
  title: 'Layout/Sidebar',
  component: SidebarPanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sidebar navigation panel with grouped items and icons. Supports different states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default sidebar panel with all navigation groups and icons.',
      },
    },
  },
};

export const Collapsed: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Collapsed sidebar panel with toggles to open and close each group.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-96">
        <Story />
      </div>
    ),
  ],
};

