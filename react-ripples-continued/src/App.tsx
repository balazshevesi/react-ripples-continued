import { Ripples } from "./components/Ripple";
import background from "./imgs/checkerboard_pattern.svg";
function App() {
  return (
    <>
      <div className=" absolute bg-slate-900 w-full h-screen z-[-1]">
        <div className=" opacity-[0.02]">
          <div
            className={`absolute w-full h-screen z-[-1] mix-blend-multiply`}
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "repeat",
              backgroundSize: "30px",
            }}
          ></div>
        </div>
      </div>
      <div className=" h-screen w-full flex flex-col justify-center items-center">
        <h2 className="mb-8 text-slate-200 font-mono font-medium text-xl">
          React Ripples Continued
        </h2>
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
              <Ripples fillAndHold opacity={0.5} optimize />
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
        <h2 className="mt-10 text-slate-500 font-mono font-bold text-sm">
          Docs and NPM package comming soon...
        </h2>
      </div>
    </>
  );
}

export default App;
