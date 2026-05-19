# Reference: Web Interface Guidelines (Vercel)

These practical guidelines focus on high-quality technical implementation of web interfaces.

## Interactions
- **Keyboard works everywhere**: All flows must be keyboard-operable.
- **Clear focus**: Use `:focus-visible` for visible focus rings.
- **Hit targets**: Minimum 44px on mobile, ≥ 24px on desktop.
- **Respect zoom**: Never disable browser zoom.
- **Don’t block paste**: Never disable paste in inputs.
- **Optimistic updates**: Update UI immediately on success-likely actions.
- **Deep-link everything**: Persist UI state (filters, tabs) in the URL.
- **Links are links**: Use `<a>` or `<Link>` for navigation, not `<button>`.

## Animations
- **Honor `prefers-reduced-motion`**.
- **GPU-accelerated**: Use `transform` and `opacity`; avoid `width`, `height`, `top`, `left`.
- **Never `transition: all`**: Explicitly list properties.

## Layout
- **Optical alignment**: Adjust ±1px when perception beats geometry.
- **Responsive coverage**: Verify mobile, laptop, and ultra-wide.
- **Let the browser size things**: Prefer Flexbox/Grid over JS measurements.

## Content
- **Inline help first**: Prefer inline explanations over tooltips.
- **Accurate page titles**: `<title>` must reflect context.
- **Accessible content**: Set `aria-label`, `aria-hidden` where needed.
- **Semantics first**: Use `button`, `a`, `label` before ARIA.

## Forms
- **Enter submits**: Handle Enter key for form submission.
- **Labels everywhere**: Every control must have a associated `<label>`.
- **Don’t pre-disable submit**: Allow submission to surface validation errors.
- **Error placement**: Show errors next to fields; focus first error on submit.

## Copywriting
- **Active voice**: "Install the CLI" instead of "The CLI will be installed."
- **Action-oriented**: "Save API Key" instead of "Continue."
- **Be concise**: Use as few words as possible.
