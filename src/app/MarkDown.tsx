let ReactMarkdown: any, RehypeRaw: any;

async function loadImports() {
  if (!ReactMarkdown) ReactMarkdown = (await import("react-markdown")).default;
  if (!RehypeRaw) RehypeRaw = (await import("rehype-raw")).default;
}

loadImports();

async function MarkDown() {
  const getReadMe = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Balazs-topg/react-ripples-continued/main/README.md",
      );
      const text = await response.text();
      return text;
    } catch (error) {
      console.error("Failed to fetch the README:", error);
    }
  };

  const readMe = await getReadMe();

  return (
    <div className="prose mx-auto dark:prose-invert">
      <ReactMarkdown rehypePlugins={[RehypeRaw]}>{readMe}</ReactMarkdown>
    </div>
  );
}

export default MarkDown;
