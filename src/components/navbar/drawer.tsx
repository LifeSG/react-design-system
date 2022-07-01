import React, { useEffect, useState } from "react";
import { Brand } from "./brand";
import {
    CloseButton,
    CloseIcon,
    Container,
    Content,
    DownloadAddonTitle,
    DownloadAddonWrapper,
    ImageLink,
    ImageLinkWrapper,
    NavItemsWrapper,
    TopBar,
    Wrapper,
} from "./drawer.styles";
import { INavbarDrawerProps } from "./types";
import appStoreIcon from "../../assets/img/download/apple-app-store.png";
import playStoreIcon from "../../assets/img/download/google-play-store.png";

const Component = (
    props: INavbarDrawerProps,
    ref: React.Ref<HTMLDivElement>
) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const { show, resources, children, addon, onClose, onBrandClick } = props;
    const [viewHeight, setViewHeight] = useState<number>(0);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleResize = () => {
        /**
         * Reference:
         * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
         */
        if (window) {
            const viewHeight = window.innerHeight * 0.01;
            setViewHeight(viewHeight);
        }
    };

    const handleImageLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        /**
         * Have to do this to prevent the Overlay
         * from picking the click, causing the action
         * to not be run
         */
        event.stopPropagation();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTopBar = () => (
        <TopBar>
            <Brand
                resources={resources}
                onClick={onBrandClick}
                data-testid="drawer__brand"
            />
            <CloseButton onClick={onClose} aria-label="Close nav menu">
                <CloseIcon type="cross" />
            </CloseButton>
        </TopBar>
    );

    const renderAddon = () => {
        switch (addon) {
            case "download":
                return (
                    <DownloadAddonWrapper>
                        <DownloadAddonTitle weight="semibold">
                            Download the app
                        </DownloadAddonTitle>
                        <ImageLinkWrapper>
                            <ImageLink
                                href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="button__app-store"
                                onClick={handleImageLinkClick}
                            >
                                <img src={appStoreIcon} alt="apple-app-store" />
                            </ImageLink>
                            <ImageLink
                                href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="button__play-store"
                                onClick={handleImageLinkClick}
                            >
                                <img
                                    src={playStoreIcon}
                                    alt="google-play-store"
                                />
                            </ImageLink>
                        </ImageLinkWrapper>
                    </DownloadAddonWrapper>
                );
            default:
                return null;
        }
    };

    return (
        <Wrapper ref={ref} data-testid="drawer">
            <Container show={show} viewHeight={viewHeight}>
                <Content>
                    {renderTopBar()}
                    <NavItemsWrapper>{children}</NavItemsWrapper>
                    {renderAddon()}
                </Content>
            </Container>
        </Wrapper>
    );
};

export const Drawer = React.forwardRef(Component);
