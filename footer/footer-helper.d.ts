import { ResourceScheme } from "../theme/types";
import { TypographyLinkProps } from "../typography";
import { DisclaimerLinks } from "./types";
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}
export declare namespace FooterHelper {
    const getCopyrightInfo: (lastUpdated?: Date, resourceScheme?: ResourceScheme) => string;
    const getFooterLogo: (resourceScheme?: ResourceScheme) => "https://home.booking.gov.sg/images/bookingsg/footer.svg" | "https://mylegacy.life.gov.sg/images/site-logo.png" | "https://assets.life.gov.sg/ccube/logo-ccube.svg" | "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";
    const getDisclaimerLinks: (resourceScheme: ResourceScheme | undefined, customDisclaimerLinks?: DisclaimerLinks) => InternalDisclaimerLinks;
}
