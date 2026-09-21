/**
 * A circular SVG progress indicator.
 *
 * @param {{ value?: number, accent?: 'accent1' | 'accent2' | 'accent3', size?: number, strokeWidth?: number }} props
 */
export function ProgressRing({ value, accent, size, strokeWidth, }: {
    value?: number;
    accent?: "accent1" | "accent2" | "accent3";
    size?: number;
    strokeWidth?: number;
}): React.JSX.Element;
export default ProgressRing;
import React from 'react';
