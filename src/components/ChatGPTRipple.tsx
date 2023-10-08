import { useRef } from "react";
import "../ripple.css";

function addRipple(
  ref: React.RefObject<HTMLDivElement>,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  color: string
) {
  const newRipple = document.createElement("div");
  newRipple.classList.add("ripple");
  newRipple.classList.add("w-4");
  newRipple.classList.add("h-4");

  const rect = ref.current!.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const left = event.clientX - rect.left - size / 2;
  const top = event.clientY - rect.top - size / 2;

  newRipple.style.width = `${size}px`;
  newRipple.style.height = `${size}px`;
  newRipple.style.left = `${left}px`;
  newRipple.style.top = `${top}px`;

  newRipple.style.backgroundColor = color;

  newRipple.style.filter = "blur(0px)";

  ref.current!.appendChild(newRipple);

  setTimeout(() => {
    ref.current!.removeChild(newRipple);
  }, 1000);
}

export default function GPTRipple() {
  const ripplesurfaceRef = useRef(null);
  return (
    <div
      ref={ripplesurfaceRef}
      className="w-full h-full top-0 left-0 absolute overflow-hidden" // Add relative positioning and overflow-hidden
      onClick={(event) => {
        addRipple(ripplesurfaceRef, event, "white");
      }}
    />
  );
}
