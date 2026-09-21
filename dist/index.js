// src/components/Card.jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// src/token.js
var cardBackground = "#FFFFFF";
var cardLabel = "#60705B";
var accentColor1 = "#52734D";
var accentColor2 = "#86A47C";
var accentColor3 = "#D8E5D1";
var textPrimary = "#1E2B1D";
var textSecondary = "#5B6857";
var textDisabled = "#98A394";
var bgPrimary = "#F4F7F0";
var bgSecondary = "#E8EEE2";
var warningBackground = "#FFF4D8";
var dangerBackground = "#FDE8E7";
var warningForeground = "#8A5B00";
var dangerForeground = "#A4312D";
var spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32
};
var borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999
};

// src/components/Card.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function Card({ label, children, style, variant = "default" }) {
  return /* @__PURE__ */ jsxs(View, { style: [styles.card, variantStyles[variant], style], children: [
    /* @__PURE__ */ jsx(Text, { style: [styles.label, labelVariantStyles[variant]], children: label }),
    /* @__PURE__ */ jsx(View, { style: styles.content, children })
  ] });
}
var styles = StyleSheet.create({
  card: {
    backgroundColor: cardBackground,
    borderRadius: borderRadius.lg,
    minHeight: 160,
    overflow: "hidden",
    padding: spacing.lg
  },
  warning: {
    backgroundColor: warningBackground
  },
  danger: {
    backgroundColor: dangerBackground
  },
  label: {
    color: cardLabel,
    fontSize: 12,
    fontWeight: "600",
    left: spacing.lg,
    letterSpacing: 0.4,
    position: "absolute",
    textTransform: "uppercase",
    top: spacing.lg
  },
  warningLabel: {
    color: warningForeground
  },
  dangerLabel: {
    color: dangerForeground
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingTop: spacing.lg
  }
});
var variantStyles = {
  warning: styles.warning,
  danger: styles.danger
};
var labelVariantStyles = {
  warning: styles.warningLabel,
  danger: styles.dangerLabel
};

// src/components/ProgressRing.jsx
import React2 from "react";
import Svg, { Circle } from "react-native-svg";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var MAX_VALUE = 100;
var ACCENT_COLORS = {
  accent1: accentColor1,
  accent2: accentColor2,
  accent3: accentColor3
};
function clampValue(value) {
  return Math.min(Math.max(Number(value) || 0, 0), MAX_VALUE);
}
function ProgressRing({
  value = 0,
  accent = "accent1",
  size = 160,
  strokeWidth = 12
}) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = clampValue(value);
  const dashOffset = circumference * (1 - progress / MAX_VALUE);
  const color = ACCENT_COLORS[accent] ?? accentColor1;
  return /* @__PURE__ */ jsxs2(
    Svg,
    {
      accessibilityLabel: `${progress}% progress`,
      accessibilityRole: "image",
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      width: size,
      children: [
        /* @__PURE__ */ jsx2(
          Circle,
          {
            cx: center,
            cy: center,
            fill: "none",
            r: radius,
            stroke: bgSecondary,
            strokeWidth
          }
        ),
        /* @__PURE__ */ jsx2(
          Circle,
          {
            cx: center,
            cy: center,
            fill: "none",
            r: radius,
            stroke: color,
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            strokeWidth,
            transform: `rotate(-90 ${center} ${center})`
          }
        )
      ]
    }
  );
}
export {
  Card,
  ProgressRing,
  accentColor1,
  accentColor2,
  accentColor3,
  bgPrimary,
  bgSecondary,
  borderRadius,
  cardBackground,
  cardLabel,
  dangerBackground,
  dangerForeground,
  spacing,
  textDisabled,
  textPrimary,
  textSecondary,
  warningBackground,
  warningForeground
};
//# sourceMappingURL=index.js.map