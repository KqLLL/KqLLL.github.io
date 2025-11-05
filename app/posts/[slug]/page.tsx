import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { Comments } from '@/components/Comments';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      keywords: post.tags,
      authors: post.author ? [{ name: post.author }] : undefined,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        tags: post.tags,
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'PPP', { locale: zhCN })}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
          {post.author && (
            <>
              <span>·</span>
              <span>{post.author}</span>
            </>
          )}
          {post.category && (
            <>
              <span>·</span>
              <span className="text-blue-600 dark:text-blue-400">{post.category}</span>
            </>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="mb-12">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Comments */}
      <Comments />

      {/* Back to home */}
      <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← 返回首页
        </Link>
      </div>
    </article>
  );
}
