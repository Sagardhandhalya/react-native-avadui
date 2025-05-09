import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from 'react-native-avadui';

const meta = {
  title: 'Tag',
  component: Tag,
} as Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Primary',
    bgColor: 'red',
    textColor: 'white',
  },
};
