import type { TypographyLinkProps } from "../typography";
import type { V3_ResourceScheme } from "../v3_theme/types";
import type { DisclaimerLinks } from "./types";
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}
export declare class FooterHelper {
    static getCopyrightInfo(lastUpdated: Date | undefined, resourceScheme: V3_ResourceScheme | undefined): string;
    private static getCopyrightText;
    static getFooterLogoAttribute(resourceScheme?: V3_ResourceScheme): React.ImgHTMLAttributes<HTMLImageElement>;
    static getDisclaimerLinks(resourceScheme: V3_ResourceScheme | undefined, customDisclaimerLinks: DisclaimerLinks | undefined): InternalDisclaimerLinks;
}
