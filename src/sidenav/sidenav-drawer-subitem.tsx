import clsx from "clsx";
import { useContext } from "react";

import { BasicButton } from "../shared/input-wrapper";
import { SidenavContext } from "./sidenav-context";
import * as styles from "./sidenav-drawer-subitem.styles";
import type { SidenavDrawerSubitemProps } from "./types";

export const SidenavDrawerSubitem = ({
    id,
    title,
    onClick,
    className,
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
        setSelectedItem({ itemId: currentItem?.itemId, content: undefined });
        setCurrentItem(undefined);
        setPreviouslySelectedItemId(undefined);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <li {...otherProps} className={clsx(className)}>
            <BasicButton
                type="button"
                onClick={handleOnClick}
                className={styles.linkButton}
            >
                {title}
            </BasicButton>
        </li>
    );
};
