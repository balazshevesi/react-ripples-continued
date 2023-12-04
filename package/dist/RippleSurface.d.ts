import React, { ReactNode } from "react";
import { HtmlTagName } from "./types/HtmlTagName.js";
import { RipplesInterface } from "./types/RipplesInterface.js";
interface RippleSurface extends RipplesInterface {
    tag?: HtmlTagName;
    children?: ReactNode;
    disableDefaultStyling?: boolean;
    rippleFromBehind?: boolean;
    id?: string;
    forwardedRef?: any;
    onClick?: any;
    onSubmit?: any;
    onInput?: any;
    rippleProps?: RipplesInterface;
}
export declare function RippleSurface({ tag, children, disableDefaultStyling, rippleFromBehind, forwardedRef, rippleProps, ...props }: RippleSurface): React.DOMElement<{
    style: {
        overflow: string;
        position: string;
    };
    ref: any;
    id?: string;
    onClick?: any;
    onSubmit?: any;
    onInput?: any;
    on?: "click" | "mouseDown" | "clickAndMouseDown" | "hover";
    color?: string;
    opacity?: number;
    blur?: number;
    duration?: number;
    fillAndHold?: boolean;
    optimize?: boolean;
    rippleElement?: React.ReactNode;
    className?: string;
    zIndex?: number;
}, Element>;
export {};
