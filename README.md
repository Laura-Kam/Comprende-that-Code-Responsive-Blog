# CodeComprende Blog

A **responsive, mobile-first blog application** built to demonstrate modern JavaScript, CSS layout techniques, and basic SEO practices.

---

## Live Demo

Check out the live website on Netlify: [Your Netlify Link Here](#)

---

## Overview

CodeComprende is a blog application that dynamically displays articles using JavaScript. Users can click on links to individual blog posts, which are loaded via query parameters from a `blogposts.js` array of objects.

Key features include:

- **Dynamic article loading** using query parameters (`id`)
- **Responsive design** built with **CSS Grid** and **Flexbox**
- Mobile-first layout optimized for **mobile, tablet, and desktop**
- **SEO enhancements** for better discoverability and accessibility

## SEO Enhancements

- **Semantic HTML**: Using `<article>`, `<header>`, `<section>`, `<figure>` for better content hierarchy.
- **Title tags**: Dynamic `<title>` for each blog post (based on blog title).
- **Meta description**: Each post includes a `<meta name="description" content="...">` for search snippets.
- **Alt text**: Images have descriptive `alt` attributes for accessibility and SEO.
- **Heading structure**: Proper `<h1>` for article titles and `<h2>` for subheadings.
- **Open Graph / Social Sharing**: Meta tags for social previews (`og:title`, `og:description`, `og:image`).
- **Responsive design**: Mobile-friendly layout is a key ranking factor for Google.
- **Clean URL structure**: Query parameters used to load posts, could be extended to friendly URLs (`/blog/post-title`).

---

## Features

### Dynamic Blog Loading

- Articles are stored in a JavaScript array of objects (`blogPosts` and `mainPost`).
- Clicking a blog link with an `id` in the URL automatically loads the corresponding article.
- Uses **query strings** (`URLSearchParams`) to fetch the correct post.

### Responsive Layout

- Built **mobile-first**, then enhanced for tablet and desktop via media queries.
- Used **CSS Grid** for the main article layout and **Flexbox** for content alignment.
- The layout adjusts seamlessly across different screen sizes.

### Semantic HTML & Accessibility

- `<header>` for site and article headers
- `<main>` for the primary content
- `<article>` to wrap individual blog posts
- `<section>` to separate intro and main content
- `<figure>` + `<figcaption>` for images
- Proper `alt` text on images for accessibility

---

## Screenshots

_(Add your screenshots here to showcase the responsive design for mobile, tablet, and desktop.)_

- **Mobile View:**  
  ![Mobile Screenshot](path/to/mobile-screenshot.png)

- **Tablet View:**  
  ![Tablet Screenshot](path/to/tablet-screenshot.png)

- **Desktop View:**  
  ![Desktop Screenshot](path/to/desktop-screenshot.png)

---

## Challenges / Bugs

While building the project, a few challenges were encountered:

- **Image sizing:** The blog images initially overflowed the container. Fixed by setting `max-width: 100%` and adjusting the parent container.
- **Grid spacing:** Decided between using `padding` or `margin` for the grid layout to maintain consistent spacing across devices.
- **Responsive adjustments:** Tweaking font sizes, spacing, and layout alignment for different screen widths required careful testing.

---

## Skills Demonstrated

- **JavaScript:** Query parameters, dynamic DOM manipulation, conditional rendering.
- **CSS:** Mobile-first responsive design using Grid and Flexbox
- **CSS variables** for colors, spacing, and fonts, ensuring consistency and easy theme adjustments.
- Responsive typography and layout using media queries for tablet and desktop.
- **HTML:** Semantic structure for accessibility and SEO
- **Problem-solving:** Debugging layout issues, image sizing, spacing adjustments
- **Deployment:** Hosting a live site on Netlify

---

## Installation / Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/codecomprehend.git
   ```
