---
title: "AI 前沿精选 #00: 智能体的五个级别"
summary: "AI Agent 不仅能生成文本，还能做出决策、调用功能，甚至运行自主工作流。该图示阐释  AI Agent 能力的五个级别——从简单响应者到完全自主的智能体。"
date: '2025-03-31'
tags: ['AI Weekly']
coverImage: "https://file.simonwong.cn/blog/202504/10b736a098691e0a805144ceb17dc480.png"
---

## AI 智能体的五个级别

AI Agent 不仅能生成文本，还能做出决策、调用功能，甚至运行自主工作流。该图示阐释  AI Agent 能力的五个级别——从简单响应者到完全自主的智能体。

### 一级：Basic responder

![](https://file.simonwong.cn/blog/202504/496527dc3e1740f4004dfb6c4b9ffe36.gif)

- 人类主导整个流程。

- 大语言模型只是一个通用应答器，接收输入并生成输出。它对程序流程几乎没有控制权。

### 二级：Router pattern

![](https://file.simonwong.cn/blog/202504/a549f4c7ab7abb767b33fd8eb4a64ada.gif)

- 人类定义流程中存在的路径/功能。

- 大语言模型对可选择的函数或路径做出基本决策。

### 三级：Tool calling

![](https://file.simonwong.cn/blog/202504/f8ef4c24f3af5893af0d3627eea395d7.gif)

- 人类定义了一组工具供大语言模型（LLM）调用以完成任务。

- 大语言模型自主决定工具的使用时机及执行参数。

### 四级：Multi-agent pattern

![](https://file.simonwong.cn/blog/202504/9b78521dcda3eba997760a93a77e6006.gif)

管理者 Agent 负责协调多个子 Agent ，并通过迭代方式决定后续步骤。

- 人类负责设定 Agent 间的层级结构、角色分工及工具配置等。

- 大语言模型掌控执行流程，决定下一步操作。

### 五级：Autonomous pattern

![](https://file.simonwong.cn/blog/202504/40a06ea1344677a32948b1682bdd7cdc.gif)

*内容和图片来自：Daily Dose of Data Science*

最先进的模式，即大型语言模型（LLM）能够独立生成并执行新代码，实质上扮演着独立AI开发者的角色。

## 从头开始构建大型语言模型

[原文链接](https://brettgfitzgerald.com/posts/build-a-large-language-model/)

作者讲述了从头开始构建 LLM 的历程，分享了关于分词、训练以及掌握人工智能基础学习过程中的关键见解。

## Model Context Protocol（模型上下文协议）

[原文链接](https://modelcontextprotocol.io/introduction)

Model Context Protocol（简称 MCP）是一种开放协议，它标准化了应用程序向 LLM 提供上下文的方式。

MCP 帮助您在大型语言模型（LLMs）之上构建代理和复杂的工作流程。LLMs 经常需要与数据和工具集成，而 MCP 提供了以下功能：

- 一系列不断增长的内置集成，您的 LLM 可以直接接入
- 在不同 LLM 提供商和供应商之间灵活切换的能力
- 在您的基础架构中保护数据的最佳实践

当然 MCP 并没有那么方便的使用，这里有一个对 [MCP 的吐槽](https://taoofmac.com/space/notes/2025/03/22/1900)
还有我写的 MCP 入门文章 [初识 MCP：连接 AI 的标准协议](https://mp.weixin.qq.com/s/zigJ6FUfl6Lp5tmO7jwxeg)

## 如何使用LLMs来帮助我编写代码

[原文链接](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)

使用AI协助开发代码并没有想象中的那么简单，这是 Simon Willison 大佬总结的经验分享。

## 破解 Vibe code

[原文链接](https://uxdesign.cc/cracking-the-code-of-vibe-coding-124b9288e551)

最近有一个词非常火：[Vibe code](https://en.wikipedia.org/wiki/Vibe_coding)。就是依赖 AI 的编程，程序员变成了指导、测试、改进 AI 生成的代码。

但是全部依赖 AI 开发，会带来额外的技术债务。这篇文章带来了 Vibe Code 时代应该具备的心智模型。

## AI Engineering Hub

[仓库链接](https://github.com/patchy631/ai-engineering-hub)

这个仓库可以给你这些资源，帮助你在 AI 领域掌握领先的知识

- 深入教程 LLMs与RAGs 详解
- 现实世界中的 AI 代理应用
- 项目中的实施、调整与扩展实例
