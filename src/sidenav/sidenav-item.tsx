import { useContext, useEffect, useState } from "react";
import {
    Container,
    DefaultButton,
    IconContainer,
    TitleText,
} from "./sidenav-item.styles";
import { SidenavItemProps } from "./types";
import { SidenavContext } from "./sidenav-context";

export const SidenavItem = ({
    icon,
    title,
    onClick,
    ...otherProps
}: SidenavItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const id = otherProps.id || title.toLowerCase().replaceAll(" ", "-");
    const { selectedItem, setSelectedItem } = useContext(SidenavContext);
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
