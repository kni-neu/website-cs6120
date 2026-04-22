import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getDynamicBasename } from "../utils/getBasename";

interface MarkdownSectionProps {
  contentPath: string;
  className?: string;
}

export function MarkdownSection({ contentPath, className }: MarkdownSectionProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    
    setLoading(true);
    // For HashRouter sites, relative paths (without leading slash) are most robust
    // because they resolve relative to the current pathname (e.g. /cs6120/)
    const relativePath = contentPath.startsWith("/") 
      ? contentPath.substring(1) 
      : contentPath;

    fetch(relativePath, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (isMounted) {
          setContent(text);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        
        console.error("Error loading markdown:", err);
        // Fallback to absolute path detection if relative fails
        const baseUrl = getDynamicBasename();
        const fullPath = contentPath.startsWith("/") 
          ? `${baseUrl}${contentPath}` 
          : `${baseUrl}/${contentPath}`;
        
        if (fullPath !== relativePath) {
          fetch(fullPath, { signal: controller.signal })
            .then(res => res.text())
            .then(text => {
              if (isMounted) {
                setContent(text);
                setLoading(false);
              }
            })
            .catch((innerErr) => {
              if (innerErr.name === 'AbortError') return;
              if (isMounted) {
                setContent(`### Error\nFailed to load content from \`${relativePath}\`.\n\n**Debug Info:**\n- **Base detected:** \`${baseUrl || "(root)"}\`\n- **Full Path attempted:** \`${fullPath}\`\n- **Current URL:** \`${window.location.href}\`\n\nPlease ensure the content file exists in your \`/public\` folder.`);
                setLoading(false);
              }
            });
        } else {
          if (isMounted) {
            setContent(`### Error\nFailed to load content from \`${relativePath}\`.\n\n**Debug Info:**\n- **Current URL:** \`${window.location.href}\`\n\nPlease ensure the content file exists in your \`/public\` folder.`);
            setLoading(false);
          }
        }
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [contentPath]);

  if (loading) {
    return <div className="animate-pulse bg-gray-100 h-20 w-full rounded" />;
  }

  return (
    <div className={`markdown-body ${className}`}>
      <Markdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          pre({ children }) {
            return <>{children}</>;
          },
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !className;
            return !isInline && match ? (
              <div className="neo-brutalism my-6 overflow-hidden w-full">
                <SyntaxHighlighter
                  style={oneLight}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    backgroundColor: '#f9f9f9',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    fontFamily: '"JetBrains Mono", monospace',
                    border: 'none',
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'inherit',
                      padding: 0,
                      margin: 0,
                    }
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
