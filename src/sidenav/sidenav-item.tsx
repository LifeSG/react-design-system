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
        currentItemId,
        drawerContent,
        selectedItem,
        setCurrentItemId,
        setSelectedItem,
        setDrawerContent,
    } = useContext(SidenavContext);

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
            setCurrentItemId(id);
            setDrawerContent(() => children);
        }
    }, [drawerContent]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const setPreviousSelectedItem = (): string | undefined => {
        if (!children || !selectedItem) return undefined;
        if (selectedItem.prevSelectedId) {
            return selectedItem.prevSelectedId;
        }
        return selectedItem.itemId;
    };

    const handleOnClick = () => {
        if (
            selectedItem &&
            selectedItem.itemId === id &&
            selectedItem.openDrawer
        )
            return;
        setCurrentItemId(id);
        setSelectedItem({
            itemId: id,
            openDrawer: !!children,
            prevSelectedId: setPreviousSelectedItem(),
        });
        setDrawerContent(children ? children : undefined);
        if (onClick) {
            onClick(id);
        }
    };

    const handleMouseEnter = () => {
        setCurrentItemId(id);
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
                $highlight={
                    (selectedItem && selectedItem.itemId === id) ||
                    currentItemId === id
                }
            >
                <IconContainer>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
