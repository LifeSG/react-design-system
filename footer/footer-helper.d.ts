import { TextLinkProps } from "../text";
import { ResourceScheme } from "../theme";
import { DisclaimerLinks } from "./types";
export interface InternalDisclaimerLinks {
    privacy?: TextLinkProps | undefined;
    termsOfUse?: TextLinkProps | undefined;
    reportVulnerability?: TextLinkProps | undefined;
}
export declare namespace FooterHelper {
    const getCopyrightInfo: (lastUpdated?: Date, resourceScheme?: ResourceScheme) => string;
    const getFooterLogoAttribute: (resourceScheme?: ResourceScheme) => React.ImgHTMLAttributes<HTMLImageElement>;
    const getDisclaimerLinks: (resourceScheme: ResourceScheme | undefined, customDisclaimerLinks?: DisclaimerLinks) => InternalDisclaimerLinks;
}
