/**
 * Typography tokens derived from the supplied text-size styles. Values are
 * unitless so they can be used directly in React Native style objects.
 */
export const typography = {
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
    "text-xs": { fontSize: 12, lineHeight: 18 },
  },
  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
} as const;

export const Typography = typography;
