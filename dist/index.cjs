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
  Color: () => Color,
  Primitive: () => Primitive,
  ProgressRing: () => ProgressRing,
  Radii: () => Radii,
  Spacing: () => Spacing,
  Typography: () => Typography2,
  TypographyTokens: () => Typography,
  colors: () => colors,
  primitive: () => primitive,
  primitiveSpacing: () => spacing,
  radii: () => radii,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/components/Card.jsx
var import_react = __toESM(require("react"), 1);
var import_react_native = require("react-native");

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
  label: {
    color: Color.text.tertiary600,
    fontSize: 12,
    fontWeight: "600",
    left: Spacing[4],
    letterSpacing: 0.4,
    position: "absolute",
    textTransform: "uppercase",
    top: Spacing[4]
  },
  warningLabel: {
    color: Color.text.warningPrimary600
  },
  dangerLabel: {
    color: Color.text.errorPrimary600
  },
  successLabel: {
    color: Color.text.successPrimary600
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingTop: Spacing[4]
  }
});
var variantStyles = {
  warning: styles.warning,
  danger: styles.danger,
  success: styles.success
};
var labelVariantStyles = {
  warning: styles.warningLabel,
  danger: styles.dangerLabel,
  success: styles.successLabel
};

// src/components/ProgressRing.jsx
var import_react2 = __toESM(require("react"), 1);
var import_react_native_svg = __toESM(require("react-native-svg"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
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
            stroke: Color.background.quaternary,
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

// src/components/Typography.jsx
var import_react3 = __toESM(require("react"), 1);
var import_react_native2 = require("react-native");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react_native2.Text,
    {
      ...textProps,
      style: [styles2.text, variantStyle, { color: textColor, fontWeight, textAlign: align }, style],
      children
    }
  );
}
var styles2 = import_react_native2.StyleSheet.create({
  text: {
    color: defaultColor
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card,
  Color,
  Primitive,
  ProgressRing,
  Radii,
  Spacing,
  Typography,
  TypographyTokens,
  colors,
  primitive,
  primitiveSpacing,
  radii,
  typography
});
//# sourceMappingURL=index.cjs.map