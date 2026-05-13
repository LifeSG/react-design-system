import clsx from "clsx";
import type React from "react";
import { useContext } from "react";

import { Divider } from "../divider";
import { Layout } from "../layout";
import { ThemeContext } from "../theme/theme-provider/context";
import { Typography } from "../typography";
import * as styles from "./footer.styles";
import { DownloadApp } from "./footer-download-app";
import type { InternalDisclaimerLinks } from "./footer-helper";
import { FooterHelper } from "./footer-helper";
import { ResourceAddon } from "./footer-resource-addon";
import type { FooterLinkProps, FooterProps } from "./types";

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
    className,
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
            theme?.theme,
            disclaimerLinks
        );

        return (Object.keys(links) as (keyof InternalDisclaimerLinks)[]).map(
            (key) => {
                return (
                    <Typography.LinkXS
                        key={key}
                        underlineStyle="none"
                        className={styles.disclaimerTextLink}
                        {...links[key]}
                    />
                );
            }
        );
    };

    const renderFooterLinks = (links: FooterLinkProps<T>[]) => {
        return links.map((link, index) => {
            const { "data-options": _options, ...otherProps } = link;

            return (
                <li key={index}>
                    <Typography.LinkMD
                        underlineStyle="none"
                        className={styles.footerLink}
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
            const { src, logoType, ...otherLogoAttributes } =
                FooterHelper.getFooterLogoAttribute(theme?.theme);
            component = (
                <>
                    {(logoSrc || src) && !hideLogo && (
                        <div
                            data-testid="logo-section"
                            className={styles.logoSection}
                        >
                            <img
                                src={logoSrc || src}
                                data-testid="logo"
                                className={clsx(
                                    logoType && styles.logoSize[logoType]
                                )}
                                {...otherLogoAttributes}
                            />
                        </div>
                    )}
                    <div className={styles.linkSectionWrapper}>
                        {links?.map((columnLinks, columnIndex) => (
                            <ul
                                key={`link-col-${columnIndex}`}
                                data-testid={`link-col-${columnIndex}`}
                                className={styles.linkSection}
                            >
                                {renderFooterLinks(columnLinks)}
                            </ul>
                        ))}
                    </div>
                    {showDownloadAddon && (
                        <div className={styles.addonSection}>
                            <DownloadApp />
                        </div>
                    )}
                    {/* when showDownloadAddon and showResourceAddon are enabled, showDownloadAddon should take priority to being rendered */}
                    {!showDownloadAddon && showResourceAddon && (
                        <div className={styles.addonSection}>
                            <ResourceAddon />
                        </div>
                    )}
                </>
            );
        }

        if (component) {
            return (
                <>
                    <Layout.Content
                        className={styles.topSection}
                        stretch={isStretch}
                    >
                        {component}
                    </Layout.Content>
                    <Divider className={styles.fullWidthDivider} />
                </>
            );
        }

        return null;
    };
    return (
        <footer {...otherProps} className={clsx(styles.baseFooter, className)}>
            {renderTopSection()}
            <Layout.Content
                className={styles.bottomSection}
                stretch={isStretch}
            >
                <div key="disclaimer" className={styles.bottomSectionContent}>
                    {renderDisclaimerLinks()}
                </div>
                <div
                    key="copyright"
                    className={clsx(
                        styles.bottomSectionContent,
                        styles.copyrightSection
                    )}
                >
                    <Typography.BodyXS
                        data-testid={"copyright-text"}
                        className={styles.copyrightText}
                    >
                        {copyrightInfo || (
                            <>
                                &copy;{" "}
                                {FooterHelper.getCopyrightInfo(
                                    lastUpdated,
                                    theme?.theme
                                )}
                            </>
                        )}
                    </Typography.BodyXS>
                </div>
            </Layout.Content>
        </footer>
    );
};
