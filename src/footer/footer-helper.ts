import dayjs from "dayjs";
import { V3_ResourceScheme } from "../v3_theme/types";
import { TypographyLinkProps } from "../typography";
import { getDefaultDisclaimerLinks } from "./footer-disclaimer-links-data";
import { DisclaimerLinks } from "./types";

/* Internally used.  Not to be exported */
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}

export class FooterHelper {
    public static getCopyrightInfo(
        lastUpdated: Date = new Date(),
        resourceScheme: V3_ResourceScheme | undefined
    ): string {
        const copyrightText = this.getCopyrightText(resourceScheme);
        const copyright = `${new Date().getFullYear()} ${copyrightText}`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last updated ${lastUpdatedDateString}`;
    }

    private static getCopyrightText(
        resourceScheme: V3_ResourceScheme | undefined
    ): string {
        switch (resourceScheme) {
            case "lifesg":
                return "LifeSG, Government of Singapore.";
            case "bookingsg":
                return "BookingSG, Government of Singapore.";
            case "mylegacy":
                return "MyLegacy@LifeSG, Government of Singapore.";
            case "ccube":
                return "Citizen Collective Common, Government of Singapore.";
            case "imda":
                return "IMDA, Government of Singapore.";
            default:
                return "Government of Singapore.";
        }
    }

    public static getFooterLogoAttribute(
        resourceScheme?: V3_ResourceScheme
    ): React.ImgHTMLAttributes<HTMLImageElement> {
        switch (resourceScheme) {
            case "lifesg":
                return {
                    src: "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",
                    alt: "LifeSG",
                    style: { width: "4rem" },
                };

            case "bookingsg":
                return {
                    src: "https://home.booking.gov.sg/images/bookingsg/footer.svg",
                    alt: "BookingSG",
                    style: { width: "4rem" },
                };
            case "mylegacy":
                return {
                    src: "https://mylegacy.life.gov.sg/images/site-logo.png",
                    alt: "MyLegacy",
                    style: { width: "10rem", maxHeight: "2rem" },
                };
            case "ccube":
                return {
                    src: "https://assets.life.gov.sg/ccube/logo-ccube.svg",
                    alt: "Citizen Collective Common",
                    style: { width: "10rem" },
                };
            case "supportgowhere":
                return {
                    src: "https://assets.life.gov.sg/react-design-system/img/logo/sgw-logo.png",
                    alt: "SupportGoWhere",
                    style: { width: "10rem" },
                };

            default:
                return {};
        }
    }

    public static getDisclaimerLinks(
        resourceScheme: V3_ResourceScheme | undefined,
        customDisclaimerLinks: DisclaimerLinks | undefined
    ): InternalDisclaimerLinks {
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
    }
}
