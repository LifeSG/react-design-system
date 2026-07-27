import type { FooterProps } from "./types";
/**
 * Site-wide footer with navigation links, branding, and legal copy.
 *
 * Use `Footer` at the bottom of a page to surface navigation links grouped
 * into columns, a theme-appropriate logo, download-app or resource add-ons,
 * and disclaimer links with auto-generated copyright text.
 */
export declare const Footer: <T>({ children, links, lastUpdated, disclaimerLinks, showDownloadAddon, showResourceAddon, logoSrc, logoAlt, copyrightInfo, onFooterLinkClick, layout, hideLogo, className, ...otherProps }: FooterProps<T>) => import("react/jsx-runtime").JSX.Element;
