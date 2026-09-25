import React from "react";
import { StyleSheet, Text } from "react-native";

import { Color, Typography as TypographyTokens } from "../tokens/index.js";

const defaultColor = Color.text.primary900;

/**
 * Text that applies the library's typography scale and semantic text colors.
 * `color` accepts a Color.text token name (for example, "secondary700") or a
 * React Native color value such as "#ffffff".
 *
 * @param {{ children: React.ReactNode, variant?: keyof typeof TypographyTokens.variants, color?: keyof typeof Color.text | string, weight?: keyof typeof TypographyTokens.weights, align?: 'auto' | 'left' | 'right' | 'center' | 'justify', style?: import('react-native').TextStyle }} props
 */
export function Typography({
  children,
  variant = "text-md",
  color = "primary900",
  weight = "regular",
  align = "left",
  style,
  ...textProps
}) {
  const variantStyle = TypographyTokens.variants[variant] || TypographyTokens.variants["text-md"];
  const fontWeight = TypographyTokens.weights[weight] || TypographyTokens.weights.regular;
  const textColor = Color.text[color] || color || defaultColor;

  return (
    <Text
      {...textProps}
      style={[styles.text, variantStyle, { color: textColor, fontWeight, textAlign: align }, style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: defaultColor,
  },
});

export default Typography;
