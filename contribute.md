---
layout: guide
title: Contribute
description: Help maintain the website and improve project documentation.
permalink: /contribute/
---

## Contribute to the website

Website source is hosted at [GEXIS2D/GEXIS2D.github.io](https://github.com/GEXIS2D/GEXIS2D.github.io). Submit a pull request to propose corrections, page improvements or documentation.

## Edit a page

The website uses Jekyll with Markdown content.

| Page | Source file |
| --- | --- |
| Home | `index.md` |
| Getting Started | `getting-started.md` |
| Tutorials | `tutorials.md` |
| Theory | `theory.md` |
| Documentation | `documentation.md` |
| Contribute | `contribute.md` |

Keep the configuration block at the top of each file and edit the content below it. Section titles, descriptions and links are maintained in `_data/software_nav.yml`, which also supplies navigation and section search.

## Before submitting

- Check links, images and code snippets.
- Identify sources and the relevant software version.
- Include reproducible inputs and expected outputs with tutorials.

## Layouts and assets

Page layouts are in `_layouts/software.html` and `_layouts/guide.html`. Styles, scripts and the project logo are in `assets/software/`. Existing pages and research assets are retained.
