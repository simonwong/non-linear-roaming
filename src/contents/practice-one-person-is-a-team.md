---
title: "【实践】一个人就是一个团队-Cursor AI 半自动开发 vibe coding"
summary: "这是一份个人利用 AI 开发应用的实践分享，利用 AI 扮演不同的团队角色，一个人完成一个项目。"
date: '2025-04-12'
tags: ['Practice', 'Cursor']
coverImage: "https://file.simonwong.cn/blog/202504/d32609f28db94d346f53f58310d0207c.png"
---

这是一份个人利用 AI 开发应用的实践分享，利用 AI 扮演不同的团队角色，一个人完成一个项目。

## 开发思路

我们首先讲讲利用 Cursor 进行 AI 半自动开发的思路。

*PS：为啥不能全自动，全自动可以直接使用 v0、bolt.new 等一站式开发工具，但也意味着最终效果可能相去甚远，半自动意味着每一个步骤都可以人工干预进行调整到理想状态*

### 利用 Cursor 的自定义模式定制不同的角色

如何配置 Cursor 的自定义模式可以参考这篇文章 【占位】

- **PRD mod**：让 AI 生成需求文档
- **Architect mode**：让 AI 生成项目架构文档
- **Vibe Coding mode**：跟 AI 进行对话编程，半自动开发全在这一个步骤
- **Audit mode**：对代码进行审核，修复潜在的问题

然后我们使用这些模式一步一步分完成。

### 开发流程

#### PRD 阶段

1. 提出需求
2. AI 生成文档
3. 查看文档提出问题改进
4. AI 改进文档
5. 重复 3、4 步骤，直到你想要的结果

#### Architect 阶段（可选）

你也可以生成 Cursor Rules 来规范项目架构

1. 可以列出自己想要的技术栈，让 AI 查看 PRD
2. AI 根据 PRD 和你的要求生成架构文档
3. 查看文档提出问题改进
4. AI 改进文档
5. 重复 3、4 步骤，直到你想要的结果

#### Vibe Coding 阶段

1. 跟 AI 对话根据架构文档和 PRD 开始初始化项目
2. AI 自动初始化项目，并会告诉你接下来有哪些事情可以做
3. 选择一件事情告诉AI
4. 然后 AI 就会开始开发代码

   PS：你需要给 AI 自动执行命令行、自动修改文档、自动修复错误、配合浏览器 MCP 查看报错信息等等权限，就能全自动处理问题了
5. 重复 3、4 步骤，直到事情全部完成

#### 验收收尾阶段

1. 你可以用 Audit mode 检查代码
2. 或者直接手动验收产品，有问题继续 Vibe Coding
3. 有新的需求就重新走 PRD -> Architect -> Vibe Coding -> 验收流程
4. 最后发布上线

## Cursor 配置

### 设定自定义模式

各种模式的配置可以参考这篇文章 【占位】，配置来源：<https://playbooks.com/modes。你也可以参考他们进行修改。>

记得需要先开启允许自定义模式。

### 自动运行命令行

接下来是运行 AI 自动执行命令行的配置（比如初始化项目、安装依赖、启动工程他都会自己完成），你可以配置指定的命令行工具（或者你得确保默认命令行支持 node 等环境），以 ZSH 为例，

配置添加这个配置： `"terminal.integrated.defaultProfile.osx": "zsh"`

### browsermcp 配置

利用 [browsermcp](https://browsermcp.io/) 把页面调试信息输入给 AI

网址为：<https://browsermcp.io/>

MCP 配置如下

```json
{
  "mcpServers": {
    "browsermcp": {
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"]
    }
  }
}

```

你还需要安装这个 Browser MCP 的浏览器插件，并在插件中点击*连接*。

### Cursor Rules

如果你希望用一些新的技术栈（指定技术栈文档）、或者特定的项目要求、你可以自定义 Rules。你也可以参考 <https://cursor.directory/rules> ，这个网址提供了大量的 通用 Rules。

你还可以指定项目的规范要求，提升代码生成质量。

一切准备就绪，你可以开一个新的目录开发一个新的项目啦！

下面是实践记录

## 实践记录

### 生成 PRD

我首选输入了下面这样提示词：

```propmts
为我设计一个账本应用，我的需求是能够记录我不同项目的支出和收入，每有一个项目可以新增一个账本，然后记录这个项目的支出和收入。也可能是装修账单记录等等，总之他的场景是适用于大额的特定的收支，而不是日常琐碎的记录。

为了简化这个项目，只要前端工程即可，数据直接存浏览器，可以考虑用 indexdb 存储数据，不需要后端不需要远程数据库。

我希望这个工具交互丝滑流畅，界面优雅，用一些渐变填充重要的功能入口。
```

下面是 PRD 生成的部分示例：

![image-20250412171003725](https://file.simonwong.cn/blog/202504/8e38cb8889d02f4fcb3d6eafbe7f88c6.png)

他不仅定义了项目目标、还定义了**需求优先级、用户体验、成功指标、用户故事** 等等。考虑的非常全面，你可以根据具体情况修稿。

### 生成技术架构

你可以直接让他根据 PRD 技术架构，当然如果你有技术偏好也可以指定。

下面是我的提示词，指定了技术栈要求。

```prompts
@prd.md 根据这个 PRD 为我生成一份架构，使用 react 、vite、tailwindcss 创建项目，组件使用 shadcn ，管理包使用 pnpm 。数据存储到浏览器的 indexdb，你可以找一个流行的库来处理。
```

下面是我的问答。他回复到这个项目的完成度信心可以达到 100%。并且列出了 需求分析、系统上下文分析、架构设计、技术规格、接口设计 等等。

![image-20250412175430871](https://file.simonwong.cn/blog/202504/f6b9bfc6daaa7e62ba56e444ce4e9f79.png)

我根据这份架构设计抽离成了一份 rule 放到 `.cursor/rules/mian.mdc` 中。Rule Type 为 Always。后续可以随着迭代更新这个规则。

```md

## 需求

见 @prd.md

## 系统上下文与技术选型
- 本项目为纯前端应用，不依赖后端服务器，所有数据存储均在用户浏览器中。
- 核心技术栈：
  - 构建工具：Vite
  - 前端框架：React
  - UI 框架：Tailwind CSS、shadcn（组件库）
  - 数据存储：IndexedDB（建议使用 Dexie.js 进行封装）
  - 路由管理：React Router Dom（用于多页面/视图路由）
  - 状态管理：React Context 及自定义 Hooks
- 外部系统：
  - 浏览器 API（IndexedDB、文件系统 API、相机 API、PWA 支持等）

## 架构设计：功能特性组织
文件结构按功能划分，每个文件夹包含独立的页面、组件、数据访问和状态管理逻辑。
示例结构：
├── src
│   ├── features
│   │   ├── ledger // 帐本相关功能，包含 ledger list、ledger detail 等
│   │   ├── transaction // 交易记录的添加、编辑、删除等
│   │   ├── dashboard // 数据可视化及统计图表
│   ├── components // 公共 UI 组件，可基于 shadcn 组件扩展
│   ├── hooks // 自定义 Hooks 层，如 useLedger、useTransaction
│   ├── services // 数据服务层，封装 Dexie.js 操作
│   ├── context // 全局状态管理，如 LedgerContext
│   └── App.jsx // 主入口，配置路由等

## 技术规格

### 技术选型
- 框架与工具：React, Vite, Tailwind CSS, shadcn 组件库
- 开发工具：pnpm 作为包管理工具
- 路由管理：react-router-dom
- 状态管理：React Context + 自定义 Hooks 或与 React Query 结合使用
- 数据存储：Dexie.js（封装 IndexedDB 操作）
- 数据可视化：可选 Chart.js 或 Recharts（根据项目需求定制）

### 开发阶段
阶段 1：项目基础搭建（使用 Vite 创建项目、pnpm 配置、Tailwind CSS 和 shadcn 组件集成）
阶段 2：实现账本基本功能（账本创建、数据录入、基本页面路由）
阶段 3：完成交易记录的 CRUD 操作以及表单处理
阶段 4：整合 IndexedDB 数据服务（Dexie.js），确保数据持久化、备份和恢复功能
阶段 5：构建数据可视化页面，实现图表展示和动画效果
阶段 6：完善用户体验（动画过渡、响应式布局、渐变色设计和 PWA 配置）

### 接口设计
数据层 API：
函数如 createLedger(data), getLedger(id), updateLedger(id, data), deleteLedger(id)
交易相关：createTransaction(ledgerId, transactionData), getTransactions(ledgerId, query), updateTransaction, deleteTransaction
UI 与状态层交互均通过 Context 或自定义 Hooks 调用上述 API。

### 安全和离线支持
数据仅存储在浏览器内，隔离隐私
可结合 PWA 配置支持离线访问和更新
UI 操作应考虑乐观更新与错误回滚机制
```

### 开始开发-初始化项目

根据他是提示，我们切换到 Vibe Coding mode，并回复继续，他就开始帮我们初始化项目了。命令也是自动执行的。

这是我的 prompts

```prompts
继续，我希望工程的根目录是当前目录，如果你使用 create vite 模板创建了一个项目模板，需要先将项目全部迁移到当前根目录
```

![image-20250412184833071](https://file.simonwong.cn/blog/202504/84bed773d460d109597a4e5cf0fbc939.png)

经过 AI 一顿操作，运行后报错了，我发现时 tailwindcss 使用错误，现在是 4.x 版本，用法不一样了。于是提醒它并给了最新的文档。他就更新了相关插件并修改了配置。

![image-20250412202038357](https://file.simonwong.cn/blog/202504/d6121dabd8b447a65b8cf90f87462dec.png)

PS：我们可以使用 git 提交一个初始化的 commit，这样后续代码改动就能直观的看到，也能方便会退。后续每次增加一个功能，都可以提交一个 commit。

### 开始开发 - 问题排查

刚开始并没有那么顺利，上来就报错了，为了能让它知道浏览器的报错内容，我们打开 Browser MCP。

![image-20250412203042587](https://file.simonwong.cn/blog/202504/710bbbe1134b3b0915c6499172f116dc.png)

点击连接即可。

![image-20250412203126149](https://file.simonwong.cn/blog/202504/e5d3877c41b4eae2c6cf0c63560732c2.png)

浏览器就会出现一个调试的模式。

让他 一顿排查，终于可以运行了。

![image-20250412203956045](https://file.simonwong.cn/blog/202504/4a2acbfb251aff2ba4f5fe0b84f09729.png)

### 继续迭代

项目已经初始化完成，后面还有不少功能需要迭代，样式也需要优化，这里就不继续演示了。你可以问 AI 接下来可以做哪些事情，也可以直接告诉他做哪些事情，一步一步 Vide Coding ，完成我们的项目。

## 结语

我们开头提到的思路其实非常简单，我们还可以再加上 Plan mode 进行项目规划，利用  Refactor mode 进行局部模块重构。

还有我们可以使用 Claude 模型生成一个基于 HTML 产品设计，交给 figma 输出，调整产品设计，并截图给 AI，让 AI 根据截图进行样式优化。

尝试快乐的 Vibe Coding 吧！
