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
    const getFooterLogo: (resourceScheme?: ResourceScheme) => "https://home.booking.gov.sg/images/bookingsg/footer.svg" | "https://mylegacy.life.gov.sg/images/site-logo.png" | "https://assets.life.gov.sg/ccube/logo-ccube.svg" | "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";
    const getDisclaimerLinks: (resourceScheme: ResourceScheme | undefined, customDisclaimerLinks?: DisclaimerLinks) => InternalDisclaimerLinks;
}
