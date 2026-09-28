// src/components/Card.jsx
import React2 from "react";
import { StyleSheet as StyleSheet2, View } from "react-native";

// src/tokens/Primitive.ts
var primitive = {
  color: {
    base: { white: "#ffffff", black: "#000000", transparent: "#ffffff" },
    gray: {
      lightMode: { 25: "#fcfcfd", 50: "#f9fafb", 100: "#f2f4f7", 200: "#eaecf0", 300: "#d0d5dd", 400: "#98a2b3", 500: "#667085", 600: "#475467", 700: "#344054", 800: "#182230", 900: "#101828", 950: "#0c111d" },
      darkMode: { 25: "#fafafa", 50: "#f5f5f6", 100: "#f0f1f1", 200: "#ececed", 300: "#cecfd2", 400: "#94969c", 500: "#85888e", 600: "#61646c", 700: "#333741", 800: "#1f242f", 900: "#161b26", 950: "#0c111d" }
    },
    brand: { 25: "#fafdf7", 50: "#f5fbee", 100: "#e6f4d7", 200: "#ceeab0", 300: "#acdc79", 400: "#86cb3c", 500: "#669f2a", 600: "#4f7a21", 700: "#3f621a", 800: "#335015", 900: "#2b4212", 950: "#1a280b" },
    error: { 25: "#fffbfa", 50: "#fef3f2", 100: "#fee4e2", 200: "#fecdca", 300: "#fda29b", 400: "#f97066", 500: "#f04438", 600: "#d92d20", 700: "#b42318", 800: "#912018", 900: "#7a271a", 950: "#55160c" },
    warning: { 25: "#fffcf5", 50: "#fffaeb", 100: "#fef0c7", 200: "#fedf89", 300: "#fec84b", 400: "#fdb022", 500: "#f79009", 600: "#dc6803", 700: "#b54708", 800: "#93370d", 900: "#7a2e0e", 950: "#4e1d09" },
    success: { 25: "#f6fef9", 50: "#ecfdf3", 100: "#dcfae6", 200: "#abefc6", 300: "#75e0a7", 400: "#47cd89", 500: "#17b26a", 600: "#079455", 700: "#067647", 800: "#085d3a", 900: "#074d31", 950: "#053321" },
    blue: { 25: "#f5faff", 50: "#eff8ff", 100: "#d1e9ff", 200: "#b2ddff", 300: "#84caff", 400: "#53b1fd", 500: "#2e90fa", 600: "#1570ef", 700: "#175cd3", 800: "#1849a9", 900: "#194185", 950: "#102a56" },
    green: { 50: "#edfcf2", 100: "#d3f8df", 200: "#aaf0c4", 300: "#73e2a3", 400: "#3ccb7f", 500: "#16b364", 600: "#099250", 700: "#087443", 800: "#095c37", 900: "#084c2e", 950: "#052e1c" },
    moss: { 25: "#fafdf7", 50: "#f5fbee", 100: "#e6f4d7", 200: "#ceeab0", 300: "#acdc79", 400: "#86cb3c", 500: "#669f2a", 600: "#4f7a21", 700: "#3f621a", 800: "#335015", 900: "#2b4212", 950: "#1a280b" }
  },
  spacing: { 0: 0, 0.5: 2, 1: 4, 1.5: 6, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64, 20: 80, 24: 96, 32: 128, 40: 160, 48: 192, 56: 224, 64: 256, 80: 320, 96: 384, 120: 480, 140: 560, 160: 640, 180: 720, 192: 768, 256: 1024, 320: 1280, 360: 1440, 400: 1600, 480: 1920 }
};
var Primitive = primitive;

// src/tokens/Color.ts
var { base, brand, error, gray, success, warning } = primitive.color;
var light = gray.lightMode;
var colors = primitive.color;
var Color = {
  primitive: colors,
  text: {
    primary900: light[900],
    secondary700: light[700],
    tertiary600: light[600],
    disabled: light[500],
    placeholder: light[500],
    placeholderSubtle: light[300],
    secondaryHover: light[800],
    tertiaryHover: light[700],
    quaternary500: light[500],
    white: base.white,
    errorPrimary600: error[600],
    warningPrimary600: warning[600],
    successPrimary600: success[600],
    brandSecondary700: brand[700],
    brandTertiary600: brand[600],
    brandPrimary900: brand[900],
    primaryOnBrand: base.white,
    secondaryOnBrand: brand[200],
    tertiaryOnBrand: brand[200]
  },
  border: {
    primary: light[300],
    secondary: light[200],
    tertiary: light[100],
    disabled: light[300],
    disabledSubtle: light[200],
    brand: brand[300],
    brandSolid: brand[600],
    brandSolidAlt: brand[600],
    error: error[300],
    errorSolid: error[600]
  },
  background: {
    primary: base.white,
    primaryAlt: base.white,
    primaryHover: light[50],
    primarySolid: light[950],
    secondary: light[50],
    secondaryAlt: light[50],
    secondaryHover: light[100],
    secondarySubtle: light[25],
    tertiary: light[100],
    quaternary: light[200],
    active: light[50],
    disabled: light[100],
    disabledSubtle: light[50],
    overlay: light[950],
    brandPrimary: brand[50],
    brandPrimaryAlt: brand[50],
    brandSecondary: brand[100],
    brandSolid: brand[600],
    brandSolidHover: brand[700],
    brandSection: brand[800],
    brandSectionSubtle: brand[700],
    errorPrimary: error[50],
    errorSecondary: error[100],
    errorSolid: error[600],
    warningPrimary: warning[50],
    warningSecondary: warning[100],
    warningSolid: warning[600],
    successPrimary: success[50],
    successSecondary: success[100],
    successSolid: success[600]
  },
  foreground: {
    white: base.white,
    primary900: light[900],
    secondary700: light[700],
    secondaryHover: light[800],
    tertiary600: light[600],
    tertiaryHover: light[700],
    quaternary500: light[500],
    quaternaryHover: light[600],
    quinary400: light[400],
    quinaryHover: light[500],
    senary300: light[300],
    disabled: light[400],
    disabledSubtle: light[300],
    brandPrimary600: brand[600],
    brandPrimaryAlt: brand[600],
    brandSecondary500: brand[500],
    errorPrimary: error[600],
    errorSecondary: error[500],
    warningPrimary: warning[600],
    warningSecondary: warning[500],
    successPrimary: success[600],
    successSecondary: success[500]
  },
  component: {
    button: {
      primary: {
        background: brand[600],
        backgroundHover: brand[700],
        foreground: base.white,
        border: brand[600],
        borderHover: brand[700]
      },
      secondary: {
        background: base.white,
        backgroundHover: light[50],
        foreground: light[700],
        foregroundHover: light[800],
        border: light[300],
        borderHover: light[300]
      },
      secondaryColor: {
        background: base.white,
        backgroundHover: brand[50],
        foreground: brand[700],
        foregroundHover: brand[800],
        border: brand[300],
        borderHover: brand[300]
      },
      primaryError: {
        background: error[600],
        backgroundHover: error[700],
        foreground: base.white,
        border: error[600],
        borderHover: error[700]
      },
      secondaryError: {
        background: base.white,
        backgroundHover: error[50],
        foreground: error[700],
        foregroundHover: error[800],
        border: error[300],
        borderHover: error[300]
      }
    },
    alpha: { white: base.white, black: base.black }
  }
};

// src/tokens/Spacing.ts
var spacing = primitive.spacing;
var Spacing = spacing;

// src/tokens/Radii.ts
var radii = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999
};
var Radii = radii;

// src/tokens/Typography.ts
var typography = {
  variants: {
    "display-2xl": { fontSize: 72, lineHeight: 90 },
    "display-xl": { fontSize: 60, lineHeight: 72 },
    "display-lg": { fontSize: 48, lineHeight: 60 },
    "display-md": { fontSize: 36, lineHeight: 44 },
    "display-sm": { fontSize: 30, lineHeight: 38 },
    "display-xs": { fontSize: 24, lineHeight: 32 },
    "text-xl": { fontSize: 20, lineHeight: 30 },
    "text-lg": { fontSize: 18, lineHeight: 28 },
    "text-md": { fontSize: 16, lineHeight: 24 },
    "text-sm": { fontSize: 14, lineHeight: 20 },
    "text-xs": { fontSize: 12, lineHeight: 18 }
  },
  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700"
  }
};
var Typography = typography;

// src/components/Typography.jsx
import React from "react";
import { StyleSheet, Text } from "react-native";
import { jsx } from "react/jsx-runtime";
var defaultColor = Color.text.primary900;
function Typography2({
  children,
  variant = "text-md",
  color = "primary900",
  weight = "regular",
  align = "left",
  style,
  ...textProps
}) {
  const variantStyle = Typography.variants[variant] || Typography.variants["text-md"];
  const fontWeight = Typography.weights[weight] || Typography.weights.regular;
  const textColor = Color.text[color] || color || defaultColor;
  return /* @__PURE__ */ jsx(
    Text,
    {
      ...textProps,
      style: [styles.text, variantStyle, { color: textColor, fontWeight, textAlign: align }, style],
      children
    }
  );
}
var styles = StyleSheet.create({
  text: {
    color: defaultColor
  }
});

// src/components/Card.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Card({ label, children, style, variant = "default" }) {
  return /* @__PURE__ */ jsxs(View, { style: [styles2.card, variantStyles[variant], style], children: [
    /* @__PURE__ */ jsx2(
      Typography2,
      {
        variant: "text-xs",
        color: labelColors[variant] || labelColors.default,
        weight: "semibold",
        children: label.toUpperCase()
      }
    ),
    /* @__PURE__ */ jsx2(View, { style: styles2.content, children })
  ] });
}
var styles2 = StyleSheet2.create({
  card: {
    backgroundColor: Color.background.primary,
    borderRadius: Radii.lg,
    borderColor: Color.border.secondary,
    borderWidth: 1,
    minHeight: 160,
    overflow: "hidden",
    padding: Spacing[4]
  },
  warning: {
    backgroundColor: Color.background.warningPrimary
  },
  danger: {
    backgroundColor: Color.background.errorPrimary
  },
  success: {
    backgroundColor: Color.background.successPrimary
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});
var variantStyles = {
  warning: styles2.warning,
  danger: styles2.danger,
  success: styles2.success
};
var labelColors = {
  default: "tertiary600",
  warning: "warningPrimary600",
  danger: "errorPrimary600",
  success: "successPrimary600"
};

// src/components/Trail/Card.jsx
import React3 from "react";
import { Image, StyleSheet as StyleSheet3, View as View2 } from "react-native";
import Svg, { Path } from "react-native-svg";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var difficultyTokens = {
  easy: { background: Color.background.successSolid, foreground: Color.text.primaryOnBrand },
  medium: { background: Color.background.warningSolid, foreground: Color.text.primary900 },
  moderate: { background: Color.background.warningSolid, foreground: Color.text.primary900 },
  hard: { background: Color.background.errorSolid, foreground: Color.text.primaryOnBrand }
};
function Card2({
  name,
  imageUrl,
  difficulty,
  trailDistance,
  estimateHikeTime,
  saved = false,
  style
}) {
  const normalizedDifficulty = difficulty.toLowerCase();
  const difficultyStyle = difficultyTokens[normalizedDifficulty] || difficultyTokens.easy;
  return /* @__PURE__ */ jsxs2(View2, { style: [styles3.card, style], children: [
    /* @__PURE__ */ jsx3(
      Image,
      {
        accessibilityLabel: `${name} trail`,
        source: typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl,
        style: styles3.image
      }
    ),
    /* @__PURE__ */ jsxs2(View2, { style: styles3.content, children: [
      /* @__PURE__ */ jsxs2(View2, { style: styles3.topRow, children: [
        /* @__PURE__ */ jsx3(Typography2, { variant: "text-lg", color: "primary900", weight: "semibold", style: styles3.name, children: name }),
        /* @__PURE__ */ jsx3(Star, { filled: saved })
      ] }),
      /* @__PURE__ */ jsx3(View2, { style: [styles3.badge, { backgroundColor: difficultyStyle.background }], children: /* @__PURE__ */ jsx3(Typography2, { variant: "text-md", color: difficultyStyle.foreground, weight: "medium", children: difficulty }) }),
      /* @__PURE__ */ jsxs2(View2, { style: styles3.details, children: [
        /* @__PURE__ */ jsx3(Typography2, { variant: "text-md", color: "secondary700", weight: "medium", children: trailDistance }),
        /* @__PURE__ */ jsx3(Typography2, { variant: "text-md", color: "secondary700", weight: "medium", children: "\xB7" }),
        /* @__PURE__ */ jsx3(Typography2, { variant: "text-md", color: "secondary700", weight: "medium", children: estimateHikeTime })
      ] })
    ] })
  ] });
}
function Star({ filled }) {
  return /* @__PURE__ */ jsx3(
    Svg,
    {
      accessibilityLabel: filled ? "Saved trail" : "Unsaved trail",
      fill: filled ? Color.foreground.warningPrimary : "none",
      height: 28,
      viewBox: "0 0 24 24",
      width: 28,
      stroke: Color.foreground.warningPrimary,
      strokeWidth: 1.8,
      children: /* @__PURE__ */ jsx3(Path, { d: "m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.53l-5.88 3.09 1.12-6.55-4.76-4.64 6.58-.96L12 2.5Z" })
    }
  );
}
var styles3 = StyleSheet3.create({
  card: {
    alignItems: "stretch",
    backgroundColor: Color.background.primary,
    borderColor: Color.border.secondary,
    borderRadius: Radii.lg,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
    padding: Spacing[3]
  },
  image: {
    aspectRatio: 1,
    borderRadius: Radii.md,
    height: 120,
    resizeMode: "cover"
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: Spacing[3]
  },
  topRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: Spacing[2],
    justifyContent: "space-between"
  },
  name: { flex: 1 },
  badge: {
    alignSelf: "flex-start",
    borderRadius: Radii.pill,
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1]
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    gap: Spacing[2]
  }
});

// src/components/ProgressRing.jsx
import React4 from "react";
import Svg2, { Circle } from "react-native-svg";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var MAX_VALUE = 100;
var ACCENT_COLORS = {
  accent1: Color.foreground.brandPrimary600,
  accent2: Color.foreground.successPrimary,
  accent3: Color.foreground.warningPrimary
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
  const color = ACCENT_COLORS[accent] ?? ACCENT_COLORS.accent1;
  return /* @__PURE__ */ jsxs3(
    Svg2,
    {
      accessibilityLabel: `${progress}% progress`,
      accessibilityRole: "image",
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      width: size,
      children: [
        /* @__PURE__ */ jsx4(
          Circle,
          {
            cx: center,
            cy: center,
            fill: "none",
            r: radius,
            stroke: Color.background.quaternary,
            strokeWidth
          }
        ),
        /* @__PURE__ */ jsx4(
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

// src/components/SleepTracker.jsx
import React5 from "react";
import { StyleSheet as StyleSheet4, View as View3 } from "react-native";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function progressColor(percent) {
  if (percent <= 30) return Color.foreground.errorPrimary;
  if (percent <= 70) return Color.foreground.warningPrimary;
  return Color.foreground.brandPrimary600;
}
function SleepTracker({ hoursSlept, goalHours = 8, style }) {
  const clamped = Math.min(Math.max(Number(hoursSlept) || 0, 0), goalHours);
  const percent = goalHours > 0 ? clamped / goalHours * 100 : 0;
  const met = hoursSlept >= goalHours;
  const fillColor = progressColor(percent);
  return /* @__PURE__ */ jsxs4(View3, { style: [styles4.card, style], children: [
    /* @__PURE__ */ jsx5(Typography2, { style: styles4.label, children: "Sleep" }),
    /* @__PURE__ */ jsxs4(View3, { style: styles4.row, children: [
      /* @__PURE__ */ jsx5(Typography2, { style: styles4.value, children: hoursSlept }),
      /* @__PURE__ */ jsx5(Typography2, { style: styles4.unit, children: "hrs" })
    ] }),
    /* @__PURE__ */ jsxs4(Typography2, { style: styles4.caption, children: [
      "Goal: ",
      goalHours,
      " hrs ",
      met ? "\xB7 goal met" : ""
    ] }),
    /* @__PURE__ */ jsx5(View3, { style: styles4.track, children: /* @__PURE__ */ jsx5(View3, { style: [styles4.fill, { backgroundColor: fillColor, width: `${percent}%` }] }) })
  ] });
}
var styles4 = StyleSheet4.create({
  card: {
    backgroundColor: Color.background.primary,
    borderRadius: Radii.lg,
    padding: Spacing[4],
    minWidth: 220
  },
  label: {
    color: Color.text.tertiary600,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.4,
    textTransform: "uppercase",
    marginBottom: Spacing[2]
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  value: {
    color: Color.text.primary900,
    fontSize: 36,
    fontWeight: "700"
  },
  unit: {
    color: Color.text.secondary700,
    fontSize: 16,
    marginLeft: Spacing[1],
    marginBottom: 4
  },
  caption: {
    color: Color.text.secondary700,
    fontSize: 13,
    marginTop: Spacing[1],
    marginBottom: Spacing[3]
  },
  track: {
    height: 8,
    borderRadius: Radii.pill,
    backgroundColor: Color.background.quaternary,
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    borderRadius: Radii.pill,
    backgroundColor: Color.foreground.brandPrimary600
  }
});
export {
  Card,
  Color,
  Primitive,
  ProgressRing,
  Radii,
  SleepTracker,
  Spacing,
  Card2 as TrailCard,
  Typography2 as Typography,
  Typography as TypographyTokens,
  colors,
  primitive,
  spacing as primitiveSpacing,
  radii,
  typography
};
//# sourceMappingURL=index.js.map