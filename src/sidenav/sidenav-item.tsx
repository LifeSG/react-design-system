import { HTMLAttributes, useContext, useEffect } from "react";
import { SidenavContext } from "./sidenav-context";
import {
    Container,
    DefaultButton,
    IconContainer,
    TitleText,
} from "./sidenav-item.styles";
import { SidenavItemProps } from "./types";

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
        internalId,
        currentItem,
        previouslySelectedItemId,
        selectedItem,
        setCurrentItem,
        setPreviouslySelectedItemId,
        setSelectedItem,
    } = useContext(SidenavContext);
    const isSelected = !!selectedItem && selectedItem.itemId === id;
    const isCurrent = !!currentItem && currentItem.itemId === id;

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
    const ariaControlProps: HTMLAttributes<HTMLButtonElement> = children
        ? {
              "aria-controls": `${internalId}-drawer`,
              "aria-haspopup": true,
              "aria-expanded":
                  (isCurrent && !!currentItem.content) ||
                  (isSelected && !!selectedItem.content),
          }
        : {};

    return (
        <Container>
            <DefaultButton
                type="button"
                onClick={handleOnClick}
                onMouseEnter={handleMouseEnter}
                aria-current={isSelected ? "page" : undefined}
                {...ariaControlProps}
                {...otherProps}
                $highlight={isSelected || isCurrent}
            >
                <IconContainer aria-hidden>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
