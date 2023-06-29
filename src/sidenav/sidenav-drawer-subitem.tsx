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
    const {
        currentItem,
        setSelectedItem,
        setCurrentItem,
        setPreviouslySelectedItemId,
    } = useContext(SidenavContext);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOnClick = () => {
        if (onClick) {
            onClick(id);
        }
        setSelectedItem({ itemId: currentItem.itemId, content: undefined });
        setCurrentItem(undefined);
        setPreviouslySelectedItemId(undefined);
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
