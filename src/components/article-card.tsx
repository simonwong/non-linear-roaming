import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/posts/${article.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
    >
      {article.coverImage && (
        <div className="relative h-40 w-full overflow-hidden sm:h-48 lg:h-52">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:p-5 lg:p-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <h2 className="line-clamp-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-xl">
              {article.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground sm:text-base">
              {article.excerpt}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-4 text-sm text-muted-foreground">
          <time className="transition-colors group-hover:text-foreground">
            {new Date(article.date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
            阅读全文 →
          </span>
        </div>
      </div>
    </Link>
  );
} 