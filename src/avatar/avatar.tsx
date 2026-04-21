import clsx from "clsx";

import {
    AvatarBaselineText,
    AvatarBodySmallText,
    AvatarDisplay,
} from "./avatar.styles";
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
                sizeType === "small" ? AvatarBodySmallText : AvatarBaselineText;
            return (
                <TextComponent weight="semibold">
                    {String.fromCodePoint(
                        children.codePointAt(0) ?? 0
                    ).toUpperCase()}
                </TextComponent>
            );
        }

        return children;
    };

    return (
        <AvatarDisplay
            {...otherProps}
            data-testid={testId}
            className={clsx(
                sizeType === "small"
                    ? "avatarDisplaySmall"
                    : "avatarDisplayDefault",
                className
            )}
        >
            {renderContent()}
        </AvatarDisplay>
    );
};
