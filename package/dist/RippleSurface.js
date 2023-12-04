var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
//@ts-ignore
import { Ripples } from "./Ripples.jsx";
export function RippleSurface(_a) {
    var { tag = "div", children, disableDefaultStyling, rippleFromBehind, forwardedRef, rippleProps } = _a, props = __rest(_a, ["tag", "children", "disableDefaultStyling", "rippleFromBehind", "forwardedRef", "rippleProps"]);
    return React.createElement(tag, Object.assign(Object.assign({}, props), { style: !disableDefaultStyling
            ? { overflow: "hidden", position: "relative" }
            : null, ref: forwardedRef }), React.createElement(React.Fragment, null,
        !rippleFromBehind ? (children) : (React.createElement("div", { style: { zIndex: 1, pointerEvents: "none", position: "relative" } }, children)),
        React.createElement(Ripples, Object.assign({}, rippleProps, { fillAndHold: true, zIndex: 0 }))));
}
