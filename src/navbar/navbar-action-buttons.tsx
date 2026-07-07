import clsx from "clsx";
import findIndex from "lodash/findIndex";
import type React from "react";

import { Button } from "../button";
import type { ButtonProps } from "../button/types";
import { Typography } from "../typography";
import * as styles from "./navbar-action-buttons.styles";
import type { NavbarActionButtonsProps, NavbarButtonProps } from "./types";

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
            <div className={styles.downloadAppWrapper}>
                <Typography.BodyMD
                    className={styles.downloadAppTitle}
                    weight="semibold"
                >
                    {(args && args.children) || "Download the app"}
                </Typography.BodyMD>
                <div className={styles.downloadAppImageLinkWrapper}>
                    <a
                        className={styles.downloadAppImageLink}
                        href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="button__app-store"
                        onClick={handleDownloadAppImageLinkClick}
                    >
                        <img src={APP_STORE_ICON} alt="apple-app-store" />
                    </a>
                    <a
                        className={styles.downloadAppImageLink}
                        href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="button__play-store"
                        onClick={handleDownloadAppImageLinkClick}
                    >
                        <img src={PLAY_STORE_ICON} alt="google-play-store" />
                    </a>
                </div>
            </div>
        );
    };

    const renderButtons = (
        isMobile: boolean,
        actionButtonList: NavbarButtonProps[]
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
                        <Button
                            {...actionButton.args}
                            className={clsx(
                                styles.actionButton,
                                actionButton.args?.className
                            )}
                            type="button"
                            sizeType="small"
                            onClick={handleActionButtonClick(actionButton)}
                            data-testid="action-button__download"
                        >
                            Download the app
                        </Button>
                    );
                    break;
                case "button": {
                    const testId = actionButton.args["data-testid"]
                        ? `action-button__${actionButton.args["data-testid"]}`
                        : `action-button__button-${isMobile ? "mobile-" : ""}${
                              index + 1
                          }`;

                    component = (
                        <Button
                            {...actionButton.args}
                            className={clsx(
                                styles.actionButton,
                                actionButton.args?.className
                            )}
                            type="button"
                            sizeType="small"
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

            if (component) {
                return (
                    <li
                        key={`action-button-${index + 1}`}
                        className={clsx(
                            styles.buttonItem,
                            isMobile && styles.buttonItemMobile
                        )}
                    >
                        {component}
                    </li>
                );
            }
        });
    };

    if (actionButtons) {
        const actionButtonList = actionButtons?.mobile || actionButtons.desktop;
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
                        <ul className={styles.drawerWrapper}>
                            {renderButtons(mobile, collapsableActionButtons)}
                        </ul>
                    )}
                </>
            );
        } else {
            return (
                <>
                    {uncollapsableActionButtons.length > 0 && (
                        <ul className={styles.mobileWrapper}>
                            {renderButtons(false, uncollapsableActionButtons)}
                        </ul>
                    )}
                    {actionButtons.desktop.length > 0 && (
                        <ul className={styles.wrapper}>
                            {renderButtons(mobile, actionButtons.desktop)}
                        </ul>
                    )}
                </>
            );
        }
    }

    return <></>;
};
