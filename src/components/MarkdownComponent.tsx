import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownComponentProps {
  content: string;
}

const MarkdownComponent: React.FC<MarkdownComponentProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <h1 className="text-xl font-bold" {...props} />,
        h2: (props) => <h2 className="text-lg font-bold" {...props} />,
        h3: (props) => <h3 className="text-md" {...props} />,
        h4: (props) => <h4 className="text-sm" {...props} />,
        h5: (props) => <h5 className="text-xs" {...props} />,
        p: (props) => <p className="text-base" {...props} />,
        a: (props) => <a className="text-blue-500 hover:underline" {...props} />,
        li: (props) => <li className="list-disc" {...props} />,
        ul: (props) => <ul className="list-disc" {...props} />,
        ol: (props) => <ol className="list-decimal" {...props} />,
        code: (props) => <code className="bg-white p-1 rounded-md" {...props} />,
        pre: (props) => <pre className="bg-white shadow-shadow p-4 rounded-md overflow-auto my-3" {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;