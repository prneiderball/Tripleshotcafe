# Triple Peaks Coffee Shop

This project is the second assignment in the Software Engineering program at TripleTen. It’s a dynamic, responsive coffee shop website built with HTML, CSS, and vanilla JavaScript. The design was based on a detailed brief and focuses on modern web practices.

## Project Features

- **Semantic HTML5:** Uses modern HTML5 elements (e.g., `<header>`, `<main>`, `<footer>`) for better structure and accessibility.
- **CSS Flexbox & Positioning:** Layout managed with Flexbox and CSS positioning to ensure responsiveness.
- **Flat BEM File Structure:** Adopts a flat BEM naming convention for scalable and organized CSS.
- **Custom Reservation Form:** A user-friendly booking form that collects essential guest details.
- **CSS Animations & Transforms:** Incorporates subtle animations (e.g., animated background circles) to enhance the visual experience.
- **Dynamic Content Generation:**
  - **Menu:** A JavaScript array is used to populate the menu items along with their dynamic pricing.
  - **Recipes:** The recipe section is generated from an array that creates embedded YouTube video iframes with captions.
- **Responsive Design:** Media queries and flexible layouts ensure the site looks great on all screen sizes.

## Planned Improvements

### Typography Enhancements

- **Highlighting Key Terms:**
  - Key words such as **Aeropress** and **French press** in recipe captions will be styled with a distinct color (`#3F96F3`) and italicized for emphasis.

### Subtle Animations

- **Interactive Captions:**
  - Add hover effects so that video captions slightly scale up, creating a more dynamic feel.
- **Parallax Background:**
  - Implement a parallax effect on the background image to add visual depth.

### Interactive Elements

- **Clickable Recipe Captions:**
  - Transform recipe captions into clickable elements that link directly to the corresponding YouTube videos for quick access.

### Layout & Accessibility Enhancements

- **Responsive Spacing:**
  - Further adjust spacing between videos on larger screens using media queries.
- **Improved Accessibility:**
  - Add `aria-label` attributes to the iframe elements to ensure that screen readers provide accurate descriptions.

### Dynamic Pricing Feature

- **Streamlined Updates:**
  - Enhance the dynamic pricing system (already implemented via JavaScript arrays) so that business owners can update menu prices quickly, with automatic updates across all components.
