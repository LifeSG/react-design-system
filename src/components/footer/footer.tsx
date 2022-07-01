// Generated with util/create-component.js
import dayjs from "dayjs";
import React, { ReactFragment } from "react";
import {
    AddonSection,
    BaseFooter,
    BottomSection,
    BottomSectionContent,
    CopyrightSection,
    DisclaimerTextLink,
    LinkSection,
    LogoSection,
    MobileOnlyBorder,
    StyledFooterLink,
    TopSection,
} from "./footer.style";
import {
    DisclaimerLinkTitles,
    DisclaimerLinks,
    FooterLinkProps,
    FooterProps,
} from "./types";
import { DownloadApp } from "./footer-download-app";
import { Text } from "../text";
import lifesgLogo from "../../assets/img/logo/logo.png";

export const Footer = <T,>({
    children,
    links,
    lastUpdated,
    disclaimerLinks,
    addon,
    onFooterLinkClick,
}: FooterProps<T>) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = <K extends T>(
        event: React.MouseEvent<HTMLAnchorElement>,
        item: FooterLinkProps<K>
    ) => {
        /**
         * Individual link onClick will override
         * the onFooterLinkClick callback
         */
        if (item.onClick) {
            event.preventDefault();
            item.onClick(event);
        } else if (onFooterLinkClick) {
            event.preventDefault();
            onFooterLinkClick(item);
        } else {
            // do nothing, let default behaviour happen
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDisclaimerLinks = () => {
        const links = getDisclaimerLinks(disclaimerLinks);

        return Object.keys(links).map((key) => {
            return (
                <DisclaimerTextLink key={key} {...links[key]}>
                    {DISCLAIMER_LINK_TITLES[key]}
                </DisclaimerTextLink>
            );
        });
    };

    const renderAddon = () => {
        switch (addon) {
            case "download":
                return <DownloadApp />;
            default:
                return null;
        }
    };

    const renderFooterLinks = (links: FooterLinkProps<T>[]) => {
        return links.map((link, index) => {
            const { options, ...otherProps } = link;

            return (
                <li key={index}>
                    <StyledFooterLink
                        {...otherProps}
                        onClick={(event) => handleLinkClick(event, link)}
                    />
                </li>
            );
        });
    };

    const renderTopSection = () => {
        let component: JSX.Element | JSX.Element[] = null;

        if (children) {
            return children;
        }

        if (links || addon) {
            component = (
                <>
                    <LogoSection data-testid="logo-section">
                        <img src={lifesgLogo} alt="LifeSG" data-testid="logo" />
                    </LogoSection>
                    {links[0] && (
                        <LinkSection key="link-col-1" data-testid="link-col-1">
                            {renderFooterLinks(links[0])}
                        </LinkSection>
                    )}
                    {links[1] && (
                        <LinkSection key="link-col-2" data-testid="link-col-2">
                            {renderFooterLinks(links[1])}
                        </LinkSection>
                    )}
                    {addon && <AddonSection>{renderAddon()}</AddonSection>}
                </>
            );
        }

        if (component) {
            return <TopSection>{component}</TopSection>;
        }

        return null;
    };

    return (
        <BaseFooter>
            {renderTopSection()}
            <MobileOnlyBorder />
            <BottomSection>
                <BottomSectionContent key="disclaimer">
                    {renderDisclaimerLinks()}
                </BottomSectionContent>
                <CopyrightSection key="copyright">
                    <Text.XSmall data-testid={"copyright-text"}>
                        &copy; {getCopyrightInfo(lastUpdated)}
                    </Text.XSmall>
                </CopyrightSection>
            </BottomSection>
        </BaseFooter>
    );
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

const getCopyrightInfo = (lastUpdated: Date): string => {
    const copyright = `${new Date().getFullYear()} LifeSG, Government of Singapore.`;
    const lastUpdatedDateString = dayjs(lastUpdated).format("D MMMM YYYY");

    return `${copyright} Last Updated ${lastUpdatedDateString}`;
};

const getDisclaimerLinks = (
    customDisclaimerLinks: DisclaimerLinks
): DisclaimerLinks => {
    return {
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
        ...customDisclaimerLinks,
    };
};

const DISCLAIMER_LINK_TITLES: DisclaimerLinkTitles = {
    privacy: "Privacy Statement",
    termsOfUse: "Terms of Use",
    reportVulnerability: "Report Vulnerability",
};
