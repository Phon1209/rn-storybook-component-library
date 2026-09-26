import React from "react";
import { StyleSheet, View } from "react-native";

import { Color, Radii, Spacing } from "../tokens/index.js";
import { Typography } from "./Typography.jsx";

/**
 * A surface for one or two-column health summary tiles.
 *
 * @param {{ label: string, children: React.ReactNode, style?: object, variant?: 'default' | 'warning' | 'danger' | 'success' }} props
 */
export function Card({ label, children, style, variant = "default" }) {
  return (
    <View style={[styles.card, variantStyles[variant], style]}>
      <Typography
        variant="text-xs"
        color={labelColors[variant] || labelColors.default}
        weight="semibold"
      >
        {label.toUpperCase()}
      </Typography>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.background.primary,
    borderRadius: Radii.lg,
    borderColor: Color.border.secondary,
    borderWidth: 1,
    minHeight: 160,
    overflow: "hidden",
    padding: Spacing[4],
  },
  warning: {
    backgroundColor: Color.background.warningPrimary,
  },
  danger: {
    backgroundColor: Color.background.errorPrimary,
  },
  success: {
    backgroundColor: Color.background.successPrimary,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

const variantStyles = {
  warning: styles.warning,
  danger: styles.danger,
  success: styles.success,
};

const labelColors = {
  default: "tertiary600",
  warning: "warningPrimary600",
  danger: "errorPrimary600",
  success: "successPrimary600",
};

export default Card;
