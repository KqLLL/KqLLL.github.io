import Link from 'next/link';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import type { PostMetadata } from '@/lib/posts';

interface PostCardProps {
  post: PostMetadata;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
      </Link>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
        <time dateTime={post.date}>
          {format(new Date(post.date), 'PPP', { locale: zhCN })}
        </time>
        <span>·</span>
        <span>{post.readingTime}</span>
        {post.category && (
          <>
            <span>·</span>
            <span className="text-blue-600 dark:text-blue-400">{post.category}</span>
          </>
        )}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
        {post.description}
      </p>

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
    </article>
  );
}
