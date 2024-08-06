import dayjs from "dayjs";
import { v2_TextLinkProps } from "../v2_text";
import { DisclaimerLinks } from "./types";

/* Internally used.  Not to be exported */
interface InternalDisclaimerLinks {
    privacy?: v2_TextLinkProps | undefined;
    termsOfUse?: v2_TextLinkProps | undefined;
    reportVulnerability?: v2_TextLinkProps | undefined;
}

export namespace FooterHelper {
    export const getCopyrightInfo = (
        lastUpdated: Date = new Date()
    ): string => {
        const copyright = `${new Date().getFullYear()} LifeSG, Government of Singapore.`;
        const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

        return `${copyright} Last Updated ${lastUpdatedDateString}`;
    };

    export const getDisclaimerLinks = (
        customDisclaimerLinks?: DisclaimerLinks
    ): InternalDisclaimerLinks => {
        return {
            privacy: {
                href: "https://www.life.gov.sg/privacy-statement",
                target: "_blank",
                rel: "noopener",
                ...(customDisclaimerLinks && customDisclaimerLinks.privacy
                    ? customDisclaimerLinks.privacy
                    : {}),
                children: "Privacy Statement",
            },
            termsOfUse: {
                href: "https://www.life.gov.sg/terms-of-use",
                target: "_blank",
                rel: "noopener",
                ...(customDisclaimerLinks && customDisclaimerLinks.termsOfUse
                    ? customDisclaimerLinks.termsOfUse
                    : {}),
                children: "Terms of Use",
            },
            reportVulnerability: {
                href: "https://tech.gov.sg/report_vulnerability",
                target: "_blank",
                rel: "noopener",
                external: true,
                ...(customDisclaimerLinks &&
                customDisclaimerLinks.reportVulnerability
                    ? customDisclaimerLinks.reportVulnerability
                    : {}),
                children: "Report Vulnerability",
            },
        };
    };
}
