import React from 'react';

export function Circle(props) {
  return React.createElement('circle', props);
}

export default function Svg({
  accessibilityLabel,
  accessibilityRole,
  children,
  ...props
}) {
  return React.createElement(
    'svg',
    {
      ...props,
      'aria-label': accessibilityLabel,
      role: accessibilityRole,
      xmlns: 'http://www.w3.org/2000/svg',
    },
    children,
  );
}
