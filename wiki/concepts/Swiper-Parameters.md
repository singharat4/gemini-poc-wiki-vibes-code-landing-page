# Concept: Swiper Parameters

## Overview
Swiper JS behavior is controlled through a vast array of parameters passed during initialization.

## Core Parameters
- **`direction`**: `'horizontal'` or `'vertical'`.
- **`speed`**: Transition duration in ms (default: 300).
- **`loop`**: Continuous loop mode.
- **`slidesPerView`**: Number of slides visible at once.
- **`spaceBetween`**: Distance between slides in px.

## Functional Categories
- **Autoplay**: `delay`, `disableOnInteraction`, `pauseOnMouseEnter`.
- **Responsive**: `breakpoints` (allows different settings for different screen sizes).
- **Navigation/Pagination**: Linking to specific DOM elements for UI controls.
- **Performance**: `cssMode` (leverages browser-native Scroll Snap).

## Advanced Parameters
- **`freeMode`**: Enables free scrolling without snapping.
- **`grid`**: Enables multi-row layouts.
- **`virtual`**: Handles massive amounts of slides by only rendering what is visible.

## Sources
- [[Swiper-JS-API]]
