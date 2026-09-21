/**
 * A surface for one or two-column health summary tiles.
 *
 * @param {{ label: string, children: React.ReactNode, style?: object }} props
 */
export function Card({ label, children, style }: {
    label: string;
    children: React.ReactNode;
    style?: object;
}): React.JSX.Element;
export default Card;
import React from 'react';
