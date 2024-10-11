import dayjs from "dayjs";
import { TextLinkProps } from "../text";
import { ResourceScheme } from "../theme";
import { getDefaultDisclaimerLink } from "./footer-disclaimer-links-data";
import { DisclaimerLinks } from "./types";

/* Internally used.  Not to be exported */
export interface InternalDisclaimerLinks {
    privacy?: TextLinkProps | undefined;
    termsOfUse?: TextLinkProps | undefined;
    reportVulnerability?: TextLinkProps | undefined;
}

export namespace FooterHelper {
    export const getCopyrightInfo = (
        lastUpdated: Date = new Date(),
        theme?: ResourceScheme
    ): string => {
        const copyText = getCopyText(theme);
        const copyright = `${new Date().getFullYear()} ${copyText}`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last Updated ${lastUpdatedDateString}`;
    };

    const getCopyText = (resourceScheme: ResourceScheme) => {
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

    export const getDisclaimerLinks = (
        theme: ResourceScheme | undefined,
        customDisclaimerLinks?: DisclaimerLinks
    ): InternalDisclaimerLinks => {
        const defaultDisclaimerLinks = getDefaultDisclaimerLink(theme);
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
