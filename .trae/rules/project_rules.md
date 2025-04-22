## 技术栈

- 框架：[nextjs@15](mdc:https:/context7.com/vercel/next.js/llms.txt?tokens=332924) & react@19
- 样式：[tailwindcss@4](mdc:https:/context7.com/tailwindlabs/tailwindcss.com/llms.txt?tokens=244367)
- markdown 文档处理：[Content Collections](mdc:https:/www.content-collections.dev/docs/quickstart/next)
- 包管理：pnpm
- 部署：Cloudeflare，使用 [open-next](mdc:https:/opennext.js.org/cloudflare) 进行兼容。

其他如果对应的版本不在你的知识库，请你使用 context7 mcp 进行查询。

## 文章引用

使用了 content-collections 进行文档处理，所以当你要获取文章列表，使用 `import { allPosts } from 'content-collections';` 引入。
