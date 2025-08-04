import dayjs from "dayjs";
import { ResourceScheme } from "../theme/types";
import { TypographyLinkProps } from "../typography";
import { getDefaultDisclaimerLinks } from "./footer-disclaimer-links-data";
import { DisclaimerLinks } from "./types";

/* Internally used.  Not to be exported */
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}

export namespace FooterHelper {
    export const getCopyrightInfo = (
        lastUpdated: Date = new Date(),
        resourceScheme: ResourceScheme | undefined
    ): string => {
        const copyrightText = getCopyrightText(resourceScheme);
        const copyright = `${new Date().getFullYear()} ${copyrightText}`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last Updated ${lastUpdatedDateString}`;
    };

    const getCopyrightText = (resourceScheme: ResourceScheme | undefined) => {
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

    export const getFooterLogoAttribute = (
        resourceScheme?: ResourceScheme
    ): React.ImgHTMLAttributes<HTMLImageElement> => {
        switch (resourceScheme) {
            case "bookingsg":
                return {
                    src: "https://home.booking.gov.sg/images/bookingsg/footer.svg",
                    alt: "BookingSG",
                    style: { minWidth: "4rem" },
                };
            case "mylegacy":
                return {
                    src: "https://mylegacy.life.gov.sg/images/site-logo.png",
                    alt: "MyLegacy",
                    style: { minWidth: "10rem", maxHeight: "2rem" },
                };
            case "ccube":
                return {
                    src: "https://assets.life.gov.sg/ccube/logo-ccube.svg",
                    alt: "Ccube",
                    style: { minWidth: "10rem" },
                };

            default:
                return {
                    src: "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",
                    alt: "LifeSG",
                    style: { minWidth: "4rem" },
                };
        }
    };

    export const getDisclaimerLinks = (
        resourceScheme: ResourceScheme | undefined,
        customDisclaimerLinks: DisclaimerLinks | undefined
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
