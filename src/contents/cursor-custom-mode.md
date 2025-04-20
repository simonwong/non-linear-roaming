---
title: "Cursor 现在可以定制适合你工作流程的自定义模式"
summary: "自定义模式允许你根据工作流程需求，组合 Tools 和 propmts  来创建新模式。这些模式是对内置的 Agent 和 Ask 模式的补充。"
date: '2025-04-03'
tags: ['Cursor']
coverImage: "https://file.simonwong.cn/blog/202504/307df232559963ff484fb628b4574a03.png"
---

自定义模式允许你根据工作流程需求，组合 Tools 和 propmts  来创建新模式。这些模式是对内置的 Agent 和 Ask 模式的补充。

有了这项功能，你可以快速的在 **PRD 生成、代码重构、项目架构** 等等**多种工作模式快速切换**！

![](https://file.simonwong.cn/blog/202504/307df232559963ff484fb628b4574a03.png)

## 配置步骤

### 开启这个功能

目前还处于 Beta 测试中，你需要 `Settings` → `Features` → `Chat` → `Custom modes` 中开启这个选项。

![](https://file.simonwong.cn/blog/202504/55fd35bdea0c6daff25e36938e9bf36b.png)

然后你就可以在对话模式选择中看到这个 `Add custom mode`。你也可以看到我这里比你多了一个 PRD 和 Architect 两种模式。

![](https://file.simonwong.cn/blog/202504/5d115b4e9e26dd486b37568b96ea268e.png)

随后你可以定制

- 使用哪种模型，或者自动切换模型
- 是否开启深度思考
- 启用哪些内置的 Tools
- 是否自动允许、自动修复错误
- 专属于这个模式的提示词

## 社区共享的自定义模式

如果你开始还不是很熟悉，可以直接使用社区创建和共享的自定义模式。

网址在这里：<https://playbooks.com/modes>

- **Plan mode**：生成一个全面的项目实施计划文档，基于 PRD 构建您的应用程序或功能。
- **Audit mode**：对您的应用程序进行审核，以发现潜在的安全漏洞，并生成报告帮助您重构和修复这些问题。
- **Vibe Coding mode**：帮助 Vibe Coder 仅通过与 AI 的对话，构建更安全且易于维护的应用程序
- **PRD mode**: 为您的项目创建一份全面的产品需求文档（PRD），供您在制定实施计划时参考。
- **Refactor mode**：专注于重构和改进现有代码，不添加新功能或读取额外文件。
- **Teach mode**：鼓励提供详细解释和频繁提出澄清性问题，但不自动应用编辑或运行 Tools。
- **Content Writer**：将 Cursor 和 Claude 3.7 打造成强大的内容研究与写作工具。
- **Architect mode**：使用 o3-mini 全面规划项目或功能，为其他 Agent 构建做好准备。

可以看的出来，目前社区提供的自定义模式，已经能**涵盖绝大部分开发场景**，还能**提升写作的场景**。非常值得用起来！
