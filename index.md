---
layout: software
title: Home
description: GEXIS2D — A Geomechanics-Based Extensible Simulator. Getting started, tutorials, theory and documentation.
---

<div class="container home-page"><header class="project-intro"><h1 class="visually-hidden">GEXIS2D</h1><img class="project-logo" src="{{ '/assets/software/gexis-logo.png' | relative_url }}" width="400" height="400" alt="GEXIS — A Geomechanics-Based Extensible Simulator"><p class="project-status">Project website and documentation. Technical content is being prepared.</p></header><section class="home-docs" aria-labelledby="docs-heading"><h2 id="docs-heading">Documentation</h2><div class="home-links">{% for item in site.data.software_nav %}<a href="{{ item.url | relative_url }}"><h3>{{ item.title }} <span>›</span></h3><p>{{ item.label }}</p></a>{% endfor %}<a href="{{ '/search/' | relative_url }}"><h3>Search <span>›</span></h3><p>Find a documentation section</p></a></div></section></div>
