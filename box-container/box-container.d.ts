import type { BoxContainerProps } from "./types";
/**
 * A titled, collapsible section container that groups related content behind a
 * labelled header.
 *
 * Use `BoxContainer` when you need to visually separate a block of content
 * under a heading and optionally allow users to collapse it. The header supports
 * a call-to-action slot and a visual status indicator.
 */
export declare const BoxContainer: ({ children, title, collapsible, expanded, callToActionComponent, displayState, subComponentTestIds, clickableHeader, className, ...otherProps }: BoxContainerProps) => import("react/jsx-runtime").JSX.Element;
