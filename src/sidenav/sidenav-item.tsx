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
        currentItem,
        previouslySelectedItemId,
        selectedItem,
        setCurrentItem,
        setPreviouslySelectedItemId,
        setSelectedItem,
    } = useContext(SidenavContext);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (otherProps.selected) {
            setSelectedItem({ itemId: id, content: undefined });
        }
    }, [otherProps.selected]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const getPreviousSelectedItemId = (): string | undefined => {
        if (!children || !selectedItem) return undefined;
        if (previouslySelectedItemId) {
            return previouslySelectedItemId;
        }
        return selectedItem.itemId;
    };

    const handleOnClick = () => {
        setPreviouslySelectedItemId(getPreviousSelectedItemId());
        setCurrentItem({ itemId: id, content: children });
        setSelectedItem({
            itemId: id,
            content: children,
        });
        if (onClick && !children) {
            onClick(id);
        }
    };

    const handleMouseEnter = () => {
        setCurrentItem({ itemId: id, content: children });
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container>
            <DefaultButton
                styleType="link"
                type="button"
                onClick={handleOnClick}
                onMouseEnter={handleMouseEnter}
                {...otherProps}
                $highlight={
                    (selectedItem && selectedItem.itemId === id) ||
                    (currentItem && currentItem.itemId === id)
                }
            >
                <IconContainer>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
