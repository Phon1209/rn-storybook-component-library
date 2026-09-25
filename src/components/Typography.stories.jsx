import React from "react";
import { StyleSheet, View } from "react-native";

import { Color, Spacing, Typography as TypographyTokens } from "../tokens/index.js";
import { Typography } from "./Typography.jsx";

const meta = {
  title: "Components/Typography",
  component: Typography,
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: "text-md",
    color: "primary900",
    weight: "regular",
    align: "left",
  },
  argTypes: {
    children: { control: "text" },
    variant: { control: "select", options: Object.keys(TypographyTokens.variants) },
    color: {
      control: "select",
      options: ["primary900", "secondary700", "tertiary600", "brandSecondary700", "errorPrimary600", "successPrimary600", "white"],
    },
    weight: { control: "select", options: Object.keys(TypographyTokens.weights) },
    align: { control: "select", options: ["left", "center", "right", "justify"] },
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

export const Display = {
  args: {
    children: "Design with intention",
    variant: "display-lg",
    weight: "bold",
  },
};

export const Centered = {
  args: {
    children: "Clear, thoughtful interface copy.",
    variant: "text-xl",
    color: "brandSecondary700",
    weight: "semibold",
    align: "center",
  },
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: Color.background.primary,
    minHeight: 180,
    padding: Spacing[6],
  },
});
