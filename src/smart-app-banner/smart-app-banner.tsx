import { CrossIcon } from "@lifesg/react-icons/cross";
import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import { StarHalfIcon } from "@lifesg/react-icons/star-half";
import clsx from "clsx";
import React, { useContext, useRef } from "react";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { useApplyStyle } from "../theme";
import { ThemeContext } from "../theme/theme-provider/context";
import { Typography } from "../typography";
import { mergeRefs } from "../util";
import * as styles from "./smart-app-banner.styles";
import type { SmartAppBannerProps } from "./types";

const APP_ICON =
    "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png";

const ID = "smart-app-banner";
const MAX_STARS = 5;

function SmartAppBannerComponent(
    props: SmartAppBannerProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        className,
        show,
        href,
        content,
        offset = 0,
        icon = APP_ICON,
        animated = false,
        onDismiss,
        onClick,
    } = props;

    const {
        title,
        message,
        buttonLabel,
        iconAriaLabel,
        buttonAriaLabel,
        numberOfStars,
    } = content;

    const containerRef = useRef<HTMLDivElement>(null);
    const theme = useContext(ThemeContext);
    const isDark = theme?.mode === "dark";

    useApplyStyle(containerRef, {
        [styles.tokens.container.top]: `${offset}px`,
    });

    const ariaLabels = {
        dismiss: "Close banner",
        icon: iconAriaLabel ?? "",
        cta: buttonAriaLabel ?? buttonLabel,
    };
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        e.stopPropagation();
        window.open(href, "_blank", "noreferrer");
        onClick?.();
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const generateStarRating = () => {
        if (isNaN(numberOfStars) || numberOfStars < 0) {
            return;
        }

        const stars = [];
        const hasHalfStar = numberOfStars - Math.floor(numberOfStars) >= 0.4;

        for (let i = 0; i < Math.floor(numberOfStars); i++) {
            stars.push(
                <StarFillIcon
                    key={`star${i}`}
                    aria-hidden
                    className={styles.starIcon}
                />
            );
        }
        if (hasHalfStar) {
            stars.push(
                <StarHalfIcon
                    key={`halfstar`}
                    aria-hidden
                    className={styles.starIcon}
                />
            );
        }
        if (stars.length < MAX_STARS) {
            const remaining = 5 - stars.length;
            for (let i = 0; i < remaining; i++) {
                stars.push(
                    <StarIcon
                        key={`emptystar${i}`}
                        aria-hidden
                        className={styles.starIcon}
                    />
                );
            }
        }

        /* maximum of 5 stars */
        return (
            <div
                className={styles.ratingContainer}
                role="group"
                aria-label={`A rating of ${numberOfStars} out of ${MAX_STARS} stars`}
                data-testid={`${ID}-star-rating`}
            >
                {stars.slice(0, MAX_STARS)}
            </div>
        );
    };

    return (
        <>
            {show && (
                <div
                    ref={mergeRefs(containerRef, ref)}
                    data-testid={ID}
                    className={clsx(
                        styles.smartAppBannerContainer,
                        isDark
                            ? styles.smartAppBannerContainerDark
                            : styles.smartAppBannerContainerLight,
                        animated && styles.smartAppBannerContainerAnimated,
                        className
                    )}
                >
                    <div
                        className={styles.proceedContainer}
                        onClick={handleClick}
                        id={`${ID}-proceed`}
                        data-testid={`${ID}-proceed-container`}
                    >
                        <img
                            className={styles.bannerIcon}
                            src={icon}
                            alt={ariaLabels.icon}
                        />
                        <div className={styles.textContainer}>
                            <Typography.BodySM className={styles.title}>
                                {title}
                            </Typography.BodySM>
                            <Typography.BodyXS className={styles.description}>
                                {message}
                            </Typography.BodyXS>
                            {generateStarRating()}
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button
                                className={styles.button}
                                type="button"
                                onClick={handleClick}
                                aria-label={ariaLabels.cta}
                                sizeType="small"
                            >
                                {buttonLabel}
                            </Button>
                        </div>
                    </div>
                    <div
                        className={styles.dismissContainer}
                        onClick={onDismiss}
                        id={`${ID}-dismiss`}
                        data-testid={`${ID}-dismiss-container`}
                    >
                        <ClickableIcon
                            className={styles.dismissButton}
                            aria-label={ariaLabels.dismiss}
                        >
                            <CrossIcon className={styles.cross} />
                        </ClickableIcon>
                    </div>
                </div>
            )}
        </>
    );
}

/**
 * A fixed top banner that promotes a mobile app and links to its store listing.
 *
 * Use `SmartAppBanner` to invite users to install or open the native app.
 */
export const SmartAppBanner = React.forwardRef(SmartAppBannerComponent);
