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
    const { drawerContent, selectedItem, setSelectedItem, setDrawerContent } =
        useContext(SidenavContext);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (otherProps.selected) {
            setSelectedItem({ itemId: id, openDrawer: true });
        }
    }, []);

    useEffect(() => {
        if (
            !drawerContent &&
            selectedItem &&
            selectedItem.itemId === id &&
            children &&
            selectedItem.openDrawer
        ) {
            setDrawerContent(() => children);
        }
    }, [drawerContent]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOnClick = () => {
        if (
            selectedItem &&
            selectedItem.itemId === id &&
            selectedItem.openDrawer
        )
            return;
        setSelectedItem({ itemId: id, openDrawer: !!children });
        setDrawerContent(children ? children : undefined);
        if (onClick) {
            onClick(id);
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
                $highlight={selectedItem && selectedItem.itemId === id}
            >
                <IconContainer>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
