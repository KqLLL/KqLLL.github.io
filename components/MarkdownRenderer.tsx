import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none
      prose-headings:font-bold
      prose-h1:text-4xl prose-h1:mb-4
      prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
      prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
      prose-p:text-base prose-p:leading-7
      prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
      prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800
      prose-code:px-1 prose-code:py-0.5 prose-code:rounded
      prose-pre:bg-gray-900 prose-pre:text-gray-100
      prose-blockquote:border-l-blue-600 dark:prose-blockquote:border-l-blue-400
      prose-img:rounded-lg prose-img:shadow-lg
      prose-ul:list-disc prose-ol:list-decimal
      prose-li:marker:text-blue-600 dark:prose-li:marker:text-blue-400
      prose-table:border prose-table:border-gray-300 dark:prose-table:border-gray-700
      prose-th:bg-gray-100 dark:prose-th:bg-gray-800
      prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
