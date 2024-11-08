import { V2_TextLinkProps } from "../v2_text";
import { V2_ResourceScheme } from "../v2_theme";
import { DisclaimerLinks } from "./types";
export interface InternalDisclaimerLinks {
    privacy?: V2_TextLinkProps | undefined;
    termsOfUse?: V2_TextLinkProps | undefined;
    reportVulnerability?: V2_TextLinkProps | undefined;
}
export declare namespace FooterHelper {
    const getCopyrightInfo: (lastUpdated?: Date, resourceScheme?: V2_ResourceScheme) => string;
    const getFooterLogo: (resourceScheme?: V2_ResourceScheme) => "https://home.booking.gov.sg/images/bookingsg/footer.svg" | "https://mylegacy.life.gov.sg/images/site-logo.png" | "https://assets.life.gov.sg/ccube/logo-ccube.svg" | "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";
    const getDisclaimerLinks: (resourceScheme: V2_ResourceScheme | undefined, customDisclaimerLinks?: DisclaimerLinks) => InternalDisclaimerLinks;
}
