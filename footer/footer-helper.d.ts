import type { ThemeType } from "../theme/types";
import type { TypographyLinkProps } from "../typography";
import type { DisclaimerLinks } from "./types";
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}
export declare class FooterHelper {
    static getCopyrightInfo(lastUpdated: Date | undefined, resourceScheme: ThemeType | undefined): string;
    private static getCopyrightText;
    static getFooterLogoAttribute(resourceScheme?: ThemeType): React.ImgHTMLAttributes<HTMLImageElement> & {
        logoType?: ThemeType;
    };
    static getDisclaimerLinks(resourceScheme: ThemeType | undefined, customDisclaimerLinks: DisclaimerLinks | undefined): InternalDisclaimerLinks;
}
