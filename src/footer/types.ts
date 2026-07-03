import type { TypographyLinkProps } from "../typography";

type DisclaimerTextLinkProps = Omit<TypographyLinkProps, "children">;

/**
 * Override attributes for the built-in disclaimer links rendered at the bottom of the footer.
 *
 * Each key corresponds to a standard disclaimer link. When a key is omitted, the
 * default URL for the active theme is used. Provided values are merged with the
 * theme defaults, so only the attributes supplied are overridden.
 */
export interface DisclaimerLinks {
    privacy?: DisclaimerTextLinkProps | undefined;
    termsOfUse?: DisclaimerTextLinkProps | undefined;
    reportVulnerability?: DisclaimerTextLinkProps | undefined;
}

/**
 * Props for a single link rendered in the footer navigation columns.
 *
 * Extends `TypographyLinkProps`. The type parameter `T` is the shape of any
 * application-specific metadata attached to the link via `data-options`, and
 * is passed back through the `onFooterLinkClick` callback.
 */
export interface FooterLinkProps<T = void> extends TypographyLinkProps {
    /** Any custom attributes you would like to pass to the link */
    "data-options"?: T | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Props for the `Footer` component.
 *
 * The type parameter `T` flows through `FooterLinkProps` and is returned via
 * `onFooterLinkClick`, allowing consumers to attach typed metadata to each link.
 */
export interface FooterProps<T = void> {
    /** The footer links. Multi array to present in different columns */
    links?: FooterLinkProps<T>[][] | undefined;
    /** Indicates if the download app icons are to be present */
    showDownloadAddon?: boolean | undefined;
    /**
     * Indicates if additional app resources should be displayed.
     *
     * When both `showDownloadAddon` and `showResourceAddon` are `true`,
     * `showDownloadAddon` takes priority and the resource add-on is not rendered.
     */
    showResourceAddon?: boolean | undefined;
    /** Custom component. This overrides the logo, links and download section */
    children?: JSX.Element | JSX.Element[] | undefined;
    /**
     * Override attributes for the built-in disclaimer links.
     *
     * Each supplied key is merged with the theme defaults. Omitted keys fall
     * back to the default URLs for the active theme.
     */
    disclaimerLinks?: DisclaimerLinks | undefined;
    /** A custom copyright text */
    copyrightInfo?: string | undefined;
    /** Custom logo source */
    logoSrc?: string | undefined;
    /** Custom logo alt text */
    logoAlt?: string | undefined;
    /**
     * Date displayed in the copyright line as "Last updated D MMMM YYYY".
     *
     * @remarks Falls back to the current date when omitted.
     */
    lastUpdated?: Date | undefined;
    /**
     * Called when a footer navigation link is clicked.
     *
     * Receives the full `FooterLinkProps` for the clicked link. If the link
     * defines its own `onClick` handler, that handler takes priority and
     * `onFooterLinkClick` is not called.
     */
    onFooterLinkClick?: ((link: FooterLinkProps<T>) => void) | undefined;
    /**
     * Controls whether the footer content is constrained to a maximum width or
     * stretches to fill the full viewport width.
     *
     * @default "default"
     */
    layout?: "default" | "stretch" | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.
     */
    hideLogo?: boolean | undefined;
}

// TODO: Update component and migration
