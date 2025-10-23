import { ResourceScheme } from "../theme/types";
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

const IMDADisclaimerLinks: InternalDisclaimerLinks = {
    privacy: {
        href: "https://www.imda.gov.sg/privacy-statement",
        target: "_blank",
        rel: "noopener",
    },
    termsOfUse: {
        href: "https://www.imda.gov.sg/terms-of-use",
        target: "_blank",
        rel: "noopener",
    },
    reportVulnerability: {
        href: "https://www.tech.gov.sg/report_vulnerability",
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

const SupportGoWhereDisclaimerLinks: InternalDisclaimerLinks = {
    privacy: {
        href: "https://supportgowhere.life.gov.sg/privacy-statement.pdf",
        target: "_blank",
        rel: "noopener",
    },
    termsOfUse: {
        href: "https://supportgowhere.life.gov.sg/terms-of-use.pdf",
        target: "_blank",
        rel: "noopener",
    },
    reportVulnerability: {
        href: "https://www.tech.gov.sg/report_vulnerability",
        target: "_blank",
        rel: "noopener",
        external: true,
    },
};

export const getDefaultDisclaimerLinks = (resourceScheme?: ResourceScheme) => {
    switch (resourceScheme) {
        case "bookingsg":
            return BookingSgDisclaimerLinks;
        case "imda":
            return IMDADisclaimerLinks;
        case "mylegacy":
            return MyLegacyDisclaimerLinks;
        case "supportgowhere":
            return SupportGoWhereDisclaimerLinks;
        default:
            return BaseDisclaimerLinks;
    }
};
