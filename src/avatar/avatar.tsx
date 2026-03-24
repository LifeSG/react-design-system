import {
    AvatarBaselineText,
    AvatarBodySmallText,
    AvatarDisplay,
} from "./avatar.style";
import { AvatarProps } from "./types";

export const Avatar = ({
    children,
    sizeType = "default",
    "data-testid": testId = "avatar",
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
            $sizeType={sizeType}
            data-testid={testId}
        >
            {renderContent()}
        </AvatarDisplay>
    );
};
