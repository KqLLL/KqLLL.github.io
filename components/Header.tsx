import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
              KqLLL Blog
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                首页
              </Link>
              <Link href="/tags" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                标签
              </Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                关于
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
