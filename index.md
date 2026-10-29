---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: software
title: 科研软件与文档
description: GEXIS2D 项目网站，汇集入门指南、教程、理论与技术文档。
---

<section class="hero"><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow light">GEXIS2D · PROJECT & DOCUMENTATION</p><h1>从理解模型，<br>到探索<span>计算。</span></h1><p class="hero-lead">欢迎来到 GEXIS2D。<br>在这里了解项目、查阅文档，逐步探索理论与算例。</p><div class="hero-actions"><a class="button primary" href="{{ '/getting-started/' | relative_url }}">开始了解项目 <span>→</span></a><a class="button secondary" href="{{ '/documentation/' | relative_url }}">浏览文档</a></div><p class="hero-note"><span class="status-dot"></span> 网站首版 · 技术资料持续整理中</p></div><figure class="hero-figure"><img src="{{ '/assets/software/mesh.svg' | relative_url }}" alt="二维非结构网格与局部细化的概念示意图"><figcaption><span>GEOMETRY / MESH / EXPLORATION</span><span>概念示意，非仿真结果</span></figcaption></figure></div></section>

<section class="intro-strip"><div class="container"><span class="eyebrow">EXPLORE THE PROJECT</span><p>一条清晰的学习路径：了解项目 → 阅读指南 → 探索算例 → 查阅理论。</p><a href="{{ '/getting-started/' | relative_url }}">网站导览 ↗</a></div></section>

<section class="container section"><div class="section-heading"><div><p class="eyebrow">LEARN & BUILD</p><h2>从这里开始</h2></div><p>按任务查找资料，让每一步都有迹可循。</p></div><div class="resource-grid">{% for item in site.data.software_nav limit:4 %}<a class="resource-card" href="{{ item.url | relative_url }}"><div class="card-top"><span class="card-number">0{{ forloop.index }}</span><span>↗</span></div><h3>{{ item.title }}</h3><p class="card-label">{{ item.label }}</p><p>{{ item.description }}</p><span class="card-more">进入栏目 →</span></a>{% endfor %}</div></section>

<section class="section muted"><div class="container project-grid"><div><p class="eyebrow">ABOUT THIS RELEASE</p><h2>先把知识连接起来。</h2><p class="section-copy">本站围绕软件学习与文档查阅组织内容。首版已建立入门、教程、理论和文档入口；具体的软件安装、模型参数与可复现算例将在资料核对后补充。</p><a class="text-link" href="{{ '/documentation/' | relative_url }}">查看文档建设状态 →</a></div><div class="pathway"><a href="{{ '/getting-started/' | relative_url }}"><span>01</span><div><h3>了解与准备</h3><p>确认资料、版本与运行环境</p></div><b>→</b></a><a href="{{ '/tutorials/' | relative_url }}"><span>02</span><div><h3>学习与复现</h3><p>从问题定义走到结果检查</p></div><b>→</b></a><a href="{{ '/theory/' | relative_url }}"><span>03</span><div><h3>理解与拓展</h3><p>联系理论、方法与研究资料</p></div><b>→</b></a></div></div></section>

<section class="container section"><div class="contribute-banner"><div><p class="eyebrow">BUILT TOGETHER</p><h2>让文档随项目一起成长。</h2><p>补充使用说明、整理算例，或改进网站。每一份清楚的记录都能帮助下一位使用者。</p></div><a class="button dark" href="{{ '/contribute/' | relative_url }}">参与贡献 →</a></div></section>
