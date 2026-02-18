# Cristofer Silva | Developer & Entrepreneur Portfolio

![Language](https://img.shields.io/badge/language-HTML5%20%7C%20CSS3%20%7C%20JS-orange) ![Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

> A high-performance, responsive digital portfolio showcasing my intersection of Computer Science, Economics, and Social Entrepreneurship . Built with semantic HTML5 and optimized Vanilla JavaScript.

## Tech Stack
This project was built without heavy frameworks to demonstrate mastery of core web technologies and performance optimization.

* **Core:** HTML5 (Semantic), CSS3 (Custom Properties), Vanilla JavaScript (ES6+).
* **Styling:** Flexbox, CSS Grid, Responsive Media Queries.
* **Libraries:** [Typed.js](https://github.com/mattboldt/typed.js/) (Dynamic text animation), [Font Awesome](https://fontawesome.com/) (Icons).
* **Performance:** WebP Image Optimization, `content-visibility` for rendering speed.
* **Tools:** VS Code, Git.

## About
This website serves as the central hub for my academical identity pre-college. It is designed to tell the story of some core extracurriculars that constructed who I am today, from my partnership with NASA on asteroid hunting to founding the *Insight Jovem* educational non-profit.

The goal was to create a user experience that mirrors my professional philosophy: efficient, accessible, and impactful. Unlike template-based portfolios, this site features custom-written logic for interactive elements to ensure lightweight performance across all devices.

## Key Features
* **Custom Slider Engine:** A lightweight, loop-capable image slider built from scratch in `app.js` (no heavy carousel libraries).
* **Dynamic Typing Effect:** Integrated `Typed.js` for an engaging "Economist, Scientist, Entrepreneur" hero introduction.
* **Performance Optimized:** Implements `loading="lazy"`, `decoding="async"`, and modern WebP formats to ensure high Lighthouse scores.
* **Responsive Architecture:** Mobile-first CSS design ensuring perfect rendering from mobile screens (max-width: 768px) to large desktops.
* **SEO Ready:** Semantic HTML structure with Open Graph (OG) meta tags for social sharing.

## Technical Highlights & Lessons Learned
* **Optimizing Rendering Performance:** In `style.css`, I utilized the modern `content-visibility: auto;` property on heavy sections (like the timeline and sliders). This allows the browser to skip rendering off-screen content, significantly improving the scrolling performance and initial load time.

* **Custom JavaScript Logic (`app.js`):**
    Instead of importing a large library for the testimonial slider, I wrote a custom implementation.
    * *Challenge:* The auto-play interval would conflict when a user manually clicked a specific dot or arrow.
    * *Solution:* I implemented a `reloadSlider()` function that clears and resets the `refreshInterval` whenever a user interaction occurs, ensuring a smooth, non-jittery user experience.

## Running Locally
To run this project locally, you don't need a complex build step.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the folder**
    ```bash
    cd your-repo-name
    ```

3.  **Launch**
    Open `index.html` in your browser.
    * *Pro Tip:* For the best experience (and to ensure all assets load correctly), use a local server like generic "Live Server" extension in VS Code.

## Contact
**Cristofer Batista da Silva** [LinkedIn](https://www.linkedin.com/in/cristofer-silva) | [Email](mailto:cristofersilva.rp@gmail.com) | [Resume](https://flowcv.com/resume/1liuqpdklm)

---
© 2023 Cristofer Batista da Silva. All rights reserved.
