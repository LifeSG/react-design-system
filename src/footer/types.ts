import { TextLinkProps } from "../text/types";

type DisclaimerTextLinkProps = Omit<TextLinkProps, "children">;

export interface DisclaimerLinks {
    privacy?: DisclaimerTextLinkProps | undefined;
    termsOfUse?: DisclaimerTextLinkProps | undefined;
    reportVulnerability?: DisclaimerTextLinkProps | undefined;
}

export interface FooterLinkProps<T = void> extends TextLinkProps {
    /** Any custom attributes you would like to pass to the link */
    "data-options"?: T | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Props for the Footer component - page footer with links and branding.
 *
 * Renders a standardised footer with configurable link columns, an optional
 * app download section, logo, copyright text, and mandatory disclaimer links.
 *
 * @example
 * ```tsx
 * <Footer
 *     links={[[{ children: "Privacy", href: "/privacy" }]]}
 *     lastUpdated={new Date("2024-01-01")}
 * />
 * ```
 * @keywords site footer, copyright bar, bottom bar, page footer links, footer nav
 */
export interface FooterProps<T = void> {
    /** The footer links. Multi array to present in different columns */
    links?: FooterLinkProps<T>[][] | undefined;
    /** Indicates if the download app icons are to be present */
    showDownloadAddon?: boolean | undefined;
    /** Custom component. This overrides the logo, links and download section */
    children?: JSX.Element | JSX.Element[] | undefined;
    /** Custom disclaimer link attributes */
    disclaimerLinks?: DisclaimerLinks | undefined;
    /** A custom copyright text */
    copyrightInfo?: string | undefined;
    /** Custom logo source */
    logoSrc?: string | undefined;
    /** Last updated date value that is displayed in the bottom of the Footer */
    lastUpdated?: Date | undefined;
    /** Called when a footer link is clicked. */
    onFooterLinkClick?: ((link: FooterLinkProps<T>) => void) | undefined;
    /**
     * Determines if the footer content scales to full width.
     *
     * @default "default"
     */
    layout?: "default" | "stretch" | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
}

// TODO: Update component and migration
