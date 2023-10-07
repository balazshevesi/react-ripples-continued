import { Ripples } from "./components/Ripple";
function App() {
  return (
    <>
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="flex gap-2 flex-wrap ">
          <div
            className="overflow-hidden rounded-lg active:scale-95 transition-all"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(236 72 153)" }}
          >
            <button className="relative rounded-lg bg-gradient-to-b from-pink-600 to-pink-400 border-t-4 border-t-pink-400 border-b-4 border-b-pink-600 uppercase py-2 px-4 font-medium select-none text-white">
              React
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
              Ripples
              <Ripples fillAndHold={true} opacity={0.5} />
            </button>
          </div>
          <div
            className="overflow-hidden rounded-lg active:scale-95 transition-all"
            style={{ boxShadow: "0px 0.3rem 1rem rgb(14 165 233)" }}
          >
            <button className="relative rounded-lg bg-gradient-to-b from-sky-600 to-sky-400 bg-sky-500 border-t-4 border-t-sky-400 border-b-4 border-b-sky-600 uppercase py-2 px-4 font-medium select-none text-white">
              Improved
              <Ripples />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
