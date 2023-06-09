import { useContext, useEffect, useState } from "react";
import {
    Container,
    DefaultButton,
    TitleContainer,
} from "./side-nav-item.styles";
import { SideNavItemProps } from "./types";
import { SideNavContext } from "./side-nav.context";

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
    const [highlight, setHighlight] = useState<boolean>();
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
            setHighlight(true);
        } else if (selected) {
            setSelected(false);
            setHighlight(false);
        }
    }, [selectedItem]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleMouseEnter = () => {
        if (!highlight && !selected) {
            setHighlight(true);
        }
    };

    const handleMouseLeave = () => {
        if (highlight && !selected) {
            setHighlight(false);
        }
    };

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
        <Container
            {...otherProps}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOnClick}
        >
            <DefaultButton $highlight={highlight} styleType="link">
                {icon}
            </DefaultButton>
            <TitleContainer $highlight={highlight}>{title}</TitleContainer>
        </Container>
    );
};
