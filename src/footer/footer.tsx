import React from "react";
import { useTheme } from "styled-components";
import { Text } from "../text";
import { DownloadApp } from "./footer-download-app";
import { FooterHelper } from "./footer-helper";
import { ResourceAddon } from "./footer-resource-addon";
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
    ...otherProps
}: FooterProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const isStretch = layout === "stretch";
    const theme = useTheme();
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
                            {...FooterHelper.getFooterLogoAttribute(
                                theme?.resourceScheme,
                                logoSrc
                            )}
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
                    <Text.XSmall data-testid={"copyright-text"}>
                        {copyrightInfo || (
                            <>
                                &copy;{" "}
                                {FooterHelper.getCopyrightInfo(
                                    lastUpdated,
                                    theme?.resourceScheme
                                )}
                            </>
                        )}
                    </Text.XSmall>
                </CopyrightSection>
            </BottomSection>
        </BaseFooter>
    );
};
