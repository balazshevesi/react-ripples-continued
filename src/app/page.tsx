import Frontpage from "./Frontpage";
import MarkDown from "./MarkDown";

function Page() {
  return (
    <>
      <Frontpage />
      <div className="bg-slate-900">
        <div className=" mx-auto max-w-3xl p-8 text-white">
          <MarkDown />
        </div>
      </div>
    </>
  );
}

export default Page;
