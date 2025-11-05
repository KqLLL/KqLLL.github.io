import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  category?: string;
  author?: string;
  readingTime: string;
}

export interface Post extends PostMetadata {
  content: string;
}

// 确保文章目录存在
function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// 获取所有文章的 slug
export function getAllPostSlugs(): string[] {
  ensurePostsDirectory();

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''));
}

// 根据 slug 获取文章数据
export function getPostBySlug(slug: string): Post {
  ensurePostsDirectory();

  const realSlug = slug.replace(/\.mdx?$/, '');
  let fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug: realSlug,
    title: data.title || '',
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    category: data.category,
    author: data.author,
    readingTime: stats.text,
    content,
  };
}

// 获取所有文章
export function getAllPosts(): PostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      try {
        const post = getPostBySlug(slug);
        return {
          slug: post.slug,
          title: post.title,
          date: post.date,
          description: post.description,
          tags: post.tags,
          category: post.category,
          author: post.author,
          readingTime: post.readingTime,
        } as PostMetadata;
      } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        return null;
      }
    })
    .filter((post): post is PostMetadata => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

// 获取所有标签
export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// 根据标签获取文章
export function getPostsByTag(tag: string): PostMetadata[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}

// 获取所有分类
export function getAllCategories(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const categoryCount: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.category) {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    }
  });

  return Object.entries(categoryCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
