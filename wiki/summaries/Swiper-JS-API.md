# Summary: Swiper JS API

**Source:** [[raw/llm-wiki-idea.md]] (Referenced in [[raw/The Most Modern Mobile Touch Slider.md]])
**Date:** 2026-05-19
**Subject:** Comprehensive API documentation for Swiper JS (v10).

## Key Takeaways
- **HTML Structure**: Requires a specific nested structure: `.swiper` > `.swiper-wrapper` > `.swiper-slide`.
- **Initialization**: Initialized via `new Swiper('.selector', { ... })`.
- **Modularity**: Swiper is highly modular. Features like Navigation, Pagination, and Autoplay are separate modules that can be included as needed.
- **Performance**: Support for `cssMode` which leverages modern CSS Scroll Snap API for better performance in simple configurations.
- **Responsive Breakpoints**: Allows changing parameters like `slidesPerView` based on window or container width.

## Technical Details
- **Events**: Offers a rich event system (`slideChange`, `init`, `touchStart`, etc.) for hooking into the slider lifecycle.
- **Effects**: Built-in 3D effects including Cube, Coverflow, Flip, Creative, and Cards.
- **Methods**: Controlled via a returned instance (e.g., `swiper.slideNext()`).

## Related Concepts
- [[Swiper-js-Integration]]
- [[Swiper-Parameters]]
- [[Native-Touch-Sliders]]
