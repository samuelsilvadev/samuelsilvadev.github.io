---
title: Getting Started with Astro
description: Learn how to build modern websites with Astro, the all-in-one web framework.
pubDate: 2024-04-22
author: Samuel Silva
tags: ['astro', 'web development', 'tutorial']
---

# Getting Started with Astro

Astro is a modern static site builder that delivers lightning-fast performance with a modern developer experience. In this guide, we'll explore how to get started with Astro and build your first website.

## Why Astro?

Astro is designed to be:
- **Fast**: Zero JavaScript by default, with partial hydration when needed
- **Simple**: Familiar component syntax with support for your favorite frameworks
- **Powerful**: Built-in features like Markdown, MDX, and more

## Installation

Getting started with Astro is simple. Run the following command in your terminal:

```bash
npm create astro@latest
```

This will guide you through setting up a new Astro project with your preferred configuration.

## Project Structure

A typical Astro project structure looks like this:

```
src/
  ├── components/
  ├── layouts/
  ├── pages/
  ├── styles/
  └── content/
```

- `components/`: Reusable UI components
- `layouts/`: Page layout templates
- `pages/`: Your website's pages
- `styles/`: Global styles and CSS
- `content/`: Content collections (blog posts, etc.)

## Creating Your First Page

Create a new file at `src/pages/index.astro`:

```astro
---
const title = "Welcome to My Astro Site";
---

<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>This is my first Astro page!</p>
  </body>
</html>
```

## Adding Components

Astro components are similar to HTML but with some extra features. Create a new component at `src/components/Header.astro`:

```astro
---
const { title } = Astro.props;
---

<header>
  <h1>{title}</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

## Styling Your Site

Astro supports various styling options:
- Global CSS
- CSS Modules
- Tailwind CSS
- Other CSS frameworks

## Deployment

Deploying an Astro site is straightforward. Popular options include:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Next Steps

Now that you have a basic understanding of Astro, you can:
1. Explore the [Astro documentation](https://docs.astro.build)
2. Check out the [Astro examples](https://github.com/withastro/astro/tree/main/examples)
3. Join the [Astro Discord community](https://astro.build/chat)

Happy building! 🚀 