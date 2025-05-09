import type { Meta, StoryObj } from '@storybook/react';
import { Box } from 'react-native-avadui';

const meta = {
  title: 'Box',
  component: Box,
  argTypes: {
    horizontal: {
      control: 'boolean',
      description: 'Whether to layout children horizontally',
    },
    padding: {
      control: 'number',
      description: 'Padding on all sides',
    },
    m: {
      control: 'text',
      description: 'Margin shorthand [top, right, bottom, left]',
    },
    p: {
      control: 'text',
      description: 'Padding shorthand [top, right, bottom, left]',
    },
    mb: {
      control: 'number',
      description: 'Margin bottom',
    },
    mt: {
      control: 'number',
      description: 'Margin top',
    },
    ml: {
      control: 'number',
      description: 'Margin left',
    },
    mh: {
      control: 'number',
      description: 'Horizontal margin',
    },
    mr: {
      control: 'number',
      description: 'Margin right',
    },
    mv: {
      control: 'number',
      description: 'Vertical margin',
    },
    pt: {
      control: 'number',
      description: 'Padding top',
    },
    pr: {
      control: 'number',
      description: 'Padding right',
    },
    pb: {
      control: 'text',
      description: 'Padding bottom (number or string)',
    },
    pl: {
      control: 'number',
      description: 'Padding left',
    },
    pv: {
      control: 'number',
      description: 'Vertical padding',
    },
    ph: {
      control: 'number',
      description: 'Horizontal padding',
    },
    flex: {
      control: 'number',
      description: 'Flex value',
    },
    height: {
      control: 'text',
      description: 'Height (number or string)',
    },
    width: {
      control: 'text',
      description: 'Width (number or string)',
    },
    bw: {
      control: 'number',
      description: 'Border width',
    },
    br: {
      control: 'number',
      description: 'Border radius',
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: 'Align items',
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content',
    },
    style: {
      control: 'object',
      description: 'Additional style properties',
    },
    borderBottom: {
      control: 'number',
      description: 'Bottom border width',
    },
    scroll: {
      control: 'boolean',
      description: 'Whether content is scrollable',
    },
    gap: {
      control: 'number',
      description: 'Gap between children',
    },
    alignSelf: {
      control: 'select',
      options: ['auto', 'flex-start', 'center', 'flex-end'],
      description: 'Align self',
    },
    bg: {
      control: 'color',
      description: 'Background color',
    },
    borderColor: {
      control: 'color',
      description: 'Border color',
    },
    margin: {
      control: 'number',
      description: 'Margin on all sides',
    },
  },
} as Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    bg: 'red',
    width: 100,
    height: 100,
  },
};
