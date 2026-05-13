import dayjs from "dayjs";

import type { ThemeType } from "../theme/types";
import type { TypographyLinkProps } from "../typography";
import { getDefaultDisclaimerLinks } from "./footer-disclaimer-links-data";
import type { DisclaimerLinks } from "./types";

/* Internally used.  Not to be exported */
export interface InternalDisclaimerLinks {
    privacy?: TypographyLinkProps | undefined;
    termsOfUse?: TypographyLinkProps | undefined;
    reportVulnerability?: TypographyLinkProps | undefined;
}

export class FooterHelper {
    public static getCopyrightInfo(
        lastUpdated: Date = new Date(),
        resourceScheme: ThemeType | undefined
    ): string {
        const copyrightText = FooterHelper.getCopyrightText(resourceScheme);
        const copyright = `${new Date().getFullYear()} ${copyrightText}`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last updated ${lastUpdatedDateString}`;
    }

    private static getCopyrightText(
        resourceScheme: ThemeType | undefined
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
        resourceScheme?: ThemeType
    ): React.ImgHTMLAttributes<HTMLImageElement> & { logoType?: ThemeType } {
        switch (resourceScheme) {
            case "lifesg":
                return {
                    src: "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",
                    alt: "LifeSG",
                    logoType: "lifesg",
                };

            case "bookingsg":
                return {
                    src: "https://home.booking.gov.sg/images/bookingsg/footer.svg",
                    alt: "BookingSG",
                    logoType: "bookingsg",
                };
            case "mylegacy":
                return {
                    src: "https://mylegacy.life.gov.sg/images/site-logo.png",
                    alt: "MyLegacy",
                    logoType: "mylegacy",
                };
            case "ccube":
                return {
                    src: "https://assets.life.gov.sg/ccube/logo-ccube.svg",
                    alt: "Citizen Collective Common",
                    logoType: "ccube",
                };
            case "supportgowhere":
                return {
                    src: "https://assets.life.gov.sg/react-design-system/img/logo/sgw-logo.png",
                    alt: "SupportGoWhere",
                    logoType: "supportgowhere",
                };

            default:
                return {};
        }
    }

    public static getDisclaimerLinks(
        resourceScheme: ThemeType | undefined,
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
