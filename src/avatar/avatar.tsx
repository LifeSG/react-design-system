import clsx from "clsx";

import { Typography } from "../typography";
import * as styles from "./avatar.styles";
import type { AvatarProps } from "./types";

// @catalog
/**
 * Displays a circular avatar representing a user or entity.
 *
 * Use when you need a compact visual identity marker in lists, headers, or
 * cards. Accepts a string (rendered as an initial) or a JSX element such as an
 * image or icon.
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
