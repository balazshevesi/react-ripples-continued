<p align="center">
  <a href="https://www.npmjs.org/package/react-ripples-continued">
    <img src="https://img.shields.io/npm/v/react-ripples-continued?style=for-the-badge&logo=npm&color=ff79c6&labelColor=282a36"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/react-ripples-continued?style=for-the-badge&logo=webpack&color=ff79c6&labelColor=282a36" />
</p>

<h3 align="center">
  Ripple effect for react ⚛️
</h3>

<h3 align="center">
  <a href="https://balazs-topg.github.io/react-ripples-continued/">View Demo</a>
</h3>


# React Ripples Continued

The `Ripples` component provides a visual ripple effect, typically used for button click or touch feedback. It's greatly inspired by the material design principals.

## Installation

```
npm install react-ripples-continued
```

## Usage

One thing to note about usage is that **the parent container should always have overflow: "hidden" and position: "relative"**, otherwise it will not work as expected. I recommend using tailwind for it, but it's up to you.

```javascript
import { Ripples } from "react-ripples-continued";

export default function Button() {
  return (
    <button
      style={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "wheat",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      react ripples 🎉
      <Ripples />
    </button>
  );
}
```

## Props

All props are optional

### `on`

- Type: `"click" | "mouseDown" | "clickAndMouseDown" | "hover"`
- Default: `"click"`

Determines the event that triggers the ripple effect.

### `color`

- Type: `string`
- Default: `"white"`

Sets the color of the ripple effect.

### `opacity`

- Type: `number`
- Default: `1`

Sets the opacity of the ripple effect. Accepts values between `0` (completely transparent) and `1` (completely opaque).

### `blur`

- Type: `number`
- Default: `0`

Sets the blur amount for the ripple effect. The value is in `rem` units.

### `duration`

- Type: `number`
- Default: `500`

Determines the duration of the ripple animation in milliseconds.

### `fillAndHold`

- Type: `boolean`
- Default: `false`

When set to `true`, the ripple effect will fill the container and hold its position until a mouse up event occurs.

### `optimize`

- Type: `boolean`
- Default: `false`

When set to `true`, the ripple elements will be removed from the DOM after the animation completes. This can be useful for performance optimization in scenarios with frequent ripple triggers, but it's set to false by default, since it can introduce some wierd behaviour.

### `rippleElement`

- Type: `React.ReactNode`
- Default: `undefined`

When handed JSX it will display that JSX inside the ripple. Keep in mind that you probably want to lower the opacticy of the color prop if you use `rippleElement`

The `rippleElement` prop can be used to do create some pretty cool stuff!

## Internal Workings

### `addRipple`

This internal function is responsible for creating and animating the ripple effect based on the provided parameters.

This function is not react specific (except ReactDOM.createRoot for prasing JSX/createElement calls to js DOM operations), so it could quite easily be adpated for use with solid, vue, svelte, angular, or any other framework.

## Dynamic Animations

The component includes two animation keyframes:

1. `ripple-animation`: The standard ripple effect animation.
2. `ripple-fill-and-hold-scale-animation`: A fill and hold animation for the ripple effect.

## Styling

The ripple effect is styled with an absolute position, ensuring it covers its parent element. The size and position of the ripple are determined based on the triggering event's location.

Keep in mind that the parent element will need to be set to overflow: "hidden" and position: "relative"

---

This documentation provides an overview of the `Ripples` component, its props, and its behavior. Adjust the paths and any other specific details as needed for your project's context.
