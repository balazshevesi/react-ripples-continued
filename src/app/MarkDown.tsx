let ReactMarkdown: any, RehypeRaw: any;

const importStuff = async () => {
  const markdownModule = await import("react-markdown");
  const rehypeRawModule = await import("rehype-raw");
  ReactMarkdown = markdownModule.default;
  RehypeRaw = rehypeRawModule.default;
};

importStuff();

async function MarkDown() {
  if (!ReactMarkdown || !RehypeRaw) {
    await importStuff();
  }

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

  // Ensure that ReactMarkdown and RehypeRaw are available
  if (!ReactMarkdown || !RehypeRaw) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown rehypePlugins={[RehypeRaw]}>{readMe}</ReactMarkdown>
    </div>
  );
}

export default MarkDown;
