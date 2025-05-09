import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';
import {
  Button,
  VARIANTS as btnVARIANTS,
  BUTTON_SIZE as btnSizes,
} from 'react-native-avadui';

const VARIANTS = Object.values(btnVARIANTS);
const SIZES = Object.values(btnSizes);
const ICON_DIRECTIONS = ['start', 'end'] as const;

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
      defaultValue: 'Button',
    },
    onPress: {
      action: 'pressed',
      description: 'Callback when button is pressed',
    },
    renderIcon: {
      control: false,
      description: 'Optional function that returns an icon node',
    },
    iconDirection: {
      control: 'radio',
      options: ICON_DIRECTIONS,
      description: 'Direction of the icon (start or end)',
    },
    count: {
      control: 'number',
      description: 'Optional notification badge count',
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'Button size',
    },
    variant: {
      control: 'select',
      options: VARIANTS,
      description: 'Button visual style variant',
    },
    labelProps: {
      control: 'object',
      description: 'Props for the label Text component',
    },
    styles: {
      control: 'object',
      description: 'Custom container styles',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show a loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    bg: {
      control: 'color',
      description: 'Custom background color for the button',
    },
    loaderSize: {
      control: 'number',
      description: 'Size of the loading indicator',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockIcon = () => <Text>s</Text>;

export const Basic: Story = {
  args: {
    label: 'Basic Button',
    onPress: () => {},
  },
};

export const OutlineVariant: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
    onPress: () => {},
  },
};

export const TextVariant: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    onPress: () => {},
  },
};

export const BackgroundVariant: Story = {
  args: {
    label: 'Background Button',
    variant: 'background',
    onPress: () => {},
  },
};

export const WithIconStart: Story = {
  args: {
    label: 'Icon Start',
    onPress: () => {},
    renderIcon: mockIcon,
    iconDirection: 'start',
  },
};

export const WithIconEnd: Story = {
  args: {
    label: 'Icon End',
    onPress: () => {},
    renderIcon: mockIcon,
    iconDirection: 'end',
  },
};

export const WithCount: Story = {
  args: {
    label: 'With Count',
    onPress: () => {},
    count: 3,
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <>
      <Button label="Text Size" size="text" onPress={() => {}} />
      <Button label="Small Size" size="small" onPress={() => {}} />
      <Button label="Medium Size" size="medium" onPress={() => {}} />
      <Button label="Full Size" size="full" onPress={() => {}} />
    </>
  ),
};

export const LoadingState: Story = {
  args: {
    label: 'Loading...',
    onPress: () => {},
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    label: 'Disabled',
    onPress: () => {},
    disabled: true,
  },
};

export const WithBackgroundColor: Story = {
  args: {
    label: 'Custom BG',
    onPress: () => {},
    bg: 'purple',
  },
};

export const WithLoaderSize: Story = {
  args: {
    label: 'Loader Size',
    onPress: () => {},
    loading: true,
    loaderSize: 24,
  },
};

export const WithCustomLabelProps: Story = {
  args: {
    label: 'Custom Label',
    onPress: () => {},
    labelProps: { variant: 'title4Bold', color: 'primary', center: true },
  },
};
