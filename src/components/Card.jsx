import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  borderRadius,
  cardBackground,
  dangerBackground,
  warningBackground,
  dangerForeground,
  warningForeground,
  cardLabel,
  spacing,
} from "../token.js";

/**
 * A surface for one or two-column health summary tiles.
 *
 * @param {{ label: string, children: React.ReactNode, style?: object, variant?: 'default' | 'warning' | 'danger' }} props
 */
export function Card({ label, children, style, variant = "default" }) {
  return (
    <View style={[styles.card, variantStyles[variant], style]}>
      <Text style={[styles.label, labelVariantStyles[variant]]}>{label}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cardBackground,
    borderRadius: borderRadius.lg,
    minHeight: 160,
    overflow: "hidden",
    padding: spacing.lg,
  },
  warning: {
    backgroundColor: warningBackground,
  },
  danger: {
    backgroundColor: dangerBackground,
  },
  label: {
    color: cardLabel,
    fontSize: 12,
    fontWeight: "600",
    left: spacing.lg,
    letterSpacing: 0.4,
    position: "absolute",
    textTransform: "uppercase",
    top: spacing.lg,
  },
  warningLabel: {
    color: warningForeground,
  },
  dangerLabel: {
    color: dangerForeground,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingTop: spacing.lg,
  },
});

const variantStyles = {
  warning: styles.warning,
  danger: styles.danger,
};

const labelVariantStyles = {
  warning: styles.warningLabel,
  danger: styles.dangerLabel,
};

export default Card;
