# KqLLL Blog

个人技术博客，基于 Next.js 和 GitHub Pages 构建。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **包管理**: pnpm
- **样式**: Tailwind CSS
- **内容**: Markdown
- **部署**: GitHub Pages
- **评论**: Giscus (GitHub Discussions)

## 功能特性

- ✅ Markdown/MDX 文章支持
- ✅ 代码高亮
- ✅ 标签和分类系统
- ✅ 全文搜索
- ✅ 评论系统 (Giscus)
- ✅ 深色模式
- ✅ SEO 优化
- ✅ RSS Feed
- ✅ 响应式设计

## 开始使用

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

访问 `http://localhost:3000` 查看博客。

### 构建

```bash
pnpm build
```

构建后的静态文件会输出到 `out` 目录。

## 写作指南

### 创建新文章

在 `content/posts/` 目录下创建一个新的 `.md` 文件：

```markdown
---
title: 文章标题
date: 2025-11-05
description: 文章描述
tags: [标签1, 标签2]
category: 分类名称
author: 作者名
---

# 文章内容

这里是文章正文...
```

### 文章元数据说明

- `title`: 文章标题（必填）
- `date`: 发布日期（必填）
- `description`: 文章描述（必填）
- `tags`: 标签数组（可选）
- `category`: 分类（可选）
- `author`: 作者（可选）

## 配置 Giscus 评论

1. 在 GitHub 仓库设置中启用 Discussions
2. 访问 [Giscus 官网](https://giscus.app/zh-CN) 获取配置
3. 更新 `components/Comments.tsx` 中的 `repo`、`repoId` 和 `categoryId`

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

### 配置步骤

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择 Source 为 "GitHub Actions"
3. 推送代码到 `main` 分支会自动触发部署

### 手动部署

```bash
pnpm build
# 将 out 目录的内容部署到 GitHub Pages
```

## 项目结构

```
.
├── app/                    # Next.js 应用目录
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── posts/             # 文章页面
│   ├── tags/              # 标签页面
│   └── about/             # 关于页面
├── components/            # React 组件
├── content/              # Markdown 文章
│   └── posts/
├── lib/                  # 工具函数
├── public/              # 静态资源
├── .github/workflows/   # GitHub Actions
└── README.md
```

## 开发

### 添加新功能

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## License

MIT License

## 联系方式

- GitHub: [@KqLLL](https://github.com/KqLLL)
- 博客: [https://kqlll.github.io](https://kqlll.github.io)