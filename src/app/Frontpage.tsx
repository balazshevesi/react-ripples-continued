import React from "react";
import { Ripples } from "./components/Ripple";
import ReactMarkdown from "react-markdown";
import { json } from "stream/consumers";

function Frontpage() {
  return (
    <>
      <div className=" absolute bg-gradient-to-t from-slate-900 to-indigo-950 w-full h-screen z-[-1]"></div>
      <div className=" h-screen w-full flex flex-col justify-center items-center">
        <div className="flex gap-2 flex-wrap ">
          <div
            className="overflow-hidden rounded-lg active:scale-95 transition-all"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(236 72 153)" }}
          >
            <button className="relative rounded-lg bg-gradient-to-b from-pink-600 to-pink-400 border-t-4 border-t-pink-400 border-b-4 border-b-pink-600 uppercase py-2 px-4 font-medium select-none text-white">
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
            className="overflow-hidden rounded-lg active:scale-95 transition-all"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(16 185 129)" }}
          >
            <button className="relative rounded-lg bg-gradient-to-b from-emerald-600 to-emerald-400 border-t-4 border-t-emerald-400 border-b-4 border-b-emerald-600 uppercase py-2 px-4 font-medium select-none text-white">
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
            className="overflow-hidden rounded-lg active:scale-95 transition-all"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(14 165 233)" }}
          >
            <button className="relative rounded-lg bg-gradient-to-b from-sky-600 to-sky-400 bg-sky-500 border-t-4 border-t-sky-400 border-b-4 border-b-sky-600 uppercase py-2 px-4 font-medium select-none text-white">
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
        <h2 className="mt-10 text-slate-500 font-mono font-bold text-sm">
          Built By Balazs Hevesi
        </h2>
        <h2
          // onClick={() => {
          //   copyToClipboard("npm install react-ripples-continued");
          // }}
          className="mt-10 relative overflow-hidden text-white font-mono text-sm shadow-xl bg-slate-700 px-10 py-4 rounded-xl"
        >
          <div className=" z-10 relative pointer-events-none">
            <span className="text-[#50fa7b]">npm</span>{" "}
            <span className="text-[#bd93f9]">install</span>{" "}
            react-ripples-continued
          </div>
          <Ripples
            color=""
            rippleElement={
              <div className=" select-none flex items-center justify-center relative">
                <div className=" text-xs font-sans">copied ✅</div>
                <div className=" blur absolute w-16 h-16 rounded-full border-4 border-white"></div>
              </div>
            }
          />
        </h2>
      </div>
    </>
  );
}

export default Frontpage;
