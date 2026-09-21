/**
 * Shared visual tokens for the health-tracking card grid.
 * Moss green anchors the accent palette while the neutral tones keep health
 * data and labels easy to scan.
 */
export const cardBackground: "#FFFFFF";
export const cardLabel: "#60705B";
export const accentColor1: "#52734D";
export const accentColor2: "#86A47C";
export const accentColor3: "#D8E5D1";
export const textPrimary: "#1E2B1D";
export const textSecondary: "#5B6857";
export const textDisabled: "#98A394";
export const bgPrimary: "#F4F7F0";
export const bgSecondary: "#E8EEE2";
export const warningBackground: "#FFF4D8";
export const dangerBackground: "#FDE8E7";
export const warningForeground: "#8A5B00";
export const dangerForeground: "#A4312D";
export namespace spacing {
    let xs: number;
    let sm: number;
    let md: number;
    let lg: number;
    let xl: number;
    let xxl: number;
}
export namespace borderRadius {
    let sm_1: number;
    export { sm_1 as sm };
    let md_1: number;
    export { md_1 as md };
    let lg_1: number;
    export { lg_1 as lg };
    export let pill: number;
}
export default tokens;
declare namespace tokens {
    export { cardBackground };
    export { cardLabel };
    export { accentColor1 };
    export { accentColor2 };
    export { accentColor3 };
    export { textPrimary };
    export { textSecondary };
    export { textDisabled };
    export { bgPrimary };
    export { bgSecondary };
    export { warningBackground };
    export { dangerBackground };
    export { warningForeground };
    export { dangerForeground };
    export { spacing };
    export { borderRadius };
}
