import { Layout } from "@/components/layout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-12">
          {/* 个人简介部分 */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-4xl font-bold tracking-tight sm:text-5xl">
                Simon Wong
              </h1>
              <p className="text-xl font-medium text-muted-foreground">
                全栈工程师 / AI 探索者
              </p>
            </div>
          </div>

          {/* 关于我 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">关于我</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                你好！我是 Simon Wong，一名热衷于探索前沿技术的全栈工程师。我对 AI
                技术充满热情，尤其关注 AI 如何改变我们的工作方式和学习方式。
              </p>
              <p className="leading-relaxed">
                跟随我的思绪，在 AI 前沿、时事热点与不期而遇的灵感间非线性漫游。这里有技术洞察，也有深度思考，期待与你一同探索。
              </p>
            </div>
          </section>

          {/* 联系方式 */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">联系我</h2>
            <div className="flex flex-col items-center space-y-8">
              {/* 社交媒体链接 */}
              <div className="flex space-x-6">
                <a
                  href="https://github.com/simonwong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://x.com/wsj_simonwong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">Twitter</span>
                </a>
                <a
                  href="https://www.zhihu.com/people/wsj-simon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 01-.112 3.797h2.712c.388.023.393 1.251.393 1.266H9.183a9.223 9.223 0 01-.408 2.102l.757-.604c.452.456 1.512 1.712 1.906 2.177.473.681.063 2.081.063 2.081l-2.794-3.382c-.653 2.518-1.845 3.607-1.845 3.607-.523.468-1.58.82-2.64.516 2.218-1.73 3.44-3.917 3.667-6.497H4.491c0-.015.197-1.243.806-1.266h2.71c.024-.32.086-3.254.086-3.797H6.598c-.136.406-.158.447-.268.753-.594 1.095-1.603 1.122-1.907 1.155.906-1.821 1.416-3.6 1.591-4.064.425-1.124 1.671-1.125 1.671-1.125zM13.078 6h6.377v11.33h-2.573l-2.184 1.373-.401-1.373h-1.219zm1.313 1.219v8.86h.623l.263.937 1.455-.938h1.456v-8.86z"/>
                  </svg>
                  <span className="font-medium">知乎</span>
                </a>
              </div>
              
              {/* 微信公众号 */}
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-base font-medium text-muted-foreground">
                    关注我的微信公众号获取最新动态
                  </p>
                  <div className="relative h-48 w-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/wechat-qrcode.jpg"
                      alt="微信公众号二维码"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}