import clsx from "clsx";

import { Typography } from "../typography";
import * as styles from "./avatar.styles";
import type { AvatarProps } from "./types";

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
                    className={
                        sizeType === "small"
                            ? styles.avatarBodySmallText
                            : styles.avatarBaselineText
                    }
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
