import clsx from "clsx";

import { Typography } from "../typography";
import * as styles from "./avatar.styles";
import type { AvatarProps } from "./types";

/**
 * Displays a circular badge representing a user or entity, showing either initials
 * derived from a string or a custom element such as an image or icon.
 *
 * Use when you need a compact visual identity marker in lists, headers, or cards.
 * When `children` is a string, only the first Unicode code point is rendered as an
 * uppercase initial — the typography size adjusts automatically based on `sizeType`.
 * Pass a `JSX.Element` (e.g. an `<img>`) to render arbitrary content inside the
 * badge instead.
 */
export const Avatar = ({
    children,
    sizeType = "default",
    "data-testid": testId = "avatar",
    className,
    ...otherProps
}: AvatarProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () => {
        if (!children) {
            return <></>;
        }

        if (typeof children === "string") {
            const TextComponent =
                sizeType === "small" ? Typography.BodySM : Typography.BodyBL;
            return (
                <TextComponent
                    weight="semibold"
                    className={styles.avatarBaselineText}
                >
                    {String.fromCodePoint(
                        children.codePointAt(0) ?? 0
                    ).toUpperCase()}
                </TextComponent>
            );
        }

        return children;
    };

    return (
        <div
            {...otherProps}
            data-testid={testId}
            className={clsx(
                styles.avatarDisplay,
                sizeType === "small"
                    ? styles.avatarDisplaySmall
                    : styles.avatarDisplayDefault,
                className
            )}
        >
            {renderContent()}
        </div>
    );
};
