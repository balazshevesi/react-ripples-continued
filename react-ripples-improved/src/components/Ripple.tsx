import React, { useRef } from "react";

//animation
let animationExists = false;
const dynamicAnimation = (keyframe: string, element: HTMLElement) => {
  if (!animationExists) {
    const styleSheet = document.createElement("style");
    element.appendChild(styleSheet);

    styleSheet.sheet!.insertRule(keyframe, styleSheet.sheet!.cssRules.length);
    console.log(styleSheet);
    animationExists = true;
  }
};

dynamicAnimation(
  `
@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
  `,
  document.head
);

//ripples
function addRipple(
  ref: React.RefObject<HTMLDivElement>,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  color: string,
  opacity: number,
  blur: number,
  duration: number,
  fillAndHold: boolean
) {
  const newRipple = document.createElement("div");

  //styles
  newRipple.style.position = "absolute";
  newRipple.style.borderRadius = "50%";
  newRipple.style.transform = "scale(0)";

  //determine size and position
  const rect = ref.current!.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const left = event.clientX - rect.left - size / 2;
  const top = event.clientY - rect.top - size / 2;

  //set size and position
  newRipple.style.width = `${size}px`;
  newRipple.style.height = `${size}px`;
  newRipple.style.left = `${left}px`;
  newRipple.style.top = `${top}px`;

  //append
  ref.current!.appendChild(newRipple);

  //remove
  setTimeout(() => {
    ref.current!.removeChild(newRipple);
  }, duration);

  //customization
  newRipple.style.backgroundColor = color;
  newRipple.style.opacity = String(opacity);
  newRipple.style.filter = `blur(${blur}rem)`;
  if (!fillAndHold) {
    newRipple.style.animation = `ripple-animation ${duration}ms linear`;
  } else {
    return new Error("fillAndHold is not yet defined");
    newRipple.style.animation = `ripple-animation ${duration}ms linear`;
  }
}

//ripple component
export function Ripples({
  on = "click",
  color = "white",
  opacity = 1,
  blur = 0,
  duration = 500,
  fillAndHold = false,
}: {
  on?: "click" | "mouseDown" | "clickAndMouseDown";
  color?: string;
  opacity?: number;
  blur?: number;
  duration?: number;
  fillAndHold?: boolean;
}) {
  const ripplesurfaceRef = useRef(null);
  const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  };

  if (on === "click") {
    return (
      <div
        ref={ripplesurfaceRef}
        style={style}
        onClick={(event) => {
          addRipple(
            ripplesurfaceRef,
            event,
            color,
            opacity,
            blur,
            duration,
            fillAndHold
          );
        }}
      />
    );
  }
  if (on === "mouseDown") {
    return (
      <div
        ref={ripplesurfaceRef}
        style={style}
        onMouseDown={(event) => {
          addRipple(
            ripplesurfaceRef,
            event,
            color,
            opacity,
            blur,
            duration,
            fillAndHold
          );
        }}
      />
    );
  }
  if (on === "clickAndMouseDown") {
    return (
      <div
        ref={ripplesurfaceRef}
        style={style}
        onClick={(event) => {
          addRipple(ripplesurfaceRef, event, color, opacity, blur, duration, fillAndHold);
        }}
        onMouseDown={(event) => {
          addRipple(ripplesurfaceRef, event, color, opacity, blur, duration, fillAndHold);
        }}
      />
    );
  }
}
