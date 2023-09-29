import { TextLinkProps } from "../text";
import { DisclaimerLinks } from "./types";
interface InternalDisclaimerLinks {
    privacy?: TextLinkProps | undefined;
    termsOfUse?: TextLinkProps | undefined;
    reportVulnerability?: TextLinkProps | undefined;
}
export declare namespace FooterHelper {
    const getCopyrightInfo: (lastUpdated?: Date) => string;
    const getDisclaimerLinks: (customDisclaimerLinks?: DisclaimerLinks) => InternalDisclaimerLinks;
}
export {};
