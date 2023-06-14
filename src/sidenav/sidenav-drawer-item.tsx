import { useContext, useState } from "react";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import {
    Container,
    DrawerSubitemContainer,
    ElementContainer,
    LinkButton,
} from "./sidenav-drawer-item.styles";
import { SidenavDrawerItemProps } from "./types";
import { SidenavContext } from "./sidenav-context";

export const SidenavDrawerItem = ({
    title,
    onClick,
    children,
    ...otherProps
}: SidenavDrawerItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [expanded, setExpanded] = useState<boolean>(true);
    const [highlight, setHighlight] = useState<boolean>(false);
    const { selectedItem, setDrawerContent, setSelectedItem } =
        useContext(SidenavContext);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleMouseEnter = () => {
        setHighlight(true);
    };

    const handleMouseLeave = () => {
        setHighlight(false);
    };

    const handleOnClick = () => {
        if (children) {
            setExpanded(!expanded);
            return;
        }
        if (onClick) {
            onClick();
        }
        setSelectedItem({ ...selectedItem, openDrawer: false });
        setDrawerContent(undefined);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...otherProps}
        >
            <LinkButton
                styleType="link"
                onClick={handleOnClick}
                $highlight={highlight && expanded}
            >
                <ElementContainer>{title}</ElementContainer>
                <ElementContainer>
                    {children &&
                        (expanded ? <ChevronUpIcon /> : <ChevronDownIcon />)}
                </ElementContainer>
            </LinkButton>
            {children && expanded && (
                <>
                    <DrawerSubitemContainer>{children}</DrawerSubitemContainer>
                </>
            )}
        </Container>
    );
};
