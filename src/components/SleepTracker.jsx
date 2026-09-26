import React from "react";
import { StyleSheet, View } from "react-native";

import { Color, Radii, Spacing } from "../tokens/index.js";
import { Typography } from "./Typography.jsx";

function progressColor(percent) {
  if (percent <= 30) return Color.foreground.errorPrimary;
  if (percent <= 70) return Color.foreground.warningPrimary;
  return Color.foreground.brandPrimary600;
}

/**
 * A summary tile showing hours slept against a nightly goal.
 *
 * @param {{ hoursSlept: number, goalHours?: number, style?: object }} props
 */
export function SleepTracker({ hoursSlept, goalHours = 8, style }) {
  const clamped = Math.min(Math.max(Number(hoursSlept) || 0, 0), goalHours);
  const percent = goalHours > 0 ? (clamped / goalHours) * 100 : 0;
  const met = hoursSlept >= goalHours;
  const fillColor = progressColor(percent);

  return (
    <View style={[styles.card, style]}>
      <Typography style={styles.label}>Sleep</Typography>
      <View style={styles.row}>
        <Typography style={styles.value}>{hoursSlept}</Typography>
        <Typography style={styles.unit}>hrs</Typography>
      </View>
      <Typography style={styles.caption}>
        Goal: {goalHours} hrs {met ? "· goal met" : ""}
      </Typography>
      <View style={styles.track}>
        <View style={[styles.fill, { backgroundColor: fillColor, width: `${percent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.background.primary,
    borderRadius: Radii.lg,
    padding: Spacing[4],
    minWidth: 220,
  },
  label: {
    color: Color.text.tertiary600,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.4,
    textTransform: "uppercase",
    marginBottom: Spacing[2],
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  value: {
    color: Color.text.primary900,
    fontSize: 36,
    fontWeight: "700",
  },
  unit: {
    color: Color.text.secondary700,
    fontSize: 16,
    marginLeft: Spacing[1],
    marginBottom: 4,
  },
  caption: {
    color: Color.text.secondary700,
    fontSize: 13,
    marginTop: Spacing[1],
    marginBottom: Spacing[3],
  },
  track: {
    height: 8,
    borderRadius: Radii.pill,
    backgroundColor: Color.background.quaternary,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: Radii.pill,
    backgroundColor: Color.foreground.brandPrimary600,
  },
});

export default SleepTracker;
