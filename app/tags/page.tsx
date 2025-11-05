import Link from 'next/link';
import { getAllTags } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '标签',
  description: '按标签浏览所有文章',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">标签</h1>

      {tags.length === 0 ? (
        <div className="text-center py-12 border border-gray-200 dark:border-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            还没有标签
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/tags/${tag.name}`}
              className="group p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  #{tag.name}
                </h2>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {tag.count} 篇
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
