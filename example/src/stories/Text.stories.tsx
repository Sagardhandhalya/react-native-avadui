import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native-avadui';

const meta = {
  title: 'Text',
  component: Text,
} as Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextVariants: Story = {
  argTypes: {
    variant: {
      options: [
        'display1Bold',
        'display1SemiBold',
        'display1Medium',
        'display2Bold',
        'display2SemiBold',
        'display2Medium',
        'display3Bold',
        'display3SemiBold',
        'display3Medium',
        'title1Bold',
        'title1SemiBold',
        'title1Medium',
        'title2Bold',
        'title2SemiBold',
        'title2Medium',
        'title3Bold',
        'title3SemiBold',
        'title3Medium',
        'title3Regular',
        'title4Bold',
        'title4SemiBold',
        'title4Medium',
        'title4Regular',
        'bodyBold',
        'bodySemiBold',
        'bodyMedium',
        'bodyRegular',
        'subtextBold',
        'subtextSemiBold',
        'subtextMedium',
        'subtextRegular',
        'captionBold',
        'captionSemiBold',
        'captionMedium',
        'captionRegular',
      ],
      control: { type: 'select' },
    },
    center: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    variant: 'display1Bold',
    children: 'Cool Text',
    center: true,
    color: 'blue',
  },
};
