import { useContext, useEffect, useState } from "react";
import {
    Container,
    DefaultButton,
    IconContainer,
    TitleText,
} from "./side-nav-item.styles";
import { SideNavItemProps } from "./types";
import { SideNavContext } from "./side-nav-context";

export const SideNavItem = ({
    icon,
    title,
    onClick,
    ...otherProps
}: SideNavItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const id = otherProps.id || title.toLowerCase().replaceAll(" ", "-");
    const { selectedItem, setSelectedItem } = useContext(SideNavContext);
    const [selected, setSelected] = useState<boolean>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (otherProps.selected) {
            setSelectedItem(id);
        }
    }, []);

    useEffect(() => {
        if (selectedItem === id && !selected) {
            setSelected(true);
        } else if (selected) {
            setSelected(false);
        }
    }, [selectedItem]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOnClick = () => {
        if (selected) return;
        setSelectedItem(id);
        if (onClick) {
            onClick();
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container>
            <DefaultButton
                styleType="link"
                onClick={handleOnClick}
                {...otherProps}
                $highlight={selected}
            >
                <IconContainer>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
