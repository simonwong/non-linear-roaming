import { MetadataRoute } from 'next';
import { allPosts } from 'content-collections';

export default function sitemap(): MetadataRoute.Sitemap {
  // 固定页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://simonwong.blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://simonwong.blog/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
  
  // 文章页面
  const postPages: MetadataRoute.Sitemap = allPosts.map(post => {
    return {
      url: `https://simonwong.blog/posts/${post._meta.path}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });
  
  // 合并所有页面
  return [...staticPages, ...postPages];
}