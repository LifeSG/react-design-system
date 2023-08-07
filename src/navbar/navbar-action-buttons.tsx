import findIndex from "lodash/findIndex";
import React from "react";
import { ButtonProps } from "../button/types";
import {
    ActionButton,
    ButtonItem,
    DownloadAppImageLink,
    DownloadAppImageLinkWrapper,
    DownloadAppTitle,
    DownloadAppWrapper,
    DrawerWrapper,
    MobileWrapper,
    Wrapper,
} from "./navbar-action-buttons.styles";
import { NavbarButtonComponentProps, NavbarButtonProps } from "./types";

const APP_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png";
const PLAY_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png";

interface Props {
    actionButtons?: NavbarButtonProps[] | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onActionButtonClick: (
        event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<Element>,
        actionButton: NavbarButtonProps
    ) => void;
    uncollapsible?: boolean | undefined;
}

export const NavbarActionButtons = ({
    actionButtons,
    mobile = false,
    onActionButtonClick,
}: Props): JSX.Element => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDownloadAppImageLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        /**
         * Have to do this to prevent the Overlay
         * from picking the click, causing the action
         * to not be run
         */
        event.stopPropagation();
    };

    const handleActionButtonClick = (actionButton: NavbarButtonProps) => {
        return (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            if (actionButton.type === "download") {
                window.scrollTo({
                    left: 0,
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                });
            }

            onActionButtonClick(event, actionButton);
        };
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const moveDownloadButtonToTheBack = (
        actionButtons: NavbarButtonProps[]
    ): NavbarButtonProps[] => {
        const downloadButtonIndex = findIndex(actionButtons, (button) => {
            return button.type === "download";
        });

        if (downloadButtonIndex > -1) {
            const updatedButtons = [...actionButtons];
            const removedButtons = updatedButtons.splice(
                downloadButtonIndex,
                1
            );

            return [...updatedButtons, removedButtons[0]];
        }

        return actionButtons;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDownloadAppMobileView = (args?: ButtonProps) => {
        return (
            <DownloadAppWrapper>
                <DownloadAppTitle weight="semibold">
                    {(args && args.children) || "Download the app"}
                </DownloadAppTitle>
                <DownloadAppImageLinkWrapper>
                    <DownloadAppImageLink
                        href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="button__app-store"
                        onClick={handleDownloadAppImageLinkClick}
                    >
                        <img src={APP_STORE_ICON} alt="apple-app-store" />
                    </DownloadAppImageLink>
                    <DownloadAppImageLink
                        href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="button__play-store"
                        onClick={handleDownloadAppImageLinkClick}
                    >
                        <img src={PLAY_STORE_ICON} alt="google-play-store" />
                    </DownloadAppImageLink>
                </DownloadAppImageLinkWrapper>
            </DownloadAppWrapper>
        );
    };

    const renderButtons = (
        isMobile = false,
        actionButtonList = actionButtons
    ) => {
        /**
         * In drawer view, download app button will always be at
         * the bottom, hence we will shift it to the back
         */
        let buttonsToRender = isMobile
            ? moveDownloadButtonToTheBack(actionButtonList)
            : actionButtonList;

        if (isMobile) {
            buttonsToRender = buttonsToRender.filter(
                (item) => !item.uncollapsible
            );
        }

        return buttonsToRender.map((actionButton, index) => {
            let component: JSX.Element;
            switch (actionButton.type) {
                case "download":
                    component = isMobile ? (
                        renderDownloadAppMobileView(
                            actionButton.args as ButtonProps
                        )
                    ) : (
                        <ActionButton
                            {...actionButton.args}
                            type="button"
                            onClick={handleActionButtonClick(actionButton)}
                            data-testid="action-button__download"
                        >
                            Download the app
                        </ActionButton>
                    );
                    break;
                case "button": {
                    const testId = actionButton.args["data-testid"]
                        ? `action-button__${actionButton.args["data-testid"]}`
                        : `action-button__button-${isMobile ? "mobile-" : ""}${
                              index + 1
                          }`;

                    component = (
                        <ActionButton
                            {...actionButton.args}
                            type="button"
                            onClick={handleActionButtonClick(actionButton)}
                            data-testid={testId}
                        />
                    );
                    break;
                }
                case "component": {
                    const args =
                        actionButton.args as NavbarButtonComponentProps;
                    component = (args && args.render) || null;
                    break;
                }
                default:
                    component = null;
                    break;
            }

            if (component) {
                return (
                    <ButtonItem
                        key={`action-button-${index + 1}`}
                        $mobile={isMobile}
                    >
                        {component}
                    </ButtonItem>
                );
            }
        });
    };

    if (actionButtons && actionButtons.length > 0) {
        const uncollapsableActionButtons = actionButtons.filter(
            (actionButton) => !!actionButton.uncollapsible
        );
        if (mobile) {
            return <DrawerWrapper>{renderButtons(mobile)}</DrawerWrapper>;
        } else {
            return (
                <>
                    <MobileWrapper>
                        {renderButtons(false, uncollapsableActionButtons)}
                    </MobileWrapper>
                    <Wrapper>{renderButtons(mobile)}</Wrapper>
                </>
            );
        }
    }

    return <></>;
};
