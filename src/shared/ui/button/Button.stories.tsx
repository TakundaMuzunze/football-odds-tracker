import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable button component with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when button is clicked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'The default button with primary variant and medium size.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Disabled Button',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled button state.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants.',
      },
    },
  },
};

