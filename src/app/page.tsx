import Frontpage from "./Frontpage";
import MarkDown from "./MarkDown";

console.log("wtesting");

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}

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
