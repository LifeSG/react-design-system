import { ResourceScheme } from "../theme";
import { InternalDisclaimerLinks } from "./footer-helper";

const BaseDisclaimerLinks: InternalDisclaimerLinks = {
    privacy: {
        href: "https://www.life.gov.sg/privacy-statement",
        target: "_blank",
        rel: "noopener",
    },
    termsOfUse: {
        href: "https://www.life.gov.sg/terms-of-use",
        target: "_blank",
        rel: "noopener",
    },
    reportVulnerability: {
        href: "https://tech.gov.sg/report_vulnerability",
        target: "_blank",
        rel: "noopener",
        external: true,
    },
};

const BookingSgDisclaimerLinks: InternalDisclaimerLinks = {
    privacy: {
        href: "https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",
        target: "_blank",
        rel: "noopener",
    },
    termsOfUse: {
        href: "https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",
        target: "_blank",
        rel: "noopener",
    },
    reportVulnerability: {
        href: "https://tech.gov.sg/report_vulnerability",
        target: "_blank",
        rel: "noopener",
        external: true,
    },
};

const MyLegacyDisclaimerLinks: InternalDisclaimerLinks = {
    privacy: {
        href: "https://mylegacy.life.gov.sg/privacy-statement",
        target: "_blank",
        rel: "noopener",
    },
    termsOfUse: {
        href: "https://mylegacy.life.gov.sg/terms-of-use",
        target: "_blank",
        rel: "noopener",
    },
    reportVulnerability: {
        href: "https://tech.gov.sg/report_vulnerability",
        target: "_blank",
        rel: "noopener",
        external: true,
    },
};

export const getDefaultDisclaimerLink = (resourceScheme?: ResourceScheme) => {
    switch (resourceScheme) {
        case "bookingsg":
            return BookingSgDisclaimerLinks;
        case "mylegacy":
            return MyLegacyDisclaimerLinks;
        default:
            return BaseDisclaimerLinks;
    }
};
