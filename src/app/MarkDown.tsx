//@ts-nocheck
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";

async function MarkDown() {
  const getReadMe = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Balazs-topg/react-ripples-continued/main/README.md",
        { cache: "no-store" },
      );
      const text = await response.text();
      return text;
    } catch (error) {
      console.error("Failed to fetch the README:", error);
    }
  };
  const readMe = await getReadMe();

  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readMe}</ReactMarkdown>
    </div>
  );
}

export default MarkDown;
