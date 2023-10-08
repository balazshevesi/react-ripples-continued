import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

//fillAndHold animation
let fillAndHoldAnimationExists = false;
const dynamicFillAndHoldAnimation = (
  keyframe: string,
  element: HTMLElement
) => {
  if (!fillAndHoldAnimationExists) {
    const styleSheet = document.createElement("style");
    element.appendChild(styleSheet);

    styleSheet.sheet!.insertRule(keyframe, styleSheet.sheet!.cssRules.length);
    console.log(styleSheet);
    fillAndHoldAnimationExists = true;
  }
};

dynamicFillAndHoldAnimation(
  `
@keyframes ripple-fill-and-hold-scale-animation {
  to {
    transform: scale(4);
  }
}
  `,
  document.head
);

//standard animation
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
  element: HTMLElement,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  color: string,
  opacity: number,
  blur: number,
  duration: number,
  fillAndHold: boolean,
  neverRemove: boolean,
  rippleElement?: React.ReactNode,
  className?: string
) {
  const newRipple = document.createElement("div");

  const newRoot = rippleElement && ReactDOM.createRoot(newRipple);
  newRoot && newRoot.render(rippleElement);

  //styles
  newRipple.style.position = "absolute";
  newRipple.style.borderRadius = "50%";
  newRipple.style.transform = "scale(0)";
  newRipple.style.zIndex = "0";
  className &&
    className.split(" ").forEach((className) => {
      newRipple.classList.add(className);
    });
  newRipple.style.display = "flex";
  newRipple.style.justifyContent = "center";
  newRipple.style.alignItems = "center";

  //determine size and position
  const rect = element!.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const left = event.clientX - rect.left - size / 2;
  const top = event.clientY - rect.top - size / 2;

  //set size and position
  newRipple.style.width = `${size}px`;
  newRipple.style.height = `${size}px`;
  newRipple.style.left = `${left}px`;
  newRipple.style.top = `${top}px`;

  //append
  element!.appendChild(newRipple);

  //remove
  if (!neverRemove) {
    setTimeout(
      () => {
        element!.removeChild(newRipple);
      },
      fillAndHold ? 100000 : duration
    );
  }

  //apply customization
  newRipple.style.backgroundColor = color;
  newRipple.style.opacity = String(opacity);
  newRipple.style.filter = `blur(${blur}rem)`;
  if (!fillAndHold) {
    newRipple.style.animation = `ripple-animation ${duration}ms linear`;
  } else {
    newRipple.style.transition = `all ${duration}ms linear`;
    newRipple.style.animation = `ripple-fill-and-hold-scale-animation ${duration}ms linear`;

    setTimeout(() => {
      newRipple.style.transform = "scale(4)";
    }, duration);
    document.addEventListener(
      "mouseup",
      () => {
        newRipple.style.opacity = "0";
        if (!neverRemove) {
          setTimeout(() => {
            element!.removeChild(newRipple);
          }, duration);
        }
      },
      {
        once: true,
      }
    );
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
  optimize = false,
  rippleElement,
  className,
}: {
  on?: "click" | "mouseDown" | "clickAndMouseDown" | "hover";
  color?: string;
  opacity?: number;
  blur?: number;
  duration?: number;
  fillAndHold?: boolean;
  optimize?: boolean;
  rippleElement?: React.ReactNode;
  className?: string;
}) {
  const neverRemove = !optimize;
  const ripplesurfaceRef = useRef(null);
  const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  };

  const handleEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    addRipple(
      ripplesurfaceRef.current!,
      event,
      color,
      opacity,
      blur,
      duration,
      fillAndHold,
      neverRemove,
      rippleElement,
      className
    );
  };

  const eventHandlers: Record<
    string,
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  > = {};

  if (fillAndHold) {
    eventHandlers.onMouseDown = handleEvent;
  } else if (on === "mouseDown") {
    eventHandlers.onMouseDown = handleEvent;
  } else if (on === "click") {
    eventHandlers.onClick = handleEvent;
  } else if (on === "hover") {
    eventHandlers.onMouseEnter = handleEvent;
  } else if (on === "clickAndMouseDown") {
    eventHandlers.onClick = handleEvent;
    eventHandlers.onMouseDown = handleEvent;
  }
  return (
    <div aria-hidden ref={ripplesurfaceRef} style={style} {...eventHandlers} />
  );
}
