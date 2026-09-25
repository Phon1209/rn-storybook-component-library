import React from 'react';
import Svg, { Circle } from 'react-native-svg';

import { Color } from '../tokens/index.js';

const MAX_VALUE = 100;
const ACCENT_COLORS = {
  accent1: Color.foreground.brandPrimary600,
  accent2: Color.foreground.successPrimary,
  accent3: Color.foreground.warningPrimary,
};

function clampValue(value) {
  return Math.min(Math.max(Number(value) || 0, 0), MAX_VALUE);
}

/**
 * A circular SVG progress indicator.
 *
 * @param {{ value?: number, accent?: 'accent1' | 'accent2' | 'accent3', size?: number, strokeWidth?: number }} props
 */
export function ProgressRing({
  value = 0,
  accent = 'accent1',
  size = 160,
  strokeWidth = 12,
}) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = clampValue(value);
  const dashOffset = circumference * (1 - progress / MAX_VALUE);
  const color = ACCENT_COLORS[accent] ?? ACCENT_COLORS.accent1;

  return (
    <Svg
      accessibilityLabel={`${progress}% progress`}
      accessibilityRole="image"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <Circle
        cx={center}
        cy={center}
        fill="none"
        r={radius}
        stroke={Color.background.quaternary}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={center}
        cy={center}
        fill="none"
        r={radius}
        stroke={color}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={`rotate(-90 ${center} ${center})`}
      />
    </Svg>
  );
}

export default ProgressRing;
