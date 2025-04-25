---
title: "AI 前沿精选 #02: 模型即产品"
summary: "模型本身正在成为产品，而不仅仅是通过 API 提供服务的基础设施。像 OpenAI、Anthropic 等厂商正越来越多地把复杂功能直接集成进模型，推出自带体验的应用"
date: '2025-04-25'
tags: ['AI Weekly']
coverImage: "https://file.simonwong.cn/blog/202504/e4eed7dc484ba799ff161cb56d3f7aa7.png"
---

## 模型即产品（The Model is the Product）

模型本身正在成为产品，而不仅仅是通过 API 提供服务的基础设施。
像 OpenAI、Anthropic 等厂商正越来越多地把复杂功能**直接集成进模型**，推出自带体验的应用。
依赖 API 构建应用的方式会越来越难走，未来的竞争焦点将**围绕模型本身的能力和应用**整合展开。

阅读原文： [The Model is the Product](https://vintagedata.org/blog/posts/model-is-the-product)

## OpenAI 上线了图像生成 API

API 提供了从文本提示生成和编辑图像等功能。
- `gpt-image-1` 是最新、最先进的图像生成模型，高质量图像生成能力，可以对现有图像进行部分或整体修改
- `DALL·E 2` 支持生成、编辑、生成现有图像的变体
- `DALL·E 3` 支持生成图片

需要注意的是，`gpt-image-1` 模型 api 调用需要做企业认证。

[Image generation 文档](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1)

这里还有一份集合了众多优秀图片生成提示词的库：[awesome-gpt4o-images](https://github.com/jamez-bondos/awesome-gpt4o-images)
    
## State Of AI

[Web 开发者 AI 现状调查](https://2025.stateofai.dev/) 出炉

这份调查回答了：
- 开发者在AI上投入了多少成本？
- 哪些工具最实用？
- 当开发者真正运用AI开发网络应用时，最大的痛点是什么？
- 等等其他更多问题
上述问题，还揭示了更多发现。

另外，还有一份来自 [Vercel 的 state of ai](https://vercel.com/state-of-ai)

  
## 最近出现了多款 AI 浏览器

[Dia Browser](https://www.diabrowser.com/)：能够对网页进行分析和总结，工作流比较简单。偏向 AI 辅助工具。
[Fellou](https://fellou.ai/) : 支持跨网页的复杂工作流，自动浏览分析网页生成报告等等，偏向生产力工具。

都需要邀请码， Fellou 的可以去 Discord 蹲。
我用 Fellou 给我生成一份分析 Dia 和 Fellou 区别的报告，这个他给我的结果：
[Fellou与Dia AI浏览器全面对比分析报告](https://chat.fellou.ai/report/061df293-4e6f-4f5d-b273-4f7fa48ff1c5)


## 使用 Claude Code 的最佳实践

Anthropic 推出了Claude Code，一种**命令行工具**，旨在为开发者和研究人员提供**灵活的代码集成方式**。
该工具通过低级别的设计实现了高定制性和安全性，尽管强大，但初学者可能需要时间来掌握。
这是一份用好这个工具的最佳实践指南。

阅读原文： [Claude Code: Best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices)

## 构建 Agents 的最佳实践

来自 OpenAI 的指南：构建 Agents 的最佳实践。
这份指南是写给那些想尝试构建 Agent 的产品和工程团队看的。  
里面总结了很多实际部署经验，提供了识别应用场景的框架、设计 Agent 逻辑和编排的清晰模式，以及保证 **Agent 安全、可预测、有效运行的最佳实践**。  

查看原文： [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
这里还有一份我写的精读版本：<https://mp.weixin.qq.com/s/EFkJ0PLcet88pqV9asrc8g>
