import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Card } from "./Card.jsx";
import { Color, Spacing } from "../tokens/index.js";

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    label: "Daily steps",
  },
  argTypes: {
    label: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["default", "warning", "danger"],
    },
  },
  decorators: [
    (Story) => (
      <View style={styles.canvas}>
        <View style={styles.cardWidth}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default meta;

export const Default = {
  render: (args) => (
    <Card {...args}>
      <Text style={styles.value}>8,420</Text>
      <Text style={styles.caption}>steps today</Text>
    </Card>
  ),
};

export const HeartRate = {
  args: {
    label: "Heart rate",
  },
  render: (args) => (
    <Card {...args}>
      <Text style={styles.value}>72</Text>
      <Text style={styles.caption}>BPM · resting</Text>
    </Card>
  ),
};

export const Warning = {
  args: {
    label: "Hydration reminder",
    variant: "warning",
  },
  render: (args) => (
    <Card {...args}>
      <Text style={styles.value}>2</Text>
      <Text style={styles.caption}>glasses remaining</Text>
    </Card>
  ),
};

export const Danger = {
  args: {
    label: "High heart rate",
    variant: "danger",
  },
  render: (args) => (
    <Card {...args}>
      <Text style={styles.value}>124</Text>
      <Text style={styles.caption}>BPM · check in</Text>
    </Card>
  ),
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: Color.background.secondary,
    minHeight: 240,
    padding: 24,
  },
  cardWidth: {
    width: 280,
  },
  value: {
    color: Color.text.primary900,
    fontSize: 36,
    fontWeight: "700",
  },
  caption: {
    color: Color.foreground.brandPrimary600,
    fontSize: 14,
    marginTop: Spacing[1],
  },
});
