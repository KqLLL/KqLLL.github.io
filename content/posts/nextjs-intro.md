---
title: Next.js 入门指南
date: 2025-11-04
description: 了解 Next.js 的基础知识和核心概念，开始你的 Next.js 之旅
tags: [Next.js, React, Web开发]
category: 教程
author: KqLLL
---

# Next.js 入门指南

Next.js 是一个强大的 React 框架，它提供了许多开箱即用的功能，让构建现代 Web 应用变得更加简单。

## 什么是 Next.js?

Next.js 是由 Vercel 开发的 React 框架，它提供了：

- **服务端渲染 (SSR)**
- **静态站点生成 (SSG)**
- **API 路由**
- **文件系统路由**
- **自动代码分割**
- **图片优化**

## 核心特性

### 1. 文件系统路由

Next.js 使用文件系统作为路由，非常直观：

```
app/
  page.tsx         → /
  about/
    page.tsx       → /about
  blog/
    [slug]/
      page.tsx     → /blog/:slug
```

### 2. App Router

Next.js 13 引入了 App Router，带来了许多新特性：

```typescript
// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

### 3. 服务端组件

React Server Components 允许在服务器上渲染组件：

```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* 使用数据 */}</main>
}
```

## 开始使用

安装 Next.js 非常简单：

```bash
# 使用 pnpm
pnpm create next-app@latest

# 使用 npm
npx create-next-app@latest

# 使用 yarn
yarn create next-app
```

## 部署

Next.js 应用可以轻松部署到：

- Vercel（推荐）
- Netlify
- GitHub Pages（静态导出）
- 任何支持 Node.js 的平台

## 总结

Next.js 是构建现代 Web 应用的优秀选择。它结合了最佳实践和开发者体验，让你能够专注于构建产品。

继续探索 Next.js 的文档，你会发现更多强大的功能！
