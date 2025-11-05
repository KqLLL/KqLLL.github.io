'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comments() {
  const { theme } = useTheme();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <Giscus
        repo="KqLLL/KqLLL.github.io"
        repoId="YOUR_REPO_ID" // 需要在 GitHub 上启用 Discussions 并获取 repo ID
        category="General"
        categoryId="YOUR_CATEGORY_ID" // 需要从 GitHub 获取
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
