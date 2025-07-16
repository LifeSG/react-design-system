import { useCallback, useRef, useState } from "react";
import { Menu } from "../navbar/menu";
import { useBlur } from "../util/use-blur";
import {
    AvatarBaselineText,
    AvatarBodySmallText,
    AvatarButton,
    Container,
} from "./avatar.style";
import { AvatarProps } from "./types";

export const Avatar = <T,>({
    children,
    menu,
    mobile = false,
    onClick,
    "data-testid": testId = "avatar",
    ...otherProps
}: AvatarProps<T>): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleAvatarClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            setShowMenu(true);
            onClick?.(event);
        },
        [onClick]
    );

    const handleBlur = useCallback(() => {
        setShowMenu(false);
    }, []);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useBlur(ref, handleBlur);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () => {
        if (!children) {
            return <></>;
        }

        if (typeof children === "string") {
            const TextComponent = mobile
                ? AvatarBodySmallText
                : AvatarBaselineText;
            return (
                <TextComponent weight="semibold">
                    {children.charAt(0).toUpperCase()}
                </TextComponent>
            );
        }

        return children;
    };

    const renderMenu = () => {
        if (!menu) {
            return <></>;
        }

        const { items } = menu;
        return <Menu items={items} onItemClick={handleBlur} />;
    };

    return (
        <Container ref={ref}>
            <AvatarButton
                {...otherProps}
                onClick={handleAvatarClick}
                $mobile={mobile}
                data-testid={`${testId}-avatar-button`}
            >
                {renderContent()}
            </AvatarButton>
            {showMenu && renderMenu()}
        </Container>
    );
};
