import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { useContext, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { BasicButton } from "../shared/input-wrapper";
import { SidenavContext } from "./sidenav-context";
import * as styles from "./sidenav-drawer-item.styles";
import type { SidenavDrawerItemProps } from "./types";

export const SidenavDrawerItem = ({
    id,
    title,
    onClick,
    children,
    className,
    ...otherProps
}: SidenavDrawerItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [expanded, setExpanded] = useState<boolean>(true);
    const {
        currentItem,
        setSelectedItem,
        setPreviouslySelectedItemId,
        setCurrentItem,
    } = useContext(SidenavContext);

    const [internalId] = useState<boolean>(true);
    const subitemId = `${internalId}-submenu`;

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
    const handleOnClick = () => {
        if (children) {
            setExpanded(!expanded);
            return;
        }
        setSelectedItem({ itemId: currentItem?.itemId, content: undefined });
        setCurrentItem(undefined);
        setPreviouslySelectedItemId(undefined);
        if (onClick) {
            onClick(id);
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const ariaControlProps: HTMLAttributes<HTMLButtonElement> = children
        ? {
              "aria-controls": subitemId,
              "aria-expanded": expanded,
          }
        : {};

    return (
        <animated.li
            {...otherProps}
            className={className}
            style={containerAnimationProps}
        >
            <BasicButton
                type="button"
                onClick={handleOnClick}
                className={clsx(
                    styles.linkButton,
                    !children && "linkButtonNoChildren"
                )}
                {...ariaControlProps}
            >
                <span className={styles.textElement}>{title}</span>
                {children && (
                    <ChevronUpIcon
                        aria-hidden
                        className={clsx(
                            styles.chevronIcon,
                            expanded && "chevronIconExpanded"
                        )}
                    />
                )}
            </BasicButton>
            <animated.div
                className={styles.drawerSubitemContainer}
                style={contentAnimationProps}
            >
                <animated.ul id={subitemId} ref={childRef}>
                    {children}
                </animated.ul>
            </animated.div>
        </animated.li>
    );
};
