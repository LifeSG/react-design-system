import React, { useContext } from "react";
import { Typography } from "../typography";
import { DownloadApp } from "./footer-download-app";
import { FooterHelper, InternalDisclaimerLinks } from "./footer-helper";
import {
    AddonSection,
    BaseFooter,
    BottomSection,
    BottomSectionContent,
    CopyrightSection,
    DisclaimerTextLink,
    FullWidthDivider,
    LinkSection,
    LinkSectionWrapper,
    LogoSection,
    StyledFooterLink,
    TopSection,
} from "./footer.style";
import { ResourceAddon } from "./footer-resource-addon";
import { FooterLinkProps, FooterProps } from "./types";
import { ThemeContext } from "styled-components";

export const Footer = <T,>({
    children,
    links,
    lastUpdated,
    disclaimerLinks,
    showDownloadAddon,
    showResourceAddon,
    logoSrc,
    copyrightInfo,
    onFooterLinkClick,
    layout = "default",
    hideLogo,
    ...otherProps
}: FooterProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const isStretch = layout === "stretch";
    const theme = useContext(ThemeContext);
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
        const links = FooterHelper.getDisclaimerLinks(
            theme?.resourceScheme,
            disclaimerLinks
        );

        return (Object.keys(links) as (keyof InternalDisclaimerLinks)[]).map(
            (key) => {
                return (
                    <DisclaimerTextLink
                        key={key}
                        underlineStyle="none"
                        {...links[key]}
                    />
                );
            }
        );
    };

    const renderFooterLinks = (links: FooterLinkProps<T>[]) => {
        return links.map((link, index) => {
            const { "data-options": _options, ...otherProps } = link;
            const underlineStyle = "none";

            return (
                <li key={index}>
                    <StyledFooterLink
                        underlineStyle={underlineStyle}
                        {...otherProps}
                        onClick={(event) => handleLinkClick(event, link)}
                    />
                </li>
            );
        });
    };

    const renderTopSection = () => {
        let component: React.ReactNode = null;

        if (children) {
            return children;
        }

        if (links || showDownloadAddon) {
            const { src, ...otherLogoAttributes } =
                FooterHelper.getFooterLogoAttribute(theme?.resourceScheme);
            component = (
                <>
                    {(logoSrc || src) && !hideLogo && (
                        <LogoSection data-testid="logo-section">
                            <img
                                src={logoSrc || src}
                                data-testid="logo"
                                {...otherLogoAttributes}
                            />
                        </LogoSection>
                    )}
                    <LinkSectionWrapper>
                        {links?.[0] && (
                            <LinkSection
                                key="link-col-1"
                                data-testid="link-col-1"
                            >
                                {renderFooterLinks(links[0])}
                            </LinkSection>
                        )}
                        {links?.[1] && (
                            <LinkSection
                                key="link-col-2"
                                data-testid="link-col-2"
                            >
                                {renderFooterLinks(links[1])}
                            </LinkSection>
                        )}
                    </LinkSectionWrapper>
                    {showDownloadAddon && (
                        <AddonSection>
                            <DownloadApp />
                        </AddonSection>
                    )}
                    {/* when showDownloadAddon and showResourceAddon are enabled, showDownloadAddon should take priority to being rendered */}
                    {!showDownloadAddon && showResourceAddon && (
                        <AddonSection>
                            <ResourceAddon />
                        </AddonSection>
                    )}
                </>
            );
        }

        if (component) {
            return (
                <>
                    <TopSection stretch={isStretch}>{component}</TopSection>
                    <FullWidthDivider />
                </>
            );
        }

        return null;
    };
    return (
        <BaseFooter {...otherProps}>
            {renderTopSection()}
            <BottomSection stretch={isStretch}>
                <BottomSectionContent key="disclaimer">
                    {renderDisclaimerLinks()}
                </BottomSectionContent>
                <CopyrightSection key="copyright">
                    <Typography.BodyXS data-testid={"copyright-text"}>
                        {copyrightInfo || (
                            <>
                                &copy;{" "}
                                {FooterHelper.getCopyrightInfo(
                                    lastUpdated,
                                    theme?.resourceScheme
                                )}
                            </>
                        )}
                    </Typography.BodyXS>
                </CopyrightSection>
            </BottomSection>
        </BaseFooter>
    );
};
