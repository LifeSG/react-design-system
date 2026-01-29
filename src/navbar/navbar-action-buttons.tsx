import findIndex from "lodash/findIndex";
import React from "react";
import { ButtonProps } from "../button/types";
import {
    ActionButton,
    ButtonItem,
    DesktopActionsWrapper,
    DownloadAppImageLink,
    DownloadAppImageLinkWrapper,
    DownloadAppTitle,
    DownloadAppWrapper,
    DrawerWrapper,
    MobileActionsWrapper,
} from "./navbar-action-buttons.styles";
import { NavbarActionButtonsProps, NavbarButtonProps } from "./types";

const APP_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png";
const PLAY_STORE_ICON =
    "https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png";

interface Props {
    actionButtons?: NavbarActionButtonsProps | undefined;
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
        // prevent overlay from intercepting
        event.stopPropagation();
    };

    const handleActionButtonClick = (actionButton: NavbarButtonProps) => {
        return (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();

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
            const updated = [...actionButtons];
            const [removed] = updated.splice(downloadButtonIndex, 1);
            return [...updated, removed];
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
        isMobile: boolean,
        actionButtonList: NavbarButtonProps[],
        itemTag: "li" | "div"
    ) => {
        /**
         * In drawer view, download app button will always be at
         * the bottom, hence we will shift it to the back
         */
        const buttonsToRender = isMobile
            ? moveDownloadButtonToTheBack(actionButtonList)
            : actionButtonList;

        return buttonsToRender.map((actionButton, index) => {
            let component: React.ReactNode;
            switch (actionButton.type) {
                case "download":
                    component = isMobile ? (
                        renderDownloadAppMobileView(actionButton.args)
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
                    const args = actionButton.args;
                    component = (args && args.render) || null;
                    break;
                }
                default:
                    component = null;
                    break;
            }

            if (!component) return null;

            return (
                <ButtonItem
                    as={itemTag}
                    key={`action-button-${index + 1}`}
                    $mobile={isMobile}
                >
                    {component}
                </ButtonItem>
            );
        });
    };

    const renderActions = (
        WrapperComp: typeof DesktopActionsWrapper,
        buttons: NavbarButtonProps[],
        renderMobileArg: boolean
    ) => {
        if (!buttons.length) return null;

        const wrapperTag: "div" | "ul" = buttons.length === 1 ? "div" : "ul";
        const itemTag: "div" | "li" = buttons.length === 1 ? "div" : "li";

        return (
            <WrapperComp as={wrapperTag}>
                {renderButtons(renderMobileArg, buttons, itemTag)}
            </WrapperComp>
        );
    };

    // =============================================================================
    // MAIN RENDER
    // =============================================================================
    if (!actionButtons) return <></>;

    const actionButtonList = actionButtons.mobile || actionButtons.desktop;

    const uncollapsableActionButtons = actionButtonList.filter(
        (actionButton) => !!actionButton.uncollapsible
    );

    const collapsableActionButtons = actionButtonList.filter(
        (actionButton) => !actionButton.uncollapsible
    );

    if (mobile) {
        return (
            <>
                {collapsableActionButtons.length > 0 && (
                    <DrawerWrapper>
                        {/* Drawer is always a list, so items are li */}
                        {renderButtons(true, collapsableActionButtons, "li")}
                    </DrawerWrapper>
                )}
            </>
        );
    }

    return (
        <>
            {renderActions(
                MobileActionsWrapper,
                uncollapsableActionButtons,
                false
            )}
            {renderActions(
                DesktopActionsWrapper,
                actionButtons.desktop,
                mobile
            )}
        </>
    );
};
