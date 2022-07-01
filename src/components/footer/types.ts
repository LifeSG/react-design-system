// Generated with util/create-component.js
import { TextLinkProps } from "../text/types";

type DisclaimerTextLinkProps = Omit<TextLinkProps, "children">;

export interface DisclaimerLinks {
    privacy?: DisclaimerTextLinkProps;
    termsOfUse?: DisclaimerTextLinkProps;
    reportVulnerability?: DisclaimerTextLinkProps;
}

export interface DisclaimerLinkTitles {
    privacy: string;
    termsOfUse: string;
    reportVulnerability: string;
}

export type AddonType = "download";

export interface FooterLinkProps<T = void> extends TextLinkProps {
    options?: T;
    "data-testid"?: string;
}

export interface FooterProps<T = void> {
    links?: FooterLinkProps<T>[][];
    children?: JSX.Element | JSX.Element[];
    lastUpdated: Date;
    disclaimerLinks?: DisclaimerLinks;
    addon?: AddonType;
    onFooterLinkClick?: (link: FooterLinkProps<T>) => void;
}
