import React from "react";
import { v2_Text } from "../v2_text";
import { DownloadApp } from "./footer-download-app";
import { FooterHelper } from "./footer-helper";
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
import { FooterLinkProps, FooterProps } from "./types";

const LIFESG_LOGO_SRC =
    "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";

export const Footer = <T,>({
    children,
    links,
    lastUpdated,
    disclaimerLinks,
    showDownloadAddon,
    logoSrc,
    copyrightInfo,
    onFooterLinkClick,
    layout = "default",
    ...otherProps
}: FooterProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const isStretch = layout === "stretch";

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
        const links = FooterHelper.getDisclaimerLinks(disclaimerLinks);

        return Object.keys(links).map((key) => {
            return <DisclaimerTextLink key={key} {...links[key]} />;
        });
    };

    const renderFooterLinks = (links: FooterLinkProps<T>[]) => {
        return links.map((link, index) => {
            const { "data-options": options, ...otherProps } = link;

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

        if (links || showDownloadAddon) {
            component = (
                <>
                    <LogoSection data-testid="logo-section">
                        <img
                            src={logoSrc || LIFESG_LOGO_SRC}
                            alt="LifeSG"
                            data-testid="logo"
                        />
                    </LogoSection>
                    {links?.[0] && (
                        <LinkSection key="link-col-1" data-testid="link-col-1">
                            {renderFooterLinks(links[0])}
                        </LinkSection>
                    )}
                    {links?.[1] && (
                        <LinkSection key="link-col-2" data-testid="link-col-2">
                            {renderFooterLinks(links[1])}
                        </LinkSection>
                    )}
                    {showDownloadAddon && (
                        <AddonSection>
                            <DownloadApp />
                        </AddonSection>
                    )}
                </>
            );
        }

        if (component) {
            return (
                <TopSection type="grid" stretch={isStretch}>
                    {component}
                </TopSection>
            );
        }

        return null;
    };

    return (
        <BaseFooter {...otherProps}>
            {renderTopSection()}
            <MobileOnlyBorder />
            <BottomSection type="grid" stretch={isStretch}>
                <BottomSectionContent key="disclaimer">
                    {renderDisclaimerLinks()}
                </BottomSectionContent>
                <CopyrightSection key="copyright">
                    <v2_Text.XSmall data-testid={"copyright-text"}>
                        {copyrightInfo || (
                            <>
                                &copy;{" "}
                                {FooterHelper.getCopyrightInfo(lastUpdated)}
                            </>
                        )}
                    </v2_Text.XSmall>
                </CopyrightSection>
            </BottomSection>
        </BaseFooter>
    );
};
