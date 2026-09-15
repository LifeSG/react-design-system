import { ResourceScheme } from "../theme/types";
import { TypographyLinkProps } from "../typography";
import { DisclaimerLinks } from "./types";
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}
export declare namespace FooterHelper {
    const getCopyrightInfo: (lastUpdated: Date | undefined, resourceScheme: ResourceScheme | undefined) => string;
    const getFooterLogoAttribute: (resourceScheme?: ResourceScheme) => React.ImgHTMLAttributes<HTMLImageElement>;
    const getDisclaimerLinks: (resourceScheme: ResourceScheme | undefined, customDisclaimerLinks: DisclaimerLinks | undefined) => InternalDisclaimerLinks;
}
