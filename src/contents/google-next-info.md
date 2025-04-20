---
title: "谷歌连续放出重磅大招：Agent2Agent 协议、Agent Development Kit、Firebase Studio"
summary: "Firebase Studio、Agent2Agent、Agent Development Kit、Vertex AI"
date: '2025-04-10'
tags: ['Google']
coverImage: "https://mmbiz.qpic.cn/sz_mmbiz_png/ueaCdrjauIN6mk17rib5Cqh52j5QkxzIR3pnnE3iaTzXx0nPyuxI6hQd02d8dUOvvMlDP6AoIK2D7rkC7ViaSnZqQ/640"
---


谷歌在 Google Cloud Next 2025 连续放出重磅大招：

- **Firebase Studio** 一站式应用 AI 开发平台
- **Agent2Agent**  Agent 协议
- **Agent Development Kit** Agent 开发框架
- **Vertex AI** 目前唯一的视频、图像、语音、音乐生成媒体模型的平台

### Firebase Studio

地址：<https://firebase.studio/>

![](https://file.simonwong.cn/blog/202504/5da9af8f6e9cddb6bbb9962173212e12.png)

Firebase Studio 是一个类似于 v0、bolt.new 的工具，一站式的生成前后端代码、移动app。利用 gemini 大模型，生成的应用的效率和质量估计会强的可怕。

从生产到发布都在一个地方完成，还自带数据监控。

### Agent2Agent 协议

链接：<https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/>

A2A 协议将允许 AI 代理相互通信、安全地交换信息，并在各种企业平台或应用程序上协调操作。

A2A 协议是对 Anthropic 模型上下文协议 (MCP) 的补充，MCP 为代理提供了实用的工具和上下文。

![](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/image5_VkAG0Kd.original.png)

A2A 是一种开放协议，它为代理之间协作提供了一种标准方式，不受底层框架或供应商的限制。在与合作伙伴设计该协议时，我们遵循了五项关键原则：

- **拥抱代理能力**：A2A 致力于使代理能够以自然、非结构化的模式进行协作，即使它们不共享内存、工具和上下文。我们正在实现真正的多代理场景，而不将代理局限于单一的“工具”。

- **基于现有标准：** 该协议建立在现有的流行标准之上，包括 HTTP、SSE、JSON-RPC，这意味着它更容易与企业日常使用的现有 IT 堆栈集成。

- **默认安全**：A2A 旨在支持企业级身份验证和授权，在启动时与 OpenAPI 的身份验证方案相同。

- **支持长时间运行的任务**：我们设计 A2A 时就考虑到了灵活性，并支持各种场景，使其能够色地完成各种任务，从快速任务到深度研究，这些任务可能需要数小时甚至数天的时间（如果人工参与）。在此过程中，A2A 可以为用户提供实时反馈、通知和状态更新。

- **与模态无关**：代理世界不仅限于文本，这就是我们设计 A2A 来支持各种模态（包括音频和视频流）的原因。

### Agent Development Kit

链接：<https://google.github.io/adk-docs/>

Agent Development Kit (ADK) 是一个灵活且模块化的 Agent 开发框架，用于开发和部署 AI Agent

与谷歌生态、Gemini 模型紧密集成。提供了**更复杂的代理架构和编排**所需的控制和结构。

### Vertex AI

链接：<https://cloud.google.com/blog/products/ai-machine-learning/expanding-generative-media-for-enterprise-on-vertex-ai>

Vertex AI 目前是唯一拥有视频、图像、语音 + 音乐生成媒体模型的平台：

- **Lyria**：音乐生成模型，致力于打造高保真音频，精准捕捉细腻音韵，呈现层次丰富、细节饱满的编曲作品
- **Veo 2**：视频生成模型，可以创建视频、编辑视频和添加视觉效果
- **Chirp 3**：自定义语音，超过 35 种语言的自然逼真语音合成，并提供 8 种不同音色选择。
- **Imagen 3**：图片生成模型，还供了一种强大且用户友好的方式来优化和定制任何图像
