var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Card: () => Card,
  ProgressRing: () => ProgressRing,
  accentColor1: () => accentColor1,
  accentColor2: () => accentColor2,
  accentColor3: () => accentColor3,
  bgPrimary: () => bgPrimary,
  bgSecondary: () => bgSecondary,
  borderRadius: () => borderRadius,
  cardBackground: () => cardBackground,
  cardLabel: () => cardLabel,
  dangerBackground: () => dangerBackground,
  dangerForeground: () => dangerForeground,
  spacing: () => spacing,
  textDisabled: () => textDisabled,
  textPrimary: () => textPrimary,
  textSecondary: () => textSecondary,
  warningBackground: () => warningBackground,
  warningForeground: () => warningForeground
});
module.exports = __toCommonJS(index_exports);

// src/components/Card.jsx
var import_react = __toESM(require("react"), 1);
var import_react_native = require("react-native");

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
var import_jsx_runtime = require("react/jsx-runtime");
function Card({ label, children, style, variant = "default" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, { style: [styles.card, variantStyles[variant], style], children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, { style: [styles.label, labelVariantStyles[variant]], children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, { style: styles.content, children })
  ] });
}
var styles = import_react_native.StyleSheet.create({
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
var import_react2 = __toESM(require("react"), 1);
var import_react_native_svg = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_react_native_svg.default,
    {
      accessibilityLabel: `${progress}% progress`,
      accessibilityRole: "image",
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      width: size,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg.Circle,
          {
            cx: center,
            cy: center,
            fill: "none",
            r: radius,
            stroke: bgSecondary,
            strokeWidth
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_native_svg.Circle,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.cjs.map