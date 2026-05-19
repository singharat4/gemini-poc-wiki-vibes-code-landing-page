---
title: "The Most Modern Mobile Touch Slider"
source: "https://swiperjs.com/swiper-api"
author:
published:
created: 2026-05-19
description: "SwipersJS API"
tags:
  - "clippings"
---
## Swiper API

If you are upgrading from Swiper 9 to Swiper 10, check out [Migration Guide to Swiper 10](https://swiperjs.com/migration-guide-v10)

## Swiper Full HTML Layout

```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```

## Styles

Swiper package contains different sets of CSS styles:

CSS styles for bundle version:

- `swiper-bundle.css` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
- `swiper-bundle.min.css` - same as previous but minified

CSS styles for bundle version (package imports):

- `swiper/css` - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)
- `swiper/css/bundle` - same as previous but minified

CSS styles for core version and modules (package imports):

- `swiper/css` - only core Swiper styles
- `swiper/css/a11y` - styles required for A11y module
- `swiper/css/autoplay` - styles required for Autoplay module
- `swiper/css/controller` - styles required for Controller module
- `swiper/css/effect-cards` - styles required for Cards Effect module
- `swiper/css/effect-coverflow` - styles required for Coverflow Effect module
- `swiper/css/effect-creative` - styles required for Creative Effect module
- `swiper/css/effect-cube` - styles required for Cube Effect module
- `swiper/css/effect-fade` - styles required for Fade Effect module
- `swiper/css/effect-flip` - styles required for Flip Effect module
- `swiper/css/free-mode` - styles required for Free Mode module
- `swiper/css/grid` - styles required for Grid module
- `swiper/css/hash-navigation` - styles required for Hash Navigation module
- `swiper/css/history` - styles required for History module
- `swiper/css/keyboard` - styles required for Keyboard module
- `swiper/css/manipulation` - styles required for Manipulation module
- `swiper/css/mousewheel` - styles required for Mousewheel module
- `swiper/css/navigation` - styles required for Navigation module
- `swiper/css/pagination` - styles required for Pagination module
- `swiper/css/parallax` - styles required for Parallax module
- `swiper/css/scrollbar` - styles required for Scrollbar module
- `swiper/css/thumbs` - styles required for Thumbs module
- `swiper/css/virtual` - styles required for Virtual module
- `swiper/css/zoom` - styles required for Zoom module

## Initialize Swiper

Now, when we have Swiper's HTML, we need to initialize it using the following function:

new Swiper(swiperContainer, parameters)- initialize swiper with options

- swiperContainer - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
- parameters - object - object with Swiper parameters. Optional.
- **Method returns initialized Swiper instance**

For example:

```js
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});
```

**After** you initialize Swiper it is possible to access to Swiper's instance on its HTMLElement. It is `swiper` property of Swiper's HTML container element:

```js
const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();
```

## Parameters

Let's look on list of all available parameters:

| [a11y](#param-a11y) | boolean \| A11yOptions |  | Object with a11y parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   a11y: {     prevSlideMessage: 'Previous slide',     nextSlideMessage: 'Next slide',   }, }); ``` |
| --- | --- | --- | --- | --- |
| [allowSlideNext](#param-allowSlideNext) | boolean | true | Set to `false` to disable swiping to next slide direction (to right or bottom) |
| [allowSlidePrev](#param-allowSlidePrev) | boolean | true | Set to `false` to disable swiping to previous slide direction (to left or top) |
| [allowTouchMove](#param-allowTouchMove) | boolean | true | If `false`, then the only way to switch the slide is use of external API functions like slidePrev or slideNext |
| [autoHeight](#param-autoHeight) | boolean | false | Set to `true` and slider wrapper will adapt its height to the height of the currently active slide |
| [autoplay](#param-autoplay) | boolean \| AutoplayOptions |  | Object with autoplay parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {  autoplay: {    delay: 5000,  }, }); ``` |
| [breakpoints](#param-breakpoints) | object |  | Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like `slidesPerView`, `slidesPerGroup`, `spaceBetween`, `grid.rows`. Such parameters like `loop` and `effect` won't work  ```js const swiper = new Swiper('.swiper', {   // Default parameters   slidesPerView: 1,   spaceBetween: 10,   // Responsive breakpoints   breakpoints: {     // when window width is >= 320px     320: {       slidesPerView: 2,       spaceBetween: 20     },     // when window width is >= 480px     480: {       slidesPerView: 3,       spaceBetween: 30     },     // when window width is >= 640px     640: {       slidesPerView: 4,       spaceBetween: 40     }   } }) ``` ```js const swiper = new Swiper('.swiper', {   slidesPerView: 1,   spaceBetween: 10,   // using "ratio" endpoints   breakpoints: {     '@0.75': {       slidesPerView: 2,       spaceBetween: 20,     },     '@1.00': {       slidesPerView: 3,       spaceBetween: 40,     },     '@1.50': {       slidesPerView: 4,       spaceBetween: 50,     },   } }); ``` |
| [breakpointsBase](#param-breakpointsBase) | 'container' \| CSSSelector \| 'window' | window | Base for breakpoints (beta). Can be `window` or `container`. If set to `window` (by default) then breakpoint keys mean window width. If set to `container` then breakpoint keys treated as swiper container width |
| [cardsEffect](#param-cardsEffect) | CardsEffectOptions |  | Object with Cards-effect parameters  ```js const swiper = new Swiper('.swiper', {   effect: 'cards',   cardsEffect: {     // ...   }, }); ``` |
| [centerInsufficientSlides](#param-centerInsufficientSlides) | boolean | false | When enabled it center slides if the amount of slides less than `slidesPerView`. Not intended to be used `loop` mode and `grid.rows` |
| [centeredSlides](#param-centeredSlides) | boolean | false | If `true`, then active slide will be centered, not always on the left side. |
| [centeredSlidesBounds](#param-centeredSlidesBounds) | boolean | false | If `true`, then active slide will be centered without adding gaps at the beginning and end of slider. Required `centeredSlides: true`. Not intended to be used with `loop` or `pagination` |
| [containerModifierClass](#param-containerModifierClass) | string | 'swiper-' | The beginning of the modifier CSS class that can be added to swiper container depending on different parameters |
| [controller](#param-controller) | ControllerOptions |  | Object with controller parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {   controller: {     inverse: true,   }, }); ``` |
| [coverflowEffect](#param-coverflowEffect) | CoverflowEffectOptions |  | Object with Coverflow-effect parameters.  ```js const swiper = new Swiper('.swiper', {   effect: 'coverflow',   coverflowEffect: {     rotate: 30,     slideShadows: false,   }, }); ``` |
| [createElements](#param-createElements) | boolean | false | When enabled Swiper will automatically wrap slides with swiper-wrapper element, and will create required elements for navigation, pagination and scrollbar they are enabled (with their respective params object or with boolean `true`)) |
| [creativeEffect](#param-creativeEffect) | CreativeEffectOptions |  | Object with Creative-effect parameters  ```js const swiper = new Swiper('.swiper', {   effect: 'creative',   creativeEffect: {     prev: {       // will set \`translateZ(-400px)\` on previous slides       translate: [0, 0, -400],     },     next: {       // will set \`translateX(100%)\` on next slides       translate: ['100%', 0, 0],     },   }, }); ``` |
| [cssMode](#param-cssMode) | boolean | false | When enabled it will use modern CSS Scroll Snap API. It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.  This is what is not supported when it is enabled:  - Cube effect - `speed` parameter may not have no effect - All transition start/end related events (use `slideChange` instead) - `slidesPerGroup` has limited support - `simulateTouch` doesn't have effect and "dragging" with mouse doesn't work - `resistance` doesn't have any effect - `allowSlidePrev/Next` - `swipeHandler`  In case if you use it with other effects, especially 3D effects, it is required to wrap slide's content with `<div className="swiper-slide-transform">` element. And if you use any custom styles on slides (like background colors, border radius, border, etc.), they should be set on `swiper-slide-transform` element instead.  ```html <div class="swiper">   <div class="swiper-wrapper">     <div class="swiper-slide">       <!-- wrap slide content with transform element -->       <div class="swiper-slide-transform">         ... slide content ...       </div>     </div>     ...   </div> </div> <script> const swiper = new Swiper('.swiper', {    effect: 'flip',    cssMode: true,  }); </script> ``` |
| [cubeEffect](#param-cubeEffect) | CubeEffectOptions |  | Object with Cube-effect parameters  ```js const swiper = new Swiper('.swiper', {   effect: 'cube',   cubeEffect: {     slideShadows: false,   }, }); ``` |
| [direction](#param-direction) | 'horizontal' \| 'vertical' | horizontal | Can be `'horizontal'` or `'vertical'` (for vertical slider). |
| [edgeSwipeDetection](#param-edgeSwipeDetection) | string \| boolean | 'false' | Enable to release Swiper events for swipe-back work in app. If set to `'prevent'` then it will prevent system swipe-back navigation instead. This feature works only with "touch" events (and not pointer events), so it will work on iOS/Android devices and won't work on Windows devices with pointer (touch) events. |
| [edgeSwipeThreshold](#param-edgeSwipeThreshold) | number | 20 | Area (in px) from left edge of the screen to release touch events for swipe-back in app |
| [effect](#param-effect) | 'slide' \| 'fade' \| 'cube' \| 'coverflow' \| 'flip' \| 'creative' \| 'cards' | slide | Transition effect. Can be `'slide'`, `'fade'`, `'cube'`, `'coverflow'`, `'flip'`, `'creative'` or `'cards'` |
| [enabled](#param-enabled) | boolean | true | Whether Swiper initially enabled. When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions |
| [eventsPrefix](#param-eventsPrefix) | string | '\`swiper\`' | Event name prefix for all DOM events emitted by Swiper Element (web component) |
| [fadeEffect](#param-fadeEffect) | FadeEffectOptions |  | Object with Fade-effect parameters  ```js const swiper = new Swiper('.swiper', {   effect: 'fade',   fadeEffect: {     crossFade: true   }, }); ``` |
| [flipEffect](#param-flipEffect) | FlipEffectOptions |  | Object with Flip-effect parameters  ```js const swiper = new Swiper('.swiper', {   effect: 'flip',   flipEffect: {     slideShadows: false,   }, }); ``` |
| [focusableElements](#param-focusableElements) | string | 'input, select, option, textarea, button, video, label' | CSS selector for focusable elements. Swiping will be disabled on such elements if they are "focused" |
| [followFinger](#param-followFinger) | boolean | true | If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it |
| [freeMode](#param-freeMode) | boolean \| FreeModeOptions |  | Enables free mode functionality. Object with free mode parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   freeMode: true, });  const swiper = new Swiper('.swiper', {   freeMode: {     enabled: true,     sticky: true,   }, }); ``` |
| [grabCursor](#param-grabCursor) | boolean | false | This option may a little improve desktop usability. If `true`, user will see the "grab" cursor when hover on Swiper |
| [grid](#param-grid) | GridOptions |  | Object with grid parameters to enable "multirow" slider.  ```js const swiper = new Swiper('.swiper', {   grid: {     rows: 2,   }, }); ``` |
| [hashNavigation](#param-hashNavigation) | boolean \| HashNavigationOptions |  | Enables hash url navigation to for slides. Object with hash navigation parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {   hashNavigation: {     replaceState: true,   }, }); ``` |
| [height](#param-height) | number \| null | null | Swiper height (in px). Parameter allows to force Swiper height. Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization  > Setting this parameter will make Swiper not responsive |
| [history](#param-history) | boolean \| HistoryOptions |  | Enables history push state where every slide will have its own url. In this parameter you have to specify main slides url like `"slides"` and specify every slide url using `data-history` attribute.  Object with history navigation parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {   history: {     replaceState: true,   }, }); ``` ```html <!-- will produce "slides/slide1" url in browser history --> <div class="swiper-slide" data-history="slide1"></div> ``` |
| [init](#param-init) | boolean | true | Whether Swiper should be initialised automatically when you create an instance. If disabled, then you need to init it manually by calling `swiper.init()` |
| [initialSlide](#param-initialSlide) | number | 0 | Index number of initial slide. |
| [injectStyles](#param-injectStyles) | string\[\] |  | Inject text styles to the shadow DOM. Only for usage with Swiper Element |
| [injectStylesUrls](#param-injectStylesUrls) | string\[\] |  | Inject styles `<link>` s to the shadow DOM. Only for usage with Swiper Element |
| [keyboard](#param-keyboard) | boolean \| KeyboardOptions |  | Enables navigation through slides using keyboard. Object with keyboard parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {   keyboard: {     enabled: true,     onlyInViewport: false,   }, }); ``` |
|  | number | 0 | Number of next and previous slides to preload. Only applicable if using lazy loading. |
| [lazyPreloaderClass](#param-lazyPreloaderClass) | string | 'swiper-lazy-preloader' | CSS class name of lazy preloader |
| [longSwipes](#param-longSwipes) | boolean | true | Set to `false` if you want to disable long swipes |
| [longSwipesMs](#param-longSwipesMs) | number | 300 | Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes |
| [longSwipesRatio](#param-longSwipesRatio) | number | 0.5 | Ratio to trigger swipe to next/previous slide during long swipes |
| [loop](#param-loop) | boolean | false | Set to `true` to enable continuous loop mode  Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be:  - more than or equal to `slidesPerView` + `slidesPerGroup` (and `+ 1` in case of `centeredSlides`) - even to `slidesPerGroup` (or use `loopAddBlankSlides` parameter) - even to `grid.rows` (or use `loopAddBlankSlides` parameter) |
| [loopAddBlankSlides](#param-loopAddBlankSlides) | boolean | true | Automatically adds blank slides if you use Grid or `slidesPerGroup` and the total amount of slides is not even to `slidesPerGroup` or to `grid.rows` |
| [loopAdditionalSlides](#param-loopAdditionalSlides) | number | 0 | Allows to increase amount of looped slides |
| [loopPreventsSliding](#param-loopPreventsSliding) | boolean | true | If enabled then slideNext/Prev will do nothing while slider is animating in loop mode |
| [maxBackfaceHiddenSlides](#param-maxBackfaceHiddenSlides) | number | 10 | If total number of slides less than specified here value, then Swiper will enable `backface-visibility: hidden` on slide elements to reduce visual "flicker" in Safari.  > It is not recommended to enable it on large amount of slides as it will reduce performance |
| [modules](#param-modules) | SwiperModule\[\] |  | Array with Swiper modules  ```js import Swiper from 'swiper'; import { Navigation, Pagination } from 'swiper/modules';  const swiper = new Swiper('.swiper', {    modules: [ Navigation, Pagination ],  }); ``` |
| [mousewheel](#param-mousewheel) | boolean \| MousewheelOptions |  | Enables navigation through slides using mouse wheel. Object with mousewheel parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {   mousewheel: {     invert: true,   }, }); ``` |
| [navigation](#param-navigation) | boolean \| NavigationOptions |  | Object with navigation parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   navigation: {     nextEl: '.swiper-button-next',     prevEl: '.swiper-button-prev',   }, }); ``` |
| [nested](#param-nested) | boolean | false | Set to `true` on Swiper for correct touch events interception. Use only on swipers that use same direction as the parent one |
| [noSwiping](#param-noSwiping) | boolean | true | Enable/disable swiping on elements matched to class specified in `noSwipingClass` |
| [noSwipingClass](#param-noSwipingClass) | string | 'swiper-no-swiping' | Specify `noSwiping` 's element css class |
| [noSwipingSelector](#param-noSwipingSelector) | string |  | Can be used instead of `noSwipingClass` to specify elements to disable swiping on. For example `'input'` will disable swiping on all inputs |
| [normalizeSlideIndex](#param-normalizeSlideIndex) | boolean | true | Normalize slide index. |
| [observeParents](#param-observeParents) | boolean | false | Set to `true` if you also need to watch Mutations for Swiper parent elements |
| [observeSlideChildren](#param-observeSlideChildren) | boolean | false | Set to `true` if you also need to watch Mutations for Swiper slide children elements |
| [observer](#param-observer) | boolean | false | Set to `true` to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides) |
| [on](#param-on) | object |  | Register event handlers |
| [onAny](#param-onAny) | function(handler) |  | Add event listener that will be fired on all events  ```js const swiper = new Swiper('.swiper', {    onAny(eventName, ...args) {      console.log('Event: ', eventName);      console.log('Event data: ', args);    }  }); ``` |
| [oneWayMovement](#param-oneWayMovement) | boolean | false | When enabled, will swipe slides only forward (one-way) regardless of swipe direction |
| [pagination](#param-pagination) | boolean \| PaginationOptions |  | Object with pagination parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   pagination: {     el: '.swiper-pagination',     type: 'bullets',   }, }); ``` |
| [parallax](#param-parallax) | boolean \| ParallaxOptions |  | Object with parallax parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   parallax: true, }); ``` |
| [passiveListeners](#param-passiveListeners) | boolean | true | Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices. But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter |
| [preventClicks](#param-preventClicks) | boolean | true | Set to `true` to prevent accidental unwanted clicks on links during swiping |
| [preventClicksPropagation](#param-preventClicksPropagation) | boolean | true | Set to `true` to stop clicks event propagation on links during swiping |
|  | boolean | false | When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition |
| [resistance](#param-resistance) | boolean | true | Set to `false` if you want to disable resistant bounds |
| [resistanceRatio](#param-resistanceRatio) | number | 0.85 | This option allows you to control resistance ratio |
| [resizeObserver](#param-resizeObserver) | boolean | true | When enabled it will use ResizeObserver (if supported by browser) on swiper container to detect container resize (instead of watching for window resize) |
| [rewind](#param-rewind) | boolean | false | Set to `true` to enable "rewind" mode. When enabled, clicking "next" navigation button (or calling `.slideNext()`) when on last slide will slide back to the first slide. Clicking "prev" navigation button (or calling `.slidePrev()`) when on first slide will slide forward to the last slide.  > Should not be used together with `loop` mode |
| [roundLengths](#param-roundLengths) | boolean | false | Set to `true` to round values of slides width and height to prevent blurry texts on usual resolution screens (if you have such) |
| [runCallbacksOnInit](#param-runCallbacksOnInit) | boolean | true | Fire Transition/SlideChange/Start/End events on swiper initialization. Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode |
| [scrollbar](#param-scrollbar) | boolean \| ScrollbarOptions |  | Object with scrollbar parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   scrollbar: {     el: '.swiper-scrollbar',     draggable: true,   }, }); ``` |
| [setWrapperSize](#param-setWrapperSize) | boolean | false | Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides. Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well |
| [shortSwipes](#param-shortSwipes) | boolean | true | Set to `false` if you want to disable short swipes |
| [simulateTouch](#param-simulateTouch) | boolean | true | If `true`, Swiper will accept mouse events like touch events (click and drag to change slides) |
| [slideActiveClass](#param-slideActiveClass) | string | 'swiper-slide-active' | CSS class name of currently active slide  > By changing classes you will also need to change Swiper's CSS to reflect changed classes  > Not supported in Swiper React/Vue components |
| [slideBlankClass](#param-slideBlankClass) | string | 'swiper-slide-blank' | CSS class name of the blank slide added by the loop mode (when `loopAddBlankSlides` is enabled)  > Not supported in Swiper React/Vue |
| [slideClass](#param-slideClass) | string | 'swiper-slide' | CSS class name of slide  > By changing classes you will also need to change Swiper's CSS to reflect changed classes  > Not supported in Swiper React/Vue components |
| [slideFullyVisibleClass](#param-slideFullyVisibleClass) | string | 'swiper-slide-fully-visible' | CSS class name of fully (when whole slide is in the viewport) visible slide  > Not supported in Swiper React/Vue |
| [slideNextClass](#param-slideNextClass) | string | 'swiper-slide-next' | CSS class name of slide which is right after currently active slide  > By changing classes you will also need to change Swiper's CSS to reflect changed classes  > Not supported in Swiper React/Vue |
| [slidePrevClass](#param-slidePrevClass) | string | 'swiper-slide-prev' | CSS class name of slide which is right before currently active slide  > By changing classes you will also need to change Swiper's CSS to reflect changed classes  > Not supported in Swiper React/Vue |
| [slideToClickedSlide](#param-slideToClickedSlide) | boolean | false | Set to `true` and click on any slide will produce transition to this slide |
| [slideVisibleClass](#param-slideVisibleClass) | string | 'swiper-slide-visible' | CSS class name of currently/partially visible slide  > By changing classes you will also need to change Swiper's CSS to reflect changed classes  > Not supported in Swiper React/Vue |
| [slidesOffsetAfter](#param-slidesOffsetAfter) | number | 0 | Add (in px) additional slide offset in the end of the container (after all slides) |
| [slidesOffsetBefore](#param-slidesOffsetBefore) | number | 0 | Add (in px) additional slide offset in the beginning of the container (before all slides) |
| [slidesPerGroup](#param-slidesPerGroup) | number | 1 | Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1 |
| [slidesPerGroupAuto](#param-slidesPerGroupAuto) | boolean | false | This param intended to be used only with `slidesPerView: 'auto'` and `slidesPerGroup: 1`. When enabled, it will skip all slides in view on `.slideNext()` & `.slidePrev()` methods calls, on Navigation "buttons" clicks and in autoplay. |
| [slidesPerGroupSkip](#param-slidesPerGroupSkip) | number | 0 | The parameter works in the following way: If `slidesPerGroupSkip` equals `0` (default), no slides are excluded from grouping, and the resulting behaviour is the same as without this change.  If `slidesPerGroupSkip` is equal or greater than `1` the first X slides are treated as single groups, whereas all following slides are grouped by the `slidesPerGroup` value. |
| [slidesPerView](#param-slidesPerView) | number \| 'auto' | 1 | Number of slides per view (slides visible at the same time on slider's container).  > `slidesPerView: 'auto'` is currently not compatible with multirow mode, when `grid.rows` > 1 |
| [snapToSlideEdge](#param-snapToSlideEdge) | boolean | false | When enabled, the swiper will always snap to slide edges rather than arbitrary positions. This prevents partial slides from appearing misaligned at the end of the swiper. Only applies when `slidesPerView` is fractional or `'auto'`, and is ignored in `loop` and `centeredSlides` modes. |
| [spaceBetween](#param-spaceBetween) | string \| number | '0' | Distance between slides in px.  > If you use "margin" css property to the elements which go into Swiper in which you pass "spaceBetween" into, navigation might not work properly. |
| [speed](#param-speed) | number | 300 | Duration of transition between slides (in ms) |
| [swipeHandler](#param-swipeHandler) | HTMLElement \| CSSSelector \| null | null | String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping |
| [swiperElementNodeName](#param-swiperElementNodeName) | string | 'SWIPER-CONTAINER' | The name of the swiper element node name; used for detecting web component rendering |
| [threshold](#param-threshold) | number | 5 | Threshold value in px. If "touch distance" will be lower than this value then swiper will not move |
| [thumbs](#param-thumbs) | ThumbsOptions |  | Object with thumbs component parameters  ```js const swiper = new Swiper('.swiper', {   ...   thumbs: {     swiper: thumbsSwiper   } }); ``` |
| [touchAngle](#param-touchAngle) | number | 45 | Allowable angle (in degrees) to trigger touch move |
| [touchEventsTarget](#param-touchEventsTarget) | 'container' \| 'wrapper' | wrapper | Target element to listen touch events on. Can be `'container'` (to listen for touch events on swiper) or `'wrapper'` (to listen for touch events on swiper-wrapper) |
| [touchMoveStopPropagation](#param-touchMoveStopPropagation) | boolean | false | If enabled, then propagation of "touchmove" will be stopped |
| [touchRatio](#param-touchRatio) | number | 1 | Touch ratio |
| [touchReleaseOnEdges](#param-touchReleaseOnEdges) | boolean | false | Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling. This feature works only with "touch" events (and not pointer events), so it will work on iOS/Android devices and won't work on Windows devices with pointer events. Also `threshold` parameter must be set to `0` |
| [touchStartForcePreventDefault](#param-touchStartForcePreventDefault) | boolean | false | Force to always prevent default for `touchstart` (`pointerdown`) event |
| [touchStartPreventDefault](#param-touchStartPreventDefault) | boolean | true | If disabled, `pointerdown` event won't be prevented |
| [uniqueNavElements](#param-uniqueNavElements) | boolean | true | If enabled (by default) and navigation elements' parameters passed as a string (like `".pagination"`) then Swiper will look for such elements through child elements first. Applies for pagination, prev/next buttons and scrollbar elements |
| [updateOnWindowResize](#param-updateOnWindowResize) | boolean | true | Swiper will recalculate slides position on window resize (orientationchange) |
| [url](#param-url) | string \| null | 'null' | Required for active slide detection when rendered on server-side and enabled history |
| [userAgent](#param-userAgent) | string \| null | 'null' | userAgent string. Required for browser/device detection when rendered on server-side |
| [virtual](#param-virtual) | boolean \| VirtualOptions |  | Enables virtual slides functionality. Object with virtual slides parameters or boolean `true` to enable with default settings.  ```js const swiper = new Swiper('.swiper', {   virtual: {     slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],   }, }); ``` |
| [virtualTranslate](#param-virtualTranslate) | boolean | false | Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set. Useful when you may need to create custom slide transition |
| [watchOverflow](#param-watchOverflow) | boolean | true | When enabled Swiper will be disabled and hide navigation buttons on case there are not enough slides for sliding. |
| [watchSlidesProgress](#param-watchSlidesProgress) | boolean | false | Enable this feature to calculate each slides progress and visibility (slides in viewport will have additional visible class) |
| [width](#param-width) | number \| null | null | Swiper width (in px). Parameter allows to force Swiper width. Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization  > Setting this parameter will make Swiper not responsive |
| [wrapperClass](#param-wrapperClass) | string | 'swiper-wrapper' | CSS class name of slides' wrapper  > By changing classes you will also need to change Swiper's CSS to reflect changed classes  > Not supported in Swiper React/Vue |
| [zoom](#param-zoom) | boolean \| ZoomOptions |  | Enables zooming functionality. Object with zoom parameters or boolean `true` to enable with default settings  ```js const swiper = new Swiper('.swiper', {   zoom: {     maxRatio: 5,   }, }); ``` |

## Methods & Properties

After we initialize Slider we have its initialized instance in variable (like `swiper` variable in example above) with helpful methods and properties:

<table><tbody><tr><td><a href="#prop-swiper-activeIndex">swiper.activeIndex</a></td><td>number</td><td><p>Index number of currently active slide</p><blockquote><p>Note, that in loop mode active index value will be always shifted on a number of looped slides</p></blockquote></td></tr><tr><td><a href="#prop-swiper-allowSlideNext">swiper.allowSlideNext</a></td><td>boolean</td><td><p>Disable / enable ability to slide to the next slides by assigning <code>false</code> / <code>true</code> to this property</p></td></tr><tr><td><a href="#prop-swiper-allowSlidePrev">swiper.allowSlidePrev</a></td><td>boolean</td><td><p>Disable / enable ability to slide to the previous slides by assigning <code>false</code> / <code>true</code> to this property</p></td></tr><tr><td><a href="#prop-swiper-allowTouchMove">swiper.allowTouchMove</a></td><td>boolean</td><td><p>Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning <code>false</code> / <code>true</code> to this property</p></td></tr><tr><td><a href="#prop-swiper-animating">swiper.animating</a></td><td>boolean</td><td><p><code>true</code> if swiper is in transition</p></td></tr><tr><td><a href="#prop-swiper-clickedIndex">swiper.clickedIndex</a></td><td>number</td><td><p>Index number of last clicked slide</p></td></tr><tr><td><a href="#prop-swiper-clickedSlide">swiper.clickedSlide</a></td><td>HTMLElement</td><td><p>Link to last clicked slide (HTMLElement)</p></td></tr><tr><td><a href="#prop-swiper-defaults">swiper.defaults</a></td><td>SwiperOptions</td><td><p>Swiper default options</p></td></tr><tr><td><a href="#prop-swiper-el">swiper.el</a></td><td>HTMLElement</td><td><p>Slider container HTML element</p></td></tr><tr><td><a href="#prop-swiper-enabled">swiper.enabled</a></td><td>boolean</td><td><p><code>true</code> if Swiper is enabled, <code>false</code> otherwise</p></td></tr><tr><td><a href="#prop-swiper-extendedDefaults">swiper.extendedDefaults</a></td><td>SwiperOptions</td><td><p>Object with global Swiper extended options</p></td></tr><tr><td><a href="#prop-swiper-height">swiper.height</a></td><td>number</td><td><p>Height of container</p></td></tr><tr><td><a href="#prop-swiper-isBeginning">swiper.isBeginning</a></td><td>boolean</td><td><p><code>true</code> if slider on most "left"/"top" position</p></td></tr><tr><td><a href="#prop-swiper-isEnd">swiper.isEnd</a></td><td>boolean</td><td><p><code>true</code> if slider on most "right"/"bottom" position</p></td></tr><tr><td><a href="#prop-swiper-isLocked">swiper.isLocked</a></td><td>boolean</td><td><p><code>true</code> if slide is "locked" (by <code>watchOverflow</code>) and slides can not be, e.g. when amount of slides is less that slides per view</p></td></tr><tr><td><a href="#prop-swiper-originalParams">swiper.originalParams</a></td><td>SwiperOptions</td><td><p>Object with original initialization parameters</p></td></tr><tr><td><a href="#prop-swiper-params">swiper.params</a></td><td>SwiperOptions</td><td><p>Object with passed initialization parameters</p></td></tr><tr><td><a href="#prop-swiper-previousIndex">swiper.previousIndex</a></td><td>number</td><td><p>Index number of previously active slide</p></td></tr><tr><td><a href="#prop-swiper-progress">swiper.progress</a></td><td>number</td><td><p>Current progress of wrapper translate (from 0 to 1)</p></td></tr><tr><td><a href="#prop-swiper-realIndex">swiper.realIndex</a></td><td>number</td><td><p>Index number of currently active slide considering rearranged slides in loop mode</p></td></tr><tr><td><a href="#prop-swiper-slides">swiper.slides</a></td><td>HTMLElement[]</td><td><p>Array of slides HTML elements. To get specific slide HTMLElement use <code>swiper.slides[1]</code></p></td></tr><tr><td><a href="#prop-swiper-slidesEl">swiper.slidesEl</a></td><td>HTMLElement</td><td><p>Wrapper HTML element</p></td></tr><tr><td><a href="#prop-swiper-slidesGrid">swiper.slidesGrid</a></td><td>number[]</td><td><p>Slides grid</p></td></tr><tr><td><a href="#prop-swiper-slidesSizesGrid">swiper.slidesSizesGrid</a></td><td>number[]</td><td><p>Array of widths for slides</p></td></tr><tr><td><a href="#prop-swiper-snapGrid">swiper.snapGrid</a></td><td>number[]</td><td><p>Slides snap grid</p></td></tr><tr><td><a href="#prop-swiper-snapIndex">swiper.snapIndex</a></td><td>number</td><td><p>Index number of current snap in <code>snapGrid</code></p></td></tr><tr><td><a href="#prop-swiper-swipeDirection">swiper.swipeDirection</a></td><td>'next' | 'prev'</td><td><p>Direction of sliding</p></td></tr><tr><td><a href="#prop-swiper-touches">swiper.touches</a></td><td>object</td><td><p>Object with the following touch event properties:</p><ul><li><code>swiper.touches.startX</code></li><li><code>swiper.touches.startY</code></li><li><code>swiper.touches.currentX</code></li><li><code>swiper.touches.currentY</code></li><li><code>swiper.touches.diff</code></li></ul></td></tr><tr><td><a href="#prop-swiper-translate">swiper.translate</a></td><td>number</td><td><p>Current value of wrapper translate</p></td></tr><tr><td><a href="#prop-swiper-width">swiper.width</a></td><td>number</td><td><p>Width of container</p></td></tr><tr><td><a href="#prop-swiper-wrapperEl">swiper.wrapperEl</a></td><td>HTMLElement</td><td><p>Wrapper HTML element</p></td></tr><tr><td colspan="2"><a href="#method-swiper-attachEvents">swiper.attachEvents()</a></td><td><p>Attach all events listeners again</p></td></tr><tr><td colspan="2"><a href="#method-swiper-changeDirection">swiper.changeDirection(direction, needUpdate)</a></td><td><p>Changes slider direction from horizontal to vertical and back.</p><ul><li>direction - 'horizontal' | 'vertical' - New direction. If not specified, then will automatically changed to opposite direction</li><li>needUpdate - boolean - Will call swiper.update(). Default true</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-changeLanguageDirection">swiper.changeLanguageDirection(direction)</a></td><td><p>Changes slider language</p><ul><li>direction - 'rtl' | 'ltr' - New direction. Should be `rtl` or `ltr`</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-destroy">swiper.destroy(deleteInstance, cleanStyles)</a></td><td><p>Destroy slider instance and detach all events listeners</p><ul><li>deleteInstance - boolean - Set it to false (by default it is true) to not to delete Swiper instance</li><li>cleanStyles - boolean - Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container. Useful if you need to destroy Swiper and to init again with new options or in different direction</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-detachEvents">swiper.detachEvents()</a></td><td><p>Detach all events listeners</p></td></tr><tr><td colspan="2"><a href="#method-swiper-disable">swiper.disable()</a></td><td><p>Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions</p></td></tr><tr><td colspan="2"><a href="#method-swiper-emit">swiper.emit(event, args)</a></td><td><p>Fire event on instance</p></td></tr><tr><td colspan="2"><a href="#method-swiper-enable">swiper.enable()</a></td><td><p>Enable Swiper (if it was disabled)</p></td></tr><tr><td colspan="2"><a href="#method-swiper-extendDefaults">swiper.extendDefaults(options)</a></td><td><p>Extend global Swiper defaults</p></td></tr><tr><td colspan="2"><a href="#method-swiper-getTranslate">swiper.getTranslate()</a></td><td><p>Get current value of swiper wrapper css3 transform translate</p></td></tr><tr><td colspan="2"><a href="#method-swiper-init">swiper.init(el)</a></td><td><p>Initialize slider</p></td></tr><tr><td colspan="2"><a href="#method-swiper-maxTranslate">swiper.maxTranslate()</a></td><td><p>Get current maximal translate value</p></td></tr><tr><td colspan="2"><a href="#method-swiper-minTranslate">swiper.minTranslate()</a></td><td><p>Get current minimal translate value</p></td></tr><tr><td colspan="2"><a href="#method-swiper-off">swiper.off(event, handler)</a></td><td><p>Remove event handler</p></td></tr><tr><td colspan="2"><a href="#method-swiper-offAny">swiper.offAny(handler)</a></td><td><p>Remove event listener that will be fired on all events</p></td></tr><tr><td colspan="2"><a href="#method-swiper-on">swiper.on(event, handler)</a></td><td><p>Add event handler</p></td></tr><tr><td colspan="2"><a href="#method-swiper-onAny">swiper.onAny(handler)</a></td><td><p>Add event listener that will be fired on all events</p></td></tr><tr><td colspan="2"><a href="#method-swiper-once">swiper.once(event, handler)</a></td><td><p>Add event handler that will be removed after it was fired</p></td></tr><tr><td colspan="2"><a href="#method-swiper-setGrabCursor">swiper.setGrabCursor()</a></td><td><p>Set grab cursor</p></td></tr><tr><td colspan="2"><a href="#method-swiper-setProgress">swiper.setProgress(progress, speed)</a></td><td><p>Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide</p><ul><li>progress - number - Swiper translate progress (from 0 to 1).</li><li>speed - number - Transition duration (in ms).</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-setTranslate">swiper.setTranslate(translate)</a></td><td><p>Set custom css3 transform's translate value for swiper wrapper</p></td></tr><tr><td colspan="2"><a href="#method-swiper-slideNext">swiper.slideNext(speed, runCallbacks)</a></td><td><p>Run transition to next slide.</p><ul><li>speed - number - Transition duration (in ms).</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-slidePrev">swiper.slidePrev(speed, runCallbacks)</a></td><td><p>Run transition to previous slide.</p><ul><li>speed - number - Transition duration (in ms).</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.</li></ul></td></tr><tr><td colspan="2"></td><td><p>Reset swiper position to currently active slide for the duration equal to 'speed' parameter.</p><ul><li>speed - number - Transition duration (in ms).</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-slideTo">swiper.slideTo(index, speed, runCallbacks)</a></td><td><p>Run transition to the slide with index number equal to 'index' parameter for the duration equal to 'speed' parameter.</p><ul><li>index - number - Index number of slide.</li><li>speed - number - Transition duration (in ms).</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-slideToClosest">swiper.slideToClosest(speed, runCallbacks)</a></td><td><p>Reset swiper position to closest slide/snap point for the duration equal to 'speed' parameter.</p><ul><li>speed - number - Transition duration (in ms).</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-slideToLoop">swiper.slideToLoop(index, speed, runCallbacks)</a></td><td><p>Does the same as.slideTo but for the case when used with enabled loop. So this method will slide to slides with realIndex matching to passed index</p><ul><li>index - number - Index number of slide.</li><li>speed - number - Transition duration (in ms).</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-slidesPerViewDynamic">swiper.slidesPerViewDynamic()</a></td><td><p>Get dynamically calculated amount of slides per view, useful only when slidesPerView set to <code>auto</code></p></td></tr><tr><td colspan="2"><a href="#method-swiper-translateTo">swiper.translateTo(translate, speed, runCallbacks, translateBounds)</a></td><td><p>Animate custom css3 transform's translate value for swiper wrapper</p><ul><li>translate - number - Translate value (in px)</li><li>speed - number - Transition duration (in ms)</li><li>runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events</li><li>translateBounds - boolean - Set it to false (by default it is true) and transition value can extend beyond min and max translate</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-unsetGrabCursor">swiper.unsetGrabCursor()</a></td><td><p>Unset grab cursor</p></td></tr><tr><td colspan="2"><a href="#method-swiper-update">swiper.update()</a></td><td><p>You should call it after you add/remove slides manually, or after you hide/show it, or do any custom DOM modifications with Swiper This method also includes subcall of the following methods which you can use separately:</p></td></tr><tr><td colspan="2"><a href="#method-swiper-updateAutoHeight">swiper.updateAutoHeight(speed)</a></td><td><p>Force swiper to update its height (when autoHeight enabled) for the duration equal to 'speed' parameter</p><ul><li>speed - number - Transition duration (in ms).</li></ul></td></tr><tr><td colspan="2"><a href="#method-swiper-updateProgress">swiper.updateProgress()</a></td><td><p>recalculate swiper progress</p></td></tr><tr><td colspan="2"><a href="#method-swiper-updateSize">swiper.updateSize()</a></td><td><p>recalculate size of swiper container</p></td></tr><tr><td colspan="2"><a href="#method-swiper-updateSlides">swiper.updateSlides()</a></td><td><p>recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript</p></td></tr><tr><td colspan="2"><a href="#method-swiper-updateSlidesClasses">swiper.updateSlidesClasses()</a></td><td><p>update active/prev/next classes on slides and bullets</p></td></tr><tr><td colspan="2"><a href="#method-swiper-use">swiper.use(modules)</a></td><td><p>Installs modules on Swiper in runtime.</p></td></tr></tbody></table>

## Events

Swiper comes with a bunch of useful events you can listen. Events can be assigned in two ways:

1. Using `on` parameter on swiper initialization:
	```js
	const swiper = new Swiper('.swiper', {
	  // ...
	  on: {
	    init: function () {
	      console.log('swiper initialized');
	    },
	  },
	});
	```
2. Using `on` method after swiper initialization.
	```js
	const swiper = new Swiper('.swiper', {
	  // ...
	});
	swiper.on('slideChange', function () {
	  console.log('slide changed');
	});
	```

Please note, that `this` keyword within event handler always points to Swiper instance

| [activeIndexChange](#event-activeIndexChange) | (swiper) | Event will fired on active index change |
| --- | --- | --- |
| [afterInit](#event-afterInit) | (swiper) | Event will fired right after initialization |
| [beforeDestroy](#event-beforeDestroy) | (swiper) | Event will be fired right before Swiper destroyed |
| [beforeInit](#event-beforeInit) | (swiper) | Event will fired right before initialization |
| [beforeLoopFix](#event-beforeLoopFix) | (swiper) | Event will be fired right before "loop fix" |
| [beforeResize](#event-beforeResize) | (swiper) | Event will fired before resize handler |
| [beforeSlideChangeStart](#event-beforeSlideChangeStart) | (swiper) | Event will fired before slide change transition start |
| [beforeTransitionStart](#event-beforeTransitionStart) | (swiper, speed, internal) | Event will fired before transition start |
| [breakpoint](#event-breakpoint) | (swiper, breakpointParams) | Event will be fired on breakpoint change |
| [changeDirection](#event-changeDirection) | (swiper) | Event will fired on direction change |
| [click](#event-click) | (swiper, event) | Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments. |
| [destroy](#event-destroy) | (swiper) | Event will be fired on swiper destroy |
| [doubleClick](#event-doubleClick) | (swiper, event) | Event will be fired when user double click/tap on Swiper |
| [doubleTap](#event-doubleTap) | (swiper, event) | Event will be fired when user double tap on Swiper's container. Receives `pointerup` event as an arguments |
| [fromEdge](#event-fromEdge) | (swiper) | Event will be fired when Swiper goes from beginning or end position |
| [init](#event-init) | (swiper) | Fired right after Swiper initialization.  > Note that with `swiper.on('init')` syntax it will work only in case you set `init: false` parameter.  ```js const swiper = new Swiper('.swiper', {   init: false,   // other parameters }); swiper.on('init', function() {  // do something }); // init Swiper swiper.init(); ``` ```js // Otherwise use it as the parameter: const swiper = new Swiper('.swiper', {   // other parameters   on: {     init: function () {       // do something     },   } }); ``` |
| [lock](#event-lock) | (swiper) | Event will be fired when swiper is locked (when `watchOverflow` enabled) |
| [loopFix](#event-loopFix) | (swiper) | Event will be fired after "loop fix" |
| [momentumBounce](#event-momentumBounce) | (swiper) | Event will be fired on momentum bounce |
| [observerUpdate](#event-observerUpdate) | (swiper) | Event will be fired if observer is enabled and it detects DOM mutations |
| [orientationchange](#event-orientationchange) | (swiper) | Event will be fired on orientation change (e.g. landscape -> portrait) |
| [progress](#event-progress) | (swiper, progress) | Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1 |
| [reachBeginning](#event-reachBeginning) | (swiper) | Event will be fired when Swiper reach its beginning (initial position) |
| [reachEnd](#event-reachEnd) | (swiper) | Event will be fired when Swiper reach last slide |
| [realIndexChange](#event-realIndexChange) | (swiper) | Event will fired on real index change |
| [resize](#event-resize) | (swiper) | Event will be fired on window resize right before swiper's onresize manipulation |
| [setTransition](#event-setTransition) | (swiper, transition) | Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments |
| [setTranslate](#event-setTranslate) | (swiper, translate) | Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments |
| [slideChange](#event-slideChange) | (swiper) | Event will be fired when currently active slide is changed |
| [slideChangeTransitionEnd](#event-slideChangeTransitionEnd) | (swiper) | Event will be fired after animation to other slide (next or previous). |
| [slideChangeTransitionStart](#event-slideChangeTransitionStart) | (swiper) | Event will be fired in the beginning of animation to other slide (next or previous). |
| [slideNextTransitionEnd](#event-slideNextTransitionEnd) | (swiper) | Same as "slideChangeTransitionEnd" but for "forward" direction only |
| [slideNextTransitionStart](#event-slideNextTransitionStart) | (swiper) | Same as "slideChangeTransitionStart" but for "forward" direction only |
| [slidePrevTransitionEnd](#event-slidePrevTransitionEnd) | (swiper) | Same as "slideChangeTransitionEnd" but for "backward" direction only |
| [slidePrevTransitionStart](#event-slidePrevTransitionStart) | (swiper) | Same as "slideChangeTransitionStart" but for "backward" direction only |
|  | (swiper) | Event will be fired in the end of animation of resetting slide to current one |
|  | (swiper) | Event will be fired in the beginning of animation of resetting slide to current one |
|  | (swiper, event) | Event will be fired with first touch/drag move |
|  | (swiper, event) | Event will be fired when user touch and move finger over Swiper and move it. Receives `pointermove` event as an arguments. |
| [slidesGridLengthChange](#event-slidesGridLengthChange) | (swiper) | Event will be fired when slides grid has changed |
| [slidesLengthChange](#event-slidesLengthChange) | (swiper) | Event will be fired when number of slides has changed |
| [slidesUpdated](#event-slidesUpdated) | (swiper) | Event will be fired after slides and their sizes are calculated and updated |
| [snapGridLengthChange](#event-snapGridLengthChange) | (swiper) | Event will be fired when snap grid has changed |
| [snapIndexChange](#event-snapIndexChange) | (swiper) | Event will fired on snap index change |
| [tap](#event-tap) | (swiper, event) | Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments. |
| [toEdge](#event-toEdge) | (swiper) | Event will be fired when Swiper goes to beginning or end position |
| [touchEnd](#event-touchEnd) | (swiper, event) | Event will be fired when user release Swiper. Receives `pointerup` event as an arguments. |
| [touchMove](#event-touchMove) | (swiper, event) | Event will be fired when user touch and move finger over Swiper. Receives `pointermove` event as an arguments. |
| [touchMoveOpposite](#event-touchMoveOpposite) | (swiper, event) | Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives `pointermove` event as an arguments. |
| [touchStart](#event-touchStart) | (swiper, event) | Event will be fired when user touch Swiper. Receives `pointerdown` event as an arguments. |
| [transitionEnd](#event-transitionEnd) | (swiper) | Event will be fired after transition. |
| [transitionStart](#event-transitionStart) | (swiper) | Event will be fired in the beginning of transition. |
| [unlock](#event-unlock) | (swiper) | Event will be fired when swiper is unlocked (when `watchOverflow` enabled) |
| [update](#event-update) | (swiper) | Event will be fired after swiper.update() call |

## Modules

#### Navigation Parameters

<table><tbody><tr><td><a href="#param-navigation">navigation</a></td><td>boolean | NavigationOptions</td><td></td><td><p>Object with navigation parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-navigation-addIcons">addIcons</a></td><td>boolean</td><td>true</td><td><p>Boolean property to add SVG icons to navigation buttons</p></td></tr><tr><td><a href="#param-navigation-disabledClass">disabledClass</a></td><td>string</td><td>'swiper-button-disabled'</td><td><p>CSS class name added to navigation button when it becomes disabled</p></td></tr><tr><td><a href="#param-navigation-enabled">enabled</a></td><td>boolean</td><td></td><td><p>Boolean property to use with breakpoints to enable/disable navigation on certain breakpoints</p></td></tr><tr><td><a href="#param-navigation-hiddenClass">hiddenClass</a></td><td>string</td><td>'swiper-button-hidden'</td><td><p>CSS class name added to navigation button when it becomes hidden</p></td></tr><tr><td><a href="#param-navigation-hideOnClick">hideOnClick</a></td><td>boolean</td><td>false</td><td><p>Toggle navigation buttons visibility after click on Slider's container</p></td></tr><tr><td><a href="#param-navigation-lockClass">lockClass</a></td><td>string</td><td>'swiper-button-lock'</td><td><p>CSS class name added to navigation button when it is disabled</p></td></tr><tr><td><a href="#param-navigation-navigationDisabledClass">navigationDisabledClass</a></td><td>string</td><td>'swiper-navigation-disabled'</td><td><p>CSS class name added on swiper container when navigation is disabled by breakpoint</p></td></tr><tr><td><a href="#param-navigation-nextEl">nextEl</a></td><td>HTMLElement | CSSSelector | null</td><td>null</td><td><p>String with CSS selector or HTML element of the element that will work like "next" button after click on it</p></td></tr><tr><td><a href="#param-navigation-prevEl">prevEl</a></td><td>HTMLElement | CSSSelector | null</td><td>null</td><td><p>String with CSS selector or HTML element of the element that will work like "prev" button after click on it</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Navigation Methods

<table><tbody><tr><td><a href="#prop-swiper-navigation-nextEl">swiper.navigation.nextEl</a></td><td>HTMLElement</td><td><p>HTMLElement of "next" navigation button</p></td></tr><tr><td><a href="#prop-swiper-navigation-prevEl">swiper.navigation.prevEl</a></td><td>HTMLElement</td><td><p>HTMLElement of "previous" navigation button</p></td></tr><tr><td colspan="2"><a href="#method-swiper-navigation-destroy">swiper.navigation.destroy()</a></td><td><p>Destroy navigation</p></td></tr><tr><td colspan="2"><a href="#method-swiper-navigation-init">swiper.navigation.init()</a></td><td><p>Initialize navigation</p></td></tr><tr><td colspan="2"><a href="#method-swiper-navigation-update">swiper.navigation.update()</a></td><td><p>Update navigation buttons state (enabled/disabled)</p></td></tr></tbody></table>

#### Navigation Events

| [navigationHide](#event-navigationHide) | (swiper) | Event will be fired on navigation hide |
| --- | --- | --- |
| [navigationNext](#event-navigationNext) | (swiper) | Event will be fired on navigation next button click |
| [navigationPrev](#event-navigationPrev) | (swiper) | Event will be fired on navigation prev button click |
| [navigationShow](#event-navigationShow) | (swiper) | Event will be fired on navigation show |

#### Navigation CSS Custom Properties

```
{
  --swiper-navigation-size: 44px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
}
```

### Pagination

#### Pagination Parameters

<table><tbody><tr><td><a href="#param-pagination">pagination</a></td><td>boolean | PaginationOptions</td><td></td><td><p>Object with pagination parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-pagination-bulletActiveClass">bulletActiveClass</a></td><td>string</td><td>'swiper-pagination-bullet-active'</td><td><p>CSS class name of currently active pagination bullet</p></td></tr><tr><td><a href="#param-pagination-bulletClass">bulletClass</a></td><td>string</td><td>'swiper-pagination-bullet'</td><td><p>CSS class name of single pagination bullet</p></td></tr><tr><td><a href="#param-pagination-bulletElement">bulletElement</a></td><td>string</td><td>'span'</td><td><p>Defines which HTML tag will be used to represent single pagination bullet. Only for <code>'bullets'</code> pagination type.</p></td></tr><tr><td><a href="#param-pagination-clickable">clickable</a></td><td>boolean</td><td>false</td><td><p>If <code>true</code> then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type</p></td></tr><tr><td><a href="#param-pagination-clickableClass">clickableClass</a></td><td>string</td><td>'swiper-pagination-clickable'</td><td><p>CSS class name set to pagination when it is clickable</p></td></tr><tr><td><a href="#param-pagination-currentClass">currentClass</a></td><td>string</td><td>'swiper-pagination-current'</td><td><p>CSS class name of the element with currently active index in "fraction" pagination</p></td></tr><tr><td><a href="#param-pagination-dynamicBullets">dynamicBullets</a></td><td>boolean</td><td>false</td><td><p>Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.</p></td></tr><tr><td><a href="#param-pagination-dynamicMainBullets">dynamicMainBullets</a></td><td>number</td><td>1</td><td><p>The number of main bullets visible when <code>dynamicBullets</code> enabled.</p></td></tr><tr><td><a href="#param-pagination-el">el</a></td><td>HTMLElement | CSSSelector | null</td><td>null</td><td><p>String with CSS selector or HTML element of the container with pagination</p></td></tr><tr><td><a href="#param-pagination-enabled">enabled</a></td><td>boolean</td><td></td><td><p>Boolean property to use with breakpoints to enable/disable pagination on certain breakpoints</p></td></tr><tr><td><a href="#param-pagination-formatFractionCurrent">formatFractionCurrent</a></td><td>function(number)</td><td></td><td><p>format fraction pagination current number. Function receives current number, and you need to return formatted value</p></td></tr><tr><td><a href="#param-pagination-formatFractionTotal">formatFractionTotal</a></td><td>function(number)</td><td></td><td><p>format fraction pagination total number. Function receives total number, and you need to return formatted value</p></td></tr><tr><td><a href="#param-pagination-hiddenClass">hiddenClass</a></td><td>string</td><td>'swiper-pagination-hidden'</td><td><p>CSS class name of pagination when it becomes inactive</p></td></tr><tr><td><a href="#param-pagination-hideOnClick">hideOnClick</a></td><td>boolean</td><td>true</td><td><p>Toggle (hide/show) pagination container visibility after click on Slider's container</p></td></tr><tr><td><a href="#param-pagination-horizontalClass">horizontalClass</a></td><td>string</td><td>'swiper-pagination-horizontal'</td><td><p>CSS class name set to pagination in horizontal Swiper</p></td></tr><tr><td><a href="#param-pagination-lockClass">lockClass</a></td><td>string</td><td>'swiper-pagination-lock'</td><td><p>CSS class name set to pagination when it is disabled</p></td></tr><tr><td><a href="#param-pagination-modifierClass">modifierClass</a></td><td>string</td><td>'swiper-pagination-'</td><td><p>The beginning of the modifier CSS class name that will be added to pagination depending on parameters</p></td></tr><tr><td><a href="#param-pagination-paginationDisabledClass">paginationDisabledClass</a></td><td>string</td><td>'swiper-pagination-disabled'</td><td><p>CSS class name added on swiper container and pagination element when pagination is disabled by breakpoint</p></td></tr><tr><td><a href="#param-pagination-progressbarFillClass">progressbarFillClass</a></td><td>string</td><td>'swiper-pagination-progressbar-fill'</td><td><p>CSS class name of pagination progressbar fill element</p></td></tr><tr><td><a href="#param-pagination-progressbarOpposite">progressbarOpposite</a></td><td>boolean</td><td>false</td><td><p>Makes pagination progressbar opposite to Swiper's <code>direction</code> parameter, means vertical progressbar for horizontal swiper direction and horizontal progressbar for vertical swiper direction</p></td></tr><tr><td><a href="#param-pagination-progressbarOppositeClass">progressbarOppositeClass</a></td><td>string</td><td>'swiper-pagination-progressbar-opposite'</td><td><p>CSS class name of pagination progressbar opposite</p></td></tr><tr><td><a href="#param-pagination-renderBullet">renderBullet</a></td><td>function(number, string)</td><td>null</td><td><p>This parameter allows totally customize pagination bullets, you need to pass here a function that accepts <code>index</code> number of pagination bullet and required element class name (<code>className</code>). Only for <code>'bullets'</code> pagination type</p><pre><code>const swiper = new Swiper('.swiper', {
  //...
  pagination: {
    //...
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});</code></pre></td></tr><tr><td><a href="#param-pagination-renderCustom">renderCustom</a></td><td>function(Swiper, number, number)</td><td>null</td><td><p>This parameter is required for <code>'custom'</code> pagination type where you have to specify how it should be rendered.</p><pre><code>const swiper = new Swiper('.swiper', {
  //...
  pagination: {
    //...
    renderCustom: function (swiper, current, total) {
      return current + ' of ' + total;
    },
  },
});</code></pre></td></tr><tr><td><a href="#param-pagination-renderFraction">renderFraction</a></td><td>function(string, string)</td><td>null</td><td><p>This parameter allows to customize "fraction" pagination html. Only for <code>'fraction'</code> pagination type</p><pre><code>const swiper = new Swiper('.swiper', {
  //...
  pagination: {
    //...
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              ' of ' +
              '<span class="' + totalClass + '"></span>';
    },
  },
});</code></pre></td></tr><tr><td><a href="#param-pagination-renderProgressbar">renderProgressbar</a></td><td>function(string)</td><td>null</td><td><p>This parameter allows to customize "progress" pagination. Only for <code>'progress'</code> pagination type</p><pre><code>const swiper = new Swiper('.swiper', {
  //...
  pagination: {
    //...
    renderProgressbar: function (progressbarFillClass) {
      return '<span class="' + progressbarFillClass + '"></span>';
    },
  },
});</code></pre></td></tr><tr><td><a href="#param-pagination-totalClass">totalClass</a></td><td>string</td><td>'swiper-pagination-total'</td><td><p>CSS class name of the element with total number of "snaps" in "fraction" pagination</p></td></tr><tr><td><a href="#param-pagination-type">type</a></td><td>'bullets' | 'fraction' | 'progressbar' | 'custom'</td><td>bullets</td><td><p>String with type of pagination. Can be <code>'bullets'</code>, <code>'fraction'</code>, <code>'progressbar'</code> or <code>'custom'</code></p></td></tr><tr><td><a href="#param-pagination-verticalClass">verticalClass</a></td><td>string</td><td>'swiper-pagination-vertical'</td><td><p>CSS class name set to pagination in vertical Swiper</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Pagination Methods

<table><tbody><tr><td><a href="#prop-swiper-pagination-bullets">swiper.pagination.bullets</a></td><td>HTMLElement[]</td><td><p>Array of pagination bullets HTML elements. To get specific slide HTMLElement use <code>swiper.pagination.bullets[1]</code>.</p></td></tr><tr><td><a href="#prop-swiper-pagination-el">swiper.pagination.el</a></td><td>HTMLElement</td><td><p>HTMLElement of pagination container element</p></td></tr><tr><td colspan="2"><a href="#method-swiper-pagination-destroy">swiper.pagination.destroy()</a></td><td><p>Destroy pagination</p></td></tr><tr><td colspan="2"><a href="#method-swiper-pagination-init">swiper.pagination.init()</a></td><td><p>Initialize pagination</p></td></tr><tr><td colspan="2"><a href="#method-swiper-pagination-render">swiper.pagination.render()</a></td><td><p>Render pagination layout</p></td></tr><tr><td colspan="2"><a href="#method-swiper-pagination-update">swiper.pagination.update()</a></td><td><p>Update pagination state (enabled/disabled/active)</p></td></tr></tbody></table>

#### Pagination Events

| [paginationHide](#event-paginationHide) | (swiper) | Event will be fired on pagination hide |
| --- | --- | --- |
| [paginationRender](#event-paginationRender) | (swiper, paginationEl) | Event will be fired after pagination rendered |
| [paginationShow](#event-paginationShow) | (swiper) | Event will be fired on pagination show |
| [paginationUpdate](#event-paginationUpdate) | (swiper, paginationEl) | Event will be fired when pagination updated |

#### Pagination CSS Custom Properties

```
{
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0, 0, 0, 0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
}
```

### Scrollbar

#### Scrollbar Parameters

<table><tbody><tr><td><a href="#param-scrollbar">scrollbar</a></td><td>boolean | ScrollbarOptions</td><td></td><td><p>Object with scrollbar parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-scrollbar-dragClass">dragClass</a></td><td>string</td><td>'swiper-scrollbar-drag'</td><td><p>Scrollbar draggable element CSS class</p></td></tr><tr><td><a href="#param-scrollbar-dragSize">dragSize</a></td><td>number | 'auto'</td><td>auto</td><td><p>Size of scrollbar draggable element in px</p></td></tr><tr><td><a href="#param-scrollbar-draggable">draggable</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to enable make scrollbar draggable that allows you to control slider position</p></td></tr><tr><td><a href="#param-scrollbar-el">el</a></td><td>HTMLElement | CSSSelector | null</td><td>null</td><td><p>String with CSS selector or HTML element of the container with scrollbar.</p></td></tr><tr><td><a href="#param-scrollbar-enabled">enabled</a></td><td>boolean</td><td></td><td><p>Boolean property to use with breakpoints to enable/disable scrollbar on certain breakpoints</p></td></tr><tr><td><a href="#param-scrollbar-hide">hide</a></td><td>boolean</td><td>true</td><td><p>Hide scrollbar automatically after user interaction</p></td></tr><tr><td><a href="#param-scrollbar-horizontalClass">horizontalClass</a></td><td>string</td><td>'swiper-scrollbar-horizontal'</td><td><p>CSS class name set to scrollbar in horizontal Swiper</p></td></tr><tr><td><a href="#param-scrollbar-lockClass">lockClass</a></td><td>string</td><td>'swiper-scrollbar-lock'</td><td><p>Scrollbar element additional CSS class when it is disabled</p></td></tr><tr><td><a href="#param-scrollbar-scrollbarDisabledClass">scrollbarDisabledClass</a></td><td>string</td><td>'swiper-scrollbar-disabled'</td><td><p>CSS class name added on swiper container and scrollbar element when scrollbar is disabled by breakpoint</p></td></tr><tr><td><a href="#param-scrollbar-snapOnRelease">snapOnRelease</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to snap slider position to slides when you release scrollbar</p></td></tr><tr><td><a href="#param-scrollbar-verticalClass">verticalClass</a></td><td>string</td><td>'swiper-scrollbar-vertical'</td><td><p>CSS class name set to scrollbar in vertical Swiper</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Scrollbar Methods

<table><tbody><tr><td><a href="#prop-swiper-scrollbar-dragEl">swiper.scrollbar.dragEl</a></td><td>HTMLElement</td><td><p>HTMLElement of Scrollbar draggable handler element</p></td></tr><tr><td><a href="#prop-swiper-scrollbar-el">swiper.scrollbar.el</a></td><td>HTMLElement</td><td><p>HTMLElement of Scrollbar container element</p></td></tr><tr><td colspan="2"><a href="#method-swiper-scrollbar-destroy">swiper.scrollbar.destroy()</a></td><td><p>Destroy scrollbar</p></td></tr><tr><td colspan="2"><a href="#method-swiper-scrollbar-init">swiper.scrollbar.init()</a></td><td><p>Initialize scrollbar</p></td></tr><tr><td colspan="2"><a href="#method-swiper-scrollbar-setTranslate">swiper.scrollbar.setTranslate()</a></td><td><p>Updates scrollbar translate</p></td></tr><tr><td colspan="2"><a href="#method-swiper-scrollbar-updateSize">swiper.scrollbar.updateSize()</a></td><td><p>Updates scrollbar track and handler sizes</p></td></tr></tbody></table>

#### Scrollbar Events

| [scrollbarDragEnd](#event-scrollbarDragEnd) | (swiper, event) | Event will be fired on draggable scrollbar drag end |
| --- | --- | --- |
| [scrollbarDragMove](#event-scrollbarDragMove) | (swiper, event) | Event will be fired on draggable scrollbar drag move |
| [scrollbarDragStart](#event-scrollbarDragStart) | (swiper, event) | Event will be fired on draggable scrollbar drag start |

#### Scrollbar CSS Custom Properties

```
{
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
}
```

### Autoplay

#### Autoplay Parameters

<table><tbody><tr><td><a href="#param-autoplay">autoplay</a></td><td>boolean | AutoplayOptions</td><td></td><td><p>Object with autoplay parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
 autoplay: {
   delay: 5000,
 },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-autoplay-delay">delay</a></td><td>number</td><td>3000</td><td><p>Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled</p><p>If you need to specify different delay for specific slides you can do it by using <code>data-swiper-autoplay</code> (in ms) attribute on slide.</p><pre><code><!-- hold this slide for 2 seconds -->
<div class="swiper-slide" data-swiper-autoplay="2000"></code></pre></td></tr><tr><td></td><td>boolean</td><td>true</td><td><p>Set to <code>false</code> and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction</p></td></tr><tr><td><a href="#param-autoplay-pauseOnMouseEnter">pauseOnMouseEnter</a></td><td>boolean</td><td>false</td><td><p>When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.</p></td></tr><tr><td><a href="#param-autoplay-reverseDirection">reverseDirection</a></td><td>boolean</td><td>false</td><td><p>Enables autoplay in reverse direction</p></td></tr><tr><td><a href="#param-autoplay-stopOnLastSlide">stopOnLastSlide</a></td><td>boolean</td><td>false</td><td><p>Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)</p></td></tr><tr><td><a href="#param-autoplay-waitForTransition">waitForTransition</a></td><td>boolean</td><td>true</td><td><p>When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Autoplay Methods

<table><tbody><tr><td><a href="#prop-swiper-autoplay-paused">swiper.autoplay.paused</a></td><td>boolean</td><td><p>Whether autoplay is paused</p></td></tr><tr><td><a href="#prop-swiper-autoplay-running">swiper.autoplay.running</a></td><td>boolean</td><td><p>Whether autoplay enabled and running</p></td></tr><tr><td><a href="#prop-swiper-autoplay-timeLeft">swiper.autoplay.timeLeft</a></td><td>number</td><td><p>If autoplay is paused, it contains time left (in ms) before transition to next slide</p></td></tr><tr><td colspan="2"><a href="#method-swiper-autoplay-pause">swiper.autoplay.pause()</a></td><td><p>Pause autoplay</p></td></tr><tr><td colspan="2"><a href="#method-swiper-autoplay-resume">swiper.autoplay.resume()</a></td><td><p>Resume autoplay</p></td></tr><tr><td colspan="2"><a href="#method-swiper-autoplay-start">swiper.autoplay.start()</a></td><td><p>Start autoplay</p></td></tr><tr><td colspan="2"><a href="#method-swiper-autoplay-stop">swiper.autoplay.stop()</a></td><td><p>Stop autoplay</p></td></tr></tbody></table>

#### Autoplay Events

| [autoplay](#event-autoplay) | (swiper) | Event will be fired when slide changed with autoplay |
| --- | --- | --- |
| [autoplayPause](#event-autoplayPause) | (swiper) | Event will be fired on autoplay pause |
| [autoplayResume](#event-autoplayResume) | (swiper) | Event will be fired on autoplay resume |
| [autoplayStart](#event-autoplayStart) | (swiper) | Event will be fired in when autoplay started |
| [autoplayStop](#event-autoplayStop) | (swiper) | Event will be fired when autoplay stopped |
| [autoplayTimeLeft](#event-autoplayTimeLeft) | (swiper, timeLeft, percentage) | Event triggers continuously while autoplay is enabled. It contains time left (in ms) before transition to next slide and percentage of that time related to autoplay delay |

Looking for more advanced effects?

### Free Mode

#### Free Mode Parameters

<table><tbody><tr><td><a href="#param-freeMode">freeMode</a></td><td>boolean | FreeModeOptions</td><td></td><td><p>Enables free mode functionality. Object with free mode parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  freeMode: true,
});

const swiper = new Swiper('.swiper', {
  freeMode: {
    enabled: true,
    sticky: true,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-freeMode-enabled">enabled</a></td><td>boolean</td><td>false</td><td><p>Whether the free mode is enabled</p></td></tr><tr><td><a href="#param-freeMode-minimumVelocity">minimumVelocity</a></td><td>number</td><td>0.02</td><td><p>Minimum touchmove-velocity required to trigger free mode momentum</p></td></tr><tr><td><a href="#param-freeMode-momentum">momentum</a></td><td>boolean</td><td>true</td><td><p>If enabled, then slide will keep moving for a while after you release it</p></td></tr><tr><td><a href="#param-freeMode-momentumBounce">momentumBounce</a></td><td>boolean</td><td>true</td><td><p>Set to <code>false</code> if you want to disable momentum bounce in free mode</p></td></tr><tr><td><a href="#param-freeMode-momentumBounceRatio">momentumBounceRatio</a></td><td>number</td><td>1</td><td><p>Higher value produces larger momentum bounce effect</p></td></tr><tr><td><a href="#param-freeMode-momentumRatio">momentumRatio</a></td><td>number</td><td>1</td><td><p>Higher value produces larger momentum distance after you release slider</p></td></tr><tr><td><a href="#param-freeMode-momentumVelocityRatio">momentumVelocityRatio</a></td><td>number</td><td>1</td><td><p>Higher value produces larger momentum velocity after you release slider</p></td></tr><tr><td><a href="#param-freeMode-sticky">sticky</a></td><td>boolean</td><td>false</td><td><p>Set to enabled to enable snap to slides positions in free mode</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

### Grid

#### Grid Parameters

<table><tbody><tr><td><a href="#param-grid">grid</a></td><td>GridOptions</td><td></td><td><p>Object with grid parameters to enable "multirow" slider.</p><pre><code>const swiper = new Swiper('.swiper', {
  grid: {
    rows: 2,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-grid-fill">fill</a></td><td>'row' | 'column'</td><td>column</td><td><p>Can be <code>'column'</code> or <code>'row'</code>. Defines how slides should fill rows, by column or by row</p><blockquote><p>if used with loop mode make sure number of slides is even specified in loop mode requirements, or enable <code>loopAddBlankSlides</code> parameter</p></blockquote></td></tr><tr><td><a href="#param-grid-rows">rows</a></td><td>number</td><td>1</td><td><p>Number of slides rows, for multirow layout</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

### Manipulation

Remove

Add

Manipulation module adds useful Swiper methods to manipulate slides. It makes sense to use it only with Swiper Core version, not intended to be uses with Swiper React or Vue.

#### Manipulation Methods

<table><tbody><tr><td colspan="2"><a href="#method-swiper-addSlide">swiper.addSlide(index, slides)</a></td><td><p>Add new slides to the required index. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:</p><pre><code>addSlide(1, '<div class="swiper-slide">Slide 10"</div>')

addSlide(1, [
 '<div class="swiper-slide">Slide 10"</div>',
 '<div class="swiper-slide">Slide 11"</div>'
]);</code></pre></td></tr><tr><td colspan="2"><a href="#method-swiper-appendSlide">swiper.appendSlide(slides)</a></td><td><p>Add new slides to the end. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:</p><pre><code>appendSlide('<div class="swiper-slide">Slide 10"</div>')

appendSlide([
 '<div class="swiper-slide">Slide 10"</div>',
 '<div class="swiper-slide">Slide 11"</div>'
]);</code></pre></td></tr><tr><td colspan="2"><a href="#method-swiper-prependSlide">swiper.prependSlide(slides)</a></td><td><p>Add new slides to the beginning. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:</p><pre><code>prependSlide('<div class="swiper-slide">Slide 0"</div>')

prependSlide([
 '<div class="swiper-slide">Slide 1"</div>',
 '<div class="swiper-slide">Slide 2"</div>'
]);</code></pre></td></tr><tr><td colspan="2"><a href="#method-swiper-removeAllSlides">swiper.removeAllSlides()</a></td><td><p>Remove all slides</p></td></tr><tr><td colspan="2"><a href="#method-swiper-removeSlide">swiper.removeSlide(slideIndex)</a></td><td><p>Remove selected slides. slideIndex could be a number with slide index to remove or array with indexes.</p><pre><code>removeSlide(0); // remove first slide
removeSlide([0, 1]); // remove first and second slides
removeAllSlides();    // Remove all slides</code></pre></td></tr></tbody></table>

### Parallax

Swiper supports parallax transition effects for swiper/slides nested elements. There are two types of parallax elements supported:

- Direct child elements of `swiper`. Parallax effect for such elements will depend on total slider progress. Useful for parallax backgrounds
- Slides child elements. Parallax effect for such elements will depend on slide progress

To enable parallax effects you need to init Swiper with passed `parallax:true` parameter and add one of the following (or mix) attributes to required elements:

- `data-swiper-parallax` - enable transform-translate parallax transition. This attribute may accept:
	- `number` - value in px (as for title, subtitle in example above) to move element depending on progress. In this case such element will be moved on ± this value in px depending on slide position (next or previous)
		- `percentage` - (as for "parallax-bg") to move element depending on progress and on its size. In this case such element will be moved on ± this percentage of its size (width in horizontal direction, and height in vertical direction) depending on slide position (next or previous). So if element has 400px width and you specified data-swiper-parallax="50%" then it will be moved on ± 200px
- `data-swiper-parallax-x` - same but for x-axis direction
- `data-swiper-parallax-y` - same but for y-axis direction
- `data-swiper-parallax-scale` - scale ratio of the parallax element when it is in "inactive" (not on active slide) state
- `data-swiper-parallax-opacity` - opacity of the parallax element when it is in "inactive" (not on active slide) state
- `data-swiper-parallax-duration` - custom transition duration for parallax elements
```html
<div class="swiper">
  <!-- Parallax background element -->
  <div
    class="parallax-bg"
    style="background-image:url(path/to/image.jpg)"
    data-swiper-parallax="-23%"
  ></div>
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <!-- Each slide has parallax title -->
      <div class="title" data-swiper-parallax="-100">Slide 1</div>
      <!-- Parallax subtitle -->
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <!-- And parallax text with custom transition duration -->
      <div
        class="text"
        data-swiper-parallax="-300"
        data-swiper-parallax-duration="600"
      >
        <p>Lorem ipsum dolor sit amet, ...</p>
      </div>
      <!-- Opacity parallax -->
      <div data-swiper-parallax-opacity="0.5">I will change opacity</div>
      <!-- Scale parallax -->
      <div data-swiper-parallax-scale="0.15">I will change scale</div>
    </div>
    ...
  </div>
</div>
```

#### Parallax Parameters

<table><tbody><tr><td><a href="#param-parallax">parallax</a></td><td>boolean | ParallaxOptions</td><td></td><td><p>Object with parallax parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  parallax: true,
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-parallax-enabled">enabled</a></td><td>boolean</td><td>false</td><td><p>Enable, if you want to use "parallaxed" elements inside of slider</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

Looking for more advanced effects?

### Lazy Loading

Since version 9 Swiper doesn't have a specific lazy loading API, as it relies on native browser lazy loading feature. To use lazy loading, we just need to set `loading="lazy"` on images and add preloader element:

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <!-- Lazy image -->
    <div class="swiper-slide">
      <img src="path/to/picture-1.jpg" loading="lazy" />
      <div class="swiper-lazy-preloader"></div>
    </div>

    <!-- Lazy image with srcset -->
    <div class="swiper-slide">
      <img
        src="path/to/logo-small.png"
        srcset="path/to/logo-large.png 2x"
        loading="lazy"
      />
      <div class="swiper-lazy-preloader"></div>
    </div>
  </div>
</div>
```

As you see:

- Lazy image must have `loading="lazy"` attribute
- Add animated preloader spinner to slide which will be removed automatically after image loaded:
```html
<div class="swiper-lazy-preloader"></div>
```

Or white one for dark layout:

```html
<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
```

### Fade Effect

Be sure to have the `effect` param set to `'fade'` in order for this to work.

Note that `crossFade` should be set to `true` in order to avoid seeing content behind or underneath.

#### Fade Effect Parameters

<table><tbody><tr><td><a href="#param-fadeEffect">fadeEffect</a></td><td>FadeEffectOptions</td><td></td><td><p>Object with Fade-effect parameters</p><pre><code>const swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-fadeEffect-crossFade">crossFade</a></td><td>boolean</td><td>false</td><td><p>Enables slides cross fade</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

### Coverflow Effect

Be sure to have the `effect` param set to `'coverflow'` in order for this to work.

#### Coverflow Effect Parameters

<table><tbody><tr><td><a href="#param-coverflowEffect">coverflowEffect</a></td><td>CoverflowEffectOptions</td><td></td><td><p>Object with Coverflow-effect parameters.</p><pre><code>const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-coverflowEffect-depth">depth</a></td><td>number</td><td>100</td><td><p>Depth offset in px (slides translate in Z axis)</p></td></tr><tr><td><a href="#param-coverflowEffect-modifier">modifier</a></td><td>number</td><td>1</td><td><p>Effect multiplier</p></td></tr><tr><td><a href="#param-coverflowEffect-rotate">rotate</a></td><td>number</td><td>50</td><td><p>Slide rotate in degrees</p></td></tr><tr><td><a href="#param-coverflowEffect-scale">scale</a></td><td>number</td><td>1</td><td><p>Slide scale effect</p></td></tr><tr><td><a href="#param-coverflowEffect-slideShadows">slideShadows</a></td><td>boolean</td><td>true</td><td><p>Enables slides shadows</p></td></tr><tr><td><a href="#param-coverflowEffect-stretch">stretch</a></td><td>number</td><td>0</td><td><p>Stretch space between slides</p><ul><li>a number is interpreted as pixels (e.g., <code>20</code> for 20px).</li><li>a string with a percentage (e.g., <code>"50%"</code>).</li></ul></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

Looking for more advanced effects?

### Flip Effect

Be sure to have the `effect` param set to `'flip'` in order for this to work.

#### Flip Effect Parameters

<table><tbody><tr><td><a href="#param-flipEffect">flipEffect</a></td><td>FlipEffectOptions</td><td></td><td><p>Object with Flip-effect parameters</p><pre><code>const swiper = new Swiper('.swiper', {
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-flipEffect-limitRotation">limitRotation</a></td><td>boolean</td><td>true</td><td><p>Limit edge slides rotation</p></td></tr><tr><td><a href="#param-flipEffect-slideShadows">slideShadows</a></td><td>boolean</td><td>true</td><td><p>Enables slides shadows</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

### Cube Effect

Be sure to have the `effect` param set to `'cube'` in order for this to work.

#### Cube Effect Parameters

<table><tbody><tr><td><a href="#param-cubeEffect">cubeEffect</a></td><td>CubeEffectOptions</td><td></td><td><p>Object with Cube-effect parameters</p><pre><code>const swiper = new Swiper('.swiper', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-cubeEffect-shadow">shadow</a></td><td>boolean</td><td>true</td><td><p>Enables main slider shadow</p></td></tr><tr><td><a href="#param-cubeEffect-shadowOffset">shadowOffset</a></td><td>number</td><td>20</td><td><p>Main shadow offset in px</p></td></tr><tr><td><a href="#param-cubeEffect-shadowScale">shadowScale</a></td><td>number</td><td>0.94</td><td><p>Main shadow scale ratio</p></td></tr><tr><td><a href="#param-cubeEffect-slideShadows">slideShadows</a></td><td>boolean</td><td>true</td><td><p>Enables slides shadows</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

### Cards Effect

Be sure to have the `effect` param set to `'cards'` in order for this to work.

#### Cards Effect Parameters

<table><tbody><tr><td><a href="#param-cardsEffect">cardsEffect</a></td><td>CardsEffectOptions</td><td></td><td><p>Object with Cards-effect parameters</p><pre><code>const swiper = new Swiper('.swiper', {
  effect: 'cards',
  cardsEffect: {
    // ...
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-cardsEffect-perSlideOffset">perSlideOffset</a></td><td>number</td><td>8</td><td><p>Offset distance per slide (in px)</p></td></tr><tr><td><a href="#param-cardsEffect-perSlideRotate">perSlideRotate</a></td><td>number</td><td>2</td><td><p>Rotate angle per slide (in degrees)</p></td></tr><tr><td><a href="#param-cardsEffect-rotate">rotate</a></td><td>boolean</td><td>true</td><td><p>Enables cards rotation</p></td></tr><tr><td><a href="#param-cardsEffect-slideShadows">slideShadows</a></td><td>boolean</td><td>true</td><td><p>Enables slides shadows</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

Looking for more advanced effects?

### Creative Effect

Be sure to have the `effect` param set to `'creative'` in order for this to work.

#### Creative Effect Parameters

<table><tbody><tr><td><a href="#param-creativeEffect">creativeEffect</a></td><td>CreativeEffectOptions</td><td></td><td><p>Object with Creative-effect parameters</p><pre><code>const swiper = new Swiper('.swiper', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-creativeEffect-limitProgress">limitProgress</a></td><td>number</td><td>1</td><td><p>Limit progress/offset to amount of side slides. If <code>1</code>, then slides all slides after prev/next will have same state. If <code>2</code>, then all slides after 2nd before/after active will have same state, etc.</p></td></tr><tr><td><a href="#param-creativeEffect-next">next</a></td><td>CreativeEffectTransform</td><td></td><td><p>Next slide transformations.</p><pre><code>{
  // Array with translate X, Y and Z values
  translate: (string | number)[];
  // Array with rotate X, Y and Z values (in deg)
  rotate?: number[];
  // Slide opacity
  opacity?: number;
  // Slide scale
  scale?: number;
  // Enables slide shadow
  shadow?: boolean;
  // Transform origin, e.g. `left bottom`
  origin?: string;
}</code></pre></td></tr><tr><td><a href="#param-creativeEffect-perspective">perspective</a></td><td>boolean</td><td>true</td><td><p>Enable this parameter if your custom transforms require 3D transformations (<code>translateZ</code>, <code>rotateX</code>, <code>rotateY</code> )</p></td></tr><tr><td><a href="#param-creativeEffect-prev">prev</a></td><td>CreativeEffectTransform</td><td></td><td><p>Previous slide transformations. Accepts object of the following type:</p><pre><code>{
  // Array with translate X, Y and Z values
  translate: (string | number)[];
  // Array with rotate X, Y and Z values (in deg)
  rotate?: number[];
  // Slide opacity
  opacity?: number;
  // Slide scale
  scale?: number;
  // Enables slide shadow
  shadow?: boolean;
  // Transform origin, e.g. `left bottom`
  origin?: string;
}</code></pre></td></tr><tr><td><a href="#param-creativeEffect-progressMultiplier">progressMultiplier</a></td><td>number</td><td>1</td><td><p>Allows to multiply slides transformations and opacity.</p></td></tr><tr><td><a href="#param-creativeEffect-shadowPerProgress">shadowPerProgress</a></td><td>boolean</td><td>false</td><td><p>Splits shadow "opacity" per slide based on <code>limitProgress</code> (only if transformation shadows enabled). E.g. setting <code>limitProgress: 2</code> and enabling <code>shadowPerProgress</code>, will set shadow opacity to <code>0.5</code> and <code>1</code> on two slides next to active. With this parameter disabled, all slides beside active will have shadow with <code>1</code> opacity</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

Looking for more advanced effects?

### Thumbs

In addition to [Controller](#controller) component Swiper comes with Thumbs component that is designed to work with additional thumbs swiper in a more correct way than Controller which is used for syncing two swipers.

#### Thumbs Parameters

<table><tbody><tr><td><a href="#param-thumbs">thumbs</a></td><td>ThumbsOptions</td><td></td><td><p>Object with thumbs component parameters</p><pre><code>const swiper = new Swiper('.swiper', {
  ...
  thumbs: {
    swiper: thumbsSwiper
  }
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-thumbs-autoScrollOffset">autoScrollOffset</a></td><td>number</td><td>0</td><td><p>Allows to set on which thumbs active slide from edge it should automatically move scroll thumbs. For example, if set to 1 and last visible thumb will be activated (1 from edge) it will auto scroll thumbs</p></td></tr><tr><td></td><td>boolean</td><td>true</td><td><p>When enabled multiple thumbnail slides may get activated</p></td></tr><tr><td><a href="#param-thumbs-slideThumbActiveClass">slideThumbActiveClass</a></td><td>string</td><td>'swiper-slide-thumb-active'</td><td><p>Additional class that will be added to activated thumbs swiper slide</p></td></tr><tr><td><a href="#param-thumbs-swiper">swiper</a></td><td>string | Swiper | null</td><td>'null'</td><td><p>Swiper instance of swiper used as thumbs or object with Swiper parameters to initialize thumbs swiper</p></td></tr><tr><td><a href="#param-thumbs-thumbsContainerClass">thumbsContainerClass</a></td><td>string</td><td>'swiper-thumbs'</td><td><p>Additional class that will be added to thumbs swiper</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Thumbs Methods

<table><tbody><tr><td><a href="#prop-swiper-thumbs-swiper">swiper.thumbs.swiper</a></td><td>Swiper</td><td><p>Swiper instance of thumbs swiper</p></td></tr><tr><td colspan="2"><a href="#method-swiper-thumbs-init">swiper.thumbs.init()</a></td><td><p>Initialize thumbs</p></td></tr><tr><td colspan="2"><a href="#method-swiper-thumbs-update">swiper.thumbs.update(initial, p)</a></td><td><p>Update thumbs</p></td></tr></tbody></table>

### Zoom

Swiper supports zoom images functionality (similar to what you see on iOS when browsing single photo) where you can zoom-in image by pinch gesture and or by zoom-in/out by double tap on it. In this case, additional layout is required:

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="swiper-zoom-container">
        <img src="path/to/image1.jpg" />
      </div>
    </div>
    <div class="swiper-slide">
      <div class="swiper-zoom-container">
        <img src="path/to/image2.jpg" />
      </div>
    </div>
    <div class="swiper-slide">Plain slide with text</div>
    <div class="swiper-slide">
      <!-- Override maxRatio parameter -->
      <div class="swiper-zoom-container" data-swiper-zoom="5">
        <img src="path/to/image1.jpg" />
      </div>
    </div>
  </div>
</div>
```
- All "zoomable" images should be wrapped with the div with `swiper-zoom-container` class.
- By default it expects to zoom one of the `img`, `picture` or `canvas` element. If you want to make zoom on some other custom element, then just add `swiper-zoom-target` class to this element. For example:
	```html
	<div class="swiper">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide">
	      <div class="swiper-zoom-container">
	        <!-- custom zoomable element -->
	        <div
	          class="swiper-zoom-target"
	          style="background-image: url(...)"
	        ></div>
	      </div>
	    </div>
	  </div>
	</div>
	```
- You can override `maxRatio` parameter for specific slides by using `data-swiper-zoom` attribute on zoom container.

#### Zoom Parameters

<table><tbody><tr><td><a href="#param-zoom">zoom</a></td><td>boolean | ZoomOptions</td><td></td><td><p>Enables zooming functionality. Object with zoom parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
  zoom: {
    maxRatio: 5,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-zoom-containerClass">containerClass</a></td><td>string</td><td>'swiper-zoom-container'</td><td><p>CSS class name of zoom container</p></td></tr><tr><td><a href="#param-zoom-limitToOriginalSize">limitToOriginalSize</a></td><td>boolean</td><td>false</td><td><p>When set to true, the image will not be scaled past 100% of its original size</p></td></tr><tr><td><a href="#param-zoom-maxRatio">maxRatio</a></td><td>number</td><td>3</td><td><p>Maximum image zoom multiplier</p></td></tr><tr><td><a href="#param-zoom-minRatio">minRatio</a></td><td>number</td><td>1</td><td><p>Minimal image zoom multiplier</p></td></tr><tr><td><a href="#param-zoom-panOnMouseMove">panOnMouseMove</a></td><td>boolean</td><td>false</td><td><p>When set to true, a zoomed in image will automatically pan while moving the mouse over the image</p></td></tr><tr><td><a href="#param-zoom-toggle">toggle</a></td><td>boolean</td><td>true</td><td><p>Enable/disable zoom-in by slide's double tap</p></td></tr><tr><td><a href="#param-zoom-zoomedSlideClass">zoomedSlideClass</a></td><td>string</td><td>'swiper-slide-zoomed'</td><td><p>CSS class name of zoomed in container</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Zoom Methods

<table><tbody><tr><td><a href="#prop-swiper-zoom-enabled">swiper.zoom.enabled</a></td><td>boolean</td><td><p>Whether the zoom module is enabled</p></td></tr><tr><td><a href="#prop-swiper-zoom-scale">swiper.zoom.scale</a></td><td>number</td><td><p>Current image scale ratio</p></td></tr><tr><td colspan="2"><a href="#method-swiper-zoom-disable">swiper.zoom.disable()</a></td><td><p>Disable zoom module</p></td></tr><tr><td colspan="2"><a href="#method-swiper-zoom-enable">swiper.zoom.enable()</a></td><td><p>Enable zoom module</p></td></tr><tr><td colspan="2"><a href="#method-swiper-zoom-in">swiper.zoom.in(ratio)</a></td><td><p>Zoom in image of the currently active slide. Optionally accepts custom zoom ratio</p></td></tr><tr><td colspan="2"><a href="#method-swiper-zoom-out">swiper.zoom.out()</a></td><td><p>Zoom out image of the currently active slide</p></td></tr><tr><td colspan="2"><a href="#method-swiper-zoom-toggle">swiper.zoom.toggle(event)</a></td><td><p>Toggle image zoom of the currently active slide</p></td></tr></tbody></table>

#### Zoom Events

| [zoomChange](#event-zoomChange) | (swiper, scale, imageEl, slideEl) | Event will be fired on zoom change |
| --- | --- | --- |

### Keyboard Control

← →

#### Keyboard Control Parameters

<table><tbody><tr><td><a href="#param-keyboard">keyboard</a></td><td>boolean | KeyboardOptions</td><td></td><td><p>Enables navigation through slides using keyboard. Object with keyboard parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-keyboard-enabled">enabled</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to enable keyboard control</p></td></tr><tr><td><a href="#param-keyboard-onlyInViewport">onlyInViewport</a></td><td>boolean</td><td>true</td><td><p>When enabled it will control sliders that are currently in viewport</p></td></tr><tr><td><a href="#param-keyboard-pageUpDown">pageUpDown</a></td><td>boolean</td><td>true</td><td><p>When enabled it will enable keyboard navigation by Page Up and Page Down keys</p></td></tr><tr><td><a href="#param-keyboard-speed">speed</a></td><td>number</td><td>undefined</td><td><p>Set the speed of keyboard navigation transitions (in ms)</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Keyboard Control Methods

<table><tbody><tr><td><a href="#prop-swiper-keyboard-enabled">swiper.keyboard.enabled</a></td><td>boolean</td><td><p>Whether the keyboard control is enabled</p></td></tr><tr><td colspan="2"><a href="#method-swiper-keyboard-disable">swiper.keyboard.disable()</a></td><td><p>Disable keyboard control</p></td></tr><tr><td colspan="2"><a href="#method-swiper-keyboard-enable">swiper.keyboard.enable()</a></td><td><p>Enable keyboard control</p></td></tr></tbody></table>

#### Keyboard Events

| [keyPress](#event-keyPress) | (swiper, keyCode) | Event will be fired on key press |
| --- | --- | --- |

### Mousewheel Control

↑

↓

#### Mousewheel Control Parameters

<table><tbody><tr><td><a href="#param-mousewheel">mousewheel</a></td><td>boolean | MousewheelOptions</td><td></td><td><p>Enables navigation through slides using mouse wheel. Object with mousewheel parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
  mousewheel: {
    invert: true,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-mousewheel-enabled">enabled</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to enable mousewheel control</p></td></tr><tr><td><a href="#param-mousewheel-eventsTarget">eventsTarget</a></td><td>HTMLElement | 'container' | 'wrapper' | CSSSelector</td><td>container</td><td><p>String with CSS selector or HTML element of the container accepting mousewheel events. By default it is swiper</p></td></tr><tr><td><a href="#param-mousewheel-forceToAxis">forceToAxis</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.</p></td></tr><tr><td><a href="#param-mousewheel-invert">invert</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to invert sliding direction</p></td></tr><tr><td><a href="#param-mousewheel-noMousewheelClass">noMousewheelClass</a></td><td>string</td><td>'swiper-no-mousewheel'</td><td><p>Scrolling on elements with this class will be ignored</p></td></tr><tr><td><a href="#param-mousewheel-releaseOnEdges">releaseOnEdges</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)</p></td></tr><tr><td><a href="#param-mousewheel-sensitivity">sensitivity</a></td><td>number</td><td>1</td><td><p>Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity</p></td></tr><tr><td><a href="#param-mousewheel-thresholdDelta">thresholdDelta</a></td><td>number | null</td><td>null</td><td><p>Minimum mousewheel scroll delta to trigger swiper slide change</p></td></tr><tr><td><a href="#param-mousewheel-thresholdTime">thresholdTime</a></td><td>number | null</td><td>null</td><td><p>Minimum mousewheel scroll time delta (in ms) to trigger swiper slide change</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Mousewheel Control Methods

<table><tbody><tr><td><a href="#prop-swiper-mousewheel-enabled">swiper.mousewheel.enabled</a></td><td>boolean</td><td><p>Whether the mousewheel control is enabled</p></td></tr><tr><td colspan="2"><a href="#method-swiper-mousewheel-disable">swiper.mousewheel.disable()</a></td><td><p>Disable mousewheel control</p></td></tr><tr><td colspan="2"><a href="#method-swiper-mousewheel-enable">swiper.mousewheel.enable()</a></td><td><p>Enable mousewheel control</p></td></tr></tbody></table>

#### Mousewheel Events

| [scroll](#event-scroll) | (swiper, event) | Event will be fired on mousewheel scroll |
| --- | --- | --- |

### Virtual Slides

Virtual Slides module allows to keep just required amount of slides in DOM. It is very useful in terms in performance and memory issues if you have a lot of slides, especially slides with heavyweight DOM tree or images.

Note that according to Virtual Slides realization it **doesn't work** with Grid module and `slidesPerView: 'auto'`

#### Virtual Slides Parameters

<table><tbody><tr><td><a href="#param-virtual">virtual</a></td><td>boolean | VirtualOptions</td><td></td><td><p>Enables virtual slides functionality. Object with virtual slides parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  virtual: {
    slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-virtual-addSlidesAfter">addSlidesAfter</a></td><td>number</td><td>0</td><td><p>Increases amount of pre-rendered slides after active slide</p></td></tr><tr><td><a href="#param-virtual-addSlidesBefore">addSlidesBefore</a></td><td>number</td><td>0</td><td><p>Increases amount of pre-rendered slides before active slide</p></td></tr><tr><td><a href="#param-virtual-cache">cache</a></td><td>boolean</td><td>true</td><td><p>Enables DOM cache of rendering slides html elements. Once they are rendered they will be saved to cache and reused from it.</p></td></tr><tr><td><a href="#param-virtual-enabled">enabled</a></td><td>boolean</td><td>false</td><td><p>Whether the virtual slides are enabled</p></td></tr><tr><td><a href="#param-virtual-renderExternal">renderExternal</a></td><td>function(VirtualData)</td><td>null</td><td><p>Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js). As an argument it accepts <code>data</code> object with the following properties:</p><ul><li><code>offset</code> - slides left/top offset in px</li><li><code>from</code> - index of first slide required to be rendered</li><li><code>to</code> - index of last slide required to be rendered</li><li><code>slides</code> - array with slide items to be rendered</li></ul></td></tr><tr><td><a href="#param-virtual-renderExternalUpdate">renderExternalUpdate</a></td><td>boolean</td><td>true</td><td><p>When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously</p></td></tr><tr><td><a href="#param-virtual-renderSlide">renderSlide</a></td><td>function(T, any)</td><td>null</td><td><p>Function to render slide. As an argument it accepts current slide item for <code>slides</code> array and index number of the current slide. Function must return an outer HTML of the swiper slide or slide HTML element.</p></td></tr><tr><td><a href="#param-virtual-slides">slides</a></td><td>T[]</td><td>[]</td><td><p>Array with slides</p></td></tr><tr><td><a href="#param-virtual-slidesPerViewAutoSlideSize">slidesPerViewAutoSlideSize</a></td><td>number</td><td>320</td><td><p>Slide size for slidesPerView: <code>auto</code> (in px)</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Virtual Slides Methods

<table><tbody><tr><td><a href="#prop-swiper-virtual-cache">swiper.virtual.cache</a></td><td>object</td><td><p>Object with cached slides HTML elements</p></td></tr><tr><td><a href="#prop-swiper-virtual-from">swiper.virtual.from</a></td><td>number</td><td><p>Index of first rendered slide</p></td></tr><tr><td><a href="#prop-swiper-virtual-slides">swiper.virtual.slides</a></td><td>T[]</td><td><p>Array with slide items passed by <code>virtual.slides</code> parameter</p></td></tr><tr><td><a href="#prop-swiper-virtual-to">swiper.virtual.to</a></td><td>number</td><td><p>Index of last rendered slide</p></td></tr><tr><td colspan="2"><a href="#method-swiper-virtual-appendSlide">swiper.virtual.appendSlide(slide)</a></td><td><p>Append slide. <code>slides</code> can be a single slide item or array with such slides.</p><blockquote><p>Only for Core version (in React & Vue it should be done by modifying slides array/data/source)</p></blockquote></td></tr><tr><td colspan="2"><a href="#method-swiper-virtual-prependSlide">swiper.virtual.prependSlide(slide)</a></td><td><p>Prepend slide. <code>slides</code> can be a single slide item or array with such slides.</p><blockquote><p>Only for Core version (in React & Vue it should be done by modifying slides array/data/source)</p></blockquote></td></tr><tr><td colspan="2"><a href="#method-swiper-virtual-removeAllSlides">swiper.virtual.removeAllSlides()</a></td><td><p>Remove all slides</p><blockquote><p>Only for Core version (in React & Vue it should be done by modifying slides array/data/source)</p></blockquote></td></tr><tr><td colspan="2"><a href="#method-swiper-virtual-removeSlide">swiper.virtual.removeSlide(slideIndexes)</a></td><td><p>Remove specific slide or slides. <code>slideIndexes</code> can be a number with slide index to remove or array with indexes.</p><blockquote><p>Only for Core version (in React & Vue it should be done by modifying slides array/data/source)</p></blockquote></td></tr><tr><td colspan="2"><a href="#method-swiper-virtual-update">swiper.virtual.update(force)</a></td><td><p>Update virtual slides state</p></td></tr></tbody></table>

#### Virtual Slides Dom

Since version 9, Swiper virtual slides can work with slides originally rendered in DOM. On initialize it will remove them from DOM, cache and then re-use the ones which are required:

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    ...
    <div class="swiper-slide">Slide 100</div>
  </div>
</div>
<script>
  const swiper = new Swiper('.swiper', {
    virtual: {
      enabled: true,
    },
  });
</script>
```

### Hash Navigation

https://myweb.site/

https://myweb.site/#slide-2

Hash navigation is intended to have a link to specific slide that allows to load page with specific slide opened.

To make it work, you need to enable it by passing `hashNavigation:true` parameter and adding slides hashes in `data-hash` attribute:

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide" data-hash="slide1">Slide 1</div>
    <div class="swiper-slide" data-hash="slide2">Slide 2</div>
    <div class="swiper-slide" data-hash="slide3">Slide 3</div>
    <div class="swiper-slide" data-hash="slide4">Slide 4</div>
    <div class="swiper-slide" data-hash="slide5">Slide 5</div>
    ...
  </div>
</div>
```
```js
const swiper = new Swiper('.swiper', {
  //enable hash navigation
  hashNavigation: true,
});
```

#### Hash Navigation Parameters

<table><tbody><tr><td><a href="#param-hashNavigation">hashNavigation</a></td><td>boolean | HashNavigationOptions</td><td></td><td><p>Enables hash url navigation to for slides. Object with hash navigation parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
  hashNavigation: {
    replaceState: true,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-hashNavigation-getSlideIndex">getSlideIndex</a></td><td>function(Swiper, string)</td><td></td><td><p>Designed to be used with Virtual slides when it is impossible to find slide in DOM by hash (e.g. not yet rendered)</p></td></tr><tr><td><a href="#param-hashNavigation-replaceState">replaceState</a></td><td>boolean</td><td>false</td><td><p>Works in addition to hashnav to replace current url state with the new one instead of adding it to history</p></td></tr><tr><td><a href="#param-hashNavigation-watchState">watchState</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> to enable also navigation through slides (when hashnav is enabled) by browser history or by setting directly hash on document location</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Hash Navigation Events

| [hashChange](#event-hashChange) | (swiper) | Event will be fired on window hash change |
| --- | --- | --- |
| [hashSet](#event-hashSet) | (swiper) | Event will be fired when swiper updates the hash |

### History Navigation

https://myweb.site/

https://myweb.site/slide-2/

#### History Navigation Parameters

<table><tbody><tr><td><a href="#param-history">history</a></td><td>boolean | HistoryOptions</td><td></td><td><p>Enables history push state where every slide will have its own url. In this parameter you have to specify main slides url like <code>"slides"</code> and specify every slide url using <code>data-history</code> attribute.</p><p>Object with history navigation parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
  history: {
    replaceState: true,
  },
});</code></pre><pre><code><!-- will produce "slides/slide1" url in browser history -->
<div class="swiper-slide" data-history="slide1"></div></code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-history-enabled">enabled</a></td><td>boolean</td><td>false</td><td><p>Enables History Plugin.</p></td></tr><tr><td><a href="#param-history-keepQuery">keepQuery</a></td><td>boolean</td><td>false</td><td><p>Keep query parameters when changing browser url.</p></td></tr><tr><td><a href="#param-history-key">key</a></td><td>string</td><td>'slides'</td><td><p>Url key for slides</p></td></tr><tr><td><a href="#param-history-replaceState">replaceState</a></td><td>boolean</td><td>false</td><td><p>Works in addition to hashnav or history to replace current url state with the new one instead of adding it to history</p></td></tr><tr><td><a href="#param-history-root">root</a></td><td>string</td><td></td><td><p>Swiper page root, useful to specify when you use Swiper history mode not on root website page. For example can be <code>https://my-website.com/</code> or <code>https://my-website.com/subpage/</code> or <code>/subpage/</code></p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

### Controller

#### Controller Parameters

<table><tbody><tr><td><a href="#param-controller">controller</a></td><td>ControllerOptions</td><td></td><td><p>Object with controller parameters or boolean <code>true</code> to enable with default settings</p><pre><code>const swiper = new Swiper('.swiper', {
  controller: {
    inverse: true,
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-controller-by">by</a></td><td>'slide' | 'container'</td><td>slide</td><td><p>Defines a way how to control another slider: slide by slide (with respect to other slider's grid) or depending on all slides/container (depending on total slider percentage).</p></td></tr><tr><td><a href="#param-controller-control">control</a></td><td>string | Swiper | Swiper[] | HTMLElement | null</td><td></td><td><p>Pass here another Swiper instance or array with Swiper instances that should be controlled by this Swiper. Also accepts string with CSS selector of Swiper element, or HTMLElement of Swiper element</p></td></tr><tr><td><a href="#param-controller-inverse">inverse</a></td><td>boolean</td><td>false</td><td><p>Set to <code>true</code> and controlling will be in inverse direction</p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

#### Controller Methods

| [swiper.controller.control](#prop-swiper-controller-control) | Swiper \| Swiper\[\] | Pass here another Swiper instance or array with Swiper instances that should be controlled by this Swiper |
| --- | --- | --- | --- |

### Accessibility (a11y)

Slide prev

Slide next

#### Accessibility Parameters

<table><tbody><tr><td><a href="#param-a11y">a11y</a></td><td>boolean | A11yOptions</td><td></td><td><p>Object with a11y parameters or boolean <code>true</code> to enable with default settings.</p><pre><code>const swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});</code></pre></td></tr><tr><td colspan="4">{</td></tr><tr><td><a href="#param-a11y-containerMessage">containerMessage</a></td><td>string | null</td><td>'null'</td><td><p>Message for screen readers for outer swiper container</p></td></tr><tr><td><a href="#param-a11y-containerRole">containerRole</a></td><td>string | null</td><td>'null'</td><td><p>Value of the "role" attribute to be set on the swiper container</p></td></tr><tr><td><a href="#param-a11y-containerRoleDescriptionMessage">containerRoleDescriptionMessage</a></td><td>string | null</td><td>'null'</td><td><p>Message for screen readers describing the role of outer swiper container</p></td></tr><tr><td><a href="#param-a11y-enabled">enabled</a></td><td>boolean</td><td>true</td><td><p>Enables A11y</p></td></tr><tr><td><a href="#param-a11y-firstSlideMessage">firstSlideMessage</a></td><td>string</td><td>'This is the first slide'</td><td><p>Message for screen readers for previous button when swiper is on first slide</p></td></tr><tr><td><a href="#param-a11y-id">id</a></td><td>string | number | null</td><td>'null'</td><td><p>Value of <code>id</code> attribute to be set on swiper-wrapper. If <code>null</code> will be generated automatically</p></td></tr><tr><td><a href="#param-a11y-itemRoleDescriptionMessage">itemRoleDescriptionMessage</a></td><td>string | null</td><td>'null'</td><td><p>Message for screen readers describing the role of slide element</p></td></tr><tr><td><a href="#param-a11y-lastSlideMessage">lastSlideMessage</a></td><td>string</td><td>'This is the last slide'</td><td><p>Message for screen readers for next button when swiper is on last slide</p></td></tr><tr><td><a href="#param-a11y-nextSlideMessage">nextSlideMessage</a></td><td>string</td><td>'Next slide'</td><td><p>Message for screen readers for next button</p></td></tr><tr><td><a href="#param-a11y-notificationClass">notificationClass</a></td><td>string</td><td>'swiper-notification'</td><td><p>CSS class name of A11y notification</p></td></tr><tr><td><a href="#param-a11y-paginationBulletMessage">paginationBulletMessage</a></td><td>string</td><td>'Go to slide {{index}}'</td><td><p>Message for screen readers for single pagination bullet</p></td></tr><tr><td><a href="#param-a11y-prevSlideMessage">prevSlideMessage</a></td><td>string</td><td>'Previous slide'</td><td><p>Message for screen readers for previous button</p></td></tr><tr><td><a href="#param-a11y-scrollOnFocus">scrollOnFocus</a></td><td>boolean</td><td>true</td><td><p>Enables scrolling to the slide that has been focused</p></td></tr><tr><td><a href="#param-a11y-slideLabelMessage">slideLabelMessage</a></td><td>string</td><td>'{{index}} / {{slidesLength}}'</td><td><p>Message for screen readers describing the label of slide element</p></td></tr><tr><td></td><td>string</td><td>'group'</td><td><p>Value of swiper slide <code>role</code> attribute</p></td></tr><tr><td><a href="#param-a11y-wrapperLiveRegion">wrapperLiveRegion</a></td><td>boolean</td><td>true</td><td><p>Whether or not the swiper-wrapper should have the <code>aria-live</code> attribute applied to it. If true, the value will be <code>off</code> when autoplay is enabled, otherwise it will be <code>polite</code></p></td></tr><tr><td colspan="4">}</td></tr></tbody></table>

## Custom Build

You have two options of making custom version of Swiper.

### Using JS Modules

If you use bundler with JS modules support in your project you can import only the modules you need:

```js
// Import Swiper and modules
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ...
});
```

The following modules are exported:

- `Virtual` - Virtual Slides module
- `Keyboard` - Keyboard Control module
- `Mousewheel` - Mousewheel Control module
- `Navigation` - Navigation module
- `Pagination` - Pagination module
- `Scrollbar` - Scrollbar module
- `Parallax` - Parallax module
- `FreeMode` - Free Mode module
- `Grid` - Grid module
- `Manipulation` - Slides manipulation module (only for Core version)
- `Zoom` - Zoom module
- `Controller` - Controller module
- `A11y` - Accessibility module
- `History` - History Navigation module
- `HashNavigation` - Hash Navigation module
- `Autoplay` - Autoplay module
- `EffectFade` - Fade Effect module
- `EffectCube` - Cube Effect module
- `EffectFlip` - Flip Effect module
- `EffectCoverflow` - Coverflow Effect module
- `EffectCards` - Cards Effect module
- `EffectCreative` - Creative Effect module
- `Thumbs` - Thumbs module

### Using Build Script

Swiper comes with gulp builder that allows to build custom library version where you may include only required modules. We need the following:

1. Download and unzip [Swiper GitHub repository](https://github.com/nolimits4web/swiper) to local folder
2. Install Node.js (if not installed)
3. Now, we need to install required dependencies. Go to the folder with downloaded and unzipped Swiper repository and execute in terminal:
	```
	npm install
	```
4. Open `scripts/build-config.js` file:
	```js
	module.exports = {
	  // remove modules you don't need
	  modules: [
	    'virtual',
	    'keyboard',
	    'mousewheel',
	    'navigation',
	    'pagination',
	    'scrollbar',
	    'parallax',
	    'zoom',
	    'controller',
	    'a11y',
	    'history',
	    'hash-navigation',
	    'autoplay',
	    'thumbs',
	    'free-mode',
	    'grid',
	    'manipulation',
	    'effect-fade',
	    'effect-cube',
	    'effect-flip',
	    'effect-coverflow',
	    'effect-creative',
	    'effect-cards',
	  ],
	};
	```
5. Now, we are ready to build custom version of Swiper:
	```
	npm run build:prod
	```
6. That is all. Generated CSS and JS files and their minified versions will be available in `dist/` folder.

## TypeScript Definitions

Swiper is fully typed, it exports `Swiper` and `SwiperOptions` types:

```ts
// main.ts
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};

const swiper = new Swiper('.swiper', swiperParams);
```

You can also check auto generated [TypeScript definitions explorer](https://swiperjs.com/types) for all the types, options, properties and methods.