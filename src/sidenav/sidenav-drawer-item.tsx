import { useContext, useState } from "react";
import { useSpring } from "react-spring";
import { useResizeDetector } from "react-resize-detector";
import {
    ChevronIcon,
    Container,
    DrawerContent,
    DrawerSubitemContainer,
    IconElement,
    LinkButton,
    TextElement,
} from "./sidenav-drawer-item.styles";
import { SidenavDrawerItemProps } from "./types";
import { SidenavContext } from "./sidenav-context";

export const SidenavDrawerItem = ({
    id,
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
    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;
    const contentAnimationProps = useSpring({
        height: children && expanded ? resizeDetector.height : 0,
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
            onClick(id);
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
                $noChildren={!children}
            >
                <TextElement>{title}</TextElement>
                {children && (
                    <IconElement $expanded={expanded}>
                        <ChevronIcon onClick={handleIconClick} />
                    </IconElement>
                )}
            </LinkButton>
            <DrawerSubitemContainer style={contentAnimationProps}>
                <DrawerContent ref={childRef}>{children}</DrawerContent>
            </DrawerSubitemContainer>
        </Container>
    );
};
