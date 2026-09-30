import React from "react";
import type { LocalNavDropdownProps } from "../types";
/**
 * A collapsible dropdown used for in-page navigation on mobile viewports.
 *
 * Use `LocalNavDropdown` when the page has multiple named sections and screen
 * width is insufficient for a persistent sidebar.
 *
 * @remarks
 * This component adopts a fundamentally different interaction model from
 * `LocalNavMenu`: it collapses into a single trigger button and uses a menu
 * overlay, making it suited for mobile while `LocalNavMenu` suits desktop.
 * @keywords in-page navigation, sections
 */
export declare const LocalNavDropdown: (props: LocalNavDropdownProps & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
