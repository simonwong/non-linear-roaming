import { ArticleCard } from "@/components/article-card";
import { Layout } from "@/components/layout";
import { allPosts } from "content-collections";

export default function Home() {
  // 按日期降序排序文章
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
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
              article={{
                id: post._meta.path,
                title: post.title,
                excerpt: post.summary,
                date: post.date,
                tags: post.tags || [],
                coverImage: post.coverImage || "/images/default-cover.jpg",
                isSticky: false,
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
