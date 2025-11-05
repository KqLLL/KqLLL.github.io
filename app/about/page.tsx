import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于',
  description: '关于我和这个博客',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">关于</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">关于我</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            你好！我是 KqLLL，一名热爱技术的开发者。
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            这个博客用于分享我在编程、技术学习过程中的经验和思考。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">关于本站</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            本博客使用以下技术构建：
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>框架：Next.js 15 (App Router)</li>
            <li>样式：Tailwind CSS</li>
            <li>内容：Markdown</li>
            <li>部署：GitHub Pages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">联系方式</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            如果你想联系我，可以通过以下方式：
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li>
              <a
                href="https://github.com/KqLLL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
