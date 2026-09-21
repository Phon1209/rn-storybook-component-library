import React from 'react';
import Svg, { Circle } from 'react-native-svg';

import {
  accentColor1,
  accentColor2,
  accentColor3,
  bgSecondary,
} from '../token.js';

const MAX_VALUE = 100;
const ACCENT_COLORS = {
  accent1: accentColor1,
  accent2: accentColor2,
  accent3: accentColor3,
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
  const color = ACCENT_COLORS[accent] ?? accentColor1;

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
        stroke={bgSecondary}
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
