import { useContext, useState } from "react";
import { useSpring } from "react-spring";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import {
    Container,
    DrawerSubitemContainer,
    IconElement,
    LinkButton,
    TextElement,
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
    const containerAnimationProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const contentAnimationProps = useSpring({
        height: children && expanded ? "auto" : 0,
        delay: 200,
    });

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

    const handleIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        handleOnClick();
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...otherProps}
            style={containerAnimationProps}
        >
            <LinkButton
                styleType="link"
                onClick={handleOnClick}
                $highlight={highlight && expanded}
            >
                <TextElement>{title}</TextElement>
                <IconElement>
                    {children &&
                        (expanded ? (
                            <ChevronUpIcon onClick={handleIconClick} />
                        ) : (
                            <ChevronDownIcon onClick={handleIconClick} />
                        ))}
                </IconElement>
            </LinkButton>
            <DrawerSubitemContainer style={contentAnimationProps}>
                {children}
            </DrawerSubitemContainer>
        </Container>
    );
};
