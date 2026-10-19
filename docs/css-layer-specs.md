Background

Next.js production builds produce non-deterministic CSS load order when importing multiple stylesheets from @lifesg/react-design-system. Because CSS specificity depends on source order, shuffled imports cause visual regressions that only appear in production. Styles that work in dev break after build.

Explore the use of native CSS Cascade Layers to achieve deterministic style order.

Requirements

Consumer migration path: what do existing apps need to change?

Granularity decision: is per-component layering (87 layers) necessary, or would coarser groupings (e.g., fds.base, fds.components, fds.overrides) suffice?

Evaluate impact on parent-child variant inheritance and consumer style overrides: CSS layers enforce strict cascade order regardless of intent. When a parent component defines variant styles and a child component extends it, the child layer takes precedence and the parent's variant styling is disregarded. Determine whether a viable mitigation exists, given the remaining options are all undesirable:

Redeclare variant styles in every child — defeats purpose of shared components

Refactor children to never override parent styles — impossible

Declare custom layer orders per variant relationship — layer management hell

References

Branch: rl/css-layers

MDN: CSS Cascade Layers
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers
