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
    icon,
    title,
    onClick,
    ...otherProps
}: SidenavItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const id = otherProps.id || title.toLowerCase().replaceAll(" ", "-");
    const { selectedItemId, setSelectedItemId } = useContext(SidenavContext);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (otherProps.selected) {
            setSelectedItemId(id);
        }
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOnClick = () => {
        if (selectedItemId === id) return;
        setSelectedItemId(id);
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
                $highlight={selectedItemId === id}
            >
                <IconContainer>{icon}</IconContainer>
                <TitleText>{title}</TitleText>
            </DefaultButton>
        </Container>
    );
};
