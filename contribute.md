---
layout: guide
title: Contribute
kicker: BUILD THE KNOWLEDGE BASE
description: 参与网站维护、补充文档，帮助项目资料持续完善。
permalink: /contribute/
---

## 参与网站建设

本网站的源码托管于 [GEXIS2D/GEXIS2D.github.io](https://github.com/GEXIS2D/GEXIS2D.github.io)。可以通过 Pull Request 提交页面改进、文字修正和资料补充。

## 修改页面

网站沿用 Jekyll，正文使用 Markdown。各栏目对应以下文件：

| 页面 | 源文件 |
| --- | --- |
| 首页 | `index.md` |
| 入门指南 | `getting-started.md` |
| 教程与算例 | `tutorials.md` |
| 理论基础 | `theory.md` |
| 技术文档 | `documentation.md` |
| 参与贡献 | `contribute.md` |

维护时保留文件顶部的页面配置，在正文区域补充资料。栏目名称、说明和链接由 `_data/software_nav.yml` 管理，导航和栏目搜索会一同更新。

## 提交内容前

- 检查页面链接、图片与代码片段。
- 标明资料来源与适用的软件版本。
- 发布教程时附上可复现的输入和预期输出。

## 页面与资源

新版布局位于 `_layouts/software.html` 和 `_layouts/guide.html`，样式与脚本位于 `assets/software/`。原有页面、布局和图片资源继续保留。
