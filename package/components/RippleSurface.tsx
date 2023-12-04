import React, { ReactNode } from "react";

//@ts-ignore
import { Ripples } from "./Ripples.tsx";
import { HtmlTagName } from "./types/HtmlTagName.ts";
import { RipplesInterface } from "./types/RipplesInterface.ts";

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

export function RippleSurface({
  tag = "div",
  children,
  disableDefaultStyling,
  rippleFromBehind,
  forwardedRef,
  rippleProps,
  ...props
}: RippleSurface) {
  return React.createElement(
    tag,
    {
      ...props,
      style: !disableDefaultStyling
        ? { overflow: "hidden", position: "relative" }
        : null,
      ref: forwardedRef,
    },
    <>
      {!rippleFromBehind ? (
        children
      ) : (
        <div style={{ zIndex: 1, pointerEvents: "none", position: "relative" }}>
          {children}
        </div>
      )}
      <Ripples {...rippleProps} fillAndHold zIndex={0} />
    </>,
  );
}
