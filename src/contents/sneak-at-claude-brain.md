---
title: "偷看 Claude 的“大脑“：AI是怎么想问题的？"
summary: "你有没有好奇过，像 Claude 这样聪明的 AI，它“脑袋”里到底是怎么想的？它们不是我们一行行代码写出来的，更像是在海量数据里自己“悟”出了一套解决问题的方法。但这套方法具体是啥，我们也不全清楚。"
date: '2025-04-01'
tags: ['Deep AI']
coverImage: "https://mmbiz.qpic.cn/sz_mmbiz_png/ueaCdrjauIMyKkERkqYNh91caWjPXHRiaUmXgibOKUZaGzKJYwyRGjM8UIrRSaiaqXmK1OdHL4J1PNKE02KrZYdYg/640"
---

你有没有好奇过，像 Claude 这样聪明的 AI，它“脑袋”里到底是怎么想的？它们不是我们一行行代码写出来的，更像是在海量数据里自己“悟”出了一套解决问题的方法。但这套方法具体是啥，我们也不全清楚。
Anthropic 进行了一项研究用了一个“AI 显微镜”，伸到模型内部去，看看 Claude 3.5 Haiku 思考时发生了什么，就像在观察一种全新的“AI 生物”。

## Al生物学的探索之旅

### Claude 是如何掌握多种语言的？

Claude 会说好多种语言，中文、英文、法文... ！那它是怎么做到的？难道脑子里有好几个“小人”，一个说中文一个说英文？还是说，它思考的时候，用的是一种超越语言的“通用语”？
我们发现，更像是后者！比如问它“小的反义词是啥”，无论用哪种语言问，它脑子里关于“小”、“相反”、“大”这些核心概念的“神经元”（我们叫它特征）都会活跃起来，最后再把“大”翻译成你问话的语言。这说明，它可能真有个抽象的“思维空间”，先想明白了，再用特定语言说出来。

![不同语言，同一个“想法”](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fe0e156ea6c912a385d66ed562187fced8c392a58-1650x750.png&w=3840&q=75)

### Claude 写诗会提前规划韵脚吗？

下面是让 Claude 写的押韵的诗
> He saw a carrot and had to **grab it**,
> His hunger was like a starving **rabbit**

它是怎么知道第二句结尾要用 "rabbit" 来跟 "grab it" 押韵，还得让意思说得通？

最初猜测，Claude 可能是边写边想，直到快结尾了才找个押韵的词。所以他们预期会看到两条并行的处理路径，一条负责意思通顺，一条负责押韵。
结果却恰恰相反！它居然会**提前规划**！在写第二句之前，它脑子里就已经在琢磨跟 "grab it" 押韵、又跟主题相关的词了（比如 rabbit, habit）。然后才开始写句子，目标就是奔着那个词去！

![写诗前先想好韵脚！（第二个和第三个是干扰实验）](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F7032ed7db85b8cd3efe70a89deaf4f15bfe8fc05-1650x900.png&w=3840&q=75)

为了搞清楚这个规划机制是怎么运作的，他们做了个实验，修改了 Claude 内部状态中代表 "rabbit" 概念的部分。当他们减去 "rabbit" 的影响，让 Claude 继续写时，它写出了一句新的、结尾是 "habit" 的诗句，这也是一个合理的结尾。他们还可以往里注入 "green"的概念，结果 Claude 写出了一句意思通顺（但不再押韵）、结尾是 "green" 的句子。这既展示了 Claude 的规划能力，也展示了它的适应性——当预定目标改变时，它能调整策略。

### 心算能力

Claude 还能心算，比如 36+59=95。它又不是计算器，怎么学会的？难道是背了答案？
研究发现 Claude 用了多种并行的计算路径：同时走几条路。一条路算个大概（比如感觉答案在 90 附近），另一条路精确算个位数（6+9=15，所以个位数是 5）。最后把这些信息一汇总，得出 95。
![Claude 心算时的“脑回路”，有点绕。](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Feaabaeb746713f7f82991a0cc6edb091452b2fee-1650x855.png&w=3840&q=75)

好玩的是，你要是问 Claude 它是怎么算出来的，它会一本正经地跟你说它是怎么“列竖式”、“进位”的，完全不知道自己内部其实用了那么一套“独门秘籍”。
![Claude 说它是用标准算法来计算两个数相加](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fa48c1e8195e458ad53f9c81df45af735e267a13d-1650x512.png&w=3840&q=75)

### Claude 的解释总是“忠于内心”吗？

Claude 经常会给出“思考过程”，一步步告诉你它是怎么得到答案的。但这过程靠谱吗？有时候会不会是为了让你相信它的答案，临时编的“理由”？
研究发现，确实会！问它简单的（比如 0.64 的平方根），它的解释和内部“思考”是对得上的。但问它难的、它算不出来的（比如算个复杂三角函数），它有时就开始**“一本正经地胡说八道”**，随便给个答案，然后编一套看似合理的步骤。更有意思的是，如果你给它一个（错误的）提示，告诉它答案可能是啥，它有时会**“倒推”**，硬凑出能得到你那个提示答案的中间步骤。这就有点像人类“先有结论再找理由”（专业点叫“动机性推理”）。
![左边是老实交代，右边是“先有答案再编过程”](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F017ebc3169bd6c37e795d54b726c340eadf8018e-1650x866.png&w=3840&q=75)

### 多步骤推理

问 Claude 复杂点的问题，比如“达拉斯在哪个州？那个州的首府是啥？”，它是直接背下了“达拉斯->奥斯汀”这个答案，还是真的先想“达拉斯在德州”，再想“德州首府是奥斯汀”？
我们“偷看”发现，它真的是在**分步推理**！能看到它脑子里先激活了“达拉斯-德州”相关的概念，然后又激活了“德州-奥斯汀”的概念，最后才组合出答案。不是死记硬背！当把中间那步“德州”偷偷换成“加州”，结果它的答案就从“奥斯汀”变成了“萨克拉门托”。证明它确实依赖这个中间步骤。
![一步接一步，推理链条清晰可见](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Ffd2e125879ab993949017e03e3465a12fda884bf-1650x857.png&w=3840&q=75)

### 为什么会出现幻觉？

AI 有时候会“一本正经地胡说八道”，我们叫“幻觉”。为啥呢？其实，我们发现 Claude 的“天性”反而是**不知道就说不知道**。
它脑子里有个“默认拒绝回答”的开关，平时是开着的。只有当被问到它确信自己知道的事情（比如迈克尔·乔丹是谁），另一个“我知道这个！”的开关才会打开，把“拒绝”开关给关掉，然后才回答你。如果问个它不认识的人（比如隔壁老王），“拒绝”开关就保持打开，它就说“抱歉，我不认识”。
![左：克劳德回答了一个 Michael Jordan（乔丹） 的问题，他知道这个。右图：克劳德拒绝回答一个关于陌生人的问题（Michael Bat Kin)](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fbe304d3250c2aab04e19908b3afc9970d1ed7bb0-1650x1004.png&w=3840&q=75)

那幻觉怎么来的呢？有时可能就是那个“我知道这个！”的开关“失灵”了，错误地打开了，即使它其实不知道答案。一旦它决定要回答（而不是拒绝），就开始瞎编了。我们甚至可以通过“手动”打开这个开关，让它强行“认识”一个虚构的人，然后它就真的开始编这个人的故事了！

### 越狱

越狱就是让 AI 说些不希望它产生的甚至是有害的话，比如教人做危险品。他们研究了一个例子，用合并首字母的方式骗 Claude 说出“BOMB”这个词，然后它居然真的开始讲怎么做了！
![被首字母连起来的给骗了，开始说不该说的…](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F165b18b79295a96bc7142b209caa33f4ec5378d0-1650x548.png&w=3840&q=75)

为啥会被骗？我们发现，这跟 AI 追求**把话说完整、说通顺**的“强迫症”有关。一旦它开始说一句话（哪怕是被骗着开头的），内部就有股强大的力量要它把句子说完，保持语法和逻辑连贯。这时候，就算它意识到内容不对劲（比如“危险！”的警报响了），也可能为了“说完这句话”而刹不住车。
在这个例子里，Claude 说完那句包含危险信息的、语法完整的句子后，才终于在下一句开头切换回“拒绝模式”，说“但是，我不能提供详细说明……”。看来，语法连贯性有时也会成为它的“软肋”。
![Claude 被诱导谈论炸弹，说完一句才反应过来，赶紧打住！](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1612af943004563a78cb7f6591c4cd990c433769-1650x1022.png&w=3840&q=75)

## 结语

Anthropic 这项研究真的挺牛，有些挺颠覆认知。“偷看”AI 的思考过程，我觉得最有价值的地方在于，它开始打破 AI 的“黑盒子”形象，了解它们内部怎么运作的。

这里还有这项研究的论文，描述的更加详细，感兴趣的可以看看：[On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)。
