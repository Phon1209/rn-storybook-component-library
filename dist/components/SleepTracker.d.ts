/**
 * A summary tile showing hours slept against a nightly goal.
 *
 * @param {{ hoursSlept: number, goalHours?: number, style?: object }} props
 */
export function SleepTracker({ hoursSlept, goalHours, style }: {
    hoursSlept: number;
    goalHours?: number;
    style?: object;
}): React.JSX.Element;
export default SleepTracker;
import React from "react";
