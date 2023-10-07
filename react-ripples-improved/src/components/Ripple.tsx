import React, { useRef } from "react";
import "../ripple.css";

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
  newRipple.classList.add("ripple");

  const rect = ref.current!.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const left = event.clientX - rect.left - size / 2;
  const top = event.clientY - rect.top - size / 2;

  newRipple.style.width = `${size}px`;
  newRipple.style.height = `${size}px`;
  newRipple.style.left = `${left}px`;
  newRipple.style.top = `${top}px`;

  ref.current!.appendChild(newRipple);

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
          addRipple(ripplesurfaceRef, event, color, opacity, blur, duration);
        }}
        onMouseDown={(event) => {
          addRipple(ripplesurfaceRef, event, color, opacity, blur, duration);
        }}
      />
    );
  }
}
