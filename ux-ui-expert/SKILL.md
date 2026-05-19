---
name: ux-ui-expert
description: Specialized guidance for UX/UI design, usability principles, and high-quality web interface implementation. Use when designing new pages, reviewing UI code, or improving user experience.
---

# UX/UI Expert

This skill provides procedural knowledge and heuristics for building professional, intuitive, and accessible user interfaces.

## Core Design Principles (Laws of UX)

- **Hick's Law**: Simplify choices to reduce user cognitive load.
- **Fitts's Law**: Make important interactive elements large and easy to reach.
- **Jakob's Law**: Follow established web patterns (users prefer familiar interfaces).
- **Miller's Law**: Organize content into small, manageable chunks (7±2 items).
- **Aesthetic-Usability Effect**: Prioritize visual polish to improve perceived usability.

## Workflows

### 1. Designing a New Interface
1. **Define Intent**: Identify the primary action the user needs to take.
2. **Layout First**: Use CSS Grid/Flexbox for structural alignment. Follow "Optical Alignment" (adjust ±1px if it looks "off").
3. **Visual Hierarchy**: Use typography (weight, size) and color to guide the eye to the primary CTA.
4. **Iterative Refinement**: Add micro-interactions and polish (shadows, transitions).

### 2. Reviewing Existing UI
When asked to review or improve a UI, check against:
- **Accessibility**: ARIA labels, keyboard navigation, contrast ratios.
- **Responsiveness**: Breakpoints for mobile, tablet, and ultra-wide.
- **Consistency**: Unified spacing, color palette, and component styles.
- **Technical Standards**: See [references/web-guidelines.md](references/web-guidelines.md) for Vercel-style technical rules.

## Technical Standards

- **Interactions**: Keyboard operable, visible focus rings (`:focus-visible`), generous hit targets (44px+ on mobile).
- **Animations**: Prefer CSS/GPU-accelerated properties (`transform`, `opacity`). Never use `transition: all`.
- **Forms**: Active labels, clear error placement, "Enter to submit" support.

## References

- **[web-guidelines.md](references/web-guidelines.md)**: Detailed technical rules for high-quality web interfaces.
- **Laws of UX**: Integrated core principles for psychological design.
