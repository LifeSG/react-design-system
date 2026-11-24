/**
 * Self-contained equivalent of `applyBreakpointClasses` for use as an inline
 * `<script>`. It runs while the HTML is parsed, so the `fds-breakpoint-*`
 * classes are on `<body>` before hydration and avoid a layout shift.
 *
 * Tokens are read from `:root` because the theme element is not in the DOM yet.
 */
export declare const BREAKPOINT_INLINE_SCRIPT: string;
export declare function setupBreakpointListener(sourceElement: HTMLElement): (() => void) | undefined;
