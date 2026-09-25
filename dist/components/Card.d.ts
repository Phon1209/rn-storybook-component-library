/**
 * A surface for one or two-column health summary tiles.
 *
 * @param {{ label: string, children: React.ReactNode, style?: object, variant?: 'default' | 'warning' | 'danger' | 'success' }} props
 */
export function Card({ label, children, style, variant }: {
    label: string;
    children: React.ReactNode;
    style?: object;
    variant?: "default" | "warning" | "danger" | "success";
}): React.JSX.Element;
export default Card;
import React from "react";
