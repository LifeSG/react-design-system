import { useRef, useState } from "react";
import { Badge } from "../badge";
import { Menu } from "../navbar/menu";
import { useBlur } from "../util/use-blur";
import {
    AvatarBaselineText,
    AvatarBodySmallText,
    AvatarButton,
    AvatarWrapper,
    Container,
} from "./avatar.style";
import { AvatarProps } from "./types";

export const Avatar = <T,>({
    content,
    menu,
    onClick,
    mobile = false,
}: AvatarProps<T>): JSX.Element => {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    const handleBlur = () => {
        setShowMenu(false);
    };

    useBlur(ref, handleBlur);

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const handleAvatarClick = () => {
        setShowMenu(true);
        onClick?.();
    };

    const renderContent = () => {
        if (typeof content === "string") {
            const TextComponent = mobile
                ? AvatarBodySmallText
                : AvatarBaselineText;
            return (
                <TextComponent weight="semibold">
                    {content.charAt(0).toUpperCase()}
                </TextComponent>
            );
        }

        return content;
    };

    const renderMenu = () => {
        if (!menu) {
            return <></>;
        }

        const { alignment = "right", items } = menu;
        return (
            <Menu
                alignment={alignment}
                items={items}
                onItemClick={handleBlur}
            />
        );
    };

    return (
        <Container ref={ref}>
            <AvatarWrapper>
                <AvatarButton onClick={handleAvatarClick} $mobile={mobile}>
                    {renderContent()}
                </AvatarButton>
                <Badge
                    count={10}
                    isOverlay={true}
                    variant={mobile ? "dot" : "number-with-border"}
                />
            </AvatarWrapper>
            {showMenu && renderMenu()}
        </Container>
    );
};
