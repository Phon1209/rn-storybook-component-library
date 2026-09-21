import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ProgressRing } from './ProgressRing.jsx';

const meta = {
  title: 'Components/Progress Ring',
  component: ProgressRing,
  args: {
    accent: 'accent1',
    value: 72,
  },
  argTypes: {
    accent: {
      control: 'select',
      options: ['accent1', 'accent2', 'accent3'],
    },
    value: {
      control: { min: 0, max: 100, step: 1, type: 'range' },
    },
  },
  decorators: [
    (Story) => (
      <View style={styles.canvas}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Default = {};

export const AccentTwo = {
  args: {
    accent: 'accent2',
    value: 48,
  },
};

export const AccentThree = {
  args: {
    accent: 'accent3',
    value: 90,
  },
};

const styles = StyleSheet.create({
  canvas: {
    alignItems: 'center',
    backgroundColor: '#F4F7F0',
    justifyContent: 'center',
    minHeight: 240,
    padding: 24,
  },
});
