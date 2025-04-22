import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simon Wong 的非线性漫游",
  description: "探索 AI 前沿，分享深度解读与思考，关注知识管理和学习方法的最新思考",
  keywords: ["AI", "人工智能", "知识管理", "学习方法", "技术前沿", "Simon Wong"],
  authors: [{ name: "Simon Wong" }],
  creator: "Simon Wong",
  publisher: "Simon Wong",
  robots: "index, follow",
  alternates: {
    canonical: "https://simonwong.blog",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://simonwong.blog",
    title: "Simon Wong 的非线性漫游",
    description: "探索 AI 前沿，分享深度解读与思考，关注知识管理和学习方法的最新思考",
    siteName: "Simon Wong 的非线性漫游",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Wong 的非线性漫游",
    description: "探索 AI 前沿，分享深度解读与思考，关注知识管理和学习方法的最新思考",
    creator: "@SimonWong",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }, { media: "(prefers-color-scheme: dark)", color: "black" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9519296294590454"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
