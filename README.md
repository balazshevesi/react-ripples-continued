<!-- <img src="https://github.com/Balazs-topg/react-ripples-continued/blob/main/imgs/cover.png?raw=true"> -->
<h1 align="center">
    <a href="https://balazs-topg.github.io/react-ripples-continued/">React Ripples Continued</a>
</h1>
<h3 align="center">
  Ripple effect for <a href="https://react.dev/">react</a> made simple⚛️
</h3>
<p align="center">
  <a href="https://www.npmjs.org/package/react-ripples-continued">
    <img src="https://img.shields.io/npm/v/react-ripples-continued?style=for-the-badge&logo=npm&color=ff79c6&labelColor=282a36"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/react-ripples-continued?style=for-the-badge&logo=webpack&color=ff79c6&labelColor=282a36" />
  <a href="https://www.npmjs.org/package/react-ripples-continued">
    <img src="https://img.shields.io/npm/l/react-ripples-continued?style=for-the-badge&logo=webpack&color=ff79c6&labelColor=282a36"/>
  </a>
</p>

---

React Ripples Continued is a
[React](https://react.dev/) component library for creating ripples effects.

This repository contains

- the [npm package](https://www.npmjs.com/package/react-ripples-continued) ([view code](/package/))
- the [the documentaton](#documentation) ([view file](/README.md))
- the [the website that showcases the components](https://balazs-topg.github.io/react-ripples-continued/) ([view code](/src/))

# Contents

- [Documentation](#documentation)

  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
    - [Ripples Component](#ripples-component)
    - [RippleSurface Component](#ripplesurface-component)
  - [Internal Workings](#internal-workings)

- [How to contribute](#third-example)
- [License](#license)

# Documentation

## Installation

Run this [npm](https://docs.npmjs.com/) command in the directory of your react application

`npm i react-ripples-continued`

## Usage

This library includes two components: Ripples, and RippleSurface.

The Ripples component creates a ripple effect. Note that the parent container should have overflow: "hidden" and position: "relative" for proper functionality.

```javascript
import { Ripples } from "react-ripples-continued";

export default function Button() {
  return (
    <button
      style={{ overflow: "hidden", position: "relative" /* other styles */ }}
    >
      react ripples 🎉
      <Ripples />
    </button>
  );
}
```

RippleSurface Component
The RippleSurface component is a wrapper that simplifies implementing the ripple effect on various elements.

```javascript
import { RippleSurface } from "react-ripples-continued";

export default function CustomComponent() {
  return (
    <RippleSurface
      tag="button"
      rippleProps={
        {
          /* Ripple props */
        }
      }
    >
      react ripples 🎉
    </RippleSurface>
  );
}
```

## Props

### Ripples Component

All props are optional

#### `on`

- Type: `"click" | "mouseDown" | "clickAndMouseDown" | "hover"`
- Default: `"click"`

Determines the event that triggers the ripple effect.

#### `color`

- Type: `string`
- Default: `"white"`

Sets the color of the ripple effect.

#### `opacity`

- Type: `number`
- Default: `1`

Sets the opacity of the ripple effect. Accepts values between `0` (completely transparent) and `1` (completely opaque).

#### `blur`

- Type: `number`
- Default: `0`

Sets the blur amount for the ripple effect. The value is in `rem` units.

#### `duration`

- Type: `number`
- Default: `500`

Determines the duration of the ripple animation in milliseconds.

#### `fillAndHold`

- Type: `boolean`
- Default: `false`

When set to `true`, the ripple effect will fill the container and hold its position until a mouse up event occurs.

#### `optimize`

- Type: `boolean`
- Default: `false`

When set to `true`, the ripple elements will be removed from the DOM after the animation completes. This can be useful for performance optimization in scenarios with frequent ripple triggers, but it's set to false by default, since it can introduce some wierd behaviour.

#### `rippleElement`

- Type: `React.ReactNode`
- Default: `undefined`

When handed JSX it will display that JSX inside the ripple. Keep in mind that you probably want to lower the opacticy of the color prop or set `color=""` if you use `rippleElement`

The `rippleElement` prop can be used to do create some pretty cool stuff!

#### `zIndex`

- Type: `number`
- Default: `undefined`

### RippleSurface Component

All props are optional

#### `tag`

- Type: `React.ReactNode`
- Default: `HtmlTagName`

#### `children`

- Type: `React.ReactNode`
- Default: `ReactNode`

#### `disableDefaultStyling`

- Type: `boolean`
- Default: `false`

When set to true, default styling (overflow and position) is not applied.

#### `rippleFromBehind`

- Type: `boolean`
- Default: `false`

When set to true, the ripple effect appears behind the content.
Note: this will also wrap the "children" in a div

#### `forwardedRef`

- Type: `boolean`
- Default: `any`

Will forward the red

#### `onClick`, `onSubmit`, `onInput`

Event handlers

#### `rippleProps`

- Type: `RipplesInterface`

Props to be passed to the Ripples component.

### Internal Workings

#### `addRipple`

This internal function is responsible for creating and animating the ripple effect based on the provided parameters.

This function is not react specific (except ReactDOM.createRoot for prasing JSX/createElement calls to js DOM operations), so it could quite easily be adpated for use with solid, vue, svelte, angular, or any other framework.

## Server Side Rendering

This library was built for server side use in mind, primarily for [next](https://nextjs.org/). Both of the components are tagged with ["use clients"](https://react.dev/reference/react/use-client) to ensure it works.

## How to contribute

All types of contributions are welcome! Feel free to open issues, or pull requests or whatever you feel like.

## License

This library is [MIT licensed](/LICENSE).