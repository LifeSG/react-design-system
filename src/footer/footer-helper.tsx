import dayjs from "dayjs";
import { TextLinkProps } from "../text";
import { ResourceScheme } from "../theme";
import { getDefaultDisclaimerLinks } from "./footer-disclaimer-links-data";
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
        resourceScheme?: ResourceScheme
    ): string => {
        const copyrightText = getCopyrightText(resourceScheme);
        const copyright = `${new Date().getFullYear()} ${copyrightText}`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last Updated ${lastUpdatedDateString}`;
    };

    const getCopyrightText = (resourceScheme: ResourceScheme) => {
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

    export const getFooterLogo = (
        resourceScheme?: ResourceScheme,
        logoSrc?: string
    ) => {
        switch (resourceScheme) {
            case "bookingsg":
                return (
                    <img
                        src={
                            logoSrc ||
                            "https://home.booking.gov.sg/images/bookingsg/footer.svg"
                        }
                        alt="BookingSG"
                        data-testid="logo"
                    />
                );
            case "mylegacy":
                return (
                    <img
                        src={
                            logoSrc ||
                            "https://mylegacy.life.gov.sg/images/site-logo.png"
                        }
                        alt="MyLegacy"
                        data-testid="logo"
                        style={{ minWidth: "10rem", maxHeight: "2rem" }}
                    />
                );
            case "ccube":
                return (
                    <img
                        src={
                            logoSrc ||
                            "https://assets.life.gov.sg/ccube/logo-ccube.svg"
                        }
                        alt="Ccube"
                        data-testid="logo"
                    />
                );
            default:
                return (
                    <img
                        src={
                            logoSrc ||
                            "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"
                        }
                        alt="LifeSG"
                        data-testid="logo"
                    />
                );
        }
    };

    export const getDisclaimerLinks = (
        resourceScheme: ResourceScheme | undefined,
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
