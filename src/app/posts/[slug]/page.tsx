import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { AdSense } from "@/components/adsense";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
        <div className="space-y-4 pt-12">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-muted-foreground">
              发布于{" "}
              {format(new Date(post.date), "PPP", {
                locale: zhCN,
              })}
            </p>
          </div>
          <div
            className="prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-muted-foreground prose-a:underline hover:prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* 文章底部广告 */}
          <div className="my-6">
            <AdSense slot="article-bottom-ad" />
          </div>
        </div>
      </article>
    </Layout>
  );
} 