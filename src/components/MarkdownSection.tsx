import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownSectionProps {
  contentPath: string;
  className?: string;
}

export function MarkdownSection({ contentPath, className }: MarkdownSectionProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the path works correctly when hosted in a subdirectory
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
    const fullPath = contentPath.startsWith("/") 
      ? `${baseUrl}${contentPath}` 
      : `${baseUrl}/${contentPath}`;

    fetch(fullPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent(`### Error\nFailed to load content from \`${fullPath}\`. Please ensure the file exists in the \`/public\` folder.`);
        setLoading(false);
      });
  }, [contentPath]);

  if (loading) {
    return <div className="animate-pulse bg-gray-100 h-20 w-full rounded" />;
  }

  return (
    <div className={`markdown-body ${className}`}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
