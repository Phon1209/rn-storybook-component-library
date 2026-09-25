/**
 * Text that applies the library's typography scale and semantic text colors.
 * `color` accepts a Color.text token name (for example, "secondary700") or a
 * React Native color value such as "#ffffff".
 *
 * @param {{ children: React.ReactNode, variant?: keyof typeof TypographyTokens.variants, color?: keyof typeof Color.text | string, weight?: keyof typeof TypographyTokens.weights, align?: 'auto' | 'left' | 'right' | 'center' | 'justify', style?: import('react-native').TextStyle }} props
 */
export function Typography({ children, variant, color, weight, align, style, ...textProps }: {
    children: React.ReactNode;
    variant?: keyof typeof TypographyTokens.variants;
    color?: keyof typeof Color.text | string;
    weight?: keyof typeof TypographyTokens.weights;
    align?: "auto" | "left" | "right" | "center" | "justify";
    style?: import("react-native").TextStyle;
}): React.JSX.Element;
export default Typography;
import React from "react";
import { Typography as TypographyTokens } from "../tokens/index.js";
import { Color } from "../tokens/index.js";
