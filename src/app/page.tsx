import { ArticleCard } from "@/components/article-card";
import { Layout } from "@/components/layout";
import { allPosts } from "content-collections";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Simon Wong 的非线性漫游 - 探索AI前沿与知识管理",
  description: "探索AI前沿技术、知识管理和学习方法的个人博客，分享深度解读与思考",
  keywords: ["AI", "人工智能", "知识管理", "技术前沿", "Simon Wong", "博客"],
  alternates: {
    canonical: "https://simonwong.blog",
  },
};

export default function Home() {
  // 按日期降序排序文章
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // 构建首页的结构化数据
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Simon Wong 的非线性漫游",
    "description": "探索AI前沿技术、知识管理和学习方法的个人博客，分享深度解读与思考",
    "url": "https://simonwong.blog",
    "author": {
      "@type": "Person",
      "name": "Simon Wong"
    }
  };

  // 构建博客列表的结构化数据
  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": sortedPosts.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.summary,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": "Simon Wong"
        },
        "url": `https://simonwong.blog/posts/${post._meta.path}`
      }
    }))
  };

  return (
    <Layout>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="blog-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />
      <div className="py-8 md:py-12">
        <div className="mx-auto mb-8 max-w-2xl space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">文章</h1>
          <p className="text-lg text-muted-foreground">
            探索知识管理和学习方法的最新思考
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <ArticleCard
              key={post._meta.path}
              article={post}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
