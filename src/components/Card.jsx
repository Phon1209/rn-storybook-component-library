import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color, Radii, Spacing } from "../tokens/index.js";

/**
 * A surface for one or two-column health summary tiles.
 *
 * @param {{ label: string, children: React.ReactNode, style?: object, variant?: 'default' | 'warning' | 'danger' | 'success' }} props
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
  label: {
    color: Color.text.tertiary600,
    fontSize: 12,
    fontWeight: "600",
    left: Spacing[4],
    letterSpacing: 0.4,
    position: "absolute",
    textTransform: "uppercase",
    top: Spacing[4],
  },
  warningLabel: {
    color: Color.text.warningPrimary600,
  },
  dangerLabel: {
    color: Color.text.errorPrimary600,
  },
  successLabel: {
    color: Color.text.successPrimary600,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingTop: Spacing[4],
  },
});

const variantStyles = {
  warning: styles.warning,
  danger: styles.danger,
  success: styles.success,
};

const labelVariantStyles = {
  warning: styles.warningLabel,
  danger: styles.dangerLabel,
  success: styles.successLabel,
};

export default Card;
