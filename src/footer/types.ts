import { TypographyLinkProps } from "../typography";

type DisclaimerTextLinkProps = Omit<TypographyLinkProps, "children">;

export interface DisclaimerLinks {
    privacy?: DisclaimerTextLinkProps | undefined;
    termsOfUse?: DisclaimerTextLinkProps | undefined;
    reportVulnerability?: DisclaimerTextLinkProps | undefined;
}

export interface FooterLinkProps<T = void> extends TypographyLinkProps {
    /** Any custom attributes you would like to pass to the link */
    "data-options"?: T | undefined;
    "data-testid"?: string | undefined;
}

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
    onFooterLinkClick?: ((link: FooterLinkProps<T>) => void) | undefined;
    /** Determines if the content of the footer scales with the max width */
    layout?: "default" | "stretch" | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
}

// TODO: Update component and migration
