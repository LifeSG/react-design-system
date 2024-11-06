import dayjs from "dayjs";
import { V2_TextLinkProps } from "../v2_text";
import { V2_ResourceScheme } from "../v2_theme";
import { getDefaultDisclaimerLinks } from "./footer-disclaimer-links-data";
import { DisclaimerLinks } from "./types";

/* Internally used.  Not to be exported */
export interface InternalDisclaimerLinks {
    privacy?: V2_TextLinkProps | undefined;
    termsOfUse?: V2_TextLinkProps | undefined;
    reportVulnerability?: V2_TextLinkProps | undefined;
}

export namespace FooterHelper {
    export const getCopyrightInfo = (
        lastUpdated: Date = new Date(),
        resourceScheme?: V2_ResourceScheme
    ): string => {
        const copyrightText = getCopyrightText(resourceScheme);
        const copyright = `${new Date().getFullYear()} ${copyrightText}`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last Updated ${lastUpdatedDateString}`;
    };

    const getCopyrightText = (resourceScheme: V2_ResourceScheme) => {
        switch (resourceScheme) {
            case "bookingsg":
                return "BookingSG, Government of Singapore.";
            case "mylegacy":
                return "MyLegacy@LifeSG, Government of Singapore.";
            case "ccube":
                return "Citizen Collective Common, Government of Singapore.";
            default:
                return "LifeSG, Government of Singapore.";
        }
    };

    export const getFooterLogo = (resourceScheme?: V2_ResourceScheme) => {
        switch (resourceScheme) {
            case "bookingsg":
                return "https://home.booking.gov.sg/images/bookingsg/footer.svg";
            case "mylegacy":
                return "https://mylegacy.life.gov.sg/images/site-logo.png";
            case "ccube":
                return "https://assets.life.gov.sg/ccube/logo-ccube.svg";
            default:
                return "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";
        }
    };

    export const getDisclaimerLinks = (
        resourceScheme: V2_ResourceScheme | undefined,
        customDisclaimerLinks?: DisclaimerLinks
    ): InternalDisclaimerLinks => {
        const defaultDisclaimerLinks =
            getDefaultDisclaimerLinks(resourceScheme);
        return {
            privacy: {
                ...defaultDisclaimerLinks.privacy,
                ...(customDisclaimerLinks && customDisclaimerLinks.privacy
                    ? customDisclaimerLinks.privacy
                    : {}),
                children: "Privacy Statement",
            },
            termsOfUse: {
                ...defaultDisclaimerLinks.termsOfUse,
                ...(customDisclaimerLinks && customDisclaimerLinks.termsOfUse
                    ? customDisclaimerLinks.termsOfUse
                    : {}),
                children: "Terms of Use",
            },
            reportVulnerability: {
                ...defaultDisclaimerLinks.reportVulnerability,
                ...(customDisclaimerLinks &&
                customDisclaimerLinks.reportVulnerability
                    ? customDisclaimerLinks.reportVulnerability
                    : {}),
                children: "Report Vulnerability",
            },
        };
    };
}
