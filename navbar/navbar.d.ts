import type React from "react";
import type { NavbarDrawerHandle, NavbarProps } from "./types";
/**
 * The main site navigation bar with desktop and mobile drawer views.
 *
 * Use `Navbar` to render the primary navigation header. It displays brand
 * logos, navigation items, and action buttons in a desktop bar, and
 * automatically collapses items into a slide-in drawer for mobile viewports.
 * @keywords brand, header, navigation
 */
export declare const Navbar: <T>(props: NavbarProps<T> & React.RefAttributes<NavbarDrawerHandle>) => React.ReactElement | null;
