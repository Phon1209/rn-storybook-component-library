import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SleepTracker } from './SleepTracker.jsx';

const meta = {
  title: 'Components/Sleep Tracker',
  component: SleepTracker,
  args: {
    hoursSlept: 6.5,
    goalHours: 8,
  },
  argTypes: {
    hoursSlept: {
      control: { type: 'range', min: 0, max: 12, step: 0.5 },
    },
    goalHours: {
      control: { type: 'range', min: 1, max: 12, step: 0.5 },
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

export const GoalMet = {
  args: { hoursSlept: 8, goalHours: 8 },
};

export const ShortNight = {
  args: { hoursSlept: 4, goalHours: 8 },
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