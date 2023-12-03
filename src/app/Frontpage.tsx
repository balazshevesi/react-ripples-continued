"use client";

import React from "react";

import { Ripples } from "./components/Ripple";
import { json } from "stream/consumers";

function copyToClipboard(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (err) {
    console.error("Failed to copy text to clipboard:", err);
  }

  document.body.removeChild(textarea);
  return copied;
}

function Frontpage() {
  return (
    <>
      <div className=" absolute z-[-1] h-screen w-full bg-gradient-to-t from-slate-900 to-indigo-950"></div>
      <div className=" flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-2 p-4">
          <div
            className="overflow-hidden rounded-lg transition-all active:scale-95"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(236 72 153)" }}
          >
            <button className="relative select-none rounded-lg border-b-4 border-t-4 border-b-pink-600 border-t-pink-400 bg-gradient-to-b from-pink-600 to-pink-400 px-4 py-2 font-medium uppercase text-white">
              <p
                style={{
                  filter: "drop-shadow(0px 2px 2px rgb(255, 255, 255, 0.5))",
                }}
              >
                React
              </p>
              <Ripples
                color="white"
                opacity={0.5}
                blur={0.4}
                duration={700}
                on="clickAndMouseDown"
              />
            </button>
          </div>
          <div
            className="overflow-hidden rounded-lg transition-all active:scale-95"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(16 185 129)" }}
          >
            <button className="relative select-none rounded-lg border-b-4 border-t-4 border-b-emerald-600 border-t-emerald-400 bg-gradient-to-b from-emerald-600 to-emerald-400 px-4 py-2 font-medium uppercase text-white">
              <p
                style={{
                  filter: "drop-shadow(0px 2px 2px rgb(255, 255, 255, 0.5))",
                }}
              >
                Ripples
              </p>
              <Ripples fillAndHold opacity={0.5} />
            </button>
          </div>
          <div
            className="overflow-hidden rounded-lg transition-all active:scale-95"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(14 165 233)" }}
          >
            <button className="relative select-none rounded-lg border-b-4 border-t-4 border-b-sky-600 border-t-sky-400 bg-sky-500 bg-gradient-to-b from-sky-600 to-sky-400 px-4 py-2 font-medium uppercase text-white">
              <p
                style={{
                  filter: "drop-shadow(0px 2px 2px rgb(255, 255, 255, 0.5))",
                }}
              >
                Continued
              </p>
              <Ripples duration={3000} on="hover" />
            </button>
          </div>
        </div>
        <h2 className="mt-10 font-mono text-sm font-bold text-slate-500">
          Built By Balazs Hevesi
        </h2>
        <div className=" px-4">
          <h2
            onClick={() => {
              copyToClipboard("npm install react-ripples-continued");
            }}
            className="relative mt-10 overflow-hidden rounded-xl bg-slate-700 px-6 py-4 font-mono text-sm text-white shadow-xl"
          >
            <div className="pointer-events-none relative z-10">
              <span className="text-[#50fa7b]">npm</span>{" "}
              <span className="text-[#bd93f9]">install</span>{" "}
              react-ripples-continued
            </div>
            <Ripples
              color=""
              rippleElement={
                <div className=" relative flex select-none items-center justify-center">
                  <div className=" font-sans text-xs">copied ✅</div>
                  <div className=" absolute h-16 w-16 rounded-full border-4 border-white blur"></div>
                </div>
              }
            />
          </h2>
        </div>
      </div>
    </>
  );
}

export default Frontpage;
