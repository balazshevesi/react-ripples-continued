import React from "react";
export declare function Ripples({ on, color, opacity, blur, duration, fillAndHold, optimize, rippleElement, className, }: {
    on?: "click" | "mouseDown" | "clickAndMouseDown" | "hover";
    color?: string;
    opacity?: number;
    blur?: number;
    duration?: number;
    fillAndHold?: boolean;
    optimize?: boolean;
    rippleElement?: React.ReactNode;
    className?: string;
}): React.JSX.Element;
