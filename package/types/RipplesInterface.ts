export interface RipplesInterface {
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
}
