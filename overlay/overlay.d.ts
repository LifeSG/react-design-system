import type { OverlayProps } from "./types";
/**
 * A full-screen dimmed overlay backdrop.
 *
 * Use `Overlay` as the backdrop for modal dialogs, drawers, and similar
 * blocking UI patterns. It manages body scroll-lock automatically and stacks
 * correctly when multiple overlays are open at once.
 * @keywords backdrop, dim, modal
 */
export declare const Overlay: (props: OverlayProps) => import("react/jsx-runtime").JSX.Element;
