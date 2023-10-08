import ReactMarkdown from "react-markdown";

async function MarkDown() {
  let readMe = "";
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Balazs-topg/react-ripples-continued/main/README.md"
    );
    const text = await response.text();
    readMe = text;
  } catch (error) {
    console.error("Failed to fetch the README:", error);
  }

  return <ReactMarkdown>{readMe}</ReactMarkdown>;
}

export default MarkDown;
