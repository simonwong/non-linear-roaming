import { Layout } from "@/components/layout";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面未找到 | Simon Wong 的非线性漫游",
  description: "抱歉，您访问的页面不存在。请返回首页继续浏览。",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground">抱歉，页面不存在</p>
        <Link
          href="/"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          返回首页
        </Link>
      </div>
    </Layout>
  );
}