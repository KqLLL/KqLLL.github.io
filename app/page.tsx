import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的博客</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          分享技术、编程和思考
        </p>
        <SearchBar posts={posts} />
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 border border-gray-200 dark:border-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            还没有文章，敬请期待...
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            在 <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">content/posts/</code> 目录下创建 Markdown 文件开始写作
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
