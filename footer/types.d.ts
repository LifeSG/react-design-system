/// <reference types="react" />
import { TextLinkProps } from "../text/types";
declare type DisclaimerTextLinkProps = Omit<TextLinkProps, "children">;
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
}
export {};
