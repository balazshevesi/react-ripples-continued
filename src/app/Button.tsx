import React from "react";

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
