# Imogen Claire Artist Website

A sophisticated, responsive website built with Astro for contemporary gothic still life artist Imogen Claire.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Content Management**: Artwork details stored in Markdown files
- **Image Lightbox**: Full-screen image viewing with details
- **Contact Form**: Professional enquiry handling
- **Performance Optimized**: Fast loading with modern web standards

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Main page layout
├── pages/
│   ├── index.astro           # Home page
│   ├── about.astro           # About page
│   ├── gallery.astro         # Gallery page
│   └── contact.astro         # Contact page
├── components/
│   ├── GalleryGrid.astro     # Gallery display component
│   └── Lightbox.astro        # Image lightbox component
├── content/
│   └── gallery/              # Artwork markdown files
└── public/
    └── images/               # Image assets
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your artwork images to `public/images/gallery/` (WebP format recommended)

3. Create markdown files in `src/content/gallery/` for each artwork

4. Start development server:
   ```bash
   npm run dev
   ```

## Content Management

Each artwork requires a markdown file with frontmatter:

```markdown
---
title: "Artwork Title"
description: "Artwork description"
image: "filename.webp"
medium: "Oil on canvas"
dimensions: "45 × 60 cm"
year: 2024
price: 3500
available: true
featured: true
---

Extended description content here...
```

## Deployment

Build for production:
```bash
npm run build
```

The site generates static files ready for deployment to any hosting service.

## Customization

- Update colors in CSS custom properties (`:root`)
- Modify typography by changing Google Fonts imports
- Adjust layouts in component files
- Update content in markdown files