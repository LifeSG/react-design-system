import { SidenavDrawerSubitemProps } from "./types";
import { Container, LinkButton } from "./sidenav-drawer-subitem.styles";
import { SidenavContext } from "./sidenav-context";
import { useContext } from "react";

export const SidenavDrawerSubitem = ({
    id,
    title,
    onClick,
    ...otherProps
}: SidenavDrawerSubitemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { selectedItem, setDrawerContent, setSelectedItem } =
        useContext(SidenavContext);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOnClick = () => {
        if (onClick) {
            onClick(id);
        }
        setSelectedItem({ ...selectedItem, openDrawer: false });
        setDrawerContent(undefined);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container {...otherProps}>
            <LinkButton styleType="link" onClick={handleOnClick}>
                {title}
            </LinkButton>
        </Container>
    );
};
