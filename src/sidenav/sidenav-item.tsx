import { useContext, useEffect } from "react";
import {
    Container,
    DefaultButton,
    IconContainer,
    TitleText,
} from "./sidenav-item.styles";
import { SidenavItemProps } from "./types";
import { SidenavContext } from "./sidenav-context";

export const SidenavItem = ({
    children,
    icon,
    title,
    onClick,
    ...otherProps
}: SidenavItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const id = otherProps.id || title.toLowerCase().replaceAll(" ", "-");
    const {
        drawerContent,
        selectedItemId,
        setSelectedItemId,
        setDrawerContent,
    } = useContext(SidenavContext);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (otherProps.selected) {
            setSelectedItemId(id);
        }
    }, []);

    useEffect(() => {
        if (!drawerContent && selectedItemId === id && children) {
            setDrawerContent(children);
        }
    }, [drawerContent]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOnClick = () => {
        if (selectedItemId === id) return;
        setSelectedItemId(id);
        setDrawerContent(children ? children : undefined);
        if (onClick) {
            onClick();
        }
    };

    const handleMouseEnter = () => {
        setDrawerContent(children);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container>
            <DefaultButton
                styleType="link"
                onClick={handleOnClick}
                onMouseEnter={handleMouseEnter}
                {...otherProps}
                $highlight={selectedItemId === id}
            >
                <IconContainer>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
