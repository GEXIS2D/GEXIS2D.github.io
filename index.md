---
layout: software
title: Home
description: GEXIS2D 入门指南、教程、理论与技术文档。
---

<div class="container home-page"><header class="project-intro"><h1>GEXIS<span>2D</span></h1><p class="project-subtitle">科研软件与文档</p><p class="project-status">网站框架已建立，项目资料将陆续补充。</p></header><section class="home-docs" aria-labelledby="docs-heading"><h2 id="docs-heading">Documentation <span>文档导航</span></h2><div class="home-links">{% for item in site.data.software_nav %}<a href="{{ item.url | relative_url }}"><h3>{{ item.title }} <span>›</span></h3><p>{{ item.label }}</p></a>{% endfor %}<a href="{{ '/search/' | relative_url }}"><h3>Search <span>›</span></h3><p>搜索文档栏目</p></a></div></section></div>
