import type { DrawerProps } from "./types";
/**
 * A slide-in panel that overlays the page content.
 *
 * Use `Drawer` to surface supplementary content or navigation options without
 * navigating away from the current page. Focus is trapped inside the dialog
 * while it is open and returns to the triggering element on close.
 */
export declare const Drawer: ({ children, heading, show, onClose, onOverlayClick, className, ...otherProps }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
