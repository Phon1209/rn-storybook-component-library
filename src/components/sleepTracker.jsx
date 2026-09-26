import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  accentColor1,
  accentColor3,
  bgSecondary,
  borderRadius,
  cardBackground,
  cardLabel,
  spacing,
  textPrimary,
  textSecondary,
} from "../token.js";

/**
 * A summary tile showing hours slept against a nightly goal.
 *
 * @param {{ hoursSlept: number, goalHours?: number, style?: object }} props
 */
export function SleepTracker({ hoursSlept, goalHours = 8, style }) {
  const clamped = Math.min(Math.max(Number(hoursSlept) || 0, 0), goalHours);
  const percent = goalHours > 0 ? (clamped / goalHours) * 100 : 0;
  const met = hoursSlept >= goalHours;

  return (
    <View style={[styles.card, style]}>
      <Text style={styles.label}>Sleep</Text>
      <View style={styles.row}>
        <Text style={styles.value}>{hoursSlept}</Text>
        <Text style={styles.unit}>hrs</Text>
      </View>
      <Text style={styles.caption}>
        Goal: {goalHours} hrs {met ? "· goal met" : ""}
      </Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    minWidth: 220,
  },
  label: {
    color: cardLabel,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.4,
    textTransform: "uppercase",
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  value: {
    color: textPrimary,
    fontSize: 36,
    fontWeight: "700",
  },
  unit: {
    color: textSecondary,
    fontSize: 16,
    marginLeft: spacing.xs,
    marginBottom: 4,
  },
  caption: {
    color: textSecondary,
    fontSize: 13,
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  track: {
    height: 8,
    borderRadius: borderRadius.pill,
    backgroundColor: bgSecondary,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: borderRadius.pill,
    backgroundColor: accentColor1,
  },
});

export default SleepTracker;